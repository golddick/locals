import type { Metadata } from "next";
import localFont from "next/font/local";
import {Roboto, Manrope} from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const manrope = Manrope({
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Locals",
  description: "Find Your Local Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
