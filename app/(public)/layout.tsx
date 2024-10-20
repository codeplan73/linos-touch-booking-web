import type { Metadata } from "next";
import { Inter as FontSans, Heebo } from "next/font/google";
// import  useTriot  from './fonts/font'
import "../globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const heebo = Heebo({ subsets: ["latin"] });

import { cn } from "@/lib/utils";
import AOSProvider from "./AOSProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Linos-Touch",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* <body className={`${heebo.className}, ${cn(fontSans.variable)}`}> */}
        <body className={`${heebo.className}`}>
          <Navbar />
          <AOSProvider />
          <main className="w-full">{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
