import Image from 'next/image'
import React from 'react'


interface LoginOptionProps{
    icon:string
    optionText:string
}

const LoginOption = ({icon,optionText}:LoginOptionProps) => {
  return (
    <div className='flex items-center justify-center gap-4 p-2 border rounded-[20px] w-full'>
        <Image src={icon} alt='icon' width={20} height={20} className=' object-contain'/>
        <span>{optionText}</span>
    </div>
  )
}

export default LoginOption