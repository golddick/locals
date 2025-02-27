import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const TestimonialRow = () => {

    const TestimonialInfo =[
        {
            id:1,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
        {
            id:2,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
        {
            id:3,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
        {
            id:4,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
        {
            id:5,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
        {
            id:6,
            name:'Cecilia Joyce',
            service:"Alicent Catering Services",
            bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
            img:' https://github.com/shadcn.png',
            rate:4.3
        },
    ]

  return (
 
        <div className=' flex  items-center justify-between gap-4 w-full '>
            <Button className='  rounded-full hidden md:block' size='icon'>
                <ArrowLeft className=' text-center flex  md:ml-1 lg:ml-2'/>
            </Button>
            {TestimonialInfo.slice(0,4).map((info) => (
                <TestimonialCard
                name={info.name}
                service={info.service}
                bio={info.bio}
                img={info.img}
                rate={info.rate}
                key={info.id}
                />
            ))}
           <Button className='  rounded-full hidden md:block  ' size='icon'>
                <ArrowRight className=' text-center flex  md:ml-1 lg:ml-2'/>
            </Button>
    </div>

  )
}

export default TestimonialRow