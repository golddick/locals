import React from 'react'
import { PageHeader } from '../pageHeader/PageHeader'
import { DeleteBTN } from '../DeleteBTN/DeleteBTN'
import { BusinessInfoType } from '@/type/business_type'
import { CategoryCard } from './_component/CategoryCard'
import { PlanDataTable } from './_component/planTable/PlanTable'
import { columns } from './_component/planTable/columns'

interface ProfileINFOProps {
    info: BusinessInfoType
}

export const ProfileINFO = ({info}:ProfileINFOProps) => {
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.name}/>
      <DeleteBTN/>
    </div>
    <CategoryCard info={info}/>

    <PlanDataTable columns={columns} data={info.plans}/>
    </div>
  )
}
