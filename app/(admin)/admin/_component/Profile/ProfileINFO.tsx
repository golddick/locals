import React from 'react'
import { PageHeader } from '../pageHeader/PageHeader'
import {  BusinessType, singleBusinessInfo } from '@/type/business_type'
import { CategoryCard } from './_component/CategoryCard'
import { PlanDataTable } from './_component/planTable/PlanTable'
import { columns } from './_component/planTable/columns'
import { BusinessAction } from '../BusinessActionBTN/ActionBTN'
import { EditBTN } from '../BusinessActionBTN/EditBTN'

interface ProfileINFOProps {
    info: BusinessType | undefined
}

export const ProfileINFO = ({info}:ProfileINFOProps) => {

  if (!info) {
    return null
  }
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.name}/>
      <div className=' flex items-center gap-2'>
      <EditBTN  businessId={info._id}/>
      <BusinessAction businessId={info._id}/>
      </div>
    </div>
    <CategoryCard info={info}/>

    <PlanDataTable columns={columns} data={singleBusinessInfo.plans}/>
    </div>
  )
}
