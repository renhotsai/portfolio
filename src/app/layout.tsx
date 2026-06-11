import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/SkeletonFallback";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeremy Tsai — Backend & Full-Stack Engineer",
    template: "%s | Jeremy Tsai",
  },
  description: "Jeremy Tsai — Backend & Full-Stack Engineer based in Toronto. 2+ years building APIs, cloud infrastructure (AWS/Azure), and production-ready apps in Node.js, TypeScript, and C#.",
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
        <footer className="mt-8 border-t pt-6 pb-4 text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <span>© {new Date().getFullYear()} Jeremy Tsai</span>
            <span className="hidden sm:inline">·</span>
            <Link href="https://www.linkedin.com/in/renho-tsai/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <span className="hidden sm:inline">·</span>
            <Link href="https://github.com/renhotsai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
