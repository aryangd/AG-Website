import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${poppins.variable} ${inter.variable} relative min-h-screen bg-black text-white`}>
      <body className="relative min-h-full flex flex-col antialiased">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
