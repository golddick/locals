import React from 'react'
import ImageCard from '../_component/ImageCard/ImageCard'
import BSignupForm from './Form/B_SignupForm'

const page = () => {
  return (

 <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-8  w-full h-auto '> 

        <BSignupForm/>
  

        <div className='hidden lg:block'>
        <ImageCard imgUrl='/LoginImg.png'/>
        </div>
  </div>
  )
}

export default page