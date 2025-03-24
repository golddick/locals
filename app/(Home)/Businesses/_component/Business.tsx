
'use client'

import React, { useEffect, useState } from 'react'
import BusinessRow from '@/components/_component/VerifiedBusiness/BusinessRow'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAllBusinesses } from '@/app/api/get/businesses'
import { BusinessType } from '@/type/business_type'
import { BusinessFilter } from '../BusinessFilter'

const Business = () => {

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

        // useEffect(() => {
        //   const fetchBusinesses = async () => {
        //     try {
        //       const response = await getAllBusinesses(page, limit);
        //       // const response = await getAllBusinesses();
        //       console.log(response, 'API response'); 
      
        //       // Ensure the response has the expected structure
        //       if (response.status === 'success' && Array.isArray(response.data)) {
        //         setBusinesses(response.data); 
        //       } else {
        //         throw new Error('Invalid response structure');
        //       }
        //     } catch (err) {
        //       if (err instanceof Error) {
        //         setError(err.message);
        //       } else {
        //         setError(String(err));
        //       }
        //     } finally {
        //       setLoading(false);
        //     }
        //   };
      
        //   fetchBusinesses();
        // }, [page, limit]); 

      // console.log(businesses,'pp')

  return (
    <div className=' flex flex-col gap-2 w-full  py-10'> 
      {/* <BusinessMenu/> */}
      <div className=' grid grid-cols-1 md:grid-cols-[0.5fr_2fr] '>

        <div className=' hidden md:block border-r p-4   '>
          <div className=' w-full rounded-xl p-4 text-white flex flex-col gap-4 items-center bg-primary'>
              <span className=' text-center text-[20px] font-semibold'> Make Tailored Request with The Locals Connect</span>
              <Link href='/Services'>
              <Button className=' flex items-center gap-4 p-2 bg-white text-primary rounded-full hover:bg-white '>
                <span>Learn More</span>
                <ArrowRight/>
              </Button>
              </Link>
          </div>

          <BusinessFilter/>
        </div>

        <div className=' flex flex-col gap-4 p-4 px-5  '>

          <div className=' flex flex-col md:flex-row items-center justify-between w-full  gap-2'>
       <div className=' flex items-start w-full md:items-center gap-4'>
       <h1 className=' text-[20px] md:text-[30px] font-semibold'>Recommended Listings</h1>
        <p className='py-1 px-2 rounded-xl text-[20px] border'>{businesses?.length}</p>
       </div>
      <div className=' flex items-start w-full md:items-center gap-2 md:px-4  md:justify-end'>
        <span className=' text-[18px] text-[#706A6A] font-light'>Sort by:</span>
        <p className=' text-[20px] font-semibold'>Most viewed</p>
      </div>
       </div>

        <BusinessRow/>
        </div>
      </div>
    </div>
  )
}

export default Business