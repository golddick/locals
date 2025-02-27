import Image from 'next/image'
import React from 'react'
import { EmailSwitch } from './Email_switch'

export const Email_notification = () => {
  return (
    <div className=' shadow-md shadow-[#00000040] bg-[#FFFFFF] w-full  gap-4 py-4 px-6 rounded-2xl  flex items-center  justify-between  relative' >
        
            <div className='w-[40px] h-[40px] rounded-full relative  hidden md:block'>
                <Image src={'/frameGuy.png'} alt='IMG' fill className=' rounded-full object-contain absolute'/>
            </div>
    
            <div className=' w-full flex flex-col gap-1 items-start'>
                <span className='text-[15px] font-semibold'>Email Notification</span>
                <p className=' text-[13px] text-[#706A6A]'>Toggle switches to enable or disable various email notifications (e.g., user registrations, subscription renewals).</p>
            </div>

            <EmailSwitch/>
        </div>
  )
}
