import React from 'react'
import {  SpecialRequestType } from '@/type/business_type'
import { PageHeader } from '@/app/(admin)/admin/_component/pageHeader/PageHeader'
import { CategoryCard } from './CategoryCard'
import { SelectStatus } from './UpdateStatus'
import { RequestResponse } from './RequestResponse'

interface ProfileINFOProps {
    info: SpecialRequestType  
}

export const RequestINFO = ({info}:ProfileINFOProps) => {

  console.log(info, 'infooooo')
  console.log(info?.user?.firstname, 'infooooo first')

  if (!info ) {
    return <div>Loading or no user data...</div>
  }
  
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.user?.lastname}/>
      <SelectStatus status={info?.status}/>
    </div>
    <CategoryCard info={info}/>
    <RequestResponse/>
    </div>
  )
}
