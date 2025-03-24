'use client'

import { deleteCategory } from '@/app/api/delete/category';
import { deleteUser } from '@/app/api/delete/user';
import { Button } from '@/components/ui/button';
import { useAdminID } from '@/hooks/use-get-adminID';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';


interface Props {
    categoryID: string;
 
}

export const DeleteCategoryBTN = ({ categoryID }: Props) => {
  const adminID = useAdminID()
  const url = `/admin/${adminID}/dashboard`
  const router = useRouter()
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteCategory(categoryID);
      toast.success('category deleted successfully!');
      router.push(url)
    } catch (error) {
      toast.error('Failed to delete category. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      size={'lg'}
      variant={'destructive'}
      className='rounded-lg'
      onClick={handleDelete} 
      disabled={isDeleting}
    >
      {isDeleting ? 'Deleting...' : 'Delete'} 
    </Button>
  );
};