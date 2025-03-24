import { Badge } from '@/components/ui/badge'
import { snakeCaseToTitleCase } from '@/lib/utils'
import { UserType } from '@/type/business_type'
import { BriefcaseBusiness, Mail, MapPin, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CategoryCardProps {
    info: UserType | undefined
}

export const CategoryCard = ({info}:CategoryCardProps) => {

    if (!info) {
        return null
      }
  return (
    <div className=' flex flex-col items-start justify-start w-full gap-6'>
          <div className='flex items-center gap-2'>

            {info.imageUrl ? (
            <div className=' size-10 relative'>
            <Image  src={info.imageUrl} alt="IMG" fill className="rounded-full object-contain  absolute" />
            </div>
            ) : (
            <p className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white font-semibold uppercase">
            {info.firstname ? info.firstname.charAt(0) : "?"}
            </p>
            )}


                
                <Badge className=' bg-white p-2 px-4 flex items-center gap-2 rounded-3xl'>
                    <div className=' size-4 rounded-full border-2'></div>
                    {info.planTier || 'plan'}
                </Badge>
                <Badge variant={info.status}> { snakeCaseToTitleCase(info.status || 'active') }</Badge>
            </div>
        <div className=' flex flex-col gap-2 items-start'>
            <h3 className=' text-[13px] font-medium text-[#706A6A]'>DESCRIPTION</h3>
            <p className=' text-[13px] font-light w-[90%] m-auto rounded-lg bg-white h-auto p-2'>{info.bio}</p>
        </div>
        <div className=' flex  items-start gap-x-6 gap-2 flex-wrap'>
            <div className=' flex items-center gap-2'>
                <MapPin className=' size-4'/>
                <p className=' text-[13px]'>{info.address}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <PhoneCall className=' size-4'/>
                <p className=' text-[13px]'>{info.phone}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <Mail className=' size-4'/>
                <p className=' text-[13px]'>{info.email}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <BriefcaseBusiness className=' size-4'/>
                <p className=' text-[13px]'>{info.occupation}</p>
            </div>
        </div>


    </div>
  )
}
