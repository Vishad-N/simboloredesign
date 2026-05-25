"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ContentBlock } from "@/data/blogs";

function ParagraphBlock({ text }: { text: string }) {
  return (
    <p className="text-base leading-[1.85] text-dark/80 md:text-lg md:leading-[1.9]">
      {text}
    </p>
  );
}

function HeadingBlock({ text, level }: { text: string; level: 2 | 3 }) {
  if (level === 2) {
    return (
      <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
        {text}
      </h2>
    );
  }
  return (
    <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-dark md:text-2xl">
      {text}
    </h3>
  );
}

function ImageBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-2">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm font-medium text-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function QuoteBlock({ text, author }: { text: string; author?: string }) {
  return (
    <blockquote className="relative rounded-2xl border-l-4 border-primary bg-primary/5 py-5 pl-6 pr-6 md:py-6 md:pl-8">
      <p className="text-base italic leading-relaxed text-dark/80 md:text-lg">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <cite className="mt-3 block text-sm font-semibold not-italic text-primary">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}

function ListBlock({
  items,
  ordered,
}: {
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`space-y-2.5 pl-6 text-base leading-relaxed text-dark/80 md:text-lg ${
        ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {item}
        </li>
      ))}
    </Tag>
  );
}

export default function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16"
    >
      <div className="space-y-6">
        {blocks.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <ParagraphBlock key={index} text={block.text} />;
            case "heading":
              return (
                <HeadingBlock key={index} text={block.text} level={block.level} />
              );
            case "image":
              return (
                <ImageBlock
                  key={index}
                  src={block.src}
                  alt={block.alt}
                  caption={block.caption}
                />
              );
            case "quote":
              return (
                <QuoteBlock
                  key={index}
                  text={block.text}
                  author={block.author}
                />
              );
            case "list":
              return (
                <ListBlock
                  key={index}
                  items={block.items}
                  ordered={block.ordered}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </motion.article>
  );
}
