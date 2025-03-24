"use client";

import { getUserById } from '@/app/api/get/user';
import { adminRestrictUser } from '@/app/api/put/user';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface RestrictBTNProps {
    userId: string; 
}

export const RestrictUserBTN = ({ userId }: RestrictBTNProps) => {
    const [currentStatus, setCurrentStatus] = useState<'active' | 'in-active'>('active');

    // Fetch the current status of the user
    useEffect(() => {
        const fetchBusinessStatus = async () => {
            try {
                const response = await getUserById(userId);
                if (response.status === 'failed') {
                    throw new Error(response.message || 'Failed to fetch user status');
                }

                const data = response.data;
                setCurrentStatus(data.status); 
            } catch (error) {
                console.error('Error fetching user status:', error);
                toast.error('Error fetching user status');
            }
        };

        fetchBusinessStatus();
    }, [userId]);

    console.log(currentStatus, 'current status');

    // Function to toggle the user status
    const handleRestrictBusiness = async () => {
        const newStatus = currentStatus === 'active' ? 'in-active' : 'active'; 

        try {
            const response = await adminRestrictUser(userId, newStatus);

            if (response.status === 'success') {
                toast.success(`Business status updated to ${newStatus}`);
                setCurrentStatus(newStatus); 
            } else {
                toast.error('Failed to update user status');
            }
        } catch (error) {
            console.error('Error updating user status:', error);
            toast.error('Error updating user status');
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