import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
  return (
    <div className='w-[80%] h-full   hidden lg:flex mx-auto justify-center'>

      <div className='  relative w-full h-[90%] md:h-full lg:h-[100%] flex justify-center items-center'>

         <Image src='/frameGuy.png' alt='logo' fill className=' absolute   z-20 bottom-0 object-contain '/>
        <Image src='/Frame1.png' alt='logo'  width={500} height={100} className=' object-fill  absolute bottom-0  mx-auto'/>
        </div>
    </div>
  )
}

export default ImageCard