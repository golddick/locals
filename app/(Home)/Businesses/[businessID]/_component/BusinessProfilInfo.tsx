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



const BusinessProfilInfo = () => {

  const router = useRouter()
  const user = getUserInfo()

  if (!user) {
    toast.error('No user')
    router.push('/')
  }

  console.log(user, 'use')
    
      const businessID =  useBusinessID()
    
      const [business, setBusiness] = useState<BusinessType> ()
              const [error, setError] = useState<string>()
            
                // Fetch all businesses
                useEffect(() => {
                  const fetchBusinesses = async () => {
                    try {
                      const data = await getBusiness(businessID);
                      setBusiness(data.data); 
                    } catch (err) {
                      setError('Failed to fetch categories');
                    }
                  };
              
                  fetchBusinesses();
                }, []);

                console.log(businessID, 'bid')

                if (!business) {
                    <Loader/>
                    toast.error('No Business')
                    return null
                }

  return (
    <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 w-full h-full lg:gap-6   px-5 md:px-20 py-10  '>
            <div>
               <Details name={business.name} des={business.description} categories={business.services.map(service => service.name)} Review={business.Review || ''} Address={business.address}  Contact={business.phone} />
            </div>

            <div>
            <ImgGallery imgUrls={business.profileUrl }/>
            </div>
    </div>
  )
}

export default BusinessProfilInfo