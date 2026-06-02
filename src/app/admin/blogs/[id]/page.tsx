import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditBlogClient from "./EditBlogClient";

export default async function EditBlogPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  // Convert dates and tags to plain values for client component
  const postData = {
    ...post,
    tags: JSON.parse(post.tags).join(", "),
  };

  return <EditBlogClient post={postData as any} />;
}
