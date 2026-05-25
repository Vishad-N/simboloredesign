import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import BlogAuthor from "@/components/blog/BlogAuthor";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Simbolo" };
  }

  return {
    title: `${post.title} | Simbolo Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  return (
    <main className="min-h-screen bg-bglight">
      <BlogDetailHero
        title={post.title}
        category={post.category}
        coverImage={post.coverImage}
        publishDate={post.publishDate}
        readingTime={post.readingTime}
        author={post.author}
      />

      <BlogContent blocks={post.content} />

      <BlogShareButtons title={post.title} slug={post.slug} />

      <BlogAuthor author={post.author} />

      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}
