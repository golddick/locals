
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon, TrashIcon, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';   


// Define the shape of the data prop
interface ProfileProps {
  data: {
    title: string;
    path: string;
    icon: React.JSX.Element
  }[];
}

const ProfileNav = ({ data }: ProfileProps) => {
  const pathname = usePathname(); 

  return (
    <div className='bg-[#DFE5EC4D] rounded-xl p-4 flex flex-col w-full gap-4   items-start'>
        {data.map((item) => {
        const isActive = pathname === item.path; 
        return (
            <Link href={item.path} key={item.path}>
            <Button className={cn( ' w-[30px] md:w-[200px]',isActive ? 'bg-[#C6CFF8] rounded-full text-primary' : 'text-black' )}variant='ghost'>
            <span className='hidden md:block'>  {item.title}</span>
            <div className='flex w-5 h-5 md:hidden'>{item.icon}</div>
            </Button>
            </Link>
        );
      })}
      
      <Button className='w-[30px] md:w-[200px] text-red-700' variant='ghost'>
      <span className='hidden md:block'>  Delete Account</span>
      <TrashIcon className='flex w-5 h-5 md:hidden'/>
      </Button>
    </div>
  );
};

export default ProfileNav;
