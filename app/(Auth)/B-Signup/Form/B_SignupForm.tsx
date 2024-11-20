import Image from 'next/image'
import React from 'react'
import FormHeader from '../../_component/FormHeader/FormHeader'
import { BSignUpFormInput } from './Form'

const BSignupForm = () => {
  return (
<div className='w-full h-[calc(100vh-80px)] p-0 md:p-2 '>

<div className='h-[90%] w-full lg:w-[80%] m-auto mt-20 flex flex-col gap-4  hidden-scrollbar overflow-auto '>

        <FormHeader HeaderText='Create a Business Account' PText='Enter credentials to Register Business' icon='/emojiHand.png'/>
      
       <BSignUpFormInput/>

</div>

</div>
  )
}

export default BSignupForm