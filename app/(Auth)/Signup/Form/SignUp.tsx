import Image from 'next/image'
import React from 'react'
import FormHeader from '../../_component/FormHeader/FormHeader'
import LoginOption from '../../_component/LoginOption/LoginOption'
import Link from 'next/link'
import OrLine from '../../_component/OrContainer/OrLine'
import { SignupFormInput } from './Form'

const SignupForm = () => {
  return (
<div className='w-full h-full p-3'>

     <div className='h-[95%] w-full md:w-[80%] lg:w-[80%] mt-20 m-auto flex flex-col gap-4 '>
        <FormHeader HeaderText='Create Account' PText='Enter credentials to create account' icon='/emojismile.png'/>
       
      <SignupFormInput/>
       <OrLine/>
    <div className='flex  gap-4 flex-col md:flex-row'>
    <LoginOption icon='/googleicon.png' optionText='Sign in with Google'/>
    <LoginOption icon='/fbicon.png' optionText='Sign in with Facebook'/>
    </div>
    <div className='flex w-full justify-center'>
        <div className='flex items-center  gap-2 flex-col md:flex-row'>
        <p style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}> Already have an account?  </p>
        <Link href='/Login'>
        <span className=' text-primary' style={{fontSize:'20px', fontWeight:'700', lineHeight:'27px'}}>Sign In? </span> 
        </Link>
        </div>
    </div>
     </div>

</div>
  )
}

export default SignupForm