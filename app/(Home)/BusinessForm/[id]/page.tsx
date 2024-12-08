"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BellDotIcon, FactoryIcon, Plus, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ProfileNav from '../../Profile/[id]/ProfileNav'



import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link'

const page = () => {

    const userId = 221

    const [selectedTier, setSelectedTier] = useState<string>(''); // State to store the selected membership tier

  // Handle change in the Select component
  const handleSelectChange = (value: string) => {
    setSelectedTier(value); // Directly use the value, no need for the event object
  };



    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };

    const profileNav = [
        
        {
          title: " My Profile",
          path: `/Profile/${userId}`,
          icon:<User/>
        },
        {
          title: "My Business",
          path: `/BusinessForm/${userId}`,
          icon:<FactoryIcon/>
        },
        {
          title: "Notification",
          path: `/Notification/${userId}`,
          icon:<BellDotIcon/>
        },
 
  ];

  


  return (
    <div className=' grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full  py-10  px-10 md:px-20 '> 
        
        <div className='w-full flex flex-col gap-4 '>
        <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px]  hidden md:block'>My <span className=' text-primary'>Business page</span>  </h1>

       <ProfileNav data={profileNav}/>

        </div>

    

     
        <div className=' w-full flex flex-col gap-4 items-start  overflow-scroll'>

            <div className=' flex items-start gap-5 w-full flex-col'>

                     
                     <div className="flex flex-col items-center ">
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
                         

                            <div className=' grid grid-cols-1 md:grid-cols-2  w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="BName" id='BName' className=' text-[13px] font-thin text-[#706A6A]'> Business Name</label>
                                    <Input placeholder='Alicent Catering Services' defaultValue='Alicent Catering Services' id='BName' type='text' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="Category" id='Category' className='  text-[13px] font-thin text-[#706A6A]'> Business Category</label>

                                <div className="flex items-center    border-none  shadow-lg shadow-[#706A6A1A] px-2">
                                <Select >
                                <SelectTrigger className="w-full ">
                                <SelectValue placeholder="Catering services" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                                    </div>
                            </div>

                            </div>


                            <div className=' grid  grid-cols-1 md:grid-cols-2  w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="Email" id='Email' className=' text-[13px] font-thin text-[#706A6A]'> Business Email</label>
                                    <Input placeholder='spencer.james@example.com' defaultValue='spencer.james@example.com' id='Email' type='email' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="phone" id='phone' className='  text-[13px] font-thin text-[#706A6A]'> Business Phone Number</label>
                                <Input placeholder='+234 80 1234 5678' id='phone' type='phone' defaultValue='+234 80 1234 5678' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            </div>


                            <div className=' grid  grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="Tier" id='Tier' className=' text-[13px] font-thin text-[#706A6A]'> Business Membership Tier</label>

                                <div className="flex items-center  px-2   border-none  shadow-lg shadow-[#706A6A1A]">
                                <Select onValueChange={handleSelectChange} >
                                <SelectTrigger className="w-full ">
                                <SelectValue placeholder="Membership Tier" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                <SelectItem value="GoldTier">Gold Tier</SelectItem>
                                <SelectItem value="BlueTier">Blue Tier</SelectItem>
                                <SelectItem value="SilverTier">Silver Tier</SelectItem>
                                <SelectItem value="PlatinumTier">Platinum Tier</SelectItem>

                                </SelectContent>
                            </Select>
                                    </div>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="Address" id='Address' className='  text-[13px] font-thin text-[#706A6A]'> Business Address</label>
                                <Input placeholder='8, MetalBox Road, off acme road, Ikeja, Lagos' id='Address' type='text' defaultValue='8, MetalBox Road, off acme road, Ikeja, Lagos' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            </div>


                            <div className=' flex flex-col gap-2  w-full lg:w-[80%] '>
                            <label htmlFor="bio" id='bio' className='  text-[13px] font-thin text-[#706A6A]'> Business Bio</label>
                                <Textarea placeholder='bio' id='bio'  defaultValue='Lorem ipsum dolor sit amet consectetur. 
                                Ultrices sit neque in tristique non senectus. Arcu facilisi scelerisque sagittis viverra fringilla massa.'
                                 className=' w-full h-[100px] max-h-[200px]   border-none  shadow-lg shadow-[#706A6A1A] p-2' />
                            </div>


                            <div className='  w-full lg:w-[80%] flex items-center justify-end'>
                            <Link href={`/Payment/${encodeURIComponent(selectedTier)}`}>
                            <Button>Proceed</Button>
                              </Link>
                           </div>
                            
            </div>
            
         </div>


    </div>


  )
}

export default page