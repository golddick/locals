import { Button } from '@/components/ui/button'
import { useAdminID } from '@/hooks/use-get-adminID'
import Link from 'next/link'
import React from 'react'

interface ActionBTNProps {
  requestID: string
}


export const ActionBTN = ({requestID}:ActionBTNProps) => {
    const adminID = useAdminID()

    const url = `/admin/${adminID}/sub_management_profile/${requestID}` 
  return (
    <>
    <Link href={url}>
    <Button className=' bg-primary text-white rounded-2xl  px-4'>View</Button>
    </Link>
    </>
  )
}
