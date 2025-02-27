import { Badge } from '@/components/ui/badge'
import { CalendarClock } from 'lucide-react'
import React from 'react'

export const Filter = () => {
  return (
    <div className='  items-center gap-4 hidden md:flex  '>
        <Badge variant="secondary" className='p-2 px-4 bg-white rounded-xl' >Day</Badge>
        <Badge variant="secondary" className='p-2 px-4 bg-white rounded-xl' >Week</Badge>
        <Badge variant="secondary" className='p-2 px-4 bg-white rounded-xl' >Month</Badge>
        <Badge variant="secondary" className='p-2 px-4 bg-white rounded-xl' >Year</Badge>
        <Badge variant="secondary" className='p-2 px-4 bg-white rounded-xl' >
            <div className='flex items-center gap-2'>
                <CalendarClock className=' size-4'/>
                <span>14 Nov, 2024 - 14 Dec, 2024</span>
            </div>
        </Badge>


    </div>
  )
}
