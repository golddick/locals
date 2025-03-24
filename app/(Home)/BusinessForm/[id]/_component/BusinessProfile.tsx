"use client";

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProfileNav from '@/app/(Home)/Profile/[id]/ProfileNav';
import { createBusiness } from '@/app/api/post/createBusiness';
import { getAllCategory } from '@/app/api/get/categorie';
import { CategoryType } from '@/type/business_type';
import { toast } from 'sonner';
import { useUserID } from '@/hooks/use-get-userID';

const BusinessProfile = () => {
  const userId = useUserID();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [availableCategories, setAvailableCategories] = useState<CategoryType[]>([]);
  const [businessName, setBusinessName] = useState<string>('');
  const [businessEmail, setBusinessEmail] = useState<string>('');
  const [businessPhone, setBusinessPhone] = useState<string>('');
  const [businessAddress, setBusinessAddress] = useState<string>('');
  const [businessBio, setBusinessBio] = useState<string>('');
  const [businessServices, setBusinessServices] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategory();
        if (Array.isArray(response.data)) {
          setAvailableCategories(response.data);
        } else {
          console.error("Invalid categories data format:", response.data);
          setAvailableCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setAvailableCategories([]);
      }
    };

    fetchCategories();
  }, []);

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessServices.trim()) {
      toast.error("Please provide at least one service.");
      return;
    }

    // if (!selectedImage) {
    //   toast.error("Please upload a profile image.");
    //   return;
    // }

      // Validate phone number
      if (!validatePhoneNumber(businessPhone)) {
        toast.error('Phone number must include a country code (e.g., +234 80 1234 5678)');
        return;
    }

    try {
      const businessData = {
        name: businessName,
        email: businessEmail,
        phone: businessPhone,
        address: businessAddress,
        description: businessBio,
        category: selectedCategory,
        businessOwner: userId,
        profileUrl: selectedImage ? [selectedImage] :
         ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Favatar&psig=AOvVaw0V9dR70VXqBByvIfKl0VB_&ust=1742722015012000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjL9sevnYwDFQAAAAAdAAAAABAE',
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dprofessional%2Bfemale%2Bavatar&psig=AOvVaw0V9dR70VXqBByvIfKl0VB_&ust=1742722015012000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjL9sevnYwDFQAAAAAdAAAAABAJ'],
        services: businessServices,
      };

      const response = await createBusiness(businessData);
      if (response) {
        toast.success("Business created successfully!");
      } else {
        toast.error("Error creating business!");
      }
    } catch (error) {
      console.error("Error creating business:", error);
      toast.error("Something went wrong while creating the business.");
    }
  };

  return (
    <div className='grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full py-10 px-10 md:px-20'>
      <div className='w-full flex flex-col gap-4'>
        <h1 className='text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px] hidden md:block'>
          My <span className='text-primary'>Business page</span>
        </h1>
        <ProfileNav />
      </div>

      <div className='w-full flex flex-col gap-4 items-start overflow-scroll hidden-scrollbar'>
        <form onSubmit={handleSubmit} className='w-full space-y-6'>
          {/* Business Image */}
          <div className="flex flex-col items-start">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
              accept="image/*"
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div className="w-[200px] h-[200px] bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-xl">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Uploaded Image"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <Image
                    src="/addImg.png"
                    alt="Add Image"
                    width={40}
                    height={40}
                    className="bg-white p-1 rounded-full object-contain"
                  />
                )}
              </div>
            </label>
          </div>

          {/* Business Info Form */}
          <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="BName" className='text-[13px] font-thin text-[#706A6A]'>
                Business Name
              </label>
              <Input
                placeholder='Alicent Catering Services'
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                id='BName'
                type='text'
                className='border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="Category" className='text-[13px] font-thin text-[#706A6A]'>
                Business Category
              </label>
              <div className="flex items-center border-none shadow-lg shadow-[#706A6A1A] px-2">
                <Select onValueChange={(value) => setSelectedCategory(value)}>
                  <SelectTrigger className="w-full bg-[#A3C8ED4D] rounded-none">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {availableCategories.map((category, index) => (
                      <SelectItem
                        key={index}
                        value={category._id}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Business Info Fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="Email" className='text-[13px] font-thin text-[#706A6A]'>
                Business Email
              </label>
              <Input
                placeholder='spencer.james@example.com'
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                id='Email'
                type='email'
                className='border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="phone" className='text-[13px] font-thin text-[#706A6A]'>
                Business Phone Number
              </label>
              <Input
                placeholder='+234 80 1234 5678'
                value={businessPhone}
                onChange={(e) => setBusinessPhone(e.target.value)}
                id='phone'
                type='phone'
                className='border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]'
              />
            </div>
          </div>

          {/* Business Address */}
          <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="Address" className='text-[13px] font-thin text-[#706A6A]'>
                Business Address
              </label>
              <Input
                placeholder='8, MetalBox Road, Ikeja, Lagos'
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                id='Address'
                type='text'
                className='border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="Bservice" className='text-[13px] font-thin text-[#706A6A]'>
                Business Service
              </label>
              <Input
                placeholder='plumbing etc'
                value={businessServices}
                onChange={(e) => setBusinessServices(e.target.value)}
                id='Bservice'
                type='text'
                className='border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]'
              />
            </div>
          </div>

          {/* Business Bio */}
          <div className='flex flex-col gap-2 w-full lg:w-[80%]'>
            <label htmlFor="bio" className='text-[13px] font-thin text-[#706A6A]'>
              Business Bio
            </label>
            <Textarea
              placeholder='Bio'
              value={businessBio}
              onChange={(e) => setBusinessBio(e.target.value)}
              id='bio'
              minLength={100}
              className='w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]'
            />
          </div>

          {/* Submit Button */}
          <div className='w-full lg:w-[80%] flex items-center justify-end'>
            <Button
              type="submit"
              disabled={!businessName || !businessEmail || !businessPhone || !businessAddress || !businessBio || !businessServices }
            >
              Create Business
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessProfile;