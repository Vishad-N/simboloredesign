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
  if (!serviceData) return { title: "Service Not Found" };
  return {
    title: `${serviceData.title} Services | Simbolo Agency`,
    description: serviceData.overview,
    openGraph: { title: `${serviceData.title} Services | Simbolo`, description: serviceData.overview, type: "website" },
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
