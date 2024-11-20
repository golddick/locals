'use client'

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

interface MenuItem {
    path: string;
    title: string;
}

interface MenuLinkProps {
    item: MenuItem;
}


const MenuLink = ({item}:MenuLinkProps) => {

  const pathname = usePathname()

  const isActive = pathname == item.path
  return (
    <Link href={item.path} className={cn('flex  w-full m-auto items-center gap-3 p-[10px] rounded-[10px] hover:underline ', isActive ? ' text-black font-bold' :'   text-black')}>
        <span className=' whitespace-nowrap' style={{fontSize:'20px' }}>{item.title}</span>
    </Link>
  )
}

export default MenuLink