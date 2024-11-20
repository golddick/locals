import Image from 'next/image'
import React from 'react'
import FormHeader from '../../_component/FormHeader/FormHeader'
import LoginOption from '../../_component/LoginOption/LoginOption'
import Link from 'next/link'
import OrLine from '../../_component/OrContainer/OrLine'
import { ResetFormInput } from './Form'

const ResetForm = () => {
  return (
<div className='w-full h-[calc(100vh-80px)] p-3 hidden-scrollbar overflow-scroll'>

     <div className='h-[90%] w-full md:w-[80%] lg:w-[80%] mt-20 m-auto flex flex-col gap-4  hidden-scrollbar overflow-scroll '>
        <FormHeader HeaderText='Set New Password' PText='Secure your account with a new password' icon='/emojiHand.png'/>
       
        <ResetFormInput/>
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
  )
}

export default ResetForm