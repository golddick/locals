'use client'

import { deleteBusiness } from '@/app/api/delete/business';
import { Button } from '@/components/ui/button';
import { useAdminID } from '@/hooks/use-get-adminID';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';


interface Props {
  businessId: string;
 
}

export const DeleteBTN = ({ businessId }: Props) => {
  const adminID = useAdminID()
  const url = `/admin/${adminID}/business_listing`
  const router = useRouter()
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteBusiness(businessId);
      toast.success('Business deleted successfully!');
      router.push(url)
    } catch (error) {
      toast.error('Failed to delete business. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      size={'lg'}
      variant={'destructive'}
      className='rounded-lg'
      onClick={handleDelete} // Add onClick handler
      disabled={isDeleting} // Disable the button while deleting
    >
      {isDeleting ? 'Deleting...' : 'Delete'} 
    </Button>
  );
};