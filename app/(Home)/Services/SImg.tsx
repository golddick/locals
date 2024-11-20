import Image from 'next/image'
import React from 'react'

const SImg = () => {
  return (

    <div className='w-[80%] m-auto  md:h-[70%]  lg:h-[80%] relative hidden md:block  '>


    <Image src='/sImg.png' alt='logo' width={700} height={100} className=' absolute   z-20 bottom-0 object-contain '/>
    <Image src='/sframe.png' alt='logo'  width={700} height={100} className=' object-fill  absolute bottom-0 '/>

    </div>
  )
}

export default SImg