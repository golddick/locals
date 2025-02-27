import React from 'react'
import { PageHeader } from '../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../_component/pageHeader/PageDesc'
import { BusinessDataTable } from './_component/Table/BusinessTable'
import { BusinessType, businessData } from '@/type/business_type'
import { columns } from './_component/Table/columns'

const page = () => {

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='Verified Listings'/>
        <PageDesc text='List of verified businesses on The Locals Connect'/>
        </div>
        <BusinessDataTable  columns={columns} data={businessData}/>
    </div>
  )
}

export default page 