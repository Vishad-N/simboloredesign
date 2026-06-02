import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Blog & Insights | Simbolo Agency",
  description:
    "Explore expert articles on 3D & CGI, photography, branding, graphic design, content strategy, and video production from the Simbolo creative team.",
  openGraph: {
    title: "Blog & Insights | Simbolo Agency",
    description:
      "Explore expert articles on 3D & CGI, photography, branding, graphic design, content strategy, and video production.",
    type: "website",
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
