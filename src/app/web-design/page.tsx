import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/web-design/Hero";
import Benefits from "@/components/services/web-design/Benefits";
import Process from "@/components/services/web-design/Process";


export async function generateMetadata() {
  const serviceData = getServiceBySlug("web-design");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "Website Design Services",

    description:
      "Professional website design services focused on user experience, responsive layouts, UI/UX design, landing pages, conversion optimization, and premium digital experiences by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/web-design",
    },

    openGraph: {
      title: "Website Design Services | The Simbolo",
      description:
        "Modern website design, UI/UX design, responsive web experiences, landing pages, and conversion-focused digital solutions.",
      url: "https://thesimbolo.com/web-design",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Website Design Services | The Simbolo",
      description:
        "Modern website design, UI/UX design, responsive web experiences, landing pages, and conversion-focused digital solutions.",
    },
  };
}

export default async function WebDesignPage() {
  const serviceData = getServiceBySlug("web-design");
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
