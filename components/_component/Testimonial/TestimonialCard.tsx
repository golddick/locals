import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



interface TestimonialCardProps {
                name:string
                service:string
                bio:string
                img:string
                rate:number
}

const TestimonialCard = ({name,service,bio,img,rate}:TestimonialCardProps) => {
  return (
        <div className='p-5 rounded-xl bg-[#FFFFFF] w-[300px] flex flex-col gap-5 items-start'>
            
            <div className=' flex  items-center gap-4'>

                <div className=' relative w-[60px]  h-[60px] rounded-full overflow-hidden'>
                    <Image src={img} alt='IMG' fill className=' absolute object-contain'/>
                </div>

                <div className=' flex flex-col '>
                    <span className=' text-[20px] font-medium'>{name}</span>
                    <p className=' text-[15px] font-normal'>{service} </p>
                </div>

            </div>

            <div className='flex items-center gap-2'>
                <span>{rate}</span>
                <Star className=' w-5 h-5 fill-[#FDD835] text-[#FDD835]'/>
            </div>


            <p className='text-[16px] font-medium'>{bio}</p>


        </div>
  )
}

export default TestimonialCard