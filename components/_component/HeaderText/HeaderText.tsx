import Image from 'next/image'
import React from 'react'

interface TextHeaderProps{
    HeaderText:string

}

const HeaderText = ({HeaderText}:TextHeaderProps) => {
  return (
  <div>
    <h1  className='  text-[25px] font-semibold whitespace-nowrap md:text-[30px] capitalize'>{HeaderText} </h1>
  </div>
  )
}

export default HeaderText