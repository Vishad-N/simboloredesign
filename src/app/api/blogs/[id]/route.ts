import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();

    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if slug exists and belongs to another post
    const existing = await prisma.post.findUnique({ where: { slug: data.slug } });
    if (existing && existing.id !== id) {
      return NextResponse.json({ error: "A blog with this URL slug already exists." }, { status: 400 });
    }

    const post = await prisma.post.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        category: data.category || "Uncategorized",
        excerpt: data.excerpt || "",
        content: data.content,
        coverImage: data.coverImage,
        authorName: data.authorName,
        authorRole: data.authorRole,
        readingTime: data.readingTime,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        tags: JSON.stringify(data.tags),
        published: data.published,
      }
    });

    if (data.category) {
      await prisma.category.upsert({
        where: { name: data.category },
        update: {},
        create: { name: data.category }
      });
    }

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    console.error("API /blogs/[id] PUT error:", error);
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API /blogs/[id] DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
  }
}
