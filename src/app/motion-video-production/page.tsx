import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/motion-video-production/Hero";
import Benefits from "@/components/services/motion-video-production/Benefits";
import Process from "@/components/services/motion-video-production/Process";


export async function generateMetadata() {
  const serviceData = getServiceBySlug("motion-video-production");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "Video Production Services",

    description:
      "Professional video production services including brand films, commercial shoots, product videos, corporate videos, social media content, and creative storytelling by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/motion-video-production",
    },

    openGraph: {
      title: "Video Production Services | The Simbolo",
      description:
        "Professional video production services including brand films, commercial shoots, product videos, corporate videos, social media content, and creative storytelling.",
      url: "https://thesimbolo.com/motion-video-production",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Video Production Services | The Simbolo",
      description:
        "Professional video production services including brand films, commercial shoots, product videos, corporate videos, social media content, and creative storytelling.",
    },
  };
}

export default async function MotionVideoProductionPage() {
  const serviceData = getServiceBySlug("motion-video-production");
  if (!serviceData) notFound();

  return (
    <div className="relative overflow-hidden">
      <ServiceAnimatedBackground />
      <div className="relative z-10">
        <Hero data={serviceData} />
        <Benefits data={serviceData} />
        <Process data={serviceData} />

        <ScrollReveal direction="left">
          <CTA />
        </ScrollReveal>
      </div>
    </div>
  );
}
