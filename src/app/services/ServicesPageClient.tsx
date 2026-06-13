"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Target, LineChart, Layers, Users, Rocket, Search } from "lucide-react";
import { services } from "@/components/Services";
import FloatingArrow from "@/components/ui/FloatingArrow";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const processSteps = [
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Discover",
    description: "We dive deep into your business, market landscape, and audience to uncover core opportunities.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Strategize",
    description: "Developing a tailored, data-driven roadmap to achieve your specific growth objectives.",
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Create",
    description: "Our creative and technical teams bring the strategy to life through stunning design and robust development.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Launch",
    description: "Flawless execution and deployment of your campaigns, products, or new digital presence.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Scale",
    description: "Continuous monitoring, A/B testing, and optimization to maximize ROI and fuel long-term growth.",
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "A collective of industry veterans, creative minds, and technical wizards dedicated to your success.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-blue-600",
  },
  {
    title: "Data-Driven",
    description: "Every creative decision is backed by analytics, ensuring your marketing budget delivers maximum impact.",
    icon: <LineChart className="w-8 h-8 text-white" />,
    color: "bg-teal-500",
  },
  {
    title: "Innovative Approach",
    description: "We stay ahead of digital trends, leveraging the latest technologies to give your brand a competitive edge.",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "bg-purple-600",
  },
  {
    title: "Proven Results",
    description: "A track record of explosive growth, increased engagement, and skyrocketing sales for our partners.",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    color: "bg-emerald-500",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPageClient() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#0a0a0a] text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-primary mb-6 border border-white/10"
            >
              Our Expertise
            </motion.span>
            
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              Digital Growth, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-purple-500">
                Engineered.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              We provide end-to-end digital solutions designed to elevate your brand, engage your audience, and accelerate revenue.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <MagneticWrapper>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-[#35b5b8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-1"
                >
                  Start a Project <FloatingArrow />
                </Link>
              </MagneticWrapper>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">
              Comprehensive Capabilities
            </h2>
            <p className="text-soft text-lg">
              Explore our full suite of services designed to transform your digital presence into a powerful growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between rounded-[32px] border ${service.borderColor} ${service.cardBg} p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.iconBg} ${service.accentColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                      {service.iconPath2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath2} />}
                    </svg>
                  </div>
                  <span className={`text-6xl font-heading font-black tracking-tighter ${service.accentColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                    {service.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.accentColor}`} />
                        <span className="font-semibold text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200/50">
                  <Link
                    href={`/${service.slug}`}
                    className={`inline-flex items-center gap-2 font-bold text-lg ${service.accentColor} group/link transition-opacity hover:opacity-80`}
                  >
                    Explore Service <FloatingArrow />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Our Methodology
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">
              How We Deliver Success
            </h2>
            <p className="text-soft text-lg">
              A transparent, agile process designed to ensure alignment, minimize friction, and maximize impact.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-dark mb-3">{step.title}</h3>
                  <p className="text-sm text-soft leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-6">
                Why Partner With <span className="text-primary">The Simbolo?</span>
              </h2>
              <p className="text-lg text-soft mb-8 leading-relaxed">
                We don't just execute tasks; we become an extension of your team. Our holistic approach ensures that every creative asset, marketing campaign, and technical deployment works in harmony to drive your business forward.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Dedicated Account Managers",
                  "Transparent Performance Reporting",
                  "Award-Winning Creative Team",
                  "Agile & Responsive Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark font-medium">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-dark hover:text-primary transition-colors"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                  <p className="text-soft text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-8"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how our services can help you achieve your most ambitious growth targets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticWrapper>
              <Link
                href="/contact"
                className="bg-white text-dark hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticWrapper>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
