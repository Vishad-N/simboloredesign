"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ReelCard, { type Reel } from "@/components/ReelCard";

const reels: Reel[] = [
  {
    title: "Weekend Table Stories",
    category: "Hospitality",
    views: "1.8M",
    likes: "92K",
    image: "/ree1-new.jpg",
    videoUrl: "/reel1.mp4?v=2",
  },
  {
    title: "Launch Day Details",
    category: "Product",
    views: "846K",
    likes: "41K",
    image: "/ree2-new.jpg",
    videoUrl: "/reel2.mp4?v=2",
  },
  {
    title: "Fit Check In Motion",
    category: "Fashion",
    views: "2.4M",
    likes: "118K",
    image: "/ree3-new.jpg",
    videoUrl: "/reel3.mp4?v=2",
  },
  {
    title: "Studio Cutdowns",
    category: "Campaign",
    views: "674K",
    likes: "36K",
    image: "/ree4-new.jpg",
    videoUrl: "/reel4.mp4?v=2",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export default function ReelSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute inset-0 -z-20 bg-bglight" />
      <div className="absolute left-1/2 top-16 -z-10 h-[360px] w-[min(760px,92vw)] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 via-skyblue/10 to-purple/10 blur-3xl" />

      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-primary/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              Reels Showcase
            </span>
            <h2 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-dark md:text-6xl">
              Stop Scrolling.
              <br />
              Start Watching.
            </h2>
          </div>

          <Link
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-dark px-6 py-3 font-semibold text-white shadow-[0_18px_40px_-22px_rgba(15,23,42,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bglight"
          >
            View All Reels
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="flex snap-x gap-5 overflow-x-auto px-1 pb-10 pt-4 hide-scrollbar md:gap-7 lg:overflow-visible"
        >
          {reels.map((reel, index) => (
            <ReelCard key={reel.title} reel={reel} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
