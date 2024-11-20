import React from 'react'
import ImageCard from './ImageCard'
import Search from '../SearchBox/Search'
import HeaderText from './HeaderText'
import HeaderBottom from './HeaderBottom'

const HeaderCard = () => {
  return (
    <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 w-full md:h-[calc(100vh-500px)]  lg:h-[calc(100vh-100px)] lg:gap-6   px-10 lg:px-20 py-10  '>
        <div className='flex flex-col justify-between overflow-scroll hidden-scrollbar  gap-6 md:gap-3'>
        <Search/>
        <HeaderText/>
        <HeaderBottom/>
        </div>
        <div>
            <ImageCard/>
        </div>
    </div>
  )
}

export default HeaderCard