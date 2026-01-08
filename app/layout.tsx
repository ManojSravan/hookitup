import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Sidebar } from "@/components/sections/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HookItUp - Custom React Hooks Collection",
  description: "A comprehensive collection of custom React hooks for modern web development. Production-ready hooks for animations, state management, utilities, and performance optimization.",
  keywords: [
    "react hooks",
    "custom hooks",
    "react utilities",
    "typescript hooks",
    "react library",
    "frontend development",
    "nextjs hooks",
    "animation hooks",
    "state management",
    "web development"
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "HookItUp - Custom React Hooks Collection",
    description: "Level up your React development with powerful, production-ready custom hooks",
    type: "website",
    locale: "en_US",
    siteName: "HookItUp",
  },
  twitter: {
    card: "summary_large_image",
    title: "HookItUp - Custom React Hooks Collection",
    description: "A comprehensive collection of custom React hooks for modern web development",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto">
          <Header/>
        <Sidebar/>
        {children}
        </div>
      </body>
    </html>
  );
}
