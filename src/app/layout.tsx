import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Golla | Portfolio",
  description: "Modern portfolio designed with Next.js, Framer Motion and Lenis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} min-h-screen bg-black text-white`}>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
