import { Badge } from '@/components/ui/badge'
import { snakeCaseToTitleCase } from '@/lib/utils'
import { SubscriptionInfoType } from '@/type/business_type'
import { BriefcaseBusiness, Mail, MapPin, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CategoryCardProps {
    info: SubscriptionInfoType
}

export const CategoryCard = ({info}:CategoryCardProps) => {
  return (
    <div className=' flex flex-col items-start justify-start w-full gap-6'>
          <div className='flex items-center gap-2'>

            {info.subscriber_img ? (
            <div className=' size-10 relative'>
            <Image  src={info.subscriber_img} alt="IMG" fill className="rounded-full object-contain  absolute" />
            </div>
            ) : (
            <p className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white font-semibold uppercase">
            {info.subscriber_img ? info.subscriber_name.charAt(0) : "?"}
            </p>
            )}


                
                <Badge className=' bg-white p-2 px-4 flex items-center gap-2 rounded-3xl'>
                    <div className=' size-4 rounded-full border-2'></div>
                    {info.plans[0].name}
                </Badge>
                <Badge variant={info.status}> { snakeCaseToTitleCase(info.status) }</Badge>
            </div>
        <div className=' flex flex-col gap-2 items-start'>
            <h3 className=' text-[13px] font-medium text-[#706A6A]'>DESCRIPTION</h3>
            <p className=' text-[13px] font-light w-[90%] m-auto rounded-lg bg-white h-auto p-2'>{info.subscriber_desc}</p> 
        </div>
        <div className=' flex  items-start gap-x-6 gap-2 flex-wrap'>
            <div className=' flex items-center gap-2'>
                <MapPin className=' size-4'/>
                <p className=' text-[13px]'>{info.subscriber_address}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <PhoneCall className=' size-4'/>
                <p className=' text-[13px]'>{info.subscriber_number}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <Mail className=' size-4'/>
                <p className=' text-[13px]'>{info.subscriber_email}</p>
            </div>
        </div>


    </div>
  )
}
