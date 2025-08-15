import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/SkeletonFallback";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Tsai - Backend Engineer",
  description: "Backend Engineer with expertise in developing and integrating RESTful APIs, optimizing database performance, and managing AWS infrastructure. Proficient in C#, MSSQL, and modular coding practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-5",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Navbar />
        <Suspense fallback={<PageSkeleton />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
