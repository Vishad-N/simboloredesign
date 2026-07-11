import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import BlogAuthor from "@/components/blog/BlogAuthor";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const dbPost = await prisma.post.findUnique({
    where: { slug },
  });

  if (!dbPost || !dbPost.published) {
    return { title: "Post Not Found | Simbolo" };
  }

  return {
    title: dbPost.seoTitle || `${dbPost.title} | Simbolo Blog`,
    description: dbPost.seoDescription || dbPost.excerpt,
    keywords: JSON.parse(dbPost.tags),
    openGraph: {
      title: dbPost.seoTitle || dbPost.title,
      description: dbPost.seoDescription || dbPost.excerpt,
      type: "article",
      publishedTime: dbPost.publishDate.toISOString(),
      authors: [dbPost.authorName],
      images: [
        {
          url: dbPost.coverImage,
          width: 1200,
          height: 630,
          alt: dbPost.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dbPost.seoTitle || dbPost.title,
      description: dbPost.seoDescription || dbPost.excerpt,
      images: [dbPost.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const dbPost = await prisma.post.findUnique({
    where: { slug },
  });

  if (!dbPost || !dbPost.published) {
    notFound();
  }

  // Format author to match existing component props
  const author = {
    name: dbPost.authorName,
    avatar: "/assets/logo1.png",
    role: dbPost.authorRole,
  };

  const relatedSlugs = JSON.parse(dbPost.relatedSlugs) as string[];
  const dbRelatedPosts = await prisma.post.findMany({
    where: { 
      slug: { in: relatedSlugs },
      published: true 
    }
  });

  const relatedPosts = dbRelatedPosts.map(post => ({
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

  return (
    <main className="min-h-screen bg-bglight">
      <BlogDetailHero
        title={dbPost.title}
        category={dbPost.category}
        coverImage={dbPost.coverImage}
        publishDate={dbPost.publishDate.toISOString()}
        readingTime={dbPost.readingTime}
        author={author}
      />

      <BlogContent content={dbPost.content} />

      <BlogShareButtons title={dbPost.title} slug={dbPost.slug} />

      <BlogAuthor author={author} />

      <RelatedPosts posts={relatedPosts as any} />
    </main>
  );
}
