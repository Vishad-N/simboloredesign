"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogAuthor as BlogAuthorType } from "@/data/blogs";

export default function BlogDetailHero({
  title,
  category,
  coverImage,
  publishDate,
  readingTime,
  author,
}: {
  title: string;
  category: string;
  coverImage: string;
  publishDate: string;
  readingTime: string;
  author: BlogAuthorType;
}) {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      {/* Hero image */}
      <div className="relative mx-auto aspect-[21/9] max-w-[1440px] overflow-hidden rounded-b-[40px] md:rounded-b-[56px]">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 md:px-8 md:pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-[1320px]">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-4 inline-flex rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md"
            >
              {category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="mb-6 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              className="flex flex-wrap items-center gap-4 text-sm text-white/80"
            >
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <span className="block text-sm font-semibold text-white">
                    {author.name}
                  </span>
                  <span className="text-xs text-white/60">{author.role}</span>
                </div>
              </div>

              <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />

              <time dateTime={publishDate} className="font-medium">
                {formattedDate}
              </time>

              <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />

              <span className="font-medium">{readingTime}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
