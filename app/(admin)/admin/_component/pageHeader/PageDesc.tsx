import React from 'react'

interface PageDescProps {
    text: string
}

export const PageDesc = ({text}:PageDescProps) => {
  return (
    <span className='  text-[13px] md:text-[16px] text-[#706A6A]'>{text}</span>
  )
}
