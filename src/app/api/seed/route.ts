import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { blogPosts } from "@/data/blogs";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Check if posts exist
    const count = await prisma.post.count();
    if (count > 0) {
      return NextResponse.json({ message: "Database already seeded!" });
    }

    const posts = Object.values(blogPosts);
    let seededCount = 0;

    for (const post of posts) {
      // Ensure category exists
      await prisma.category.upsert({
        where: { name: post.category },
        update: {},
        create: { name: post.category },
      });

      // Convert content to basic HTML for the rich text editor
      let htmlContent = "";
      for (const block of post.content) {
        if (block.type === "heading") {
          htmlContent += `<h${block.level}>${block.text}</h${block.level}>`;
        } else if (block.type === "paragraph") {
          htmlContent += `<p>${block.text}</p>`;
        } else if (block.type === "image") {
          htmlContent += `<img src="${block.src}" alt="${block.alt}" />`;
          if (block.caption) {
            htmlContent += `<p><em>${block.caption}</em></p>`;
          }
        } else if (block.type === "list") {
          const tag = block.ordered ? "ol" : "ul";
          htmlContent += `<${tag}>`;
          for (const item of block.items) {
            htmlContent += `<li>${item}</li>`;
          }
          htmlContent += `</${tag}>`;
        } else if (block.type === "quote") {
          htmlContent += `<blockquote>${block.text}</blockquote>`;
        }
      }

      await prisma.post.create({
        data: {
          slug: post.slug,
          title: post.title,
          category: post.category,
          excerpt: post.excerpt,
          coverImage: post.coverImage,
          publishDate: new Date(post.publishDate),
          readingTime: post.readingTime,
          authorName: post.author.name,
          authorAvatar: post.author.avatar,
          authorRole: post.author.role,
          content: htmlContent,
          tags: JSON.stringify(post.tags),
          relatedSlugs: JSON.stringify(post.relatedSlugs),
          published: true,
        },
      });
      seededCount++;
    }

    return NextResponse.json({ message: `Successfully seeded ${seededCount} posts!` });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
