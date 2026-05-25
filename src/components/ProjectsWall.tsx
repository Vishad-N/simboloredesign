"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, type PointerEvent } from "react";
import FloatingProjectCard, {
  type ShowcaseProject,
} from "@/components/FloatingProjectCard";

const projects: ShowcaseProject[] = [
  {
    title: "Graphic Design",
    category: "Visual Identity",
    description:
      "Comprehensive branding visuals, poster campaigns, and dynamic logo systems built for modern retail.",
    tags: ["Branding", "Posters", "Logos"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    tone: "from-primary/20 via-white/35 to-skyblue/16",
    layout: "md:col-span-12 xl:col-span-4",
  },
  {
    title: "Video Editing",
    category: "Motion & Production",
    description:
      "High-retention social media reels, cinematic edits, and motion storytelling that captivate audiences.",
    tags: ["Reels", "Edits", "Motion"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    tone: "from-skyblue/22 via-white/40 to-purple/14",
    layout: "md:col-span-12 xl:col-span-4",
    video: "/assets/herobg.mp4",
  },
  {
    title: "Web Development",
    category: "Digital Platforms",
    description:
      "Premium responsive websites, optimized landing pages, and frictionless frontend user experiences.",
    tags: ["Websites", "UI/UX", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tone: "from-primary/18 via-white/40 to-orange/12",
    layout: "md:col-span-12 xl:col-span-4",
  },
  {
    title: "E-commerce",
    category: "Online Retail",
    description:
      "High-converting Shopify stores, compelling product campaigns, and conversion-focused checkout layouts.",
    tags: ["Shopify", "Stores", "Sales"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tone: "from-orange/20 via-white/42 to-primary/12",
    layout: "md:col-span-12 xl:col-span-4",
  },
  {
    title: "SEO (Search Engine Optimization)",
    category: "Search Visibility",
    description:
      "Data-driven search optimization, organic growth strategies, and precise keyword targeting that dominate search rankings.",
    tags: ["Optimization", "Strategy", "Growth"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tone: "from-purple/16 via-white/40 to-skyblue/18",
    layout: "md:col-span-12 xl:col-span-4",
  },
  {
    title: "Public Relations",
    category: "Public Relations",
    description:
      "Strategic brand communication, high-impact media outreach, and reputation management that secures industry authority.",
    tags: ["Media", "Outreach", "Reputation"],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    tone: "from-skyblue/16 via-white/40 to-orange/16",
    layout: "md:col-span-12 xl:col-span-4",
  },
];

const wallReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ProjectsWall() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [isLeaving, setIsLeaving] = useState(false);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(24);
  const glowX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const glowBackground = useTransform(
    [glowX, glowY],
    ([latestX, latestY]) =>
      `radial-gradient(450px circle at ${latestX}% ${latestY}%, rgba(77,168,255,0.12), rgba(22,196,127,0.08) 25%, transparent 60%)`,
  );

  function followPointer(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function returnToPortfolio() {
    if (isLeaving) return;

    setIsLeaving(true);
    window.setTimeout(() => router.push("/#portfolio"), reduceMotion ? 0 : 350);
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      animate={
        isLeaving
          ? { opacity: 0, y: reduceMotion ? 0 : 15, scale: reduceMotion ? 1 : 0.99 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      transition={{ duration: isLeaving ? 0.35 : 0.6, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      onPointerMove={followPointer}
      className="relative min-h-screen overflow-hidden px-4 pb-24 pt-36 md:px-8 md:pt-40"
    >
      <div className="absolute inset-0 -z-30 bg-bglight" />

      {/* Optimized Glow - Removed heavy blur and reduced intensity */}
      {!reduceMotion && (
        <motion.div
          style={{ background: glowBackground, willChange: "background" }}
          className="pointer-events-none absolute inset-0 -z-20 hidden md:block"
        />
      )}

      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[34rem] w-[min(82rem,96vw)] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 via-white/50 to-purple/10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mb-14 flex flex-col gap-8 md:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl">
            <button
              type="button"
              onClick={returnToPortfolio}
              className="group mb-8 inline-flex items-center gap-3 rounded-full border border-white bg-white/75 px-4 py-2.5 text-sm font-semibold text-dark shadow-sm backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-white transition-transform group-hover:-translate-x-0.5"
              >
                &larr;
              </span>
              Back to portfolio
            </button>
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Selected creative systems
            </span>
            <h1 className="font-heading text-6xl font-extrabold leading-none tracking-tight text-dark sm:text-7xl md:text-8xl lg:text-[9.5rem]">
              Projects
            </h1>
          </div>

          <div className="max-w-md border-l border-dark/10 pl-5 text-base leading-8 text-soft md:text-lg">
            A floating wall of campaigns, identities, and digital products shaped to make
            attention turn into trust.
          </div>
        </motion.div>

        <motion.section
          aria-label="All projects"
          variants={wallReveal}
          initial="hidden"
          animate="visible"
          className="grid auto-rows-[minmax(470px,auto)] grid-cols-1 gap-6 md:grid-cols-12 md:gap-7 xl:auto-rows-[minmax(330px,auto)]"
        >
          {projects.map((project, index) => (
            <FloatingProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="mt-16 flex flex-col gap-5 rounded-[36px] border border-white bg-white/70 p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8"
        >
          <p className="max-w-2xl font-heading text-2xl font-bold leading-tight text-dark md:text-3xl">
            Need a project wall built around your next launch?
          </p>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-[#13ab6e] focus-visible:outline-none"
          >
            Start a project
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
