import Image from 'next/image'
import React from 'react'


interface WhyUsTextProps {
    headerText:string,
    icon:string,
    p:string
}


const WhyUsText = ({headerText,icon,p}:WhyUsTextProps) => {
  return (
    <div className=' flex flex-col gap-3 items-start w-full'>
        <h1 className='bg-[#93E7FE] text-[18px] text-center p-1 px-4 rounded-full'>{headerText}</h1>
        <div className=' flex  items-center gap-3'>
            <Image src={icon} alt='' width={20} height={20}/>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default WhyUsText