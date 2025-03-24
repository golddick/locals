// import { Button } from '@/components/ui/button'
// import {   ChevronRight, Star } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'


// interface BusinessCardProps {
//     name:string ,
//     img:string,
//     bio:string,
//     id:string,
//     ratings:number
// }

// const BusinessCard = ({name, img, bio, id, ratings}:BusinessCardProps) => {
//   return (
//     <div className=' bg-[#F8F8F8] rounded-xl w-full  overflow-hidden flex flex-col gap-4  p-4'> 
//         <div className=' w-full h-[200px] relative rounded-xl overflow-hidden '>
//             <Image src={img} alt='Img' fill className=' absolute rounded-xl'/>
//         </div>
//         <div className=' flex flex-col gap-2 items-start'>
//             <div className=' flex items-center justify-between gap-4 w-full'>
//                 <span className=' text-[16px]   max-w-[200px] truncate' style={{fontWeight:'500'}}>{name}</span>
//                 <div className=' flex items-center'>
//                     <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
//                     <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
//                     <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
//                     <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
//                     <Star className='w-4 h-4  text-[#F4B400] '/>
                 
//                 </div>
//             </div>
//             <p className=' text-[13px]' style={{fontWeight:'400'}}>{bio}</p>
//         </div>
//         <Link href={`/Businesses/${id}`}>
        
//         <Button size='sm' className=' w-[150px] rounded-full flex items-center justify-between'>
//            <span> View Details</span>
//             <ChevronRight className=' bg-white text-black rounded-full w-3 h-3'/>
//         </Button>
//         </Link>
//     </div>
//   )
// }

// export default BusinessCard

import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BusinessCardProps {
  name: string;
  img: string;
  bio: string;
  id: string;
  ratings: number; // Ratings prop (0 to 5)
}

const BusinessCard = ({ name, img, bio, id, ratings }: BusinessCardProps) => {
  // Create an array of length 5 to represent the stars
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
    <div className=' flex flex-col space-y-4 bg-[#F8F8F8] rounded-xl  p-4 justify-between'>

      <div className='w-full overflow-hidden   max-h-[500px] flex flex-col gap-4 '>
        {/* Image */}
        <div className='w-full h-[200px] relative rounded-xl overflow-hidden'>
          <Image src={img} alt='Img' fill className='absolute rounded-xl object-cover bg-primary' />
        </div>

        {/* Name and Ratings */}
        <div className='flex flex-col gap-2 items-start'>
          <div className='flex items-center justify-between gap-4 w-full'>
            <span className='text-[16px] max-w-[200px] truncate capitalize' >
              {name}
            </span>
            <div className='flex items-center'>
              {stars.map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= ratings
                      ? 'text-[#F4B400] fill-[#F4B400]' // Filled star
                      : 'text-[#F4B400]' // Empty star
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className='text-[13px] max-h-10  w-full' >
            {bio}
          </p>
          
        </div>

              
      
      </div>

      {/* View Details Button */}
      <Link href={`/Businesses/${id}`}>
        <Button size='sm' className='w-[150px] rounded-full flex items-center justify-between '>
          <span>View Details</span>
          <ChevronRight className='bg-white text-black rounded-full w-3 h-3' />
        </Button>
      </Link>
      </div>
    </>
  );
};

export default BusinessCard;