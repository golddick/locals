import { Button } from '@/components/ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import Img from '/frameGuy.png'

const TopUser = () => {

    const Img = 'https://github.com/shadcn.png'

    const TrustedVendors = [
        {
            id: 1,
            Img: Img, 
        },
        {
            id: 2,
            Img: Img, 
        },
        {
            id: 3,
            Img: Img, 
        },
        {
            id: 4,
            Img: Img, 
        },
        {
            id: 5,
            Img: Img, 
        },
        {
            id: 6,
            Img: Img, 
        },
        {
            id: 7,
            Img: Img, 
        },
       
      
    ];

  return (
    <div className='flex items-center justify-between'>
         
       

            <div className='flex w-full justify-end'>
                            {TrustedVendors.slice(0,3).map(vendor => (

                            <div key={vendor.id} className=' ml-[-5px]' >
                                <img src={vendor.Img} alt={`Vendor ${vendor.id}`}  className=' w-[35px] h-[35px] object-contain rounded-full border-2 border-[#D9D9D9]'/>
                            </div>
                            ))}
            </div> 

           

    </div>
  )
}

export default TopUser