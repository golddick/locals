import React from 'react'
import ImageCard from '../_component/ImageCard/ImageCard'
import LoginForm from './Form/ResetForm'
import ResetForm from './Form/ResetForm'

const page = () => {
  return (
<div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-8 w-full h-full   '>
         <div>
        <ResetForm/>
        </div>
        <div className='hidden lg:block'>
        <ImageCard imgUrl='/reset.png'/>
        </div>
  </div>
  )
}

export default page