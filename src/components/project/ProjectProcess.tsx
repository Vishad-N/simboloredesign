"use client";

import { motion } from "framer-motion";

interface ProjectProcessProps {
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function ProjectProcess({ process }: ProjectProcessProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="mb-16 md:mb-24 text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-sm font-bold text-soft uppercase tracking-[0.2em] mb-4">
            Workflow
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-extrabold text-dark tracking-tight">
            How We Did It
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {process.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-soft transition-shadow duration-500 group"
            >
              <div className="text-5xl font-heading font-extrabold text-primary/10 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                {item.step}
              </div>
              <h4 className="font-heading text-xl font-bold text-dark mb-4">
                {item.title}
              </h4>
              <p className="text-soft font-medium leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
