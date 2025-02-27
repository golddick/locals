import React from 'react'
import { PageHeader } from '../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../_component/pageHeader/PageDesc'
import {  RequestDataTable } from './_component/Table/RequestTable'
import { BusinessType, RequestInfoType, requestInfoData } from '@/type/business_type'
import { columns } from './_component/Table/columns'

const page = () => {




  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='Special Service Requests'/>
        <PageDesc text='List of Special request by clients on The Locals Connect'/>
        </div>
        <RequestDataTable  columns={columns} data={requestInfoData}/>
    </div>
  )
}

export default page 