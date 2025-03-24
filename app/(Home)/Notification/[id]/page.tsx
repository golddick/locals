
import React from 'react'
import NotificationBody from './NotificationBody';
import ProfileNav from '../../Profile/[id]/ProfileNav';


const page = () => {
  return (
    <div className=' grid grid-cols-[0.5fr_3fr] gap-4 md:gap-10 w-full  py-10  px-5 md:px-20  h-[100vh]'> 
        
    <div className='w-full flex flex-col gap-4 '>
    <h1 className=' text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px]  hidden md:block'>Notification <span className=' text-primary'>Page</span>  </h1>

   <ProfileNav/>

    </div>



 
    <div className=' w-full flex flex-col gap-4 items-start '>
        <NotificationBody/>
     </div>


</div>
  )
}

export default page