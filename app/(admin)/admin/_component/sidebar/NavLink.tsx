
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SIDEBAR_MENU } from '../constant/menu'


type Props = {
  pathname: string
}

const NavLink = ({  pathname }: Props) => {

  
    return (
      <>
        {SIDEBAR_MENU().map((item) => {

    const isActive = pathname === item.url
  
          return (
            <Link
              key={item.id}
              href={item.url}
              className={cn('flex items-center gap-4 hover:bg-[#A3C8ED4D]  rounded-md p-2 flex-nowrap', isActive && 'bg-[#A3C8ED4D]')}
            >
                {item.icon}
                <span className=' whitespace-nowrap text-[12px]'>
                {item.label}
                </span>
            </Link>
          );
        })}
      </>
    );
  };

export default NavLink
