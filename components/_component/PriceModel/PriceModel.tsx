import React from 'react'
import PriceRow from './PriceRow'

const PriceModel = () => {
  return (
    <div className='flex items-center flex-col gap-4    px-5 md:px-20 py-10  w-full'>
        <h1 className='  text-[25px]  lg:text-[30px]] font-semibold'>Become a <span className=' text-primary'>Member</span> of our fast-paced growing <span className=' text-primary'>Community</span></h1>
        <p className='text-[15px] lg:text-[18px]  text-center'> Explore our diverse membership tiers designed to cater to your unique needs. Each level offers a range of benefits that enhance your experience on Locals Connect, providing you with exclusive access to services, discounts, and community engagement opportunities.</p>
        <PriceRow/>
    </div>
  )
}

export default PriceModel