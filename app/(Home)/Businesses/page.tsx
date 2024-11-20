import React from 'react'
import { BusinessMenu } from './BusinessMenu'
import BusinessRow from '@/components/_component/VerifiedBusiness/BusinessRow'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BusinessFilter } from './BusinessFilter'

const page = () => {
  return (
    <div className=' flex flex-col gap-2 w-full  py-10'> 
      <BusinessMenu/>
      <div className=' grid grid-cols-1 md:grid-cols-[0.5fr_2fr] mt-5'>

        <div className=' hidden md:block border-r p-4   '>
          <div className=' w-full rounded-xl p-4 text-white flex flex-col gap-4 items-center bg-primary'>
              <span className=' text-center text-[20px] font-semibold'> Make Tailored Request with The Locals Connect</span>
              <Link href='/Services'>
              <Button className=' flex items-center gap-4 p-2 bg-white text-primary rounded-full hover:bg-white '>
                <span>Learn More</span>
                <ArrowRight/>
              </Button>
              </Link>
          </div>

          <BusinessFilter/>
        </div>

        <div className=' flex flex-col gap-4 p-4 px-10  '>

          <div className=' flex flex-col md:flex-row items-center justify-between w-full  gap-2'>
       <div className=' flex items-start w-full md:items-center gap-4'>
       <h1 className=' text-[20px] md:text-[30px] font-semibold'>Recommended Listings</h1>
        <p className='py-1 px-2 rounded-xl text-[20px] border'>45</p>
       </div>
      <div className=' flex items-start w-full md:items-center gap-2 md:px-4  md:justify-end'>
        <span className=' text-[18px] text-[#706A6A] font-light'>Sort by:</span>
        <p className=' text-[20px] font-semibold'>Most viewed</p>
      </div>
       </div>

        <BusinessRow/>
        </div>
      </div>
    </div>
  )
}

export default page