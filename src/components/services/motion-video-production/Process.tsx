import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidCard from "@/components/ui/LiquidCard";
import { ServiceData } from "@/data/services";

export default function Process({ data }: { data: ServiceData }) {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-skyblue/10 to-transparent" />
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-bglight/30 backdrop-blur-lg">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScrollReveal direction="left" className="lg:w-1/3">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6">Our Workflow</h2>
              <p className="text-soft text-lg leading-relaxed mb-8">
                A tested, transparent, and efficient process designed to deliver exceptional work on time, every time.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {data.process.map((step) => (
                <LiquidCard key={step.step} className="bg-white/70 backdrop-blur-md border border-white/60 p-8 rounded-[32px] shadow-sm hover:shadow-glow-skyblue transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-skyblue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-primary font-heading font-black text-3xl opacity-80 mb-4 block group-hover:text-skyblue transition-colors duration-500">{step.step}</span>
                  <h3 className="text-dark font-bold text-xl mb-3 group-hover:text-white transition-colors duration-500">{step.title}</h3>
                  <p className="text-soft leading-relaxed group-hover:text-white/80 transition-colors duration-500">{step.description}</p>
                </LiquidCard>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
