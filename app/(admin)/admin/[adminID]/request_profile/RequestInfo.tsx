'use client'


import React, { useEffect, useState } from 'react'
import {  SpecialRequestType } from '@/type/business_type'
import { RequestINFO } from './_component/Profile/RequestInfo'
import { getSingleRequest } from '@/app/api/get/singleRequest'
import { useRequestID } from '@/hooks/use-get-requestID'
import LoaderCircle from '@/components/_component/Loader/Loader'


const SpecialRequestInfo = () => {

     const requestID =  useRequestID()
    
    //   const [request, setRequest] = useState<SpecialRequestType> ()
      const [request, setRequest] = useState()
              const [error, setError] = useState<string>()
            
                // Fetch  request
                useEffect(() => {
                  const fetchBusinesses = async () => {
                    try {
                      const data = await getSingleRequest(requestID);
                      setRequest(data.data); 
                    } catch (err) {
                      setError('Failed to fetch categories');
                    }
                  };
              
                  fetchBusinesses();
                }, []);


console.log(request, 'lloiii')

  return (

   

    <div >
      {request ? <RequestINFO info={request[0]} /> : <LoaderCircle />}
      </div>
  )
}

export default SpecialRequestInfo