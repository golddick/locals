
'use client'


import React, { useEffect, useState } from 'react';
import { CircleX, Loader, Settings } from 'lucide-react';
import { fetchSubscriptions } from '@/app/api/get/allSubscrption';
import { toast } from 'sonner';
import { DeleteSubscription } from '@/app/api/delete/subcription';
import { PlanSubscriptionType } from '@/type/business_type';
import { Modify_plan_tier_BTN } from './Modify_plan_tier';
import { Button } from '@/components/ui/button';

export const Subscription_Settings = () => {
  const [subscriptions, setSubscriptions] = useState<PlanSubscriptionType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deletingSubscriptionId, setDeletingSubscriptionId] = useState<string | null>(null); 

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

  const handleDeleteSubscription = async (id: string) => {
    setDeletingSubscriptionId(id); 
    try {
      await DeleteSubscription(id);
      // Re-fetch subscriptions to update the list
      const data = await fetchSubscriptions();
      setSubscriptions(data);
      toast.success('Subscription deleted successfully');
    } catch (error) {
      toast.error("Failed to delete subscription");
    } finally {
      setDeletingSubscriptionId(null); 
    }
  };

  if (loading) {
    return <div className=" w-full h-full flex justify-center items-center"><Loader className=' size-6 animate-spin'/></div>; 
  }

  if (subscriptions.length === 0) {
    return <div>No subscriptions found.</div>; 
  }

  return (
    <div className="w-full my-0 flex flex-col gap-4 items-start overflow-scroll pb-5 mt-5 hidden-scrollbar">
      {subscriptions.map((subscription) => (
        <div key={subscription._id} className="w-full flex border-b border-[#00000066] py-2">
          <div className="items-center gap-4 justify-between w-[90%] mx-auto grid grid-cols-3">
            <span className="text-[15px] font-medium capitalize">{subscription.name}</span>

            <div className="flex items-center gap-4">
              <Modify_plan_tier_BTN subscriptionId={subscription._id} />
              <span className="text-[15px] font-medium hidden md:block">Modify Subscription</span>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => handleDeleteSubscription(subscription._id)}
                variant={"destructive"}
                className="text-white"
              >
                {deletingSubscriptionId === subscription._id ? (
                  <Loader className="size-4 animate-spin" />
                ) : (
                  <CircleX className="size-6 rounded-full" />
                )}
              </Button>
              <span className="text-[15px] font-medium hidden md:block">Delete Subscription</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
