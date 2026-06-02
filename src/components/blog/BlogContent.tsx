"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function BlogContent({ content }: { content: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16"
    >
      <div 
        className="space-y-6 blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content p {
          font-size: 1.125rem;
          line-height: 1.9;
          color: rgba(26, 26, 26, 0.8);
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          .blog-content p {
            font-size: 1rem;
            line-height: 1.85;
          }
        }
        .blog-content h2 {
          font-family: var(--font-outfit), sans-serif;
          font-size: 1.875rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #1a1a1a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .blog-content h2 {
            font-size: 1.5rem;
          }
        }
        .blog-content h3 {
          font-family: var(--font-outfit), sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #1a1a1a;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .blog-content h3 {
            font-size: 1.25rem;
          }
        }
        .blog-content img {
          width: 100%;
          border-radius: 1.5rem;
          object-fit: cover;
          aspect-ratio: 16/9;
          margin: 2rem 0;
        }
        .blog-content blockquote {
          position: relative;
          border-radius: 1rem;
          border-left: 4px solid var(--primary);
          background-color: rgba(var(--primary-rgb), 0.05);
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          font-size: 1.125rem;
          line-height: 1.625;
          color: rgba(26, 26, 26, 0.8);
        }
        .blog-content ul, .blog-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.9;
          color: rgba(26, 26, 26, 0.8);
        }
        .blog-content ul {
          list-style-type: disc;
        }
        .blog-content ol {
          list-style-type: decimal;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.25rem;
        }
      `}} />
    </motion.article>
  );
}
