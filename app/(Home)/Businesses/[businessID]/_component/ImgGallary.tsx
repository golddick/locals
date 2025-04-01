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
      <div className=' overflow-hidden w-full h-[300px] lg:w-[600px] m-auto  lg:h-[500px] relative rounded-xl '>
        <Image src={selectedImg} alt='img' fill className='object-cover absolute rounded-lg' />
      </div>

      {/* Small Thumbnails */}
      <div className='flex gap-4 items-center w-full justify-center '>
        {imgUrls.map((imgUrl, index) => (
          <div
            key={index}
            className='w-[100px] h-[100px] relative cursor-pointer  rounded-lg overflow-auto hover:shadow-lg transition-shadow duration-300 ease-in-out '
            onClick={() => handleImageClick(imgUrl)}
          >
            <Image src={imgUrl} alt={`img-${index}`} fill className='object-cover absolute hover:zoom-in rounded-lg' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
