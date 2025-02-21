'use client'

import React from 'react'
import NavLink from './NavLink'
import { usePaths } from '../constant/user-nav'
import { LogOutIcon, Settings2 } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SidebarProps {
    adminID:string
}

export const Sidebar = ({adminID}:SidebarProps) => {

    const { page, pathname } = usePaths()
    const isActive = pathname === '/admin/setting'; 
  return (
    <div className=' min-h-screen  hidden lg:flex flex-col gap-2  p-4  lg:w-[230px] border-[#706A6A1A] border-r-2 fixed left-0 bg-[#F8F8F8] '>
         <div className='w-full h-auto  flex  items-center justify-center'>
      <Image src='/LocalLogo.png' alt='logo' width={50} height={50} className='   object-contain '/>
       </div>

      <div className='flex flex-col justify-between gap-4  min-h-[calc(100vh-100px)] '>
      <div className=' flex flex-col gap-4'>
      <Separator className='   bg-[#706A6A1A]'/>
        <h1 className=' text-[#706A6ACC] text-[15px]  mb-5'>General Menu</h1>
            <NavLink   pathname={pathname} />
        </div>

        <div className=' flex flex-col gap-2'> 
        <Separator className='   bg-[#706A6A1A]'/>
        <h1 className=' text-[#706A6ACC] text-[15px]  mb-5'>Support</h1>
        <Link
              href={'/admin/setting'}
              className={cn('flex items-center gap-4 hover:bg-[#A3C8ED4D]  rounded-md p-2 flex-nowrap', isActive && 'bg-[#A3C8ED4D]')}
            >
                <Settings2/>
                <span className=' whitespace-nowrap text-[12px]'>
                Setting
                </span>
            </Link>
        </div>
        
        <Link href={'/'} className=' flex items-start w-full  gap-2 flex-col'> 
        <Separator className='   bg-[#706A6A1A]'/>
       <div className='flex items-center gap-4'>
       <LogOutIcon className=' rotate-180 size-4'/>
        <span className=' whitespace-nowrap text-[15px]'>Logout</span>
       </div>
        </Link>
      </div>
        
    </div>
  )
}
