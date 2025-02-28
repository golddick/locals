import React from 'react'
import TestimonialRow from './TestimonialRow'

const Testimonials = () => {
  return (
    <div className=' bg-[#F2F2F2] flex flex-col  items-start w-full  gap-4 px-5 md:px-20 py-20   '>
    <h1 className='  text-[25px]  lg:text-[30px]] font-semibold'>Some Clients <span className='text-primary'>  Reviews</span> & <span className=' text-primary'>Testimonials</span></h1>
    <h2 className='text-[15px] lg:text-[18px]'> Over  <span className='text-primary'>2K+ Positive Review in the last six months</span> from users and clients alike </h2>

    <div className='w-full overflow-scroll flex hidden-scrollbar'>
    <TestimonialRow/>    
</div>
    </div>
  )
}

export default Testimonials