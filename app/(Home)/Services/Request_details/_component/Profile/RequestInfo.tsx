import React from 'react'
import {  RequestInfoType } from '@/type/business_type'
import { PageHeader } from '@/app/(admin)/admin/_component/pageHeader/PageHeader'
import { CategoryCard } from './CategoryCard'
import { SelectStatus } from './UpdateStatus'
import { RequestResponse } from './RequestResponse'

interface ProfileINFOProps {
    info: RequestInfoType
}

export const RequestINFO = ({info}:ProfileINFOProps) => {
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4 bg-[#706A6A1A] rounded-lg'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.user_name}/>
      <SelectStatus status={info.status}/>
    </div>
    <CategoryCard info={info}/>
    <RequestResponse/>
    </div>
  )
}
