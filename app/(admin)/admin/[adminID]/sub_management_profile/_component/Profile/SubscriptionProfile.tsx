import React from 'react'

import { CategoryCard } from './CategoryCard'
import { PageHeader } from '@/app/(admin)/admin/_component/pageHeader/PageHeader'
import { SubscriptionInfoType } from '@/type/business_type'
import { PlanDataTable } from './planTable/PlanTable'
import { columns } from './planTable/columns'
import { DeleteBTN } from '@/app/(admin)/admin/_component/BusinessActionBTN/DeleteBTN'

interface ProfileINFOProps {
    info: SubscriptionInfoType
}

export const SubscriptionProfile = ({info}:ProfileINFOProps) => {
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.subscriber_name}/>
      {/* <DeleteBTN/> */}
      dele
    </div>
    <CategoryCard info={info}/>
    {info.plans && (
    <PlanDataTable  columns={columns} data={info.plans}/>
    )}
    </div>
  )
}
