import React from 'react'
import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'

interface PriceCardProps {
    name:string,
    amount:number
    features: string[]; 
}

interface PriceProps{
    priceInfo:PriceCardProps[]
}

const PriceCard = ({ name, amount, features }: PriceCardProps) => {
  return (
    <div className="mt-5 border-[#00000199] border-[1px] hover:bg-primary hover:text-neutral-200 rounded-xl w-full">
      <div className="p-4 flex flex-col gap-2 items-start">
        <span className="text-[20px] font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <p className="text-[35px] font-semibold">${amount}</p>
          <span className="text-[20px] font-medium">per month</span>
        </div>
        <Button className=' w-full'>Get Started</Button>
      </div>
          
          <div className=' w-full h-[1px] bg-black'/>

          <div className='p-4 flex flex-col gap-2 items-start'>
            <h3 className='text-[16px] font-semibold'>FEATURES</h3>
            <p className=' text-[15px] font-normal'>Everything in our plan plus...</p>

            <div className='w-full flex flex-col gap-2 items-start'>

                <ul>
            {features.map((feature, index) => (
                 <li key={index}  className='flex items-center gap-4 w-full '>
                    <CheckIcon className=' bg-[#ADFF14] text-black rounded-full w-4 h-4 p-1'/> <span className=' max-w-[250px]  text-[14px] font-normal'>{feature}</span>
                 </li>
            ))}
          </ul>
                   
        
            </div>
          </div>

    </div>
  )
}

export default PriceCard
