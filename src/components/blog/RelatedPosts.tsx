"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/data/blogs";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="px-4 pb-24 pt-8 md:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* Divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Keep Reading
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            Related Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
