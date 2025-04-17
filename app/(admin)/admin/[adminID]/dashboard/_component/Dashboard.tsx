'use client'

import { getAllBusinesses } from '@/app/api/get/businesses'
import { BusinessType, Overview } from '@/type/business_type'
import React, { useEffect, useState } from 'react'
import { PageHeader } from '../../../_component/pageHeader/PageHeader'
import { Filter } from '../../../_component/Filter/Filter'
import { WidgetRow } from './Widget/WidgetRow'
import { AdminChart } from './chart/Admin_Chart'
import { CircleChart } from './chart/Circle_Chart'
import { BusinessDataTable } from '../../business_listing/_component/Table/BusinessTable'
import { columns } from '../../business_listing/_component/Table/columns'
import { dashboardOverview } from '@/app/api/get/dashboadOverview'


const Dashboard = () => {

    const [businesses, setBusinesses] = useState<BusinessType[]> ([])
    const [loading, setLoading] = useState<boolean>(true)
    const [overview, setOverview] = useState<Overview>()
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

               // Fetch dashboard overview
               useEffect(() => {
                const fetchOvervew = async () => {
                  try {
                    const data = await dashboardOverview();
                    setOverview(data.data); 
                  } catch (err) {
                    setError('Failed to fetch dashboard overview');
                  }
                };
            
                fetchOvervew();
              }, []);

              console.log(overview, 'overview data')

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex items-center justify-between'>
        <PageHeader text='Summary'/>
        <Filter/>
        </div>
        <WidgetRow  
        totalUsers={overview?.totalUsers}
        totalBusiness={overview?.totalBusiness}
        totalSpecialServices={overview?.totalSpecialServices}
        />
        <div className='  grid grid-cols-1 lg:grid-cols-2 gap-4 '>
          <AdminChart/> 
          <CircleChart/>
        </div>
        <BusinessDataTable  columns={columns} data={businesses}/>
      </div>
  )
}

export default Dashboard