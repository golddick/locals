import TopLogo from "./_component/TopLogo/TopLogo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="relative w-full h-auto  ">
        <TopLogo/>
        {children}
      </div>

  );
}
