"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
      {/* Decorative blobs */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
        className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-skyblue/12 blur-3xl"
      />

      <div className="mx-auto max-w-[1320px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          Blog &amp; Insights
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Creative Ideas &amp;{" "}
          <span className="text-gradient-green">Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-soft md:text-xl"
        >
          Discover expert articles on design, branding, digital marketing, and
          the creative strategies shaping the future of visual storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link 
            href="/admin" 
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/50 px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:bg-white hover:text-primary transition-all shadow-sm backdrop-blur-sm"
          >
            <Lock size={12} />
            Admin Login
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
