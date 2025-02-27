import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import HeaderText from '@/components/_component/HeaderText/HeaderText'
import { ContactForm } from './_component/ContactForm'

const page = () => {
  return (
    <div className=' flex flex-col gap-10 w-full  py-10   min-h-screen'> 
    <div className=' px-10 lg:px-20 '>
      <HeaderText  HeaderText='Contact Us'  />
    </div>
      <div className=' bg-[#A3C8ED26] w-full flex flex-col p-10'>
          <div className=' grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-5 items-start'>
              <p className=' text-[#282828CC] text-[20px]'>Email or fill the form to get quick help from The Locals. Our response are prompt and are typically gotten within 24/7</p>
              <div className=' flex flex-wrap gap-4 items-center text-[#101010] font-semibold'> 
                <span>thelocalsinfo@gmail.com</span>
                <span>+34543324244</span>
              </div>
              <div className=' hidden md:flex md:flex-col lg:flex-row items-center gap-5'>
                  <div className=' flex flex-col gap-5'>
                    <h5 className=' font-bold underline'>Customer Support</h5>
                    <span className=' text-[#282828CC]'>Our support team is available around the clock to address any concerns or queries you may have</span>
                  </div>
                  <div className=' flex flex-col gap-5'>
                    <h5 className=' font-bold underline'>Feedback and Suggestions</h5>
                    <span className=' text-[#282828CC]'>We value your feedback and we are continuously working on improving The Locals. Your input is crucial in shaping the future of The Locals.</span>
                  </div>
              </div>
            </div>
            <div>
              <ContactForm/>
            </div>

          </div>
      </div>
    </div>
  ) 
}

export default page 