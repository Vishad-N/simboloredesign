import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/InquiryPopup";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Simbolo | Modern Creative Agency",
  description:
    "From stunning designs to powerful campaigns, we build digital experiences that drive real results for your brand.",
  openGraph: {
    title: "Simbolo | Modern Creative Agency",
    description: "Premium digital experiences, branding, and conversion-focused campaigns.",
    url: "https://simbolo.agency",
    siteName: "Simbolo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simbolo | Modern Creative Agency",
    description: "Premium digital experiences, branding, and conversion-focused campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased selection:bg-primary selection:text-white relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <InquiryPopup />
      </body>
    </html>
  );
}
