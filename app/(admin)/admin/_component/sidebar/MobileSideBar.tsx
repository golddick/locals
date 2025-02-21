import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DashboardIcon } from "@radix-ui/react-icons"
import { Sidebar } from "./Sidebar"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { LogOutIcon, Settings2 } from "lucide-react"
import { usePaths } from "../constant/user-nav"
import NavLink from "./NavLink"
import { cn } from "@/lib/utils"



export function MobileNav() {
    const {  pathname } = usePaths()
    const isActive = pathname === '/admin/setting'; 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button  className=" bg-primary text-white">
            <DashboardIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="lg:hidden">
         <div className='  min-h-screen  flex flex-col gap-2  p-2 w-full border-[#706A6A1A]  bg-[#F8F8F8] lg:hidden'>
         <div className='w-full h-auto  flex  items-center justify-center'>
      <Image src='/LocalLogo.png' alt='logo' width={50} height={50} className='   object-contain '/>
       </div>

      <div className='flex flex-col justify-between gap-4  min-h-[calc(100vh-150px)] '>
      <div className=' flex flex-col gap-4'>
      <Separator className='   bg-[#706A6A1A]'/>
        <h1 className=' text-[#706A6ACC] text-[15px]  mb-5'>General Menu</h1>
            <NavLink   pathname={pathname} />
        </div>

        <div className=' flex flex-col gap-2'> 
        <Separator className='   bg-[#706A6A1A]'/>
        <h1 className=' text-[#706A6ACC] text-[15px]  mb-5'>Support</h1>
        <Link
              href={'/admin/setting'}
              className={cn('flex items-center gap-4 hover:bg-[#A3C8ED4D]  rounded-md p-2 flex-nowrap', isActive && 'bg-[#A3C8ED4D]')}
            >
                <Settings2/>
                <span className=' whitespace-nowrap text-[12px]'>
                Setting
                </span>
            </Link>
        </div>
        
        <Link href={'/'} className=' flex items-start w-full  gap-2 flex-col'> 
        <Separator className='   bg-[#706A6A1A]'/>
       <div className='flex items-center gap-4'>
       <LogOutIcon className=' rotate-180 size-4'/>
        <span className=' whitespace-nowrap text-[15px]'>Logout</span>
       </div>
        </Link>
      </div>
        
    </div>
      </SheetContent>
    </Sheet>
  )
}
