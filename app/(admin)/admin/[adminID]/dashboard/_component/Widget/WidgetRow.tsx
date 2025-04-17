import React from 'react'
import { WidgetCard } from './WidgetCard'

interface Prop{
  totalUsers:number | undefined
  totalBusiness:number | undefined
  totalSpecialServices:number | undefined
}

export const WidgetRow = ({totalBusiness, totalSpecialServices, totalUsers}:Prop) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4  flex-wrap mt-10'>
        <WidgetCard
        title="Total Revenue"
        description="Total generated revenue"
        amount={100}
        type='revenue'
        change="+2.5"
        />
        <WidgetCard
        title="Business Listing"
        description="Total number of businesses currently registered"
        amount={totalBusiness}
        change="+2.5"
        type='BL'
        />
        <WidgetCard
        title="Special service request"
        description="Number of special service requests submitted by users"
        amount={totalSpecialServices}
        change="-1.5"
        type='SSR'
        />
        <WidgetCard
        title="New Users"
        description="Number of new users"
        amount={totalUsers}
        change="+1.5"
        type='NU'
        />
    </div>
  )
}
