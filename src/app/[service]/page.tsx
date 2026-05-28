import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, servicesData } from "@/data/services";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return servicesData.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const serviceData = getServiceBySlug(slug);

  if (!serviceData) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${serviceData.title} Services | Simbolo Agency`,
    description: serviceData.overview,
    openGraph: {
      title: `${serviceData.title} Services | Simbolo`,
      description: serviceData.overview,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const serviceData = getServiceBySlug(slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <div className="bg-bglight overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-bglight" />
        <div className="absolute top-20 right-[-10%] -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-40 left-[-10%] -z-10 w-96 h-96 bg-skyblue/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-[1320px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-8">
            <Image src={serviceData.icon} alt={serviceData.title} width={24} height={24} className="w-6 h-6 object-contain" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">{serviceData.title}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
            {serviceData.shortDescription}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-soft leading-relaxed">
            {serviceData.overview}
          </p>
          <div className="mt-10">
            <Link href="/contact" className="inline-block bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-glow-primary hover:-translate-y-1">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-8 bg-white relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">Why Choose Us</h2>
            <p className="text-soft text-lg max-w-2xl mx-auto">Our specialized approach ensures you get industry-leading results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.benefits.map((benefit, i) => (
              <div key={i} className="bg-bglight p-8 rounded-3xl border border-black/5 hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                {typeof benefit === "string" ? (
                  <h3 className="font-heading text-xl font-bold text-dark leading-tight">{benefit}</h3>
                ) : (
                  <div>
                    <h3 className="font-heading text-xl font-bold text-dark leading-tight mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-soft leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-bglight">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6">Our Workflow</h2>
              <p className="text-soft text-lg leading-relaxed mb-8">
                A tested, transparent, and efficient process designed to deliver exceptional work on time, every time.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {serviceData.process.map((step) => (
                <div key={step.step} className="bg-white border border-black/5 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-primary font-heading font-black text-3xl opacity-80 mb-4 block">{step.step}</span>
                  <h3 className="text-dark font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-soft leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Feature */}
      {!["brand-identity-design", "digital-marketing", "motion-video-production", "web-design", "ecommerce"].includes(slug) && (
        <section className="py-24 px-4 md:px-8 bg-bglight">
          <div className="max-w-[1320px] mx-auto">
            <div className="bg-white rounded-[40px] p-8 md:p-16 border border-black/5 shadow-xl shadow-black/5 overflow-hidden relative">
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1.5 rounded-full tracking-widest uppercase">
                    Featured Case Study
                  </div>
                  <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark">{serviceData.caseStudy?.title}</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-skyblue rounded-full" />
                  <p className="text-2xl font-medium text-dark/80 leading-snug">{serviceData.caseStudy?.result}</p>
                  <Link href="/#portfolio" className="inline-flex items-center gap-2 font-bold text-primary hover:text-dark transition-colors">
                    View Full Portfolio &rarr;
                  </Link>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                    {serviceData.caseStudy?.image && (
                      <Image src={serviceData.caseStudy.image} alt="Case study" fill className="object-cover" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTA />
    </div>
  );
}
