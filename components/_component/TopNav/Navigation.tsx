
import React from 'react'
import MenuLink from './MenuLink';

const Navigation = () => {


    const menuItems = [
        
            {
              title: "Home",
              path: "/",
            },
            {
              title: "Businesses",
              path: "/Businesses",
            },
            {
              title: "Special Services",
              path: "/Services",
            },
      
            {
              title: "Subscription",
              path: "/Subscription",
            },
        
        
     
  
      ];

  return (
    <div className='w-full flex flex-col md:flex-row  items-start gap-2 md:gap-4 md:items-center'>

{menuItems.map ((category) => (
          <li key={category.title} className='flex gap-4   '>

          <MenuLink item={category} key={category.title}/>

          </li>
        ))}
    </div>
  )
}

export default Navigation


