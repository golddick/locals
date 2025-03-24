'use client'

import { getUserInfo } from '@/app/api/auth/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { UserType } from '@/type/business_type'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Footer = () => {

    const [userInfo, setUserInfo] = useState<UserType>();
    
      useEffect(() => {
        const info = getUserInfo();
        if (info) {
          setUserInfo(info);
        }
      }, []);

      const userId = userInfo?._id

  return (
    <div className=' w-full  bg-[#282828] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-4'>

        <div className=' w-full flex flex-col gap-4 items-start '>
            
            <div className=' relative w-[100px] h-[100px] '>
                <Image src='/localW.png' alt='IMG' fill className=' object-contain'/>
            </div>
            
            <p className=' text-[16px] font-normal'>The Locals Connect is a platform that uses a tech-driven approach to foster meaningful connections and networking opportunities.</p>

            <div className='flex items-center gap-4'>

                <Twitter className=' w-5 h-5 bg-primary rounded-full p-1'/>
                <Instagram className=' w-5 h-5 bg-primary rounded-full p-1'/>
                <Facebook className=' w-5 h-5 bg-primary rounded-full p-1'/>

            </div>

            <div className=' flex items-center gap-1'>
            <p className=' text-[14px] font-light'>&copy; 2024 TheLocalsConnect.</p>

            <Image src='/GeeLogo.png' alt='img' width={11} height={10}/>
            </div>
           
        </div>

<Separator className=' md:hidden'/>

        <div className=' flex  flex-col items-center justify-center w-full'>
            
         <div className=' w-full md:w-[80%] m-auto grid grid-cols-2 gap-4 '>

         <div className=' flex flex-col items-start gap-2'>
            <h1 className=' text-[20px] font-medium'> Our Page </h1>
                <Link href={'/Our-service'}>
                <span  className=' text-[15px] font-normal'>Our Service</span>
                </Link>
                <Link href={'/Contact-us'}>
                <span  className=' text-[15px] font-normal'>Contact Us</span>
                </Link>
                <Link href={'/Our-team'}>
                <span  className=' text-[15px] font-normal'>Our Team</span>
                </Link>
            </div>
            
            <div className=' flex items-start gap-2 flex-col'>
            <h1 className=' text-[20px] font-medium'>Quick Links</h1>
                <Link href={'/FAQ'}>
                <span  className=' text-[15px] font-normal'>FAQ</span>
                </Link>
                <span  className=' text-[15px] font-normal'>Subscription</span>
                {}
                <Link href={`/admin/${userId}/dashboard`} className={cn('flex', !userId && 'hidden')}>
                <span  className=' text-[15px] font-normal'>Admin</span>
                </Link>

               
            </div>
         </div>

        </div>

        <div className=' bg-[#101010] rounded-xl w-full flex flex-col gap-4 items-start p-4 h-auto'>
            <h1 className=' text-[20px] font-normal'>Subscribe to get an update</h1>
            <p className=' text-[15px] font-normal'>We will not spam, rent or sell your personal information, including your email adress or name.</p>
            <Input placeholder='example@gmail.com' className='w-full rounded-full bg-[#282828] border-none text-white'/>
            <Button className=' w-full rounded-full'> Subscribe</Button>
        </div>
        
    </div>
  )
}

export default Footer