"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProfileNav from './ProfileNav'
import Image from 'next/image'
import { BellDotIcon, Plus, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const page = () => {


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
          path: "/Profile",
          icon:<User/>
        },
        {
          title: "Notification",
          path: "/Notification",
          icon:<BellDotIcon/>
        },
 
  ];

  


  return (
    <div className=' grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full  py-10  px-10 md:px-20 '> 
        
        <div className='w-full flex flex-col gap-4 '>
        <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px]  hidden md:block'>Profile <span className=' text-primary'>Page</span>  </h1>

       <ProfileNav data={profileNav}/>

        </div>

    

     
        <div className=' w-full flex flex-col gap-4 items-start  overflow-scroll'>
            {/* <h2 className=' text-[20px]'>My Profile</h2> */}

            <div className=' flex items-start gap-5 w-full flex-col'>


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
                            <Plus className=' absolute bottom-[-5px] right-[-0px] w-5 h-5 rounded-full bg-primary  text-white'/>
                            </div>
                        </label>
                            </div>
                     
                         

                            <div className=' grid grid-cols-1 md:grid-cols-2  w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="Name" id='Name' className=' text-[13px] font-thin text-[#706A6A]'> Name</label>
                                    <Input placeholder='Rufus Wellens' defaultValue='Rufus Wellens' id='Name' type='text' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="Job" id='Job' className='  text-[13px] font-thin text-[#706A6A]'> Occupation</label>
                                <Input placeholder='Chief Technology Officer' id='Job' type='text' defaultValue='Chief Technology Officer' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            </div>


                            <div className=' grid  grid-cols-1 md:grid-cols-2  w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="Email" id='Email' className=' text-[13px] font-thin text-[#706A6A]'> Email</label>
                                    <Input placeholder='spencer.james@example.com' defaultValue='spencer.james@example.com' id='Email' type='email' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="phone" id='phone' className='  text-[13px] font-thin text-[#706A6A]'> Phone Number</label>
                                <Input placeholder='+234 80 1234 5678' id='phone' type='phone' defaultValue='+234 80 1234 5678' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            </div>


                            <div className=' grid  grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] justify-between gap-5 items-center '>

                            <div className=' flex flex-col gap-2 '>
                                <label htmlFor="dob" id='dob' className=' text-[13px] font-thin text-[#706A6A]'> DOB</label>
                                    <Input  defaultValue='03/11/1980' id='dob' type='date' className='  border-none  flex justify-center text-center items-center shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            <div className=' flex  flex-col gap-2 '>
                                <label htmlFor="Address" id='Address' className='  text-[13px] font-thin text-[#706A6A]'> Address</label>
                                <Input placeholder='8, MetalBox Road, off acme road, Ikeja, Lagos' id='Address' type='text' defaultValue='8, MetalBox Road, off acme road, Ikeja, Lagos' className='  border-none  shadow-lg shadow-[#706A6A1A]'/>
                            </div>

                            </div>


                            <div className=' flex flex-col gap-2  w-full lg:w-[80%] '>
                            <label htmlFor="bio" id='bio' className='  text-[13px] font-thin text-[#706A6A]'> Personal Bio</label>
                                <Textarea placeholder='bio' id='bio'  defaultValue='Lorem ipsum dolor sit amet consectetur. 
                                Ultrices sit neque in tristique non senectus. Arcu facilisi scelerisque sagittis viverra fringilla massa.'
                                 className=' w-full h-[100px] max-h-[200px]   border-none  shadow-lg shadow-[#706A6A1A] p-2' />
                            </div>


                            <div className='  w-full lg:w-[80%] flex items-center justify-end'>
                           {/* <h1 className='text-[15px]  md:text-[20px] font-semibold'>All Personal Information</h1> */}
                            <Button>Save</Button>
                           </div>
                            
            </div>
            
         </div>


    </div>


  )
}

export default page