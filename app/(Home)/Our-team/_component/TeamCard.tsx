import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

interface TeamCardProps {
    img: string
    name: string
    occupation: string
}

const TeamCard = ({img, name, occupation}:TeamCardProps) => {
  return (
    <Card className=' border-none flex flex-col gap-2 items-start w-[300px] overflow-hidden rounded-none' >
      <div className=' w-full h-[200px] bg-gray-200 relative  items-center justify-center'>
      <Image alt='IMG' src={img} fill className=' object-contain' />
      </div>
        <div className='flex flex-col gap-1 items-start p-2'>
          <span className=' font-bold'>{name}</span>
          <span className=' text-[#282828CC] text-[15px]'>{occupation}</span>
        </div>
    </Card>
  )
}

export default TeamCard
