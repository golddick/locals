'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface ImgGalleryProps {
  imgUrls: string[]; 
}

const ImgGallery = ({ imgUrls }: ImgGalleryProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(imgUrls[0]);

  const handleImageClick = (imgUrl: string) => {
    setSelectedImg(imgUrl);
  };

  return (
    <div className='flex flex-col w-full gap-4'>
      {/* Large Image Display */}
      <div className=' w-full h-[300px] lg:w-[600px] m-auto  lg:h-[500px] relative rounded-xl'>
        <Image src={selectedImg} alt='img' fill className='object-contain absolute' />
      </div>

      {/* Small Thumbnails */}
      <div className='flex gap-4 items-center w-full justify-center '>
        {imgUrls.map((imgUrl, index) => (
          <div
            key={index}
            className='w-[100px] h-[100px] relative cursor-pointer '
            onClick={() => handleImageClick(imgUrl)}
          >
            <Image src={imgUrl} alt={`img-${index}`} fill className='object-contain absolute hover:zoom-in' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;