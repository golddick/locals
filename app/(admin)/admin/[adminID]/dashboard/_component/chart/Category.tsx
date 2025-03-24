import { DropdownCategorySide } from '@/app/(admin)/admin/_component/create-categorie/CategoryDropdown'
import { cn } from '@/lib/utils'
import React from 'react'

interface CategoryProps{
    className?:string
    name:string
    value:string
    color: string;
    categoryID: string;
}

export const Category = ({className, name, value, color, categoryID}:CategoryProps) => {

  return (
    <div className='flex items-center gap-2 w-full justify-between'>
        <div className='flex items-center gap-2'>
            <div className={cn('w-2 h-2 rounded-sm', className)} style={{ backgroundColor: color }} ></div>
            <div>
                <p className=' text-[13px]'>{name}</p>
                <p className=' text-[9px] text-[#706A6A]'>{value} of Registered Listings</p>
            </div>
        </div>

        <div className=' mr-o flex '>
          <DropdownCategorySide categoryID={categoryID}/>
        </div>
    </div>
  )
}

  