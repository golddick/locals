import React from 'react'
import { singleSub, singleUserInfo } from '@/type/business_type'
import { SubscriptionProfile } from '../_component/Profile/SubscriptionProfile'



const page = () => {
  return (
    <div >
      <SubscriptionProfile info={singleSub}/>
      </div>
  )
}

export default page 