import React from 'react'
import BusinessCard from './BusinessCard'
import { Button } from '@/components/ui/button'

const BusinessInfo =[
    {
        id:1,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
    {
        id:2,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
    {
        id:3,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
    {
        id:4,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
    {
        id:5,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
    {
        id:6,
        name:"Alicent Catering Services",
        bio:'Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation.',
        img:' https://github.com/shadcn.png'
    },
]

const BusinessRow = () => {
  return (
    <div className='w-full  flex flex-col gap-8'>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-between gap-4 w-full'>
            {BusinessInfo.map((info) => (
                        <BusinessCard 
                            key={info.id}
                            name={info.name}
                            bio={info.bio}
                            img={info.img}
                        />
                    ))}
            
            </div>

            <div className='w-full flex items-end justify-end gap-2'>
                <Button  size='icon' className='rounded-full w-4 h-4 text-[12px] hover:text-white'>1</Button>
                <Button  size='icon' className='rounded-full w-4 h-4 text-[12px] bg-transparent text-primary hover:text-white'>2</Button>
                <Button  size='icon' className='rounded-full w-4 h-4 text-[12px] bg-transparent text-primary hover:text-white'>3</Button>
            </div>
    </div>
  )
}

export default BusinessRow