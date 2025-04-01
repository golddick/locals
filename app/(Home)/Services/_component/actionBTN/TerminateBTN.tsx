'use client'

import { terminateRequest } from '@/app/api/put/request';
import { Button } from '@/components/ui/button'
import { Loader, X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';


interface TerminateBTNProps {
  requestId: string;  // You need the request ID to terminate it
}

const TerminateBTN = ({requestId}:TerminateBTNProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)


  const handleTerminate = async () => {
    setLoading(true)
    try {
      // Call the API function to terminate the request
      const data = await terminateRequest(requestId, 'terminated');
      toast.success('Request Terminated')
      router.refresh()
    } catch (error) {
      toast.error('Error terminating request:')
      console.error('Error terminating request:', error);
    }finally{
        setLoading(false)
    }
  };

  return (
    <Button 
      variant={'destructive'} 
      className='rounded-xl' 
      onClick={handleTerminate} 
    >
     {
        loading ? <Loader className=' size-4 animate-spin'/> :
         <div className=' flex items-center gap-2'>
             <X className='size-4' />
             <span>Terminate</span>
        </div>
     }
    </Button>
  );
};

export default TerminateBTN;
