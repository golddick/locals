'use client'

import React from 'react'
import { TopNav } from './TopNav'
import { TopBarSearch } from './TopBarSearch'
import { Separator } from '@/components/ui/separator'
import { AvatarIcon } from '@/components/_component/TopNav/AvatarIcon'
import { MobileNav } from '../sidebar/MobileSideBar'
import { useAdminID } from '@/hooks/use-get-adminID'

export const Topbar = () => {
const adminID = useAdminID()

  return (
    <nav className='flex w-full h-20 border-b-2 border-[#706A6A1A] sticky top-0 items-center  justify-between bg-[#F8F8F8] rounded-lg px-2 z-10'>
      <div className='flex items-center justify-between gap-1 md:gap-4'>
        <TopNav/>
      </div>
      <div className=' items-center gap-2 hidden lg:flex'>
        <TopBarSearch/>
        <AvatarIcon/>
      </div>
      
      <div className='block lg:hidden'>
        <MobileNav />
      </div>
    </nav>
  )
}
