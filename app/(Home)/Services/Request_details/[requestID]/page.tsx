import React from 'react'
import {  RequestInfoType, SingleRequestInfo } from '@/type/business_type'
import { RequestINFO } from '../_component/Profile/RequestInfo'


const page = () => {


  return (
    <div className='gap-4 w-full  py-10 flex flex-col  px-5 md:px-20 items-start '> 
      <RequestINFO info={SingleRequestInfo}/>
      </div>
  )
}

export default page