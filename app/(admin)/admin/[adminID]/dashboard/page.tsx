import React from 'react'
import { PageHeader } from '../../_component/pageHeader/PageHeader'
import { Filter } from '../../_component/Filter/Filter'
import { WidgetRow } from './_component/Widget/WidgetRow'
import { AdminChart } from './_component/chart/Admin_Chart'
import { CircleChart } from './_component/chart/Circle_Chart'
import { BusinessType, businessData } from '@/type/business_type'
import { columns } from '../business_listing/_component/Table/columns'
import { BusinessDataTable } from '../business_listing/_component/Table/BusinessTable'

const page = () => {

  return (
    <div className=' flex flex-col w-full h-full p-2  gap-4'>
      <div className=' flex items-center justify-between'>
        <PageHeader text='Summary'/>
        <Filter/>
        </div>
        <WidgetRow/>
        <div className='  grid grid-cols-1 lg:grid-cols-2 gap-4 '>
          <AdminChart/>
          <CircleChart/>
        </div>
        <BusinessDataTable  columns={columns} data={businessData}/>
      </div>
  )
}

export default page