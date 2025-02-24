import type { Metadata } from "next";
import { Noto_Sans as NotoSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSans = NotoSans({ 
  subsets: ["latin"],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "FiqhCompare - Comparative Islamic Jurisprudence",
  description: "Compare rulings across the four major Islamic schools of thought: Hanafi, Maliki, Shafi'i, and Hanbali.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${notoSans.variable}
          font-body min-h-screen flex flex-col
          selection:bg-primary-200 selection:text-primary-900
          bg-gradient-to-br from-gray-50 via-white to-gray-100`}
      >
        {/* Background Pattern Layer */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-geometric-pattern opacity-[0.15] mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-50/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary-50/20 to-transparent"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
