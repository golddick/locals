import { Dot } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const TierDetails = () => {

    const points = [
        "Premium Visibility on the platform.",
        "Featured Placement in search results",
        "Exclusive discounts on additional services and events",
        "Priority customer support for immediate assistance",
      ];

  return (
    <div className=' flex flex-col w-[90%] mx-auto  items-center h-full rounded-md '>
        
        <div className='w-full h-[50%] relative rounded-tr-md  rounded-tl-md   overflow-hidden'>
            <Image src='/pay.png' alt=' IMG' fill className=' absolute  object-fill'/>
        </div>

        <div className=' flex flex-col w-full  relative h-full items-center justify-center'>
            <div className=' bg-[#FFFFFF] rounded-lg  shadow-sm shadow-[#00000040] absolute top-[-10%] flex flex-col items-start p-4  lg:w-[300px]'>
                    <div className=' flex   gap-4'>
                        <Image src='/payFrame.png' alt='IMG' width={50} height={50}/>
                        <div className=' flex flex-col'>
                            <span className=' text-[#706A6A] text-[17px] font-medium'>Platinum Tier</span>
                            <span className=' text-[20px] font-semibold'>$100 /month</span>
                        </div>
                    </div>
            </div>

            <div className=' absolute top-[60px] w-full flex flex-col gap-4 bg-[#F3F5FA]  rounded-lg p-4 py-4'>
            <ul>
        {points.map((point, index) => (
          <li key={index} className=' flex  text-primary  '><Dot  className='w-8 h-8 text-primary'/> {point}</li>
        ))}
      </ul>
            </div>
        </div>

    </div>
  )
}

export default TierDetails