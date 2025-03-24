'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AvatarIcon } from './AvatarIcon';
import Link from 'next/link';
import { getUserInfo } from '@/app/api/auth/user';
import { UserType } from '@/type/business_type';
import { useRouter } from 'next/navigation';

const AuthBTNS = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<UserType>();

  useEffect(() => {
    // Fetch user info from localStorage after the component mounts
    const info = getUserInfo();
    if (info) {
      setUserInfo(info);
    }
  }, []);

  const logout = () => {
    localStorage.clear(); 

    // Reset user info in state
    setUserInfo(undefined);
    router.push('/Login'); 
  };

  return (
    <div>
      {userInfo ? (
        <div className="flex items-center gap-2">  
          <AvatarIcon  _id={userInfo?._id} src='' fallback={userInfo.firstname} />
         
            <Button variant="link" onClick={logout} className="text-black">Log Out</Button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/Login">
            <Button variant="link" className="text-black">Login</Button>
          </Link>
          <Link href="/Signup">
            <Button className="rounded-full">Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthBTNS;
