import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { RequestInfoType, SpecialRequestType } from '@/type/business_type'
import { Mail, MapPin, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CategoryCardProps {
    info: SpecialRequestType
}

export const CategoryCard = ({info}:CategoryCardProps) => {

    if (!info || !info.user) {
        return <div>Loading or no user data...</div>
    }
  return (
    <div className=' flex flex-col items-start justify-start w-full gap-6'>
       
        <div className='flex items-center gap-2'>
            <Image src={info.user.imageUrl || '/no-image-icon.png'} alt='IMG' width={60} height={60}  className=' rounded-full object-cover '/>
            <Badge className=' bg-white p-2 px-4 flex items-center gap-2 rounded-3xl'>
                <div className=' size-4 rounded-full border-2'></div>
                {info?.user?.planTier || 'Blue'}
            </Badge>
        </div>
        <div >
            <span  className=' font-medium text-[15px] flex items-center gap-1'>Service Type: 
                <div className=' text-primary flex items-center gap-4'>
                    {info.services.map((service, index) => (
                        <p key={index}>{service.name}.</p>
                    ))}
                </div>
            </span>
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
                            <span className=' text-primary text-[15px]'>7+</span>
                            <span className=' text-[15px]'>Review</span>
                        </div>
        </div>
        <div className=' flex  items-start gap-x-6 gap-2 flex-wrap'>
            <div className=' flex items-center gap-2'>
                <MapPin className=' size-4'/>
                <p className=' text-[13px]'>{info.address}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <PhoneCall className=' size-4'/>
                <p className=' text-[13px]'>{info.user.phone || '+000 00 0000 0000'}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <Mail className=' size-4'/>
                <p className=' text-[13px]'>{info.user.email}</p>
            </div>
        </div>
        <div className=' flex flex-col gap-2 items-start'>
            <h3 className=' text-[13px] font-medium text-[#706A6A]'>Request Description</h3>
            <p className=' text-[13px] font-light w-[90%] m-auto rounded-lg bg-white h-auto p-2'>{info.description}</p>
        </div>
     


    </div>
  )
}
