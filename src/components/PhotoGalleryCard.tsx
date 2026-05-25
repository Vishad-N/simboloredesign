"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type GalleryPhoto = {
  title: string;
  category: string;
  image: string;
  alt: string;
  layout: string;
};

type PhotoGalleryCardProps = {
  photo: GalleryPhoto;
  index: number;
  onOpen: () => void;
};

const galleryReveal = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function PhotoGalleryCard({ photo, index, onOpen }: PhotoGalleryCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);

  return (
    <motion.button
      ref={cardRef}
      type="button"
      variants={galleryReveal}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onClick={onOpen}
      aria-label={`Open ${photo.title} photo`}
      className={`${photo.layout} group relative w-full overflow-hidden rounded-[32px] border border-white/80 bg-white text-left shadow-[0_28px_80px_-48px_rgba(15,23,42,0.5)] outline-none transition-shadow duration-500 hover:shadow-[0_36px_100px_-42px_rgba(15,23,42,0.48)] focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-4 focus-visible:ring-offset-bglight`}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -8 : 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7 + index * 0.32, ease: "easeInOut", repeat: Infinity }
        }
        className="absolute inset-0"
      >
        <motion.div style={{ y: imageY }} className="absolute -inset-5">
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition duration-1000 ease-out group-hover:scale-110 group-focus-visible:scale-110"
          />
        </motion.div>
      </motion.div>

      <span className="absolute inset-0 bg-gradient-to-t from-dark/72 via-dark/10 to-white/5 opacity-55 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="absolute inset-0 translate-x-[-58%] bg-[linear-gradient(112deg,transparent_24%,rgba(255,255,255,0.28)_46%,transparent_64%)] opacity-0 transition-all duration-700 group-hover:translate-x-[58%] group-hover:opacity-100 group-focus-visible:translate-x-[58%] group-focus-visible:opacity-100" />
      <span className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-dark shadow-sm backdrop-blur-md">
        {photo.category}
      </span>

      <span className="absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <span className="block font-heading text-2xl font-extrabold leading-tight text-white">
          {photo.title}
        </span>
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white/82">
          View frame <span aria-hidden="true">&rarr;</span>
        </span>
      </span>
    </motion.button>
  );
}
