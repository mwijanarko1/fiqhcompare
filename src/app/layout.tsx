import type { Metadata } from "next";
import { Noto_Sans as NotoSans, Amiri_Quran as AmiriQuran, Amiri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSans = NotoSans({ 
  subsets: ["latin"],
  variable: '--font-body',
});

const amiriQuran = AmiriQuran({ 
  subsets: ["arabic"],
  variable: '--font-display',
  weight: "400"
});

const amiri = Amiri({ 
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: '--font-arabic'
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
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body 
        className={`${notoSans.variable} ${amiriQuran.variable} ${amiri.variable} 
          font-body min-h-screen flex flex-col bg-gray-50
          selection:bg-primary-200 selection:text-primary-900`}
      >
        <LanguageProvider>
          <div className="fixed inset-0 bg-geometric-pattern opacity-5 pointer-events-none" />
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8 relative">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
