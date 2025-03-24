'use client'

import React, { useEffect, useState } from 'react'
import { userInfoData, UserType } from '@/type/business_type'
import { PageHeader } from '../../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../../_component/pageHeader/PageDesc'
import { columns } from './Table/columns'
import { UserDataTable } from './Table/UserTable'
import { getAllUsers } from '@/app/api/get/allUsers'

const UserListing = () => {
 const [users, setUsers] = useState<UserType[]> ([])
        const [error, setError] = useState<string>()
      
          // Fetch all users
          useEffect(() => {
            const fetchUsers = async () => {
              try {
                const data = await getAllUsers();
                setUsers(data.data); 
              } catch (err) {
                setError('Failed to fetch categories');
              }
            };
        
            fetchUsers();
          }, []);
  

          console.log(users, 'users')

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='User Management'/>
        <PageDesc text='Manage businesses and users on The Locals Connect here.'/>
        </div>
        <UserDataTable  columns={columns} data={users}/>
    </div>
  )
}
 
export default UserListing 