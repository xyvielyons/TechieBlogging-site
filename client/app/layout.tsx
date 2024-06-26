import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en" className="bg-primarycolor">
      <body className="bg-primarycolor max-w-screen-xl transition-all mx-auto">
      <Providers>
        <Toaster/>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </Providers>
        </body>
    </html>
    </SessionProvider>
    
  );
}
