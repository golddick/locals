import { Badge } from '@/components/ui/badge'
import { snakeCaseToTitleCase } from '@/lib/utils'
import { BusinessInfoType } from '@/type/business_type'
import { Mail, MapPin, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CategoryCardProps {
    info: BusinessInfoType
}

export const CategoryCard = ({info}:CategoryCardProps) => {
  // console.log(info.business,'cat')
  console.log(info,'info')
  return (
    <div className=' flex flex-col items-start justify-start w-full gap-6'> 
          <div className=' flex items-start gap-2 flex-wrap'>
          {info.category.map((text, index) => (
            <span 
                key={index} 
                className={`text-[16px] font-medium ${index > 0 && index % 2 !== 0 ? 'text-primary' : ''}`}
            >
                {text}.
            </span>
            ))}

        </div>
        <div className='flex items-center gap-2'>
            <Image src={info.img} alt='IMG' width={60} height={60}  className=' rounded-full object-cover '/>
            <Badge className=' bg-white p-2 px-4 flex items-center gap-2 rounded-3xl'>
                <div className=' size-4 rounded-full border-2'></div>
                {info.planTier}
            </Badge>
            <Badge variant={info.status}> { snakeCaseToTitleCase(info.status) }</Badge>
        </div>
        <div className='flex items-center gap-4'>
                        <div className=' flex items-center'>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] '/>
                        
                        </div>
                        <div className='flex items-center '>
                            <span className=' text-primary text-[15px]'>{info.review}+</span>
                            <span className=' text-[15px]'>Review</span>
                        </div>
        </div>
        <div className=' flex flex-col gap-2 items-start'>
            <h3 className=' text-[13px] font-medium text-[#706A6A]'>DESCRIPTION</h3>
            <p className=' text-[13px] font-light w-[90%] m-auto rounded-lg bg-white h-auto p-2'>{info.desc}</p>
        </div>
        <div className=' flex  items-start gap-x-6 gap-2 flex-wrap'>
            <div className=' flex items-center gap-2'>
                <MapPin className=' size-4'/>
                <p className=' text-[13px]'>{info.address}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <PhoneCall className=' size-4'/>
                <p className=' text-[13px]'>{info.contact}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <Mail className=' size-4'/>
                <p className=' text-[13px]'>{info.email}</p>
            </div>
        </div>


    </div>
  )
}
