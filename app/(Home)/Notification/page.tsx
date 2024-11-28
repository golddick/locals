'use client'

import React from 'react'
import ProfileNav from '../Profile/ProfileNav';
import { BellDotIcon, User } from 'lucide-react';
import NotificationBody from './NotificationBody';

const page = () => {

    const profileNav = [
        
        {
          title: " My Profile",
          path: "/Profile",
          icon:<User/>
        },
        {
          title: "Notification",
          path: "/Notification",
          icon:<BellDotIcon/>
        },
 
  ];

  return (
    <div className=' grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full  py-10  px-10 md:px-20  h-[100vh]'> 
        
    <div className='w-full flex flex-col gap-4 '>
    <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px]  hidden md:block'>Notification <span className=' text-primary'>Page</span>  </h1>

   <ProfileNav data={profileNav}/>

    </div>



 
    <div className=' w-full flex flex-col gap-4 items-start '>
        {/* <h2 className=' text-[20px]'>Notification</h2> */}
        <NotificationBody/>
     </div>


</div>
  )
}

export default page