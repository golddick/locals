
import { deleteUser } from '@/app/api/delete/user';
import { Button } from '@/components/ui/button';
import { useAdminID } from '@/hooks/use-get-adminID';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';


interface Props {
  userId: string;
 
}

export const DeleteUserBTN = ({ userId }: Props) => {
  const adminID = useAdminID()
  const url = `/admin/${adminID}/user_management`
  const router = useRouter()
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteUser(userId);
      toast.success('User deleted successfully!');
      router.push(url)
    } catch (error) {
      toast.error('Failed to delete user. Please try again.');
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