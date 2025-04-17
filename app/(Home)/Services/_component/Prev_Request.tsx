'use client'

import { requestInfoData, SpecialRequestType } from '@/type/business_type'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Prev_req_card } from './Prev_req_card'
import { getAllUserSpecialRequest } from '@/app/api/get/allRequest'
import LoaderCircle from '@/components/_component/Loader/Loader'
import { getUserInfo } from '@/app/api/auth/user'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const Prev_Request = () => {

  const router = useRouter()
  const user = getUserInfo()

  if (!user) {
    toast.error('No user logged in')
    router.push('/')
  }

  
  const [request, setRequest] = useState<SpecialRequestType[]> ([])
              const [error, setError] = useState<string>()
              const [loading, setLoading] = useState<boolean>(true)
            
                // Fetch all request
                useEffect(() => {
                  const fetchRequest = async () => {
                    try {
                      const data = await getAllUserSpecialRequest();
                      setRequest(data.data); 
                    } catch (err) {
                      setError('Failed to fetch Request');
                    }finally{
                      setLoading(false)
                    }
                  };
              
                  fetchRequest();
                }, []);

                if (loading) {
                  return (
                    <LoaderCircle/>
                  )
                }
  
  
  return (
    <div className=' flex flex-col gap-10  items-start w-full  border-b pb-8 md:border-none md:pb-0 '> 
           
         <h1 className=' text-[30px] font-semibold flex items-center gap-2'>Service <span className=' text-primary'>Request</span> <Link href={'/Services/Request'}> <MoveUpRight className=' size-4'/> </Link></h1>
         <h4 className='text-[15px]  font-semibold text-[#706A6A]'>Previous Requests</h4>

         <div className=' flex flex-col gap-4 w-full lg:w-[60%] mx-auto lg:overflow-y-auto lg:h-[calc(100vh-100px)] lg:hidden-scrollbar p-4'>
                {
                    request.map((request, index) => (
                        <Prev_req_card key={index} request={request}/>
                    ))
                }

         </div>
    </div>
  )
}
