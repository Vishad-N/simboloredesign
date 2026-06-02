import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PlusCircle, Edit } from "lucide-react";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";

export default async function AdminBlogsPage() {
  const blogs = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-dark font-heading">All Blogs</h2>
        <Link 
          href="/admin/blogs/new" 
          className="bg-primary hover:bg-dark text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-glow-primary transition-all hover:-translate-y-0.5"
        >
          <PlusCircle size={20} />
          Add New Blog
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm text-soft font-semibold">
                <th className="p-4 pl-6">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-soft">
                    No blogs found. Start by creating your first post.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-4 pl-6 font-medium text-dark max-w-xs truncate">
                      {blog.title}
                    </td>
                    <td className="p-4 text-sm text-soft">{blog.category}</td>
                    <td className="p-4">
                      {blog.published ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {blog.publishDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="p-4 text-right pr-6">
                      <div className="flex items-center justify-end gap-3">
                        <Link 
                          href={`/admin/blogs/${blog.id}`}
                          className="text-primary hover:text-dark transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </Link>
                        <DeleteBlogButton id={blog.id} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
