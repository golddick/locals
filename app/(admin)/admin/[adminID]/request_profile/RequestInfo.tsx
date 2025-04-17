// 'use client'


// import React, { useEffect, useState } from 'react'
// import {  SpecialRequestType } from '@/type/business_type'
// import { RequestINFO } from './_component/Profile/RequestInfo'
// import { getSingleRequest } from '@/app/api/get/singleRequest'
// import { useRequestID } from '@/hooks/use-get-requestID'
// import LoaderCircle from '@/components/_component/Loader/Loader'


// const SpecialRequestInfo = () => {

//      const requestID =  useRequestID()
    
//     //   const [request, setRequest] = useState<SpecialRequestType> ()
//       const [request, setRequest] = useState()
//               const [error, setError] = useState<string>()
            
//                 // Fetch  request
//                 useEffect(() => {
//                   const fetchBusinesses = async () => {
//                     try {
//                       const data = await getSingleRequest(requestID);
//                       setRequest(data.data); 
//                     } catch (err) {
//                       setError('Failed to fetch categories');
//                     }
//                   };
              
//                   fetchBusinesses();
//                 }, []);


// console.log(request, 'lloiii')

//   return (

   

//     <div >
//        <RequestINFO info={request} />
//       </div>
//   )
// }

// export default SpecialRequestInfo







'use client'

import React, { useEffect, useState } from 'react'
import { SpecialRequestType } from '@/type/business_type'
import { RequestINFO } from './_component/Profile/RequestInfo'
import { getSingleRequest } from '@/app/api/get/singleRequest'
import { useRequestID } from '@/hooks/use-get-requestID'
import LoaderCircle from '@/components/_component/Loader/Loader'

const SpecialRequestInfo = () => {
  const requestID = useRequestID()

  const [request, setRequest] = useState<SpecialRequestType | undefined>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await getSingleRequest(requestID)
        setRequest(res.data) // Make sure `res.data.user` is fully populated
      } catch (err) {
        setError('Failed to fetch request')
      }
    }

    if (requestID) {
      fetchRequest()
    }
  }, [requestID])

  if (!request) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoaderCircle />
      </div>
    )
  }

  return (
    <div>
      <RequestINFO info={request} />
    </div>
  )
}

export default SpecialRequestInfo
