import React from 'react'
import ImageCard from './ImageCard'
import Search from '../SearchBox/Search'
import HeaderText from './HeaderText'
import HeaderBottom from './HeaderBottom'

const HeaderCard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  md:h-[calc(100vh-500px)] lg:h-[calc(100vh-200px)] items-center justify-between  px-5 md:px-20 py-10 '>
        <div className='flex flex-col justify-between overflow-scroll hidden-scrollbar  gap-6 md:gap-3  md:h-full'>
        <Search/>
        <HeaderText/>
        <HeaderBottom/>
        </div>
            <ImageCard/>
       
    </div>
  )
}

export default HeaderCard