import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/brand-identity-design/Hero";
import Benefits from "@/components/services/brand-identity-design/Benefits";
import Process from "@/components/services/brand-identity-design/Process";


export async function generateMetadata() {
  const serviceData = getServiceBySlug("brand-identity-design");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "Brand Identity Design Services",

    description:
      "Build a memorable brand with logo design, visual identity systems, brand strategy, packaging design, and creative branding solutions by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/brand-identity-design",
    },

    openGraph: {
      title: "Brand Identity Design Services | The Simbolo",
      description:
        "Build a memorable brand with logo design, visual identity systems, brand strategy, packaging design, and creative branding solutions.",
      url: "https://thesimbolo.com/brand-identity-design",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Brand Identity Design Services | The Simbolo",
      description:
        "Build a memorable brand with logo design, visual identity systems, brand strategy, packaging design, and creative branding solutions.",
    },
  };
}

export default async function BrandIdentityDesignPage() {
  const serviceData = getServiceBySlug("brand-identity-design");
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
