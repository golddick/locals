import React from 'react'
import {  RequestInfoType, SingleRequestInfo } from '@/type/business_type'
import { RequestINFO } from '../_component/Profile/RequestInfo'


const page = () => {


  return (
    <div >
      <RequestINFO info={SingleRequestInfo}/>
      </div>
  )
}

export default page