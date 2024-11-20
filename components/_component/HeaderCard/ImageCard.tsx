import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
  return (
    <div className='w-full h-full relative hidden md:block '>


    <Image src='/frameGuy.png' alt='logo' fill className=' absolute   z-20 bottom-0 object-contain '/>
    <Image src='/Frame1.png' alt='logo'  width={700} height={100} className=' object-fill  absolute bottom-0 '/>

    </div>
  )
}

export default ImageCard