import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { AvatarIcon } from './AvatarIcon'

const AuthBTNS = () => {


    const login = true

  return (
    <div>
        {
            login ? (
                <AvatarIcon/>
               
            ):
            (
                <div className='flex items-center gap-2'>
                <Button variant='link' className=' text-black'>Login</Button>
                <Button className=' rounded-full'>Sign Up</Button>
            </div>
            )
        }
    </div>
  )
}

export default AuthBTNS