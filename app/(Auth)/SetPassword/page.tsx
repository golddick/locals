import React from 'react'
import ImageCard from '../_component/ImageCard/ImageCard'
import ResetForm from './Form/ResetForm'
import FormHeader from '../_component/FormHeader/FormHeader'
import Link from 'next/link'
import { ResendOTP } from '../OTP/Form/ResendOTP'


const page = () => {
  return (
<div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-8 w-full h-full   '>
         <div>
                <div className='w-full h-[calc(100vh-80px)] p-3 hidden-scrollbar overflow-scroll'>
                
                     <div className='h-[90%] w-full md:w-[80%] lg:w-[80%] mt-20 m-auto flex flex-col gap-4  hidden-scrollbar overflow-scroll '>
                        <FormHeader HeaderText='Resend Otp' PText='Enter email to send otp to email' icon='/emojiHand.png'/>
                       
                       set password
                    <div className='flex w-full justify-center mt-10'>
                        <div className='flex-col md:flex-row flex items-center  gap-2'>
                        <p style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}> Back To Login?  </p>
                        <Link href='/Login'>
                        <span className=' text-primary font-[20px]' style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}>Log In</span> 
                        </Link>
                        </div>
                    </div>
                     </div>
                
                </div>
        </div>
        <div className='hidden lg:block'>
        <ImageCard imgUrl='/reset.png'/>
        </div>
  </div>
  )
}

export default page