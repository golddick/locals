import { Topbar } from "./_component/TopBar/Topbar";
import { Sidebar } from "./_component/sidebar/Sidebar";

type Props = {
  children: React.ReactNode
  params: { adminID: string }
}


const RootLayout = async ({ children, params }: Props) => {
  return (
      <div className=" flex min-h-screen w-full  gap-3 bg-[#706A6A1A]">
        <Sidebar  adminID = {params.adminID} />
        <div className="    p-2 w-full  lg:ml-[230px]">
        <Topbar/>
        <div className="flex flex-col ">
        {children}
        </div>
        </div>
      </div>

  );
}

export default RootLayout