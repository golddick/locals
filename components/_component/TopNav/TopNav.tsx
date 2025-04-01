import Image from 'next/image'
import React from 'react'
import AuthBTNS from './AuthBTNS'
import Navigation from './Navigation'
import MobileNav from './MobileNav'




const TopNav = () => {

  

  return (
    <div className='w-[90%] p-2 mx-auto  px-5 rounded-full flex items-center justify-between shadow-[#00000040] shadow-sm sticky top-5 bg-white z-50'>

        <div className='block md:hidden'>
            
            <MobileNav side='left'/>
        </div>

        <div className='  w-[50px] h-[50px]  relative'>
      <Image src='/LocalLogo.png' alt='logo' fill className=' absolute   object-contain  '/>
       </div>

       <div className=' hidden md:block'>
        <Navigation/>
       </div>

       <div className='hidden md:block'>
        <AuthBTNS/>
       </div>
    </div>
  )
}

export default TopNav 

