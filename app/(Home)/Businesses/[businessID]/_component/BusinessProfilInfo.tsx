'use client'
import React, { useEffect, useState } from 'react'
import Details from './Details'
import ImgGallery from './ImgGallary'
import { useBusinessID } from '@/hooks/use-get-businessID'
import { BusinessType } from '@/type/business_type'
import { getBusiness } from '@/app/api/get/singleBusiness'
import { toast } from 'sonner'
import Loader from '@/components/_component/Loader/Loader'
import { getUserInfo } from '@/app/api/auth/user'
import { useRouter } from 'next/navigation'

interface Props {
  businessid?: string
}


const BusinessProfilInfo = ( {businessid}:Props) => {
 
  const router = useRouter()
  const user = getUserInfo()

  if (!user) {
    toast.error('No user')
    router.push('/')
  }

    
      const businessID =  useBusinessID()

      const id = businessid || businessID

      const [business, setBusiness] = useState<BusinessType> ()
              const [error, setError] = useState<string>()
            
                // Fetch  business
                useEffect(() => {
                  const fetchBusinesses = async () => {
                    try {
                      const data = await getBusiness(id);
                      setBusiness(data.data); 
                    } catch (err) {
                      setError('Failed to fetch categories');
                    }
                  };
              
                  fetchBusinesses();
                }, []);

    const businessOwner = business && user && business.businessOwner === user._id;


                if (!business) {
                    <Loader/>
                    return null
                }

  return (
    // <div className='grid  grid-cols-1 gap-4 lg:grid-cols-2 w-full min-h-screen lg:gap-6   px-5   lg:px-20  lg:py-10   mt-5'>
    <div className='flex items-center gap-4 flex-wrap   px-5   lg:px-20  lg:py-10 mt-5'>
            <div className='w-full '>
               <Details businessId={id} name={business.name} des={business.description} categories={business.services.map(service => service.name)} Review={business.Review || ''} Address={business.address}  Contact={business.phone}  businessOwner={businessOwner} />
            </div>

            <div className=' w-full'>
            <ImgGallery imgUrls={business.profileUrl }/>
            </div>
    </div>
  )
}

export default BusinessProfilInfo