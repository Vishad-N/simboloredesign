import Image from "next/image";
import Link from "next/link";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ServiceData } from "@/data/services";

export default function Hero({ data }: { data: ServiceData }) {
  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 ${data.heroImage ? 'overflow-hidden' : ''}`}>
      {!data.heroImage && (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="absolute top-20 right-[-10%] -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-40 left-[-10%] -z-10 w-96 h-96 bg-skyblue/10 rounded-full blur-3xl opacity-50" />
        </>
      )}
      {data.heroImage && <ServiceHeroImage image={data.heroImage} />}

      <div className="max-w-[1320px] mx-auto text-center relative z-10">
        <ScrollReveal direction="left">
          <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-8">
            <Image src={data.icon} alt={data.title} width={24} height={24} className="w-6 h-6 object-contain" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">{data.title}</span>
          </div>
          <h1 className={`font-heading text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 ${data.heroImage ? 'text-white' : 'text-dark'}`}>
            {data.shortDescription}
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${data.heroImage ? 'text-white/90' : 'text-soft'}`}>
            {data.overview}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticWrapper glowColor="primary">
              <Link href="/contact" className="inline-block bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-glow-primary hover:-translate-y-1 block">
                Start Your Project
              </Link>
            </MagneticWrapper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
