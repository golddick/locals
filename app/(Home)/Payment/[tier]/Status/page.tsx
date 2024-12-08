import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'

import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='grid  grid-cols-1 gap-10 md:grid-cols-2 w-full h-full lg:gap-6   px-10 lg:px-20 py-10  lg:h-[calc(100vh-200px)]'>
        
        <div className='w-full flex flex-col gap-6'>
        <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px] '>Welcome Onboard! </h1>

        <div className=' flex items-center w-full  gap-6'>
            <Image src='/bs.png' alt='IMG' width={70} height={70} className=' rounded-full'/>
            <span className=' text-[20px] font-semibold'>Alicent Catering Services</span>
            <span className=' text-[#282828] text-[18px]'>-100.00</span>
        </div>

        <Separator className=' w-full bg-[#706A6A]'/>

        <div className=' flex flex-col gap-8 items-start'>

          <div className=' flex flex-col gap-2 items-start'>
          <span>Status</span>
            <div className=' flex items-center gap-2'>
                <Check className=' w-4 h-4 bg-green-600 rounded-full text-white p-[2px]'/>
                <span>Payment Successful</span>
            </div>
          </div>

          <div className=' flex flex-col gap-2 items-start'>
          <span>Date</span>
            <div className=' flex items-center gap-2'>
                <span>Oct 30th, 2024 at 2:53 pm</span>
            </div>
          </div>


          <div className=' flex flex-col gap-2 items-start'>
          <span>Payment Method</span>
            <div className=' flex items-center gap-2  bg-[#E9EFFD] rounded-lg p-4  w-[250px] '>
                <Image src='/UBA.png' alt='IMG' width={40} height={40} className=' bg-white p-1 rounded-md'/>
                <div>
                <h1 className=' text-[15px]'> Master card </h1>
                <span className=' text-[15px]'>***** *** ****78</span>
                </div>
            </div>
          </div>
        </div>

        </div>

        <div className=' w-full flex flex-col items-center  gap-6'>
            
            <Check className='w-[80px] h-[80px] text-white bg-green-500 rounded-full p-2'/>

            <h1 className=' text-[25px] lg:text-[25px] font-semibold whitespace-nowrap md:text-[25px] '>Platinum Tier </h1>

            <p className=' text-center text-[15px]'>Congratulations on Subscribing to our membership tier! <br/> you can now enjoy premium business listing with amazing features.</p>

            <div className=' w-full bg-[#F3F5FA] p-4 flex flex-col gap-4 rounded-lg items-start lg:h-[250px] '>

                <div className='  flex flex-col gap-4'>
                    <span className=' text-primary text-[20px]'>Start Date</span>
                    <span className=' text-[15px]'>Oct 30th, 2024 at 2:53 pm</span>
                </div>
                <div className='  flex flex-col gap-4'>
                    <span className=' text-primary text-[20px]'>Start Date</span>
                    <span className=' text-[15px]'>Oct 30th, 2024 at 2:53 pm</span>
                </div>


           

            </div>

        </div>
    </div>
  )
}

export default page