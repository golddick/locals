import PriceRow from '@/components/_component/PriceModel/PriceRow'
import { TimerIcon } from '@radix-ui/react-icons'
import { HandCoinsIcon, ReceiptIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col gap-10 w-full  py-10  px-10 md:px-20  '> 

        <div className=' flex flex-col gap-1 items-start '>
        <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px] '>Choose a <span className=' text-primary'>subscription</span>  plan </h1>
        <p className=' text-[20px]'> Select a plan that best suit your business needs</p>
        </div>

        <div className='flex w-full  items-center lg:gap-[100px]   overflow-scroll  hidden-scrollbar  py-4 md:py-0'>

          <div className='flex gap-4 items-center border border-[#000000]  rounded-full px-6 py-2'>
            <ReceiptIcon className='w-10 h-10 p-3 rounded-full bg-[#706A6A40]'/>
            <div className=' flex flex-col  items-start'>
              <span className=' text-[#706A6A] text-[15px]'>Subscription</span>
              <p className=' text-[17px]'>Blue Tier</p>
            </div>
          </div>


          <div className='flex gap-4 items-center  px-6 py-2'>
          <HandCoinsIcon className='w-10 h-10 p-3 rounded-full bg-[#706A6A40]'/>
            <div className=' flex flex-col  items-start'>
              <span className=' text-[#706A6A] text-[15px]'>Cost</span>
              <p className=' text-[17px]'>$ 25</p>
            </div>
          </div>



          <div className='flex gap-4 items-center  rounded-full px-6 py-2'>
          <TimerIcon className='w-10 h-10 p-3 rounded-full bg-[#706A6A40]'/>
            <div className=' flex flex-col  items-start'>
              <span className=' text-[#706A6A] text-[15px]  whitespace-nowrap '>Renewal Date</span>
              <p className=' text-[17px]  whitespace-nowrap '>Nov 8th, 2023</p>
            </div>
          </div>

        </div>

        <PriceRow/>

    </div>
  ) 
}

export default page 