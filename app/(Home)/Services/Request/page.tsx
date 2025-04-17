import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, TriangleAlertIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Message_admin } from '../_component/Message_admin'
import { Request_form } from '../_component/Request_form'



const page = () => {

   
  
  return (
    <div className='gap-4 w-full  py-10 flex flex-col  px-5 md:px-20 items-start '> 
   
    <div className=' grid grid-cols-1 md:grid-cols-2 w-full gap-4 '>
        
            <Request_form/>

            <Message_admin/>
    </div>
    </div>
  )
}

export default page