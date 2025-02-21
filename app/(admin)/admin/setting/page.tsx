import React from 'react'
import { AccessControl } from './_component/AccessControl'
import { Subscription_Settings } from './_component/Subscription_Settings'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Add_account_BTN } from './_component/Add_account_BTN'
import { Add_plan_tier_BTN } from './_component/Add_plan_tier_BTN'
import { Email_notification } from './_component/Email_notification'

const page = () => {
  return (
    <div className=' flex flex-col w-full  p-2  gap-8'>

        <section className='grid grid-cols-1  lg:grid-cols-[1fr_2fr]  w-full justify-between gap-6 h-[500px] lg:h-[300px] lg:max-h-[400px] '>

            <div className='flex  items-start w-full  h-full rounded-lg bg-[#FFFFFF]  overflow-x-auto relative'>
            <div className=' flex flex-col gap-2 items-start w-full  h-full p-4 rounded-lg  '>
                <h3 className='bg-primary text-white  font-medium text-[15px] p-2 px-4 rounded-lg'>Access Control List</h3>
                <AccessControl/>
            </div>
                <Add_account_BTN/>
            </div>


            <div className='flex  items-start w-full  h-full rounded-lg bg-[#FFFFFF]  overflow-x-auto relative'>
            <div className=' flex flex-col gap-2 items-start w-full  h-full p-4 rounded-lg  '>
                <h3 className='bg-primary text-white  font-medium text-[15px] p-2 px-4 rounded-lg'>Subscription Settings</h3>
                <Subscription_Settings/>
            </div>
                <Add_plan_tier_BTN/>
            </div>


        </section>

        <section>
            <Email_notification/>
        </section>
    </div>
  )
}

export default page