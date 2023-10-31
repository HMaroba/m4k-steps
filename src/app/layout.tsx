import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "./_components/Sidebar";
import SidebarMenu from "./_components/SidebarMenu";
import HomeBar from "./_components/SidebarMenu";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M4K Laundry Services",
  description: "Brought to you by M4K Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
      <HomeBar />
        {children}
        </body>
    </html>
  );
}
