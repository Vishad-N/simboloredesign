"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-skyblue/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-dark leading-[1.1] tracking-tight mb-8">
            We Build Modern <span className="text-gradient-primary">Digital</span> <br className="hidden md:block" />
            Experiences.
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-soft max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We help brands grow online with creative design, smart strategy, and modern technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-glow-primary hover:-translate-y-1">
              Read Our Story
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-soft font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
