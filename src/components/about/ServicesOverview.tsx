"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Branding", description: "Creating logos and brand identities that stand out.", colSpan: "col-span-1 md:col-span-2", delay: 0.1 },
  { title: "UI/UX Design", description: "Clean and modern designs for websites and apps.", colSpan: "col-span-1", delay: 0.2 },
  { title: "Web Development", description: "Fast and secure websites built for growth.", colSpan: "col-span-1", delay: 0.3 },
  { title: "Motion Graphics", description: "Creative videos that grab attention.", colSpan: "col-span-1 md:col-span-2", delay: 0.4 },
  { title: "AI Visuals", description: "Smart AI tools for unique and beautiful images.", colSpan: "col-span-1 md:col-span-2", delay: 0.5 },
  { title: "Content Creation", description: "High-quality content that helps you sell more.", colSpan: "col-span-1", delay: 0.6 },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 relative bg-bglight">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6"
          >
            What We <span className="text-gradient-primary">Do</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft"
          >
            We offer a range of services to help your business succeed online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay, ease: "easeOut" }}
              className={`${service.colSpan} glass-card p-8 md:p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden`}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-soft leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
