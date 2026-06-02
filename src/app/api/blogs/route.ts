import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate
    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if slug exists
    const existing = await prisma.post.findUnique({ where: { slug: data.slug } });
    if (existing) {
      return NextResponse.json({ error: "A blog with this URL slug already exists." }, { status: 400 });
    }

    // Save to Prisma
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        category: data.category || "Uncategorized",
        excerpt: data.excerpt || "",
        content: data.content,
        coverImage: data.coverImage || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        authorName: data.authorName,
        authorRole: data.authorRole,
        readingTime: data.readingTime,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        tags: JSON.stringify(data.tags),
        published: data.published,
      }
    });

    // Ensure category exists
    if (data.category) {
      await prisma.category.upsert({
        where: { name: data.category },
        update: {},
        create: { name: data.category }
      });
    }

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    console.error("API /blogs POST error:", error);
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
