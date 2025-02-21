import React from 'react'
import { PageHeader } from '../../../_component/pageHeader/PageHeader'
import { DeleteBTN } from '../../../_component/DeleteBTN/DeleteBTN'
import { ProfileINFO } from '../../../_component/Profile/ProfileINFO'
import {  singleBusinessInfo } from '@/type/business_type'


const page = () => {


  return (
    <div >
      <ProfileINFO info={singleBusinessInfo}/>
      </div>
  )
}

export default page