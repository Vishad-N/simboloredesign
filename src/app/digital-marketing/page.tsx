import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/digital-marketing/Hero";
import Benefits from "@/components/services/digital-marketing/Benefits";
import Process from "@/components/services/digital-marketing/Process";


export async function generateMetadata() {
  const serviceData = getServiceBySlug("digital-marketing");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "Digital Marketing Services",

    description:
      "Grow your business with data-driven digital marketing services including SEO, social media marketing, Google Ads, Meta Ads, content marketing, lead generation, and performance-driven campaigns by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/digital-marketing",
    },

    openGraph: {
      title: "Digital Marketing Services | The Simbolo",
      description:
        "Grow your business with data-driven digital marketing services including SEO, social media marketing, Google Ads, Meta Ads, content marketing, lead generation, and performance-driven campaigns.",
      url: "https://thesimbolo.com/digital-marketing",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Digital Marketing Services | The Simbolo",
      description:
        "Grow your business with data-driven digital marketing services including SEO, social media marketing, Google Ads, Meta Ads, content marketing, lead generation, and performance-driven campaigns.",
    },
  };
}

export default async function DigitalMarketingPage() {
  const serviceData = getServiceBySlug("digital-marketing");
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
