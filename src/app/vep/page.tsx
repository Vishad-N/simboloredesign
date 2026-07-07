import { Metadata } from "next";
import VepClient from "./VepClient";

export const metadata: Metadata = {
  title: "Video Editing Portfolio | The Simbolo",
  description: "Explore premium video editing, motion graphics, UGC content, podcast editing, and post-production work by The Simbolo.",
  alternates: {
    canonical: "https://thesimbolo.com/vep",
  },
  openGraph: {
    title: "Video Editing Portfolio | The Simbolo",
    description: "Explore premium video editing, motion graphics, UGC content, podcast editing, and post-production work by The Simbolo.",
    url: "https://thesimbolo.com/vep",
    type: "website",
    images: [
      {
        url: "/assets/logo1.png", 
        width: 1200,
        height: 630,
        alt: "The Simbolo Video Editing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing Portfolio | The Simbolo",
    description: "Explore premium video editing, motion graphics, UGC content, podcast editing, and post-production work by The Simbolo.",
  },
};

export default function VepPage() {
  return <VepClient />;
}
