import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import TeamCard from './_component/TeamCard'

const page = () => {
  return (
    <div className=' flex flex-col gap-10 w-full  py-10  px-10 md:px-20   min-h-screen items-center '> 
         <div className=' flex flex-col gap-2 items-center  text-centern w-full md:w-[80%] lg:w-[50%] mx-auto justify-center'>
        <h1 className=' text-[25px] lg:text-[30px] font-semibold lg:whitespace-nowrap md:text-[30px] text-center '>Meet our Team of   <span className=' text-primary'>Experts</span>  and Innovators  </h1>
        <p className=' text-[20px] text-center'>With wealth of experience and a wide range of background we offer diversity and work with great teams to ship the best product to our clients.</p>
        </div>
        <div className='flex items-center text-center  flex-wrap justify-center gap-4 w-full md:grid md:grid-cols-2  lg:w-[80%] mx-auto  lg:flex'>
          <TeamCard img={'/frameGuy.png'} name='Grace Joe' occupation='Founder/CEO'/>
          <TeamCard img={'/frameGuy.png'} name='Grace Joe' occupation='Chief Technology Officer'/>
          <TeamCard img={'/SImg.png'} name='Grace Joe' occupation='Product Manager'/>
          <TeamCard img={'/frameGuy.png'} name='Grace Joe' occupation='Backend Engineer'/>
          <TeamCard img={'/LoginImg.png'} name='Grace Joe' occupation='Product Designer'/>
          <TeamCard img={'/frameGuy.png'} name='Grace Joe' occupation='Frontend Engineer'/>
        </div>
    </div>
  ) 
}

export default page 