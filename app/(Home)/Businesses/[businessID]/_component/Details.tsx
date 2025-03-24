'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface DetailsProps{
    name:string
    des:string
    categories:string[],
    Review:string
    Address:string
    Contact:string
}

const Details = ({name, des, categories, Review, Address, Contact}:DetailsProps) => {



        const handleClick = () => {
          const whatsappUrl = `https://wa.me/${Contact}`;
          window.open(whatsappUrl, '_blank');
        };

  return (
    <div className=' flex flex-col gap-4 items-start'>
        <div className='flex  items-center gap-2'>
            {categories.map((text, index) => (
                <span 
                    key={index} 
                    className={`text-[16px] font-medium ${index > 0 && index % 2 !== 0 ? 'text-primary' : ''}`}
                >
                    {text}.
                </span>
                ))}
        </div>

        <h1 className=' text-[35px] font-medium capitalize'>{name}</h1>
        
        <div className='flex items-center gap-4'>
                        <div className=' flex items-center'>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                            <Star className='w-4 h-4  text-[#F4B400] '/>
                        
                        </div>
                        <div className='flex items-center '>
                            <span className=' text-primary text-[15px]'>{Review}+</span>
                            <span className=' text-[15px]'>Review</span>
                        </div>
        </div>

        <h3 className=' text-[25px] font-medium'>DESCRIPTION</h3>
        <span className='text-[16px]  font-normal'>{des}</span>


        <div className='flex flex-col gap-4 items-start'>
            <div className=' flex items-center gap-2'>
                <MapPin className='w-4 h-4'/>
                <span className='text-[20px] font-medium'>{Address}</span>
            </div>

            <div className=' flex items-center gap-2'>
                <Phone className='w-4 h-4'/>
                <span className='text-[20px] font-medium'>{Contact}</span>
            </div>            
        </div>

        <Button className='w-[60%] m-auto mt-10' onClick={handleClick}>
            Contact Business 
        </Button>
    </div>
  )
}

export default Details  