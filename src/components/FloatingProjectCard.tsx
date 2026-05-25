"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants
} from "framer-motion";
import { type PointerEvent } from "react";

export type ShowcaseProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  tone: string;
  layout: string;
  video?: string;
};

type FloatingProjectCardProps = {
  project: ShowcaseProject;
  index: number;
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 }
  },
};

export default function FloatingProjectCard({ project, index }: FloatingProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Lighter spring config for better performance
  const hoverX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.2 });
  const hoverY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.2 });

  // Reduced rotation intensity
  const rotateX = useTransform(hoverY, [-10, 10], [2, -2]);
  const rotateY = useTransform(hoverX, [-10, 10], [-2, 2]);

  function moveCard(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;

    // Only apply on desktop
    if (window.innerWidth < 1024) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointY = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(pointX * 20);
    mouseY.set(pointY * 20);
  }

  function resetCard() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      variants={cardReveal}
      className={`${project.layout} relative min-h-[470px] outline-none md:min-h-[520px]`}
      tabIndex={0}
      aria-label={`${project.title} project`}
      onPointerMove={moveCard}
      onPointerLeave={resetCard}
      onBlur={resetCard}
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
        className="group relative h-full overflow-hidden rounded-[36px] border border-white/80 bg-white/70 shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary/55"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-80`} />
        <div className="absolute inset-[1px] rounded-[35px] border border-white/60" />

        <div
          className="absolute inset-x-4 top-4 h-[54%] overflow-hidden rounded-[28px] border border-white/70 bg-white md:inset-x-5 md:top-5"
          style={{ transform: "translateZ(20px)" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            priority={index < 2}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {project.video && (
            <video
              aria-hidden="true"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={project.image}
              src={project.video}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-80" />
          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-dark shadow-sm">
            {project.category}
          </span>
        </div>

        <div
          className="absolute inset-x-5 bottom-5 top-[58%] flex flex-col rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-sm md:p-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-dark/[0.06] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-soft"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-heading text-2xl font-extrabold leading-tight text-dark md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-soft md:text-base">
            {project.description}
          </p>
          <Link
            href="#"
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-dark px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            View
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}
