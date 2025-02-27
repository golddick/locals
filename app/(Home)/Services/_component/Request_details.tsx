'use client'

import { requestInfoData } from '@/type/business_type'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Prev_req_card } from './Prev_req_card'

export const Request_details = () => {
   
  return (
    <div className=' flex flex-col gap-10  items-start w-full  border-b pb-8 md:border-none md:pb-0 '> 
           
         <h1 className=' text-[30px] font-semibold flex items-center gap-2'>Service <span className=' text-primary'>Request</span> <Link href={'/Services/Request'}> <MoveUpRight className=' size-4'/> </Link></h1>
         <h4 className='text-[15px]  font-semibold text-[#706A6A]'>Previous Requests</h4>

        
    </div>
  )
}
