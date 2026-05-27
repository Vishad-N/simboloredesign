"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  { num: "01", title: "Discover", desc: "We learn about your brand and goals." },
  { num: "02", title: "Strategy", desc: "We create a clear plan for your project." },
  { num: "03", title: "Design", desc: "We design beautiful and modern screens." },
  { num: "04", title: "Develop", desc: "We build fast and secure software." },
  { num: "05", title: "Launch", desc: "We launch your project and help it grow." },
];

export default function WorkflowTimeline() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6">
            How We <span className="text-gradient-primary">Work</span>.
          </h2>
          <p className="text-lg text-soft max-w-2xl mx-auto">
            Our simple step-by-step process for building your project.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-[50%] w-[2px] bg-gradient-to-b from-primary/10 via-primary/30 to-primary/5 -translate-x-[1px]" />

          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  {/* Content Left (for even items on md breakpoint) */}
                  <div className={`md:w-1/2 md:pr-16 pl-16 md:pl-0 text-left ${isEven ? 'md:text-right' : 'md:order-2 md:pl-16 md:text-left'}`}>
                    <div className={`hidden md:block text-5xl font-heading font-bold text-primary/10 mb-2 ${isEven ? 'mr-[-10px]' : 'ml-[-10px]'}`}>
                      {step.num}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-dark mb-2">{step.title}</h3>
                    <p className="text-soft leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-bglight flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-soft z-10">
                    <span className="text-primary font-bold text-sm">{step.num}</span>
                  </div>

                  {/* Empty Spacer for flex alignment */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:order-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
