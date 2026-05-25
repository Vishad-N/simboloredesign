import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllPosts, getAllCategories } from "@/data/blogs";

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

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-bglight">
      <BlogHero />
      <BlogGrid posts={posts} categories={categories} />
    </main>
  );
}
