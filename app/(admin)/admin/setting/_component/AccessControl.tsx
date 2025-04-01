import { ArrowRight, Delete, Trash2 } from 'lucide-react'
import React from 'react'

export const AccessControl = () => {
  return (
    <div className=' w-full h-[75%] lg:h-[70%] my-0 flex flex-col gap-4 items-start  overflow-scroll pb-2  mt-5 hidden-scrollbar'>

        <div className='flex items-center gap-4 w-full  hover:text-primary'>
            <Trash2 className=' size-6  text-red-600'/>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-[15px] font-medium truncate max-w-full '>ogunyemitemidayo@gmail.com</span>
                <span className=' text-[12px] text-[#0000008F]'>Admin</span>
            </div>
            <ArrowRight className='size-6  ml-auto '/>
        </div>

        <div className='flex items-center gap-4 w-full  hover:text-primary'>
            <Trash2 className=' size-6  text-red-600'/>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-[15px] font-medium truncate max-w-full '>ogunyemitemidayo@gmail.com</span>
                <span className=' text-[12px] text-[#0000008F]'>Admin</span>
            </div>
            <ArrowRight className='size-6  ml-auto '/>
        </div>

        <div className='flex items-center gap-4 w-full  hover:text-primary'>
            <Trash2 className=' size-6  text-red-600'/>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-[15px] font-medium truncate max-w-full '>ogunyemitemidayo@gmail.com</span>
                <span className=' text-[12px] text-[#0000008F]'>Admin</span>
            </div>
            <ArrowRight className='size-6  ml-auto '/>
        </div>

        <div className='flex items-center gap-4 w-full  hover:text-primary'>
            <Trash2 className=' size-6  text-red-600'/>
            <div className='flex flex-col items-start gap-2'>
                <span className='text-[15px] font-medium truncate max-w-full '>ogunyemitemidayo@gmail.com</span>
                <span className=' text-[12px] text-[#0000008F]'>Admin</span>
            </div>
            <ArrowRight className='size-6  ml-auto '/>
        </div>


     

    </div>
  )
}
