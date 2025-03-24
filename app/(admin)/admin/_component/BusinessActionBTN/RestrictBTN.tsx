"use client";

import { getBusiness } from '@/app/api/get/singleBusiness';
import { restrictBusiness } from '@/app/api/put/business';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface RestrictBTNProps {
    businessId: string; // Pass the business ID as a prop
}

export const RestrictBTN = ({ businessId }: RestrictBTNProps) => {
    const [currentStatus, setCurrentStatus] = useState<'active' | 'in-active'>('active');

    // Fetch the current status of the business
    useEffect(() => {
        const fetchBusinessStatus = async () => {
            try {
                const response = await getBusiness(businessId);
                if (response.status === 'failed') {
                    throw new Error(response.message || 'Failed to fetch business status');
                }

                const data = response.data;
                setCurrentStatus(data.status); // Set the current status
            } catch (error) {
                console.error('Error fetching business status:', error);
                toast.error('Error fetching business status');
            }
        };

        fetchBusinessStatus();
    }, [businessId]);

    console.log(currentStatus, 'current status');

    // Function to toggle the business status
    const handleRestrictBusiness = async () => {
        const newStatus = currentStatus === 'active' ? 'in-active' : 'active'; // Toggle between active and inactive

        try {
            const response = await restrictBusiness(businessId, newStatus);

            if (response.status === 'success') {
                toast.success(`Business status updated to ${newStatus}`);
                setCurrentStatus(newStatus); // Update the current status in state
            } else {
                toast.error('Failed to update business status');
            }
        } catch (error) {
            console.error('Error updating business status:', error);
            toast.error('Error updating business status');
        }
    };

    return (
        <Button
            size={'lg'}
            variant={'secondary'}
            className='rounded-lg'
            onClick={handleRestrictBusiness} // Call the function on button click
        >
            {currentStatus === 'active' ? 'De-activate' : 'Activate'}
        </Button>
    );
};