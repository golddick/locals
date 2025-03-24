import { Hint } from '@/components/_component/Hint/Hint';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface NotificationCardProps {
    data: {
      title: string;
      text: string;
      img: string;
      id: string
    }[];
  }

const NotificationCard = ({data}:NotificationCardProps) => {
  return (


    <div className=' flex flex-col gap-4'>


    {data.map((item) => {

        return (
            <div className=' shadow-md shadow-[#00000040] w-full  gap-4 py-4 px-6 rounded-xl  flex items-center  justify-between  relative' key={item.id}>
        
            <div className='w-[60px] h-[60px] rounded-full relative  hidden md:block'>
                <Image src={item.img} alt='IMG' fill className=' rounded-full object-contain absolute'/>
            </div>
    
            <div className=' w-full flex flex-col gap-1 items-start'>
                <span className='text-[20px] font-semibold'>{item.title}</span>
                <p className=' text-[15px] text-[#706A6A]'>{item.text}</p>
            </div>

                <Hint label='Delete Notification ' side='left' align='center' asChild>
                <Button className=' absolute top-0 right-0 text-red-700' variant='ghost' size='icon'><Trash/></Button>
                </Hint> 
        </div>
        );
      })}
      </div>
  )
}

export default NotificationCard