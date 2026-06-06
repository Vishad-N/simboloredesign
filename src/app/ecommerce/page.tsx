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
  if (!serviceData) return { title: "Service Not Found" };
  return {
    title: `${serviceData.title} Services | Simbolo Agency`,
    description: serviceData.overview,
    openGraph: { title: `${serviceData.title} Services | Simbolo`, description: serviceData.overview, type: "website" },
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
