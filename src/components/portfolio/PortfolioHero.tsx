"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import FloatingArrow from "@/components/ui/FloatingArrow";

const metrics = [
  { label: "Revenue Generated", value: "$10M+" },
  { label: "Leads Generated", value: "50k+" },
  { label: "Ad Spend Managed", value: "$2M+" },
  { label: "Average ROAS", value: "4.5x" },
  { label: "Client Retention", value: "95%" },
];

export default function PortfolioHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#f6f4ec] via-[#e8efdd] to-[#d7eccd]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,transparent_100%)]" />

      {/* Floating abstract shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block bg-white text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm mb-4">
            Our Portfolio
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark leading-tight tracking-tight mb-6">
            Driving Measurable <br className="hidden md:block" />
            Growth Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-skyblue">Digital Marketing</span>
          </h1>
          <p className="text-soft text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We transform brands through data-driven strategies, creative excellence, and relentless execution. Explore how we've helped our clients scale their businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <MagneticWrapper glowColor="primary">
            <button
              onClick={() => {
                document.getElementById('portfolio-results')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-glow-primary hover:-translate-y-1 block w-full sm:w-auto"
            >
              View Portfolio
            </button>
          </MagneticWrapper>
          <MagneticWrapper glowColor="dark">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-dark hover:bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Book Free Consultation
              <FloatingArrow>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </FloatingArrow>
            </Link>
          </MagneticWrapper>
        </motion.div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-dark mb-2">{metric.value}</h3>
              <p className="text-sm font-medium text-soft uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
