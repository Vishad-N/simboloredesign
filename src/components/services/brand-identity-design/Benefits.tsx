import ScrollReveal from "@/components/ui/ScrollReveal";
import LiquidCard from "@/components/ui/LiquidCard";
import { ServiceData } from "@/data/services";

export default function Benefits({ data }: { data: ServiceData }) {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <section className="py-24 px-4 md:px-8 bg-white/40 backdrop-blur-xl relative">
        <div className="max-w-[1320px] mx-auto">
          <ScrollReveal direction="left" className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">Why Choose Us</h2>
            <p className="text-soft text-lg max-w-2xl mx-auto">Our specialized approach ensures you get industry-leading results.</p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((benefit, i) => (
              <LiquidCard key={i} className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-glow-primary transition-shadow duration-500 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {i + 1}
                </div>
                {typeof benefit === "string" ? (
                  <h3 className="font-heading text-xl font-bold text-dark leading-tight group-hover:text-white transition-colors duration-500">{benefit}</h3>
                ) : (
                  <div>
                    <h3 className="font-heading text-xl font-bold text-dark leading-tight mb-3 group-hover:text-white transition-colors duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-soft leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      {benefit.description}
                    </p>
                  </div>
                )}
              </LiquidCard>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
