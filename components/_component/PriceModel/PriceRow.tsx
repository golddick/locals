'use client'

import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
import { PlanSubscriptionType } from '@/type/business_type';
import { fetchSubscriptions } from '@/app/api/get/allSubscrption';
import { toast } from 'sonner';
import LoaderCircle from '../Loader/Loader';

const PriceRow = () => {

    const [subscriptions, setSubscriptions] = useState<PlanSubscriptionType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  
    // Fetch subscriptions on component mount
    useEffect(() => {
      const loadSubscriptions = async () => {
        try {
          const data = await fetchSubscriptions();
          if (Array.isArray(data)) {
            setSubscriptions(data); 
          } else {
            throw new Error('Fetched data is not an array');
          }
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
          toast.error("Failed to load subscriptions");
        } finally {
          setLoading(false); 
        }
      };
      loadSubscriptions();
    }, []);

    if (loading || !subscriptions) {
        return(
            <LoaderCircle/>
        )
    }


  return (
    <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between '>
       {subscriptions.map((price) => (
        <PriceCard key={price._id} name={price.name} amount={price.price} features={price.features} />
      ))}
    </div>
  )
}

export default PriceRow