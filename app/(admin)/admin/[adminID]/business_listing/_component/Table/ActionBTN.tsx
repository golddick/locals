import { Button } from '@/components/ui/button'
import { useAdminID } from '@/hooks/use-get-adminID'
import Link from 'next/link'
import React from 'react'

interface ActionBTNProps {
    businessID: string
}


export const ActionBTN = ({businessID}:ActionBTNProps) => {
    const adminID = useAdminID()

    const url = `/admin/${adminID}/business_profile/${businessID}`
  return (
    <>
    <Link href={url}>
    <Button className=' bg-primary text-white rounded-2xl  px-4'>View</Button>
    </Link>
    </>
  )
}
