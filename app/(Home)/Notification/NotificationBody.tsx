import React from 'react'
import NotificationCard from './NotificationCard';

const NotificationBody = () => {

    const Notification = [
        
        {
          id: 1,
          title: "Newsletter Update",
          text: "Stay informed! Our latest newsletter is now available, featuring tips on maxi..",
          img:'/frameGuy.png'
        },
         
        {
            id: 2,
            title: "Shoprite Update",
            text: "Stay informed! Our latest newsletter is now available, featuring tips on maxi..",
            img:'/LoginImg.png'
          },
 
  ];

  return (
    <div className=' flex flex-col gap-4 w-full h-auto'>
        <NotificationCard data={Notification} />
       
    </div>
  )
}

export default NotificationBody