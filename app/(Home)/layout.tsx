import Footer from "@/components/_component/Footer/Footer";
import TopNav from "@/components/_component/TopNav/TopNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="relative w-full mx-auto min-h-screen justify-between   flex flex-col gap-2 hidden-scrollbar">
        <TopNav/>
        {children}
        <Footer/>
      </div>

  );
}
