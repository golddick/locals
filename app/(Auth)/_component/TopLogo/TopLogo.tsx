import Image from 'next/image'
import Logo from '/LocalLocal.png'
import React from 'react'

const TopLogo = () => {
  return (
      <div className='w-[100px] h-[100px] absolute z-30 ml-[30px] md:ml-[100px]  lg:ml-[100px]'>
      <Image src='/LocalLogo.png' alt='logo' fill className='   object-contain '/>
       </div>
  )
}

export default TopLogo