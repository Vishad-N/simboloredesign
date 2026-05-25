"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/data/blogs";

export default function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? "border-primary/30 bg-primary text-white shadow-glow-primary"
                  : "border-gray-200 bg-white/70 text-soft shadow-sm backdrop-blur-md hover:border-primary/20 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center text-lg text-soft"
          >
            No posts found in this category yet. Check back soon!
          </motion.p>
        )}
      </div>
    </section>
  );
}
