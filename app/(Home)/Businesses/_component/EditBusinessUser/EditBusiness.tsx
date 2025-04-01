
"use client";

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader, Plus, X } from 'lucide-react'; // Import X for removing services
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { BusinessType, ServiceType } from '@/type/business_type'; // Replace with your actual business type
import { getBusiness } from '@/app/api/get/singleBusiness';
import { updateBusinessInfo } from '@/app/api/put/business';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getAllCategory } from '@/app/api/get/categorie';


interface Props {
    businessId: string 
}

const EditBusiness = ({ businessId }: Props) => {
    const [businessData, setBusinessData] = useState<BusinessType | null>(null);
    const [loading , setLoading] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string>('/no-image-icon.png');
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);


    // Local state to manage the form input values
    const [formData, setFormData] = useState({
        businessName: '',
        businessEmail: '',
        businessPhone: '',
        businessAddress: '',
        businessBio: '',
        businessServices: [] as ServiceType[],
        businessCategory: '',
    });

    const [newService, setNewService] = useState('');

    // Fetch business data and categories
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch business data
                const businessResponse = await getBusiness(businessId);
                setBusinessData(businessResponse.data);

                // Initialize selectedImage with the first profile URL or a default image
                setSelectedImage(businessResponse.data.profileUrl?.[0] || '/default-image.png');

                // Initialize formData with business data
                setFormData({
                    businessName: businessResponse.data.name || '',
                    businessEmail: businessResponse.data.email || '',
                    businessPhone: businessResponse.data.phone || '',
                    businessAddress: businessResponse.data.address || '',
                    businessBio: businessResponse.data.description || '',
                    businessServices: businessResponse.data.services || [],
                    businessCategory: businessResponse.data.category || '',
                });

                // Fetch categories
                const categoriesResponse = await getAllCategory();
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [businessId]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Validate phone number format (must include a country code)
    const validatePhoneNumber = (phone: string): boolean => {
        const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;
        return phoneRegex.test(phone);
    };

    // Handle form submission (updating business data)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        // Validate phone number
        if (!validatePhoneNumber(formData.businessPhone)) {
            toast.error('Phone number must include a country code (e.g., +000 00 0000 0000)');
            return;
        }

        try {
            const businessData = {
                name: formData.businessName,
                email: formData.businessEmail,
                phone: formData.businessPhone,
                address: formData.businessAddress,
                description: formData.businessBio,
                // services: formData.businessServices.map((service) => service._id), 
                category: formData.businessCategory,
                profileUrl: selectedImage ? [selectedImage] : ['/no-image-icon.png'],
            };

            const response = await updateBusinessInfo(businessId, businessData);
            if (response) {
                toast.success('Business updated successfully!');
            } else {
                toast.error('Failed to update business.');
            }
        } catch (error) {
            console.error('Error updating business data:', error);
            toast.error('Error updating business.');
        }finally{
          setLoading(false)
        }
    };

    // Handle input change to update formData state
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle category selection
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            businessCategory: e.target.value,
        }));
    };

    // Add a new service to the businessServices array
    const handleAddService = () => {
        if (newService.trim() === '') {
            toast.error('Service cannot be empty');
            return;
        }
        const newServiceObject = { _id: Date.now().toString(), name: newService.trim() };
        setFormData((prevData) => ({
            ...prevData,
            businessServices: [...prevData.businessServices, newServiceObject],
        }));
        setNewService('');
    };

    // Remove a service from the businessServices array
    const handleRemoveService = (index: number) => {
        setFormData((prevData) => ({
            ...prevData,
            businessServices: prevData.businessServices.filter((_, i) => i !== index),
        }));
    };

    // If the business data hasn't been loaded yet, return a loading indicator or null.
    if (!businessData) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-spin"><Loader /></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 w-full py-10 px-5 md:px-20">
            <div className="w-full flex flex-col gap-4 items-start overflow-scroll hidden-scrollbar">
                <ScrollArea className="h-100 flex items-start w-full flex-col space-y-6">
                    <div className="flex flex-col items-center mb-4">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-input"
                            accept="image/*"
                        />
                        <label htmlFor="file-input" className="cursor-pointer">
                            <div className="w-[60px] h-[60px] relative bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-full border-2">
                                <Image
                                    src={selectedImage}
                                    alt="Business Image"
                                    fill
                                    className="rounded-full object-cover absolute"
                                />
                                <Plus className="absolute bottom-[-5px] right-[-0px] w-5 h-5 rounded-full bg-primary text-white" />
                            </div>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="businessName" className="text-[13px] font-thin text-[#706A6A]">
                                    Business Name
                                </label>
                                <Input
                                    placeholder="Alicent Catering Services"
                                    value={formData.businessName}
                                    id="businessName"
                                    type="text"
                                    className="border-none rounded-xl shadow-xl shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="businessEmail" className="text-[13px] font-thin text-[#706A6A]">
                                    Business Email
                                </label>
                                <Input
                                    placeholder="spencer.james@example.com"
                                    value={formData.businessEmail}
                                    id="businessEmail"
                                    type="email"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    disabled
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="businessPhone" className="text-[13px] font-thin text-[#706A6A]">
                                    Business Number
                                </label>
                                <Input
                                    placeholder="+234 80 1234 5678"
                                    value={formData.businessPhone}
                                    id="businessPhone"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="businessAddress" className="text-[13px] font-thin text-[#706A6A]">
                                    Business Address
                                </label>
                                <Input
                                    placeholder="8, MetalBox Road, Ikeja, Lagos"
                                    value={formData.businessAddress}
                                    id="businessAddress"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="businessBio" className="text-[13px] font-thin text-[#706A6A]">
                                Business Bio
                            </label>
                            <Textarea
                                placeholder="Bio"
                                value={formData.businessBio}
                                id="businessBio"
                                className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="businessCategory" className="text-[13px] font-thin text-[#706A6A]">
                                Business Category
                            </label>
                            <select
                                id="businessCategory"
                                value={formData.businessCategory}
                                defaultValue={formData.businessCategory}
                                onChange={handleCategoryChange}
                                className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D] p-2 rounded-md"
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="businessServices" className="text-[13px] font-thin text-[#706A6A]">
                                Business Services
                            </label>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Add a service"
                                        value={newService}
                                        onChange={(e) => setNewService(e.target.value)}
                                        className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    />
                                    <Button type="button" onClick={handleAddService}>
                                        Add
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.businessServices.map((service, index) => (
                                        <div
                                            key={service._id}
                                            className="flex items-center gap-2 bg-[#A3C8ED4D] px-3 py-1 rounded-full"
                                        >
                                            <span>{service.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveService(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[80%] flex items-center justify-end">
                            <Button type="submit">
                              {loading ? <Loader className=' size-4 animate-spin'/> : 'Save'}
                            </Button>
                        </div>
                    </form>
                </ScrollArea>
            </div>
        </div>
    );
};

export default EditBusiness;
