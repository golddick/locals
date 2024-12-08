import Image from 'next/image'
import React from 'react'
import FormHeader from '../../_component/FormHeader/FormHeader'
import { LoginFormInput } from './Form'
import LoginOption from '../../_component/LoginOption/LoginOption'
import Link from 'next/link'
import OrLine from '../../_component/OrContainer/OrLine'

const LoginForm = () => {
  return (
<div className='w-full h-[calc(100vh-80px)] p-3 hidden-scrollbar overflow-scroll'>

     <div className='h-[90%] w-full md:w-[80%] lg:w-[80%] mt-20 m-auto flex flex-col gap-4  hidden-scrollbar overflow-scroll  '>
        <FormHeader HeaderText='Welcome Back!' PText='Discover and connect with businesses' icon='/emojiHand.png'/>
       
       <LoginFormInput/>
       <OrLine/>
    <div className='flex flex-col gap-2 '>
    <LoginOption icon='/googleicon.png' optionText='Sign in with Google'/>
    <LoginOption icon='/fbicon.png' optionText='Sign in with Facebook'/>
    </div>
    
    <div className='flex w-full justify-center'>
        <div className='flex-col md:flex-row flex items-center  gap-2'>
        <p style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}> Don’t have an account?  </p>
        <Link href='/Signup'>
        <span className=' text-primary font-[20px]' style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}>Sign Up</span> 
        </Link>
        </div>
    </div>
     </div>

</div>
  )
}

export default LoginForm