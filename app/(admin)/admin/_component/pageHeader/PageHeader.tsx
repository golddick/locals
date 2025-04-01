import React from 'react'

interface PageHeaderProps {
    text: string
}

export const PageHeader = ({text}:PageHeaderProps) => {
  return (
    <span className=' font-bold text-[20px] md:text-[30px] text-[#282828] capitalize truncate'>{text}</span>
  )
}
