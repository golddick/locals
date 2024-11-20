import Image from 'next/image'
import React from 'react'

const ImageCard = ({imgUrl}:any) => {
  return (
    <div className='w-full h-full relative '>
      <Image src={imgUrl} alt='img' fill className=' object-contain absolute'/>
    </div>
  )
}

export default ImageCard