"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogs";

const categoryColors: Record<string, string> = {
  "3D & CGI": "bg-purple/10 text-purple border-purple/20",
  Photography: "bg-skyblue/10 text-skyblue border-skyblue/20",
  "Content Strategy": "bg-primary/10 text-primary border-primary/20",
  "Graphic Design": "bg-orange/10 text-orange border-orange/20",
  Branding: "bg-purple/10 text-purple border-purple/20",
  "Video Production": "bg-skyblue/10 text-skyblue border-skyblue/20",
  "Social Media Marketing": "bg-primary/10 text-primary border-primary/20",
};

export default function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  const colorClass =
    categoryColors[post.category] ?? "bg-primary/10 text-primary border-primary/20";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        id={`blog-card-${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/65 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge */}
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${colorClass}`}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-3 text-xs font-medium text-soft">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-soft/40" />
            <span>{post.readingTime}</span>
          </div>

          <h3 className="mb-3 font-heading text-xl font-bold leading-snug tracking-tight text-dark transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-soft">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">
            Read More
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
