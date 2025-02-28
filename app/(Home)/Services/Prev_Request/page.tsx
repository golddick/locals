
import React from 'react'
import { Message_admin } from '../_component/Message_admin'
import { Prev_Request } from '../_component/Prev_Request'

const page = () => {
  return (
    <div className='gap-4 w-full  py-10 flex flex-col  px-5 md:px-20 items-start '> 
   
    <div className=' grid grid-cols-1 w-full gap-4 '>
            <Prev_Request/>
            {/* <Message_admin/> */}
    </div>
    </div>
  )
}

export default page