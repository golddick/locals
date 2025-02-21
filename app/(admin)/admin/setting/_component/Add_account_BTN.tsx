import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export const Add_account_BTN = () => {
  return (
    <div className=' absolute border-t bottom-0 p-2 flex items-center gap-4 bg-white w-full '>
    <Button  className=' rounded-full size-6 p-2'>
        <Plus className=' size-4'/>
    </Button>
    <span>Add Account</span>
    </div>
  )
}
