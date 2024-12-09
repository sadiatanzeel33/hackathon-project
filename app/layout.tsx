import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniture-Store",
  description: "Welcome to my Furniture-store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
