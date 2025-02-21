// import { useAdminID } from "@/hooks/use-get-adminID"
// import { DashboardIcon } from "@radix-ui/react-icons"
// import { BanknoteIcon, BellIcon, UsersRoundIcon } from "lucide-react"


// export type FieldProps = {
//   label: string
//   url: string
//   id: number
// }

// type SideBarProps = {
//   icon: React.ReactNode
// } & FieldProps

// export const SIDEBAR_MENU: SideBarProps[] = [

//   const adminID = useAdminID();

//   {
//     id: 1,
//     label: 'Dashboard',
//     url:`/admin/${adminID}/dashboard`,
//     icon: <DashboardIcon  className=" size-5" />,  
//   },
//   {
//     id: 2,
//     label: 'User Management',
//     url:'user_management',
//     icon: <UsersRoundIcon  className=" size-5"/>,
//   },
//   {
//     id: 3,
//     label: 'Subscription Management',
//     url:'sub_management',
//     icon: <BanknoteIcon   className=" size-5"/>,
//   },
//   {
//     id: 4,
//     label: 'Notification',
//     url:'notification',
//     icon: <BellIcon   className=" size-5"/>,
//   },
// ]



import { useAdminID } from "@/hooks/use-get-adminID";
import { DashboardIcon } from "@radix-ui/react-icons";
import { BanknoteIcon, BellIcon, UsersRoundIcon } from "lucide-react";

export type FieldProps = {
  label: string;
  url: string;
  id: number;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU = (): SideBarProps[] => {
  const adminID = useAdminID();

  return [
    {
      id: 1,
      label: "Dashboard",
      url: `/admin/${adminID}/dashboard`,
      icon: <DashboardIcon className="size-5" />,  
    },
    {
      id: 2,
      label: "User Management",
      url: `/admin/${adminID}/user_management`,
      icon: <UsersRoundIcon className="size-5" />,  
    },
    {
      id: 3,
      label: "Subscription Management",
      url: `/admin/${adminID}/sub_management`,
      icon: <BanknoteIcon className="size-5" />,  
    },
    {
      id: 4,
      label: "Notification",
      url: `/admin/${adminID}/notification`,
      icon: <BellIcon className="size-5" />,  
    },
  ];
};


export const TOPBAR_MENU = (): FieldProps[] => {
  const adminID = useAdminID();

  return [
    {
      id: 1,
      label: "Summary",
      url: `/admin/${adminID}/dashboard`,
    },
    {
      id: 2,
      label: "Business Listing",
      url: `/admin/${adminID}/business_listing`,
    },
    {
      id: 3,
      label: "Special Service Request",
      url: `/admin/${adminID}/special_service_request`,
    },
  ];
};