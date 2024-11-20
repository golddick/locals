import Footer from "@/components/_component/Footer/Footer";
import TopNav from "@/components/_component/TopNav/TopNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="relative w-full h-auto  flex flex-col gap-2">
        <TopNav/>
        {children}
        <Footer/>
      </div>

  );
}
