import { Input } from '@/components/ui/input'
import { Search, } from 'lucide-react'
import React from 'react'

export const TopBarSearch = () => {
  return (
    <div className='flex items-center border-none bg-[#D9D9D94D] rounded-xl  p-1'>
        <Search/>
        <Input placeholder='search...' className=' border-none placeholder:text-black'/>
    </div>
  )
}
