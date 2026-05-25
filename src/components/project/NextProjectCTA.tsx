"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NextProjectCTAProps {
  nextProject: {
    slug: string;
    title: string;
    category: string;
  };
}

export default function NextProjectCTA({ nextProject }: NextProjectCTAProps) {
  return (
    <section className="bg-bglight py-32 px-4 md:px-8 border-t border-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Link href={`/projects/${nextProject.slug}`} className="relative z-10 group block text-center max-w-4xl mx-auto cursor-pointer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-bold text-soft uppercase tracking-[0.2em] mb-8 block transition-colors group-hover:text-primary">
            Next Project
          </span>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-skyblue transition-all duration-500">
            {nextProject.title}
          </h2>
          <p className="text-xl text-soft font-medium">
            {nextProject.category}
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm transition-all duration-500 border border-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
