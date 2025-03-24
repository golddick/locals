'use client'

import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Search from '../SearchBox/Search'
import HeaderText from './HeaderText'
import HeaderBottom from './HeaderBottom'
import { UserType } from '@/type/business_type'
import { getUserInfo } from '@/app/api/auth/user'
import { useRouter } from 'next/navigation'

const HeaderCard = () => {

  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserType | undefined>(undefined);
  
  useEffect(() => {
    // Fetch user info from localStorage after the component mounts
    const info = getUserInfo();
    if (info) {
      setUserInfo(info);
    }
  }, []);
  
  useEffect(() => {
    if (userInfo && !userInfo.isEmailVerified) {
      router.push('/OTP');
    }
  }, [userInfo, router]);
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  md:h-[calc(100vh-500px)] lg:h-[calc(100vh-200px)] items-center justify-between  px-5 md:px-20 py-10 '>
        <div className='flex flex-col justify-between overflow-scroll hidden-scrollbar  gap-6 md:gap-3  md:h-full'>
        <Search/>
        <HeaderText/>
        <HeaderBottom/>
        </div>
            <ImageCard/>
       
    </div>
  )
}

export default HeaderCard