import React from 'react'
import { singleUserInfo } from '@/type/business_type'
import { UserProfileINFO } from '../_component/Profile/UserProfileINFO'



const page = () => {



  return (
    <div >
      <UserProfileINFO info={singleUserInfo}/>
      </div>
  )
}

export default page