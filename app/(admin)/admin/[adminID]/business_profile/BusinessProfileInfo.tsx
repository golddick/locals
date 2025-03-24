'use client'

import React, { useEffect, useState } from 'react'
import {  BusinessType, singleBusinessInfo } from '@/type/business_type'
import { ProfileINFO } from '../../_component/Profile/ProfileINFO'
import { useBusinessID } from '@/hooks/use-get-businessID'
import { getBusiness } from '@/app/api/get/singleBusiness'


const BusinessProfileInfo = () => {
  const businessID =  useBusinessID()

  const [business, setBusiness] = useState<BusinessType> ()
          const [error, setError] = useState<string>()
        
            // Fetch all businesses
            useEffect(() => {
              const fetchBusinesses = async () => {
                try {
                  const data = await getBusiness(businessID);
                  setBusiness(data.data); 
                } catch (err) {
                  setError('Failed to fetch categories');
                }
              };
          
              fetchBusinesses();
            }, []);


  return (
    <div >
      <ProfileINFO info={business}/>
      </div>
  )
}

export default BusinessProfileInfo