"use client";

import { motion } from "framer-motion";
import IndustryCard, { type Industry } from "@/components/IndustryCard";

const industries: Industry[] = [
  {
    title: "Hospitality & Hotels",
    badge: "Guest Experience",
    image: "/img1.jpg",
    points: [
      "Guest experience campaigns",
      "Booking-focused creatives",
      "Luxury visual branding",
      "Social media storytelling"
    ]
  },
  {
    title: "Luxury Real Estate",
    badge: "High Intent",
    image: "/img2.jpg",
    points: [
      "Premium property promotions",
      "Cinematic visual storytelling",
      "High-converting social campaigns",
      "Luxury brand positioning"
    ]
  },
  {
    title: "Fashion & Apparel",
    badge: "Desire",
    image: "/img3.jpg",
    points: [
      "Editorial-style campaigns",
      "Influencer-focused creatives",
      "Product launch visuals",
      "Social engagement strategy"
    ]
  },
  {
    title: "Healthcare",
    badge: "Trust",
    image: "/img4.jpg",
    points: [
      "Trust-focused branding",
      "Patient communication design",
      "Clean UI/UX experiences",
      "Awareness campaigns"
    ]
  },
  {
    title: "Education",
    badge: "Clarity",
    image: "/img5.jpg",
    points: [
      "Modern institutional branding",
      "Student engagement campaigns",
      "Social media creatives",
      "Digital learning experiences"
    ]
  },
  {
    title: "Technology",
    badge: "Innovation",
    image: "/img6.jpg",
    points: [
      "Product marketing visuals",
      "Futuristic UI/UX systems",
      "Motion graphics & reels",
      "Innovation-focused branding"
    ]
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export default function IndustrySection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-bglight to-white" />
      <div className="absolute right-[-12%] top-20 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-8 left-[-8%] -z-10 h-80 w-80 rounded-full bg-skyblue/10 blur-3xl" />

      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Industries
          </span>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-dark md:text-6xl">
            Industries Where
            <br />
            <span className="bg-gradient-to-r from-primary via-skyblue to-purple bg-clip-text text-transparent">
              Perception Is Everything.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-soft md:text-lg">
            We shape clear, memorable digital moments for brands where confidence, detail,
            and first impressions decide what happens next.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex snap-x gap-5 overflow-x-auto px-1 pb-10 pt-3 hide-scrollbar sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-6"
        >
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
