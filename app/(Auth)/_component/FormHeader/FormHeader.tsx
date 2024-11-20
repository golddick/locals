import Image from 'next/image'
import React from 'react'

interface FormHeaderProps{
    HeaderText:string
    PText:string
    icon:any
}

const FormHeader = ({HeaderText,PText, icon}:FormHeaderProps) => {
  return (
  <div>
      <div className='flex items-center gap-2 '>
    <h1  className=' ' style={{fontSize:'35px ', fontFamily:'--font-manrope-sans', fontWeight:'700', lineHeight:'45px'}}>{HeaderText} </h1>
    <Image src={icon} alt='emoji ' width={25} height={25} className=' object-contain hidden md:block'/>
    </div>
    <p style={{fontSize:'20px', fontFamily:'--font-manrope-sans',  fontWeight:'500'}}> {PText}</p>
  </div>
  )
}

export default FormHeader