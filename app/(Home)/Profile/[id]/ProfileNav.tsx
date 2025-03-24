'use client'

import { Button } from '@/components/ui/button';
import { useUserID } from '@/hooks/use-get-userID';
import { cn } from '@/lib/utils';
import { User, FactoryIcon, BellDotIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ProfileNavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const ProfileNav = () => {
  const userId = useUserID()
  const pathname = usePathname();

  // Define the navigation items
  const profileNav: ProfileNavItem[] = [
    {
      title: "My Profile",
      path: `/Profile/${userId}`,
      icon: <User />,
    },
    {
      title: "My Business",
      path: `/BusinessForm/${userId}`,
      icon: <FactoryIcon />,
    },
    {
      title: "Notification",
      path: `/Notification/${userId}`,
      icon: <BellDotIcon />,
    },
  ];

  return (
    <div className='bg-[#DFE5EC4D] rounded-xl p-4 flex flex-col w-full gap-4 items-start'>
      {profileNav.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.path}>
            <Button
              className={cn(
                'w-[30px] md:w-[200px]',
                isActive ? 'bg-[#C6CFF8] rounded-full text-primary' : 'text-black'
              )}
              variant='ghost'
            >
              <span className='hidden md:block'>{item.title}</span>
              <div className='flex w-5 h-5 md:hidden'>{item.icon}</div>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileNav;
