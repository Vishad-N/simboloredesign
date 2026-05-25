"use client";

import { motion } from "framer-motion";

interface ProjectOverviewProps {
  overview: {
    challenge: string;
    solution: string;
    deliverables: string[];
    timeline: string;
    tools: string[];
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24">
        {/* Left Column: Challenge & Solution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-soft uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-soft/30" /> The Challenge
            </h2>
            <p className="font-heading text-3xl md:text-4xl text-dark font-medium leading-tight">
              {overview.challenge}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-soft uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-soft/30" /> The Solution
            </h2>
            <p className="text-lg md:text-xl text-soft leading-relaxed">
              {overview.solution}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Metadata */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="bg-bglight rounded-[40px] p-8 md:p-12 border border-white shadow-sm"
        >
          <div className="grid gap-10">
            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Deliverables</h3>
              <ul className="space-y-3">
                {overview.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-soft font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Timeline</h3>
              <p className="text-soft font-medium">{overview.timeline}</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {overview.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white text-dark text-sm font-semibold px-4 py-2 rounded-full shadow-sm border border-gray-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
