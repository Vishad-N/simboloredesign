import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/video-editing/Hero";
import Benefits from "@/components/services/video-editing/Benefits";
import Process from "@/components/services/video-editing/Process";
import CaseStudy from "@/components/services/video-editing/CaseStudy";

export async function generateMetadata() {
  const serviceData = getServiceBySlug("video-editing");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "Professional Video Editing Services",

    description:
      "Professional video editing services for brands, businesses, creators, and e-commerce companies. From Instagram Reels and YouTube videos to promotional content, motion graphics, and post-production by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/video-editing",
    },

    openGraph: {
      title: "Professional Video Editing Services | The Simbolo",
      description:
        "Professional video editing services including reels editing, promotional videos, YouTube content, motion graphics, post-production, and branded storytelling.",
      url: "https://thesimbolo.com/video-editing",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Professional Video Editing Services | The Simbolo",
      description:
        "Professional video editing services including reels editing, promotional videos, YouTube content, motion graphics, post-production, and branded storytelling.",
    },
  };
}

export default async function VideoEditingPage() {
  const serviceData = getServiceBySlug("video-editing");
  if (!serviceData) notFound();

  return (
    <div className="relative overflow-hidden">
      <ServiceAnimatedBackground />
      <div className="relative z-10">
        <Hero data={serviceData} />
        <Benefits data={serviceData} />
        <Process data={serviceData} />
        <CaseStudy data={serviceData} />
        <ScrollReveal direction="left">
          <CTA />
        </ScrollReveal>
      </div>
    </div>
  );
}
