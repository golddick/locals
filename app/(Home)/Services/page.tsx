import React from 'react'
import SImg from './SImg'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-full  py-10  md:h-[calc(100vh-500px)] lg:h-[calc(100vh-100px)] '>
      
      <div className=' w-full m-auto  h-auto gap-4  md:h-[90%] lg:h-[80%]  flex flex-col  justify-between'>

          <h1 className='px-20 text-[30px] font-semibold whitespace-nowrap'>Special <span className=' text-primary'>Services</span></h1>

          <div className=' bg-[#D9D9D9] py-4'  style={{borderRadius: '0 40px 40px 0'}}>

          <p className=' px-20   text-[15px] font-normal'>Special services on The Locals Connect platform offer users the opportunity to request tailored assistance that goes beyond standard listings.
             Whether you need help finding a specific service, organizing an event, or accessing unique local resources, our dedicated admin team is here to assist you. 
             To ensure a personalized experience, users must be registered members before they can submit requests for special services.
             This registration helps us maintain a secure and engaged community, allowing us to provide the best support possible.</p>
          </div>

<Link href='/Services/Request'>
          <Button className=' flex items-center gap-2 rounded-full w-[200px]  ml-20 justify-between'>
            <span>Make Request</span>
            <ArrowRight className=' rounded-full p-[2px] w-6 h-6 text-primary bg-white'/>
          </Button>
</Link>
      </div>
         

      <SImg/>
    </div>
  )
}

export default page