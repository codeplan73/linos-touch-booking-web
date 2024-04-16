import type { Metadata } from "next";
import { Inter as FontSans, Heebo } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const heebo = Heebo({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Linos-Touch",
  description: "Generated by create next app",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className={`${heebo.className}, ${cn(fontSans.variable)}`}>
          <div className="w-full flex flex-col">
            <Sidebar />
            <div className="md:ml-56 flex flex-col">
              <Navbar />
              <main className="p-6 bg-slate-100 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
