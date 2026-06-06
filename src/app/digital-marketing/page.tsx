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
  if (!serviceData) return { title: "Service Not Found" };
  return {
    title: `${serviceData.title} Services | Simbolo Agency`,
    description: serviceData.overview,
    openGraph: { title: `${serviceData.title} Services | Simbolo`, description: serviceData.overview, type: "website" },
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
