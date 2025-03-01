import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import { Faq_Tab } from './_component/Faq_tab'
import { Textarea } from '@/components/ui/textarea'

const page = () => {
  return (
    <div className=' flex flex-col gap-10 w-full  py-10  px-5 md:px-20   min-h-screen'> 


    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between  w-full  '>

    <div className=' flex flex-col gap-1 items-start '>
        <h1 className=' text-[25px] font-semibold whitespace-nowrap md:text-[30px] '>Frequently Asked <span className=' text-primary'>Questions</span> </h1>
        <p className=' text-[20px]'> These are the most commonly asked questions about The Locals.</p>
        </div>


        <div className=' flex flex-col gap-1 items-end  '>
        <p className=' text-[20px]'>Can’t find what you are looking for? <span className=' text-primary'> Leave a message for us</span> </p>
        <div className=' flex items-center gap-2 rounded-2xl border-[#282828] border px-2  w-full md:w-[60%]'>
          <Textarea className=' border-none w-full' placeholder='Drop a mail here'/>
          <Button className='' size={'sm'}>
            <span className=' text-xs'>send</span>
            <Send className=' size-1'/>
          </Button>
        </div>
        </div>

    </div>

      <Faq_Tab/>

    </div>
  ) 
}

export default page 