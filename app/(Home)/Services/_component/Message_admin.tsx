import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Message_admin = () => {
  return (
    <div className='bg-[#706A6A1A] rounded-xl w-full lg:w-[80%] m-auto h-full p-5  flex flex-col   items-center gap-4'>
                
    <div className=' w-[100px] h-[100px] relative'>
        <Image src='/help.png' alt='IMG' fill className='  absolute object-contain'/>
    </div>

    <div className=' flex flex-col text-center'>
    <h1 className=' text-[25px] font-semibold'>Message Admin</h1>
        <span className=' text-[#706A6A] text-[17px]'>Typically respond within 24 hours</span>
    </div>

    <div className=' w-full rounded-xl bg-[#706A6A33] p-5 flex flex-col items-center justify-center'>
        <div className=' w-[70px] h-[70px] rounded-full overflow-hidden relative  border-2'>
            <Image src='/frameGuy.png' alt='IMG' fill className='  absolute object-contain'/>
        </div>


        <div className=' flex flex-col text-center'>
    <h1 className=' text-[20px] font-semibold'>TheLocalsConnect</h1>
        <span className=' text-[#706A6A] text-[17px]'>@admin</span>
    </div>


    </div>
    <span className=' text-[15px] font-light'>Drop a Mail</span>
    <Textarea className=' bg-[#A3C8ED80] w-full rounded-xl h-[150px] ' placeholder='Leave a message'/>

    <div>
        <Button className=' flex items-center gap-5 rounded-full w-[200px]'>
            <span>Send</span>
            <Send/>
        </Button>
    </div>

</div>
  )
}
