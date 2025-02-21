

import Link from 'next/link'
import React from 'react'
import { TOPBAR_MENU } from '../constant/menu'
import { usePaths } from '../constant/user-nav'
import { cn } from '@/lib/utils'



export const TopNav = () => {
  const {  pathname } = usePaths()
  return (
    <>
    {TOPBAR_MENU().map((item) => {

      const isActive = pathname === item.url

      return (
        <Link href={item.url} key={item.id} className={cn(' max-w-[110px] md:max-w-full truncate text-[13px] md:text-[15px] px-2 p-2 rounded-2xl hover:bg-primary hover:text-white', isActive && 'bg-primary text-white')}>{item.label}</Link>
      );
    })}
  </>

   
  )
}

