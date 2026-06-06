import Image from "next/image";
import Link from "next/link";
import FloatingArrow from "@/components/ui/FloatingArrow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidCard from "@/components/ui/LiquidCard";
import { ServiceData } from "@/data/services";

export default function CaseStudy({ data }: { data: ServiceData }) {
  if (!data.caseStudy) return null;

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple/10 to-transparent" />
      <section className="py-24 px-4 md:px-8 bg-white/20 backdrop-blur-lg relative">
        <div className="max-w-[1320px] mx-auto">
          <LiquidCard className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-white/60 shadow-xl shadow-black/5 hover:shadow-glow-primary transition-shadow duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-skyblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <ScrollReveal direction="left" className="lg:w-1/2 space-y-6">
                <div className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1.5 rounded-full tracking-widest uppercase group-hover:bg-primary/20 group-hover:text-white transition-colors duration-500">
                  Featured Case Study
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark group-hover:text-white transition-colors duration-500">{data.caseStudy.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-skyblue rounded-full" />
                <p className="text-2xl font-medium text-dark/80 leading-snug group-hover:text-white/90 transition-colors duration-500">{data.caseStudy.result}</p>
                <Link href="/#portfolio" className="group/link inline-flex items-center gap-2 font-bold text-primary hover:text-dark group-hover:text-skyblue transition-colors">
                  View Full Portfolio <FloatingArrow />
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" className="lg:w-1/2 w-full">
                <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                  {data.caseStudy.image && (
                    <Image src={data.caseStudy.image} alt="Case study" fill className="object-cover" />
                  )}
                </div>
              </ScrollReveal>
            </div>
          </LiquidCard>
        </div>
      </section>
    </>
  );
}
