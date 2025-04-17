'use client'

import { getUserInfo } from '@/app/api/auth/user'
import { fetchTrustedVendors } from '@/app/api/get/getData'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BusinessType } from '@/type/business_type'
import { LoaderCircle, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
// import Img from '/frameGuy.png'

const HeaderBottom = () => {

    
    const [trustedVendors, setTrustedVendors] = useState<BusinessType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  
    // Fetch Trusted Vendors
    useEffect(() => {
      const loadVendor = async () => {
        try {
          const data = await fetchTrustedVendors();
          if (Array.isArray(data.data)) {
            setTrustedVendors(data.data); 
          } else {
            throw new Error('Fetched data is not an array');
          }
        } catch (error) {
          console.error("Error fetching Vendors:", error);
          toast.error("Failed to load Vendors");
        } finally {
          setLoading(false); 
        }
      };
      loadVendor();
    }, []);

    if (loading || !trustedVendors) {
        return(
            <LoaderCircle className=' animate-spin size-4'/>
        )
    }

    const user = getUserInfo()


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
                            {trustedVendors.slice(0,5).map(vendor => (

                            <div key={vendor._id} className=' ml-[-5px]' >
                                <div className=' relative w-[40px] h-[40px]'>
                                <Image fill src={vendor.profileUrl[0]} alt={`Vendor ${vendor.name}`}  className='  absolute object-cover rounded-full border-2 border-[#d9d9d9]'/>
                                </div>
                            </div>
                            ))}
            </div> 
         </div>

           

        </div>
    </div>
  )
}

export default HeaderBottom