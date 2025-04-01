'use client'

import React, { useEffect, useState } from 'react'
import { PageHeader } from '../../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../../_component/pageHeader/PageDesc'
import { RequestDataTable } from './Table/RequestTable'
import { columns } from './Table/columns'
import { requestInfoData, SpecialRequestType } from '@/type/business_type'
import { getAllSpecialRequest } from '@/app/api/get/allRequest'


const RequestListing = () => {

       const [request, setRequest] = useState<SpecialRequestType[]> ([])
            const [error, setError] = useState<string>()
          
              // Fetch all request
              useEffect(() => {
                const fetchRequest = async () => {
                  try {
                    const data = await getAllSpecialRequest();
                    setRequest(data.data); 
                  } catch (err) {
                    setError('Failed to fetch Request');
                  }
                };
            
                fetchRequest();
              }, []);


  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='Special Service Requests'/>
        <PageDesc text='List of Special request by clients on The Locals Connect'/>
        </div>
        <RequestDataTable  columns={columns} data={request}/>
    </div>
  )
}

export default RequestListing  