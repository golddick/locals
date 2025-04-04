import Image from 'next/image'
import React from 'react'
import FormHeader from '../../_component/FormHeader/FormHeader'
import { OTPFormInput } from './Form'
import Link from 'next/link'


const OTPForm = () => {
  return (
<div className='w-full h-[calc(100vh-80px)] p-3 hidden-scrollbar overflow-scroll'>

     <div className='h-[90%] w-full md:w-[80%] lg:w-[80%] mt-20
      flex flex-col gap-4  hidden-scrollbar overflow-scroll mx-auto  items-center'>
        
        <FormHeader HeaderText='Confirm OTP' PText='A verification code has been sent to your mail' icon='/emojisad.png'/>
       
        <OTPFormInput/>

        <div className='flex w-full justify-center md:justify-center  mt-10  '>
        <div className='flex items-center  gap-2 flex-col text-center md:flex-row'>
        <p style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}> Remember your password?  </p>
        <Link href='/Login'>
        <span className=' text-primary' style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}>Log In? </span> 
        </Link>
        </div>
    </div>
     </div>

</div>
  )
}

export default OTPForm