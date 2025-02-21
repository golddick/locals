import React from 'react'
import { PageHeader } from '../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../_component/pageHeader/PageDesc'


import { columns } from './_component/Table/columns'
import { subscriptionData, userInfoData } from '@/type/business_type'
import { SubscriptionDataTable } from './_component/Table/SubscriptionDataTable'

const page = () => {

  

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='Subscription Management'/>
        <PageDesc text='Manage businesses and users on The Locals Connect here.'/>
        </div>
        <SubscriptionDataTable  columns={columns} data={subscriptionData}/>
    </div>
  )
}

export default page 