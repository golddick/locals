"use client";

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { BellDotIcon, FactoryIcon, Loader, Plus, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserType } from '@/type/business_type';
import { getUserById } from '@/app/api/get/user';
import { updateUserInfo } from '@/app/api/put/user';
import { toast } from 'sonner';
import ProfileNav from '../ProfileNav';
import { useUserID } from '@/hooks/use-get-userID';
import LoaderCircle from '@/components/_component/Loader/Loader';

const Profile = () => {
    const userId = useUserID()
    const [userData, setUserData] = useState<UserType | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)

    // Local state to manage the form input values
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        occupation: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        bio: '',
        job_descripton: '',
    });

    useEffect(() => {
        if (!userId) {
            toast('No User');
            return;
        }

        const fetchData = async () => {
            try {
                const data = await getUserById(userId);
                setUserData(data.data); // Set the user data
                if (data.data.imageUrl) setSelectedImage(data.data.imageUrl);

                // Initialize formData with user data
                setFormData({
                    firstname: data.data.firstname || '',
                    lastname: data.data.lastname || '',
                    occupation: data.data.occupation || '',
                    email: data.data.email || '',
                    phone: data.data.phone || '',
                    dob: data.data.dob || '',
                    address: data.data.address || '',
                    bio: data.data.bio || '',
                    job_descripton: data.data.job_descripton || '',
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userId]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Handle form submission (updating user data)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await updateUserInfo(userId, formData);
            if (response) {
                toast.success('Profile updated successfully!');
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            toast.error('Error updating profile.');
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

    // If the user data hasn't been loaded yet, return a loading indicator or null.
    if (!userData) {
        return (
            <LoaderCircle/>
        )
          
        
    }

    return (
        <div className="grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full py-10 px-5 md:px-20 min-h-screen">
            <div className="w-full flex flex-col gap-4 ">
                <h1 className="text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px] hidden md:block">Profile <span className="text-primary">Page</span></h1>

                <ProfileNav />
            </div>

            <div className="w-full flex flex-col gap-4 items-start overflow-scroll hidden-scrollbar">
                <div className="flex items-start gap-5 w-full flex-col">
                    <div className="flex flex-col items-center">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-input"
                            accept="image/*"
                        />
                        <label htmlFor="file-input" className="cursor-pointer">
                            <div className="w-[60px] h-[60px] relative bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-full border-2">
                                {selectedImage ? (
                                    <Image
                                        src={selectedImage}
                                        alt="Uploaded Image"
                                        fill
                                        className="rounded-full object-cover absolute"
                                    />
                                ) : (
                                    <Image
                                        src="/addImg.png"
                                        alt="Add Image"
                                        fill
                                        className="bg-white p-1 rounded-full object-contain absolute"
                                    />
                                )}
                                <Plus className="absolute bottom-[-5px] right-[-0px] w-5 h-5 rounded-full bg-primary text-white" />
                            </div>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-[80%] justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstname" className="text-[13px] font-thin text-[#706A6A]">First Name</label>
                                <Input
                                    placeholder="Rufus"
                                    value={formData.firstname}
                                    id="firstname"
                                    type="text"
                                    className="border-none rounded-xl shadow-xl shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastname" className="text-[13px] font-thin text-[#706A6A]">Last Name</label>
                                <Input
                                    placeholder="Wellens"
                                    value={formData.lastname}
                                    id="lastname"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="occupation" className="text-[13px] font-thin text-[#706A6A]">Occupation</label>
                                <Input
                                    placeholder="Chief Technology Officer"
                                    value={formData.occupation}
                                    id="occupation"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[13px] font-thin text-[#706A6A]">Email</label>
                                <Input
                                    placeholder="spencer.james@example.com"
                                    value={formData.email}
                                    id="email"
                                    type="email"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-[13px] font-thin text-[#706A6A]">Phone Number</label>
                                <Input
                                    placeholder="+234 80 1234 5678"
                                    value={formData.phone}
                                    id="phone"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="dob" className="text-[13px] font-thin text-[#706A6A]">DOB</label>
                                <Input
                                    value={formData.dob}
                                    id="dob"
                                    type="date"
                                    className="border-none flex justify-center text-center items-center shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="address" className="text-[13px] font-thin text-[#706A6A]">Address</label>
                                <Input
                                    placeholder="8, MetalBox Road, off acme road, Ikeja, Lagos"
                                    value={formData.address}
                                    id="address"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full lg:w-[80%]">
                            <label htmlFor="bio" className="text-[13px] font-thin text-[#706A6A]">Personal Bio</label>
                            <Textarea
                                placeholder="BIO"
                                value={formData.bio}
                                id="bio"
                                className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full lg:w-[80%]">
                            <label htmlFor="job_descripton" className="text-[13px] font-thin text-[#706A6A]">Job Description</label>
                            <Textarea
                                placeholder="Job Description"
                                value={formData.job_descripton}
                                id="job_descripton"
                                className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-full lg:w-[80%] flex items-center justify-end">
                            <Button type="submit">
                                {
                                    loading ? <Loader  className=' size-4 animate-spin'/> : 'Save'
                                }
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
