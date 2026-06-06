"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket, Activity, ArrowUpRight } from "lucide-react";

const steps = [
  { id: "01", title: "Discover", desc: "Understanding your brand, audience, and goals.", icon: <Search className="w-6 h-6 text-blue-500" /> },
  { id: "02", title: "Research", desc: "Analyzing competitors and market opportunities.", icon: <Lightbulb className="w-6 h-6 text-amber-500" /> },
  { id: "03", title: "Strategy", desc: "Crafting a data-driven marketing blueprint.", icon: <PenTool className="w-6 h-6 text-purple-500" /> },
  { id: "04", title: "Execution", desc: "Launching campaigns across optimal channels.", icon: <Rocket className="w-6 h-6 text-primary" /> },
  { id: "05", title: "Optimization", desc: "A/B testing and refining for maximum ROI.", icon: <Activity className="w-6 h-6 text-emerald-500" /> },
  { id: "06", title: "Scale", desc: "Increasing budget on winning formulas.", icon: <ArrowUpRight className="w-6 h-6 text-red-500" /> },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-gray-50 text-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Our Agency Process
          </h2>
          <p className="text-soft text-lg max-w-2xl mx-auto">
            A systematic, predictable approach to scaling your brand and delivering consistent results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-primary to-red-400 -translate-y-1/2 origin-left"
          />

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gray-100" />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-primary to-red-400 origin-top"
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex flex-row md:flex-col items-center md:text-center group pl-16 md:pl-0"
              >
                {/* Number Badge */}
                <div className="absolute left-0 md:relative md:mb-6 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300 z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-dark text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 md:mt-6 w-full">
                  <h3 className="font-bold text-dark text-lg mb-2">{step.title}</h3>
                  <p className="text-soft text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
