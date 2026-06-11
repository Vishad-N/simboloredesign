"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

export default function ReelsHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark text-white pt-24 pb-16">
      {/* Background gradients & Video placeholder overlay */}

      <div className="absolute inset-0 z-0">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-50"
          poster="/content.jpg"
        >
          <source src="/backgroundReelHero.mp4" type="video/mp4" />
        </video>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-10" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 w-full z-20 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block bg-white/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm mb-6 border border-white/10">
            Reels & Campaigns
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Stories That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Stop The Scroll.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            High-performing reels, ad films, and content campaigns crafted to drive engagement, visibility, and conversions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('instagram-gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-2 bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-1 w-full sm:w-auto"
          >
            <Play className="w-5 h-5 fill-white" />
            View Our Work
          </button>

          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            Start Your Campaign
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
