import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import CTA from "@/components/CTA";
import ServiceAnimatedBackground from "@/components/ServiceAnimatedBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Hero from "@/components/services/ecommerce/Hero";
import Benefits from "@/components/services/ecommerce/Benefits";
import Process from "@/components/services/ecommerce/Process";


export async function generateMetadata() {
  const serviceData = getServiceBySlug("ecommerce");

  if (!serviceData) {
    return {
      title: "Service Not Found | The Simbolo",
    };
  }

  return {
    title: "E-Commerce Development & Marketing Services",

    description:
      "Scale your online store with e-commerce website development, Shopify solutions, conversion optimization, paid advertising, content marketing, and growth-focused digital strategies by The Simbolo.",

    alternates: {
      canonical: "https://thesimbolo.com/ecommerce",
    },

    openGraph: {
      title: "E-Commerce Development & Marketing Services | The Simbolo",
      description:
        "Scale your online store with Shopify development, conversion optimization, paid advertising, content marketing, and growth-focused e-commerce strategies.",
      url: "https://thesimbolo.com/ecommerce",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "E-Commerce Development & Marketing Services | The Simbolo",
      description:
        "Scale your online store with Shopify development, conversion optimization, paid advertising, content marketing, and growth-focused e-commerce strategies.",
    },
  };
}

export default async function EcommercePage() {
  const serviceData = getServiceBySlug("ecommerce");
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
