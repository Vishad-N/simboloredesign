"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteBlogButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) return;
    
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      
      if (!res.ok) throw new Error("Failed to delete");
      
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete the blog post.");
      setIsDeleting(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50" 
      title="Delete"
    >
      <Trash2 size={18} />
    </button>
  );
}
