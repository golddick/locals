import { getUserInfo } from '@/app/api/auth/user'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Img from '/frameGuy.png'

const HeaderBottom = () => {

    const Img = 'https://github.com/shadcn.png'

    const TrustedVendors = [
        {
            id: 1,
            Img: Img, 
        },
        {
            id: 2,
            Img: Img, 
        },
        {
            id: 3,
            Img: Img, 
        },
        {
            id: 4,
            Img: Img, 
        },
        {
            id: 5,
            Img: Img, 
        },
        {
            id: 6,
            Img: Img, 
        },
        {
            id: 7,
            Img: Img, 
        },
       
      
    ];

    const user = getUserInfo()

    console.log(user, 'ss')

  return (
    <div className='flex items-center justify-between'>
         
         {user ? (
            <Badge className=' text-white py-2 px-4 rounded-s-lg capitalize'>
                Welcome {user?.firstname}
            </Badge>
         ):
         (
            <Link href='/Signup'>
            <Button className=' rounded-full py-2 px-5'>
               Join Now
            </Button>
            </Link>
         )}
        

        <div>
                <span className=' text-[15px] md:text-[18px]  text-primary whitespace-nowrap' style={{fontWeight:'300'}}>Some of Our Trusted Vendors</span>
         
         <div className='w-full flex items-center justify-between'>
            <SquareArrowOutUpRight className=' text-primary cursor-pointer'/>

            <div className='flex w-full justify-end'>
                            {TrustedVendors.slice(0,5).map(vendor => (

                            <div key={vendor.id} className=' ml-[-5px]' >
                                <img src={vendor.Img} alt={`Vendor ${vendor.id}`}  className=' w-[30px] h-[30px] object-contain rounded-full border-2 border-[#D9D9D9]'/>
                            </div>
                            ))}
            </div> 
         </div>

           

        </div>
    </div>
  )
}

export default HeaderBottom