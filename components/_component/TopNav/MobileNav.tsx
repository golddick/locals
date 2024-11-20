import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'; // Import VisuallyHidden if necessary
import Image from 'next/image';
import Navigation from './Navigation';
import AuthBTNS from './AuthBTNS';

interface SideBarProps {
  side: 'top' | 'bottom' | 'left' | 'right';
}

const MobileNav = ({ side }: SideBarProps) => {
  return (
    <Sheet key={side}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent side={side} className="w-[200px]  lg:hidden">
        <div className="w-full h-full flex gap-4 flex-col items-center">
          {/* Visually hidden title for screen reader users */}
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>LOCALS Navigation</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>

          {/* Visible content */}
          <div className='  w-[50px] h-[50px]  relative'>
      <Image src='/LocalLogo.png' alt='logo' fill className=' absolute   object-contain '/>
       </div>
          <Separator />
          <div className='flex flex-col justify-between h-full m-auto w-full '>
            <Navigation/>
            <AuthBTNS/>
        </div>
        </div>
      
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
