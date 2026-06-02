"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { ArrowLeft, Save, Send } from "lucide-react";
import Link from "next/link";

export default function NewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    coverImage: "",
    authorName: "Simbolo Team",
    authorRole: "Creative Director",
    readingTime: "5 min read",
    seoTitle: "",
    seoDescription: "",
    tags: "",
  });

  const [isUploadingCover, setIsUploadingCover] = useState(false);

  const handleUploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    setIsUploadingCover(true);

    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: data });
      const json = await res.json();
      if (json.url) {
        setFormData((prev) => ({ ...prev, coverImage: json.url }));
      }
    } catch (err) {
      console.error("Cover upload failed", err);
    } finally {
      setIsUploadingCover(false);
    }
  };

  const handleSave = async (published: boolean) => {
    if (!formData.title || !formData.slug || !formData.content) {
      setError("Title, Slug, and Content are required.");
      window.scrollTo(0, 0);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          published,
          tags: formData.tags ? formData.tags.split(",").map(t => t.trim()) : [],
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to save blog");
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blogs" className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h2 className="text-3xl font-bold text-dark font-heading">Create New Blog</h2>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 font-medium border border-red-100">
          {error}
        </div>
      )}

      <div className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-xl font-bold text-dark border-b border-gray-100 pb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">Blog Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
                  setFormData({ ...formData, title, slug });
                }}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="e.g. The Future of 3D Design"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">URL Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="the-future-of-3d-design"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="e.g. 3D & CGI"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">Reading Time</label>
              <input
                type="text"
                value={formData.readingTime}
                onChange={(e) => setFormData({ ...formData, readingTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="5 min read"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-dark">Excerpt (Subtitle)</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all h-24 resize-none"
              placeholder="A brief summary of the blog post..."
            />
          </div>
        </div>

        {/* Cover Image */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-xl font-bold text-dark border-b border-gray-100 pb-4">Cover Image</h3>
          
          <div className="flex items-center gap-6">
            {formData.coverImage && (
              <img src={formData.coverImage} alt="Cover" className="w-32 h-32 object-cover rounded-xl border border-gray-200" />
            )}
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-dark">Upload Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadCover}
                disabled={isUploadingCover}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
              />
              {isUploadingCover && <p className="text-sm text-soft mt-2 animate-pulse">Uploading to Cloudinary...</p>}
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-dark px-2">Blog Content *</h3>
          <RichTextEditor 
            content={formData.content} 
            onChange={(html) => setFormData({ ...formData, content: html })} 
          />
        </div>

        {/* SEO & Metadata */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <h3 className="text-xl font-bold text-dark border-b border-gray-100 pb-4">SEO & Metadata</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">Tags (comma separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="Branding, Marketing, CGI"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">SEO Title</label>
              <input
                type="text"
                value={formData.seoTitle}
                onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all"
                placeholder="Default uses Blog Title"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-dark">SEO Description</label>
              <textarea
                value={formData.seoDescription}
                onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary outline-none transition-all h-24 resize-none"
                placeholder="Default uses Excerpt"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
          <button
            onClick={() => handleSave(false)}
            disabled={loading}
            className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-dark font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Save as Draft
          </button>
          
          <button
            onClick={() => handleSave(true)}
            disabled={loading}
            className="flex-1 bg-primary hover:bg-dark text-white font-bold py-4 px-6 rounded-xl transition-all shadow-glow-primary hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? "Publishing..." : (
              <>
                <Send size={20} />
                Publish Blog
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
