import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Blog & Insights",

  description:
    "Explore expert insights on digital marketing, branding, web development, content creation, social media strategy, video production, design, and business growth from The Simbolo.",

  alternates: {
    canonical: "https://thesimbolo.com/blog",
  },

  openGraph: {
    title: "Blog & Insights | The Simbolo",
    description:
      "Expert articles on digital marketing, branding, web development, content strategy, video production, and creative growth solutions.",
    url: "https://thesimbolo.com/blog",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | The Simbolo",
    description:
      "Expert articles on digital marketing, branding, web development, content strategy, video production, and creative growth solutions.",
  },
};

export default async function BlogPage() {
  const dbPosts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishDate: "desc" },
  });

  const dbCategories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  const posts = dbPosts.map(post => ({
    ...post,
    publishDate: post.publishDate.toISOString(),
    author: {
      name: post.authorName,
      avatar: "/assets/logo1.png",
      role: post.authorRole,
    },
    tags: JSON.parse(post.tags),
    relatedSlugs: JSON.parse(post.relatedSlugs),
  }));

  const categories = dbCategories.map(c => c.name);

  return (
    <main className="min-h-screen bg-bglight">
      <BlogHero />
      <BlogGrid posts={posts as any} categories={categories} />
    </main>
  );
}
