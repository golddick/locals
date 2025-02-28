import React from 'react'
import BusinessRow from './BusinessRow'

const VerifiedBusiness = () => {
  return (
    <div className=' bg-[#F2F2F2] flex flex-col  items-start w-full  gap-4 px-5 md:px-20 py-10 '>
        <h1 className='  text-[25px]  lg:text-[30px]] font-semibold'>Some of our Verified <span className='text-primary'>Business</span> & <span className=' text-primary'>Services</span></h1>
        <h2 className='text-[15px] lg:text-[18px] lg:max-w-[40%]'> Connect  and Transact with our community of Trusted  businesses and high rated service providers. </h2>
        <BusinessRow/>
    </div>
  )
}

export default VerifiedBusiness