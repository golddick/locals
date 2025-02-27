import React from 'react'
import { WidgetCard } from './WidgetCard'

export const WidgetRow = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4  flex-wrap mt-10'>
        <WidgetCard
        title="Total Revenue"
        description="Total generated revenue"
        amount="$12,500"
        change="+2.5"
        />
        <WidgetCard
        title="Business Listing"
        description="Total number of businesses currently registered"
        amount="12,500"
        change="+2.5"
        />
        <WidgetCard
        title="Special service request"
        description="Number of special service requests submitted by users"
        amount="44"
        change="-1.5"
        />
        <WidgetCard
        title="New Users"
        description="Number of new users"
        amount="12"
        change="+1.5"
        />
    </div>
  )
}
