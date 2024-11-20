import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, TriangleAlertIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='gap-4 w-full  py-10 flex flex-col  px-10 md:px-20 items-start '> 
   
    <div className=' grid grid-cols-1 md:grid-cols-2 w-full gap-4 '>
        
            <div className=' flex flex-col gap-10  items-start w-full  border-b pb-8 md:border-none md:pb-0 '> 
            

            <div className=' flex flex-col gap-4 items-start w-full '> 
            <h1 className=' text-[30px] font-semibold'>Service <span className=' text-primary'>Request</span></h1>
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

            <div className='bg-[#706A6A1A] rounded-xl w-full lg:w-[80%] m-auto h-full p-5  flex flex-col   items-center gap-4'>
                
                <div className=' w-[100px] h-[100px] relative'>
                    <Image src='/help.png' alt='IMG' fill className='  absolute object-contain'/>
                </div>

                <div className=' flex flex-col text-center'>
                <h1 className=' text-[25px] font-semibold'>Message Admin</h1>
                    <span className=' text-[#706A6A] text-[17px]'>Typically respond within 24 hours</span>
                </div>

                <div className=' w-full rounded-xl bg-[#706A6A33] p-5 flex flex-col items-center justify-center'>
                    <div className=' w-[70px] h-[70px] rounded-full overflow-hidden relative  border-2'>
                        <Image src='/frameGuy.png' alt='IMG' fill className='  absolute object-contain'/>
                    </div>


                    <div className=' flex flex-col text-center'>
                <h1 className=' text-[20px] font-semibold'>TheLocalsConnect</h1>
                    <span className=' text-[#706A6A] text-[17px]'>@admin</span>
                </div>


                </div>
                <span className=' text-[15px] font-light'>Drop a Mail</span>
                <Textarea className=' bg-[#A3C8ED80] w-full rounded-xl h-[150px] ' placeholder='Leave a message'/>

                <div>
                    <Button className=' flex items-center gap-5 rounded-full w-[200px]'>
                        <span>Send</span>
                        <Send/>
                    </Button>
                </div>

            </div>
    </div>
    </div>
  )
}

export default page