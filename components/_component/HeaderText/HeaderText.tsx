import Image from 'next/image'
import React from 'react'

interface TextHeaderProps{
    HeaderText:string

}

const HeaderText = ({HeaderText}:TextHeaderProps) => {
  return (
  <div>
    <h1  className=' text-[25px]  lg:text-[30px]  capitalize font-semibold'>{HeaderText} </h1>
  </div>
  )
}

export default HeaderText