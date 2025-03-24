'use client'

import React, { useEffect, useState } from 'react'
import { BusinessType } from '@/type/business_type'
import { PageHeader } from '../../../_component/pageHeader/PageHeader'
import { PageDesc } from '../../../_component/pageHeader/PageDesc'
import { BusinessDataTable } from './Table/BusinessTable'
import { columns } from './Table/columns'
import { getAllBusinesses } from '@/app/api/get/businesses'

const BusinessListing = () => {

      const [businesses, setBusinesses] = useState<BusinessType[]> ([])
        const [error, setError] = useState<string>()
      
          // Fetch all businesses
          useEffect(() => {
            const fetchBusinesses = async () => {
              try {
                const data = await getAllBusinesses();
                setBusinesses(data.data); 
              } catch (err) {
                setError('Failed to fetch categories');
              }
            };
        
            fetchBusinesses();
          }, []);

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex flex-col gap-2 items-start '>
        <PageHeader text='Verified Listings'/>
        <PageDesc text='List of verified businesses on The Locals Connect'/>
        </div>
        <BusinessDataTable  columns={columns} data={businesses}/>
    </div>
  )
}

export default BusinessListing 