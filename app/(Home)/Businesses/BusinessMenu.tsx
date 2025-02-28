import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Separator } from "@/components/ui/separator"
import {  Award, Calendar, MapPin, Search } from "lucide-react"
  
  export function BusinessMenu() {
    return (
      <Menubar className=" bg-primary flex items-center justify-between  rounded-none overflow-scroll  hidden-scrollbar">

       <div className=" w-[100%] m-auto flex justify-between gap-4 p-2">

       <MenubarMenu  >
       <MenubarTrigger>
        <div className=" flex items-center gap-2 text-white">
            <Search className=" w-7 h-7 bg-white rounded-full p-1 text-primary"/>
            <span className=" text-[20px] font-normal">Catering Services</span>
        </div>
       </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
            <span> Mama joy </span>
            </MenubarItem>
            <MenubarItem>
            <span>Mama Cook Food </span>
            </MenubarItem>

          </MenubarContent>
        </MenubarMenu>

        <div className="w-[2px] h-9  bg-[#F8F8F8]"></div>

        <MenubarMenu  >
       <MenubarTrigger>
        <div className=" flex items-center gap-2 text-white">
            <MapPin className=" w-7 h-7 bg-white rounded-full p-1 text-black"/>
            <span className=" text-[20px] font-normal">Work Location</span>
        </div>
       </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
                <span>Jos</span>
            </MenubarItem>
            <MenubarItem>
                <span>Lagos</span>
            </MenubarItem>
        
          </MenubarContent>
        </MenubarMenu>

        <div className="w-[2px] h-9  bg-[#F8F8F8]"></div>

        <MenubarMenu  >
       <MenubarTrigger>
        <div className=" flex items-center gap-2 text-white">
            <Award className=" w-7 h-7 bg-white rounded-full p-1 text-[#EB8F00]"/>
            <span className=" text-[20px] font-normal">Experience</span>
        </div>
       </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
                <span>Senior Level</span>
            </MenubarItem>
            <MenubarItem>
            <span>Professional</span>
            </MenubarItem>
          
          </MenubarContent>
        </MenubarMenu>

        <div className="w-[2px] h-9  bg-[#F8F8F8]"></div>

        <MenubarMenu  >
       <MenubarTrigger>
        <div className=" flex items-center gap-2 text-white">
            <Calendar className=" w-7 h-7 bg-white rounded-full p-1 text-black"/>
            <span className=" text-[20px] font-normal"> 24/7 Service</span>
        </div>
       </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
                <span>Mall </span>
            </MenubarItem>
            <MenubarItem>
                <span>Hospital</span>
            </MenubarItem>
           
          </MenubarContent>
        </MenubarMenu>

        {/* <div className="w-[2px] h-9  bg-[#F8F8F8]"></div>

        <MenubarMenu  >
       <MenubarTrigger>
        <div className=" flex items-center gap-2 text-white">
            <span className=" text-[20px] font-normal">Price range:</span>
            <span className=" text-[20px] font-normal">$100 - $1000</span>
        </div>
       </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
            <span>$1000 - $100000</span>
            </MenubarItem>
            <MenubarItem>
                <span>$100 - $1000</span>
            </MenubarItem>
         
          </MenubarContent>
        </MenubarMenu> */}

       </div>
      </Menubar>
    )
  }
  