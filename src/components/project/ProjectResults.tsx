"use client";

import { motion } from "framer-motion";

interface ProjectResultsProps {
  results: {
    label: string;
    value: string;
  }[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,196,127,0.1)_0%,transparent_70%)] -z-10" />

      <div className="max-w-[1320px] mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {results.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="pt-12 md:pt-0 flex flex-col items-center justify-center">
              <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-4 tracking-tight drop-shadow-sm">
                {stat.value}
              </div>
              <p className="text-white/60 text-lg uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
