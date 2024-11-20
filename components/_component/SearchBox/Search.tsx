import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='flex w-[300px] lg:w-[500px] p-1 px-2 shadow-sm shadow-[#00000040] rounded-full items-center gap-2'>
        <SearchIcon className='w-5 h-5 text-primary'/>
        <Input className='border-none shadow-none' placeholder='Search business or services'/>
    </div>
  )
}

export default Search 