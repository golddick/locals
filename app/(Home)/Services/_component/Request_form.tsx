import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowUp, MoveUp, MoveUpRight, TriangleAlertIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Request_form = () => {
  return (
    <div className=' flex flex-col gap-10  items-start w-full  border-b pb-8 md:border-none md:pb-0 '> 
            

            <div className=' flex flex-col gap-4 items-start w-full '> 
            <h1 className=' text-[30px] font-semibold flex items-center gap-2'>Service <span className=' text-primary'>Request</span> <Link href={'/Services/Prev_Request'}> <MoveUpRight className=' size-4'/> </Link></h1>
              <h2 className=' text-[17px] text-[#282828] font-medium'>Contact Details</h2>

                <div className=' grid grid-cols-2 w-full justify-between gap-5 items-center'>

                    <div className=' flex flex-col gap-2 '>
                        <label htmlFor="Name" id='Name' className=' text-[15px] font-medium'> Name</label>
                        <Input placeholder='Rufus Wellens' id='Name' type='text' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                    </div>

                    <div className=' flex flex-col gap-2 '>
                        <label htmlFor="Email" id='Email' className=' text-[15px] font-medium'> Email</label>
                        <Input placeholder='Rufus@gmail.com' id='Email' type='email' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                    </div>

                </div>

                <div className=' grid grid-cols-2 w-full justify-between gap-5 items-center'>

                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="Number" id='Number' className=' text-[15px] font-medium'> Mobile Number</label>
                    <Input placeholder='+234 88992 27373' id='Number' type='number' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                </div>

                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="Address" id='Address' className=' text-[15px] font-medium'> Address</label>
                    <Input placeholder='No 26 lokoja asaba' id='Address' type='text' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                </div>

                </div>
              </div>


              <div className=' flex flex-col gap-4 items-start w-full '> 
              <h2 className=' text-[17px] text-[#282828] font-medium'>Request Details</h2>

                <div className=' flex  w-full justify-between gap-5 items-center'>

                    <div className=' flex flex-col gap-2  w-full '>
                        <label htmlFor="Service" id='Service' className=' text-[15px] font-medium'> Service</label>
                        <Textarea placeholder='Briefly describe request....' id='Service' className=' shadow-md shadow-[#00000040] rounded-xl  w-full h-[100px]'/>
                    </div>


                </div>

                <div className=' grid grid-cols-2 w-full justify-between gap-5 items-center'>

                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="Tag" id='Tag' className=' text-[15px] font-medium'> Service Name Tag</label>
                    <Input placeholder='Service Name' id='Tag' type='text' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                </div>

                <div className=' flex flex-col gap-2 '>
                    <label htmlFor="date" id='date' className=' text-[15px] font-medium'> Due date</label>
                    <Input placeholder='No 26 lokoja asaba' id='date' type='date' className=' shadow-md shadow-[#00000040] rounded-xl'/>
                </div>

                </div>
              </div>
               
              <div className=' flex items-center gap-2 '>
                <TriangleAlertIcon className=' w-5 h-5 text-red-700'/>
                <span className=' text-[15px]'>Please ensure you are logged in to submit your service request</span>
              </div>


              <div className=' flex w-full justify-center'>
                <Button className='w-[200px] p-2 rounded-full'>Submit Request</Button>
              </div>
            </div>
  )
}
