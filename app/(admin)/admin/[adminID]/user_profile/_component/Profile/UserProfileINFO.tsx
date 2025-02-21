import React from 'react'

import { CategoryCard } from './CategoryCard'
import { PageHeader } from '@/app/(admin)/admin/_component/pageHeader/PageHeader'
import { Request_DataTable } from '@/app/(admin)/admin/_component/Profile/_component/RequestTable/Request_Table'
import { requestColumns } from '@/app/(admin)/admin/_component/Profile/_component/RequestTable/columns'
import { UserInfoType } from '@/type/business_type'
import { EditProfileBTN } from '../editBTN/EditProfileBTN'

interface ProfileINFOProps {
    info: UserInfoType
}

export const UserProfileINFO = ({info}:ProfileINFOProps) => {
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={info.name}/>
      <EditProfileBTN/>
    </div>
    <CategoryCard info={info}/>
    {info.request && (
    <Request_DataTable  columns={requestColumns} data={info.request}/>
    )}
    </div>
  )
}
