"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogAuthor as BlogAuthorType } from "@/data/blogs";

export default function BlogAuthor({ author }: { author: BlogAuthorType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-3xl px-4 md:px-8"
    >
      <div className="flex items-center gap-5 rounded-[28px] border border-white/80 bg-white/65 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl md:p-8">
        <Image
          src={author.avatar}
          alt={author.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] shrink-0 rounded-2xl border-2 border-primary/20 object-cover"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Written by
          </p>
          <h4 className="mt-1 font-heading text-xl font-extrabold text-dark">
            {author.name}
          </h4>
          <p className="mt-1 text-sm font-medium text-soft">{author.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
