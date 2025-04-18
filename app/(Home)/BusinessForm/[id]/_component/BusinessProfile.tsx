

'use client'



import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProfileNav from '@/app/(Home)/Profile/[id]/ProfileNav';
import CreateBusiness from './CreateBusiness';
import { useUserID } from '@/hooks/use-get-userID';
import { BusinessType, UserType } from '@/type/business_type';
import { getUserById } from '@/app/api/get/user';
import Loader from '@/components/_component/Loader/Loader';
import BusinessProfilInfo from '@/app/(Home)/Businesses/[businessID]/_component/BusinessProfilInfo';


const BusinessProfile = () => {
  const userId = useUserID();
  const [userData, setUserData] = useState<UserType | null>(null);
  const [businessData, setBusinessData] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      toast.error('No user ID found');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getUserById(userId);
        
        if (!response || !response.data) {
          throw new Error('Failed to fetch user data');
        }

        setUserData(response.data);
      
        setBusinessData(response.data.business);
        if (response.data.imageUrl) {
          setSelectedImage(response.data.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <Loader/>
    );
  }

  // const businessID = businessData?._id

  // console.log(businessData, 'nus')

  return (
    <div className='grid grid-cols-[0.5fr_3fr] gap-4  w-full md:py-10 px-2 lg:px-6  h-auto '>
      <div className='w-full flex flex-col gap-4  mt-5'>
        <h1 className='text-[25px] lg:text-[30px] font-semibold whitespace-nowrap md:text-[30px] hidden md:block'>
          My <span className='text-primary'>Business page</span>
        </h1>
        <ProfileNav />
      </div>

      {businessData ? (
        <BusinessProfilInfo businessid={businessData}/>
      ):(
        <CreateBusiness  />
      )}
      
    </div>
  );
};

export default BusinessProfile;