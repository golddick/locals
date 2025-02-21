import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SendIcon } from 'lucide-react'
import React from 'react'

export const InputForm = () => {
  return (
    <div className=' w-full flex flex-col gap-2 items-end'>
           <Textarea className='w-full  rounded-lg bg-white h-20  border-primary' placeholder='Type a response here....'/>
        <Button className='flex items-center gap-2  w-[150px]  right-0' size='sm'  >
            <SendIcon/>
            <span>Send</span>
        </Button>
    </div>
  )
}
