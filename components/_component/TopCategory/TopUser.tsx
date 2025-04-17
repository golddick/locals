'use client'

import { fetchBusinessUnderCategory } from '@/app/api/get/getData'
import { Button } from '@/components/ui/button'
import { BusinessType } from '@/type/business_type'
import { LoaderCircle, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
// import Img from '/frameGuy.png'

interface Props {
    categoryID:string
}

const TopUser = ({categoryID}:Props) => {

    const [topListing, setTopListing] = useState<BusinessType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  
    // Fetch Top Listing Businesses
    useEffect(() => {
      const loadBusiness = async () => {
        try {
          const data = await fetchBusinessUnderCategory(categoryID);
          if (Array.isArray(data.data)) {
            setTopListing(data.data); 
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
      loadBusiness();
    }, []);

    if (loading || !topListing) {
        return(
            <LoaderCircle className=' animate-spin size-4'/>
        )
    }

    console.log(topListing,'tp')



  return (
    <div className='flex items-center justify-between'>
         
       

            <div className='flex w-full justify-end'>
                            {topListing.slice(0,3).map(vendor => (

                            <div key={vendor._id} className=' ml-[-5px]' >
                                 <div className=' relative w-[40px] h-[40px]'>
                                <Image fill src={vendor.profileUrl[0]} alt={`Vendor ${vendor.name}`}  className='  absolute object-cover rounded-full border-2 border-[#d9d9d9]'/>
                                </div>
                            </div>
                            ))}
            </div> 

           

    </div>
  )
}

export default TopUser