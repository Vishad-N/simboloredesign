"use client";

import { motion } from "framer-motion";
import { type FormEvent } from "react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import FloatingArrow from "@/components/ui/FloatingArrow";

const contactDetails = [
  {
    label: "Email",
    value: "info@thesimbolo.com",
    href: "mailto:info@thesimbolo.com",
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    accent: "text-primary bg-primary/10",
  },
  {
    label: "Phone",
    value: "+91 89829 48199",
    href: "tel:+918982948199",
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z",
    accent: "text-skyblue bg-skyblue/10",
  },
  {
    label: "Address",
    value: "1st Floor, Plot No. ED/149, Ring Rd, near Khajrana Square, Indore, MP 452016",
    href: "https://maps.google.com/?q=1st+Floor+Plot+No+ED/149+Ring+Rd+near+Khajrana+square+Indore+Madhya+Pradesh+452016+India",
    iconPath:
      "M17.66 16.66 13.41 20.9a2 2 0 01-2.82 0l-4.25-4.24a8 8 0 1111.32 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    accent: "text-purple bg-purple/10",
  },
];

const services = [
  "Google Ads",
  "AI Agent",
  "Automation",
  "Web Dev",
  "Social Media",
  "WhatsApp",
  "SEO",
  "E-com Scale",
];

const businessTypes = [
  "Startup",
  "Local Business",
  "E-commerce Brand",
  "Enterprise",
  "Personal Brand",
];

const budgets = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const entrance = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export default function ContactStrategySection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute inset-0 -z-20 bg-bglight" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        className="absolute left-[-10%] top-20 -z-10 h-96 w-96 rounded-full bg-primary/12 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-16 right-[-8%] -z-10 h-[28rem] w-[28rem] rounded-full bg-skyblue/12 blur-3xl"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-[1320px] gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-br from-white/92 via-[#f4fbff]/90 to-[#effcf6]/90 p-6 shadow-[0_30px_100px_-55px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1fr)] lg:gap-10 lg:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),transparent_42%)]" />

        <motion.div variants={entrance} transition={{ duration: 0.7, ease: "easeOut" }} className="relative">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>

          <h2 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-dark sm:text-5xl md:text-6xl">
            Let&apos;s Scale
            <br />
            Your Brand
          </h2>

          <motion.div variants={stagger} className="mt-10 grid gap-4">
            {contactDetails.map((detail) => (
              <motion.a
                key={detail.label}
                variants={entrance}
                transition={{ duration: 0.6, ease: "easeOut" }}
                href={detail.href}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-[28px] border border-white bg-white/68 p-4 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.42)] backdrop-blur-md transition-shadow hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-4 focus-visible:ring-offset-bglight sm:p-5"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${detail.accent} transition-transform duration-300 group-hover:scale-105`}
                >
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={detail.iconPath} />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-soft">{detail.label}</span>
                  <span className="mt-1 block break-words font-heading text-base font-bold text-dark sm:text-lg">
                    {detail.value}
                  </span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={entrance}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative rounded-[36px] border border-white bg-white/72 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-7 md:p-8"
        >
          <div className="mb-7">
            <h3 className="font-heading text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
              Get Your Strategy
            </h3>
            <p className="mt-3 text-base leading-7 text-soft">
              Fill in the details and we&apos;ll reach out to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label htmlFor="business-type" className="grid gap-2 text-sm font-semibold text-dark">
                Business Type
                <select
                  id="business-type"
                  name="businessType"
                  defaultValue=""
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-base font-medium text-dark shadow-sm outline-none transition focus:border-primary/55 focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select business type
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="monthly-budget" className="grid gap-2 text-sm font-semibold text-dark">
                Monthly Budget
                <select
                  id="monthly-budget"
                  name="monthlyBudget"
                  defaultValue=""
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-base font-medium text-dark shadow-sm outline-none transition focus:border-primary/55 focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select monthly budget
                  </option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-semibold text-dark">Services</legend>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {services.map((service) => (
                  <label
                    key={service}
                    className="group relative flex min-h-14 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/80 bg-white/72 px-3 text-center text-sm font-semibold text-soft shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:text-dark has-[:checked]:border-primary/45 has-[:checked]:bg-primary/10 has-[:checked]:text-primary has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/35"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="sr-only"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 lg:grid-cols-3">
              <label htmlFor="strategy-name" className="grid gap-2 text-sm font-semibold text-dark">
                Full Name
                <input
                  id="strategy-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-base text-dark shadow-sm outline-none transition focus:border-primary/55 focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label htmlFor="strategy-mobile" className="grid gap-2 text-sm font-semibold text-dark">
                Mobile
                <input
                  id="strategy-mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-base text-dark shadow-sm outline-none transition focus:border-primary/55 focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label htmlFor="strategy-company" className="grid gap-2 text-sm font-semibold text-dark">
                Company Name
                <input
                  id="strategy-company"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-base text-dark shadow-sm outline-none transition focus:border-primary/55 focus:ring-2 focus:ring-primary/20"
                />
              </label>
            </div>

            <MagneticWrapper glowColor="primary" roundedClass="rounded-[22px]" className="mt-1 w-full block">
              <motion.button
                type="submit"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group min-h-16 w-full rounded-[22px] bg-gradient-to-r from-primary to-skyblue px-6 py-4 font-heading text-base font-extrabold text-white shadow-glow-primary transition-shadow hover:shadow-glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                Send Request via WhatsApp <FloatingArrow />
              </motion.button>
            </MagneticWrapper>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
