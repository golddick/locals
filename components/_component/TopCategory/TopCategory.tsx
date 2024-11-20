import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import CategoryRow from './CategoryRow'

const TopCategory = () => {
  return (
    <div className='flex items-start flex-col gap-2  bg-[#F2F2F2]  px-10 lg:px-20 py-10 pb-[50px]  w-full '>
        <HeaderText HeaderText='Top Categories'/>
        <p className=' text-[15px] lg:text-[18px] lg:max-w-[40%]'>View some of our top Business Listings and Services, <br className='hidden md:block'/>explore now and be a member of our community</p>
        <div className='w-full overflow-scroll flex'>
        <CategoryRow/>
        </div>
    </div>
  )
}

export default TopCategory