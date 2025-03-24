'use client'

import React, { useEffect, useState } from 'react'
import { CategoryCard } from './CategoryCard'
import { PageHeader } from '@/app/(admin)/admin/_component/pageHeader/PageHeader'
import { Request_DataTable } from '@/app/(admin)/admin/_component/Profile/_component/RequestTable/Request_Table'
import { requestColumns } from '@/app/(admin)/admin/_component/Profile/_component/RequestTable/columns'
import { singleUserInfo, UserType } from '@/type/business_type'
import { useUserID } from '@/hooks/use-get-userID'
import { getUserById } from '@/app/api/get/user'
import { UserAction } from '@/app/(admin)/admin/_component/UserActionBTN/ActionBTN'
import { EditUserBTN } from '@/app/(admin)/admin/_component/UserActionBTN/EditBTN'

export const UserProfileINFO = () => {

    const userId =  useUserID()
  
    const [user, setUser] = useState<UserType> ()
            const [error, setError] = useState<string>()
          
              // Fetch user
              useEffect(() => {
                const fetchUser = async () => {
                  try {
                    const data = await getUserById(userId);
                    setUser(data.data); 
                  } catch (err) {
                    setError('Failed to fetch categories');
                  }
                };
            
                fetchUser();
              }, []);


              console.log(user, 'man use')
              const name = [user?.firstname, user?.lastname].filter(Boolean).join(" ");
  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
    <div className=' flex items-center justify-between gap-4 w-full'>
      <PageHeader text={name}/>
      <div className=' flex items-center gap-2'>
      <EditUserBTN userId={userId}/>
      <UserAction userId={userId}/>
      </div>
    </div>
    <CategoryCard info={user}/>
    {singleUserInfo.request && (
    <Request_DataTable  columns={requestColumns} data={singleUserInfo.request}/>
    )}
    </div>
  )
}
