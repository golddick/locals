import { Button } from '@/components/ui/button'
import {   ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface BusinessCardProps {
    name:string ,
    img:string,
    bio:string,
    id:number,
}

const BusinessCard = ({name, img, bio, id}:BusinessCardProps) => {
  return (
    <div className=' bg-[#F8F8F8] rounded-xl w-full  overflow-hidden flex flex-col gap-4  p-4'> 
        <div className=' w-full h-[200px] relative rounded-xl overflow-hidden '>
            <Image src={img} alt='Img' fill className=' absolute rounded-xl'/>
        </div>
        <div className=' flex flex-col gap-2 items-start'>
            <div className=' flex items-center justify-between gap-4 w-full'>
                <span className=' text-[16px]   max-w-[200px] truncate' style={{fontWeight:'500'}}>{name}</span>
                <div className=' flex items-center'>
                    <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                    <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                    <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                    <Star className='w-4 h-4  text-[#F4B400] fill-[#F4B400]'/>
                    <Star className='w-4 h-4  text-[#F4B400] '/>
                 
                </div>
            </div>
            <p className=' text-[13px]' style={{fontWeight:'400'}}>{bio}</p>
        </div>
        <Link href={`/Businesses/${id}`}>
        
        <Button size='sm' className=' w-[150px] rounded-full flex items-center justify-between'>
           <span> View Details</span>
            <ChevronRight className=' bg-white text-black rounded-full w-3 h-3'/>
        </Button>
        </Link>
    </div>
  )
}

export default BusinessCard