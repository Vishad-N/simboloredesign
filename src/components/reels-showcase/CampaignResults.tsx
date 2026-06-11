"use client";

import { motion } from "framer-motion";
import { metricsData } from "@/data/reelsShowcaseData";

export default function CampaignResults() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(53,181,184,0.1)_0%,transparent_70%)]" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            Proven Impact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Campaign Results & Impact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just create pretty videos. We build content engines that generate measurable ROI and sustainable brand growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {metricsData.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl hover:bg-white/10 transition-colors text-center"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-3">{metric.value}</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
