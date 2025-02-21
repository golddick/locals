import React from 'react'
import { PageHeader } from '../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../_component/pageHeader/PageDesc'


import { columns } from './_component/Table/columns'
import { UserDataTable } from './_component/Table/UserTable'
import { userInfoData } from '@/type/business_type'

const page = () => {

  

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='User Management'/>
        <PageDesc text='Manage businesses and users on The Locals Connect here.'/>
        </div>
        <UserDataTable  columns={columns} data={userInfoData}/>
    </div>
  )
}

export default page 