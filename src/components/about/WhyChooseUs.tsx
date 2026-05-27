"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Smart Strategy",
    description: "We create plans that help your business succeed.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Beautiful Design",
    description: "We design beautiful graphics that make your brand look great.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Fast & Reliable",
    description: "Our websites are fast, secure, and easy to use.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Great Content",
    description: "We create content that keeps people engaged.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bglight relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-skyblue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-10"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
              Why Work <br/>
              <span className="text-gradient-primary">With Us</span>.
            </h2>
            <p className="text-lg text-soft leading-relaxed mb-8">
              We help companies build digital products that last. Here is why you should choose us.
            </p>
            <div className="inline-flex items-center gap-3 text-dark font-medium pb-2 border-b-2 border-primary">
              Discover our approach
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`glass-card p-8 rounded-3xl ${index % 2 !== 0 ? 'sm:translate-y-12' : ''} hover:bg-white transition-colors duration-300`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{reason.title}</h3>
                <p className="text-sm text-soft leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
