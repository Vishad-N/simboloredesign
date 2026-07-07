import { Metadata } from "next";
import WbpClient from "./WbpClient";

export const metadata: Metadata = {
  title: "Website Portfolio | The Simbolo",
  description: "Explore premium websites designed and developed by The Simbolo. Discover ecommerce stores, business websites, SaaS platforms, and digital experiences built for growth.",
  alternates: {
    canonical: "https://thesimbolo.com/wbp",
  },
  openGraph: {
    title: "Website Portfolio | The Simbolo",
    description: "Explore premium websites designed and developed by The Simbolo. Discover ecommerce stores, business websites, SaaS platforms, and digital experiences built for growth.",
    url: "https://thesimbolo.com/wbp",
    type: "website",
    images: [
      {
        url: "/assets/logo1.png", 
        width: 1200,
        height: 630,
        alt: "The Simbolo Website Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Portfolio | The Simbolo",
    description: "Explore premium websites designed and developed by The Simbolo. Discover ecommerce stores, business websites, SaaS platforms, and digital experiences built for growth.",
  },
};

export default function WbpPage() {
  return <WbpClient />;
}
