'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowDown, ArrowRight, ArrowUp, Send } from 'lucide-react'
import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import HeaderText from '@/components/_component/HeaderText/HeaderText'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const page = () => {
  const [showBusiness, setShowBusiness] = useState(false)
  const [showService, setShoeService] = useState(false)

  const handleShowBusiness = () => {
    setShowBusiness(!showBusiness)
  }

  const handleShowService = () => {
    setShoeService(!showService)
  }
  return (
    <div className=' flex flex-col gap-10 w-full  py-10     min-h-screen hidden-scrollbar'> 
      <div className=' flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10 px-5 '>
        <HeaderText HeaderText='The Locals Service'/>
        <span className=' text-[#282828CC] w-full md:w-[400px]'>We are a tightly-knit digital hub that provides soltution for SMEs that helps scale their business in a community of well connected locals.</span>
      </div>

      <section className='  flex flex-col gap-0'>

                <div className=' flex flex-col w-full '>

            <div className=' w-full flex flex-col gap-10 h-[200px] md:h-[300px] relative object-contain '  style={{ backgroundImage: 'url(/business.png)',
            backgroundSize: 'cover',
            }}>

                <ArrowDown className={cn(' absolute bottom-0 right-[50%] bg-black text-white rounded-full  size-10 p-2', showBusiness && 'hidden')} onClick={handleShowBusiness}/>
            </div>
            {
              showBusiness && (

                <section className=' flex flex-col gap-5 bg-[#282828] w-full  md:w-[80%] mx-auto p-5 rounded-2xl '>
                          <span className=' text-white'>
                          Our Business listing service entails listing for all catalogues of SMEs, our platform provides a digital powered hub where businesses can connect with locals within their catchment.
                          Our approach fosters a tight-knitted community that allows for proper scaling of enterprise and ease of transactional processes with locals.
                          </span>
                          <ArrowUp className=' ml-0 text-white rounded-full  size-10 p-2' onClick={handleShowBusiness}/>
                        </section>
              )
            }
            </div>


            <div className=' flex flex-col w-full '>

              <div className=' w-full flex flex-col gap-10 h-[200px] md:h-[300px] relative object-contain '  style={{ backgroundImage: 'url(/special.png)',
              backgroundSize: 'cover',
              }}>

            <ArrowDown className={cn(' absolute bottom-0 right-[50%] bg-black text-white rounded-full  size-10 p-2', showService && 'hidden')} onClick={handleShowService}/>
            </div>
            {
              showService && (

            <section className=' flex flex-col gap-5 bg-[#282828] w-full  md:w-[80%] mx-auto p-5 rounded-2xl '>
              <span className=' text-white'>
              Our Business listing service entails listing for all catalogues of SMEs, our platform provides a digital powered hub where businesses can connect with locals within their catchment.
              Our approach fosters a tight-knitted community that allows for proper scaling of enterprise and ease of transactional processes with locals.
              </span>
              <ArrowUp className=' ml-0 text-white rounded-full  size-10 p-2' onClick={handleShowService}/>
            </section>
            )
            }
            </div>

      </section>

     


    <div className=' flex flex-col gap-2 items-start px-5'>
      <span className=' text-[#282828CC]'>JOIN OUR HUB OF BUSINESSES</span>
        <h3 className=' font-extrabold text-[30px]'>GET IN TOUCH</h3>
        <Link href='/Contact-us'>
        <Button className=' rounded-full text-white bg-black p-2 size-10'>
          <ArrowRight/>
        </Button>
        </Link>
    </div>


        </div>
  ) 
}

export default page 