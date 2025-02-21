
import { Card } from '@/components/ui/card'
import { RequestInfoType } from '@/type/business_type'
import React from 'react'
import IconAvatar from './User_icon'
import { Badge } from '@/components/ui/badge'
import { Check, Mail, MoveUpRight, PhoneCall, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { snakeCaseToTitleCase } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'


interface Prev_req_cardProps{
    request:RequestInfoType
}

export const Prev_req_card = ({request}:Prev_req_cardProps) => {
  return (
 <div className="shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_-4px_8px_rgba(0,0,0,0.1)] w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] p-4 rounded-xl bg-[#FFFFFF] border-none gap-2 relative lg:static">

    <div className=' flex flex-col items-start gap-4'>

            <div className=' flex items-center gap-2'>
                    <IconAvatar name={request.user_name} image={request.user_img}/>
                    <div className=' flex flex-col items-start  gap-1 lg:gap-0'>
                        <span className=' text-[15px] lg:text-[13px] font-semibold truncate'>{request.user_name}</span>
                    <div className=' flex items-center gap-2'>
                    <span className=' text-primary text-[13px] lg:text-[13px]'>{request.service_type}</span>
                        <Badge className='  flex items-center gap-2 bg-white'> <div className=' size-4 lg:size-2 rounded-full border-2'></div> <span className=' text-[13px] lg:text-[10px]'> {request.user_planTier}</span></Badge>
                    </div>
                    </div>
            </div>

            <div className='flex flex-col gap-2 items-start'>

                    <div className=' flex items-center gap-2'>
                    <PhoneCall className=' size-4'/>
                    <span className=' text-[13px]'>{request.contact}</span>
                    </div>

                    <div className=' flex items-center gap-2'>
                    <Mail className=' size-4'/>
                    <span className=' text-[13px]'>{request.email}</span>
                    </div>

            </div>

        {
            request.status !== 'Completed' && (
                <div className='flex  flex-row gap-4 items-center'>
                    <Button variant={'destructive'} className=' rounded-xl'>
                        <X className=' size-4'/>
                        <span>Terminate</span>
                    </Button>

                    <Button className=' rounded-xl bg-green-500'>
                        <Check className=' size-4'/>
                        <span>Complete</span>
                    </Button>
                </div>
            )
        }
    </div>

       

        <div className='flex flex-col items-start gap-4 lg:relative'>
            <Link href={'/Services/Request_details/666'}>
            <MoveUpRight className=' absolute top-0 right-0 size-6 shadow-lg shadow-[#00000040] p-1  rounded-full z-10'/>
            </Link>
           <div className=' mt-5 flex flex-wrap gap-1 items-center'>
            <h4 className=' text-[#706A6A] text-[10px] font-bold'>Request Status:<Badge variant={request.status} className='border-none'>{ snakeCaseToTitleCase(request.status) }</Badge></h4>
            <h4 className=' text-[#706A6A] text-[10px] font-bold'>Due Date: <span className=' text-[12px]'>{request.due_date}</span> </h4>
           </div>
           <div className=' flex flex-col gap-2 items-start w-full'>
           <h4 className=' text-[#706A6A] text-[13px] font-semibold'>Service Description </h4>
           <div className=' bg-[#A3C8ED80] w-full rounded-xl h-full  p-4 overflow-scroll text-[13px] ' >
            <span>{request.desc}</span>
           </div>
           </div>
        </div>

    </div>
  )
}
