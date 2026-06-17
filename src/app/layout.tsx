import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryPopup from "@/components/InquiryPopup";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingProgressIndicator from "@/components/ui/LoadingProgressIndicator";
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
  metadataBase: new URL("https://thesimbolo.com"),
  title: {
    default: "The Simbolo | Digital Marketing, Branding & Web Development Agency",
    template: "%s | The Simbolo",
  },
  description:
    "From stunning designs to powerful campaigns, we build digital experiences that drive real results for your brand.",
  alternates: {
    canonical: "https://thesimbolo.com",
  },
  openGraph: {
    title: "The Simbolo | Digital Marketing, Branding & Web Development Agency",
    description: "Premium digital experiences, branding, and conversion-focused campaigns.",
    url: "https://thesimbolo.com",
    siteName: "The Simbolo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Simbolo | Digital Marketing, Branding & Web Development Agency",
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
        <LoadingScreen />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <InquiryPopup />
        <CustomCursor />
        <Suspense fallback={null}>
          <LoadingProgressIndicator />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Simbolo",
              url: "https://thesimbolo.com",
              logo: "https://thesimbolo.com/assets/logo1.png",
              email: "info@thesimbolo.com",
              telephone: "+91 8982948199",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st Floor The Simbolo Multimedia, Plot No. ED/149, Ring Rd, near Khajrana Square, IDA Scheme",
                addressLocality: "Indore",
                addressRegion: "Madhya Pradesh",
                postalCode: "452016",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/the_simbolo_",
                "https://www.linkedin.com/company/thesimbolomultimedia/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
