import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FileText, PlusCircle } from "lucide-react";

export default async function AdminDashboard() {
  const totalBlogs = await prisma.post.count();
  const publishedBlogs = await prisma.post.count({ where: { published: true } });
  const draftBlogs = await prisma.post.count({ where: { published: false } });

  const recentBlogs = await prisma.post.findMany({
    take: 5,
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, published: true, updatedAt: true, slug: true },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-dark font-heading">Dashboard Overview</h2>
        <Link 
          href="/admin/blogs/new" 
          className="bg-primary hover:bg-dark text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-glow-primary transition-all hover:-translate-y-0.5"
        >
          <PlusCircle size={20} />
          Add New Blog
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl">
            <FileText size={28} />
          </div>
          <div>
            <p className="text-sm text-soft font-semibold uppercase tracking-wider">Total Blogs</p>
            <p className="text-3xl font-bold text-dark">{totalBlogs}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-green-50 text-green-600 p-4 rounded-xl">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-soft font-semibold uppercase tracking-wider">Published</p>
            <p className="text-3xl font-bold text-dark">{publishedBlogs}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-orange-50 text-orange-600 p-4 rounded-xl">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-soft font-semibold uppercase tracking-wider">Drafts</p>
            <p className="text-3xl font-bold text-dark">{draftBlogs}</p>
          </div>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-dark font-heading">Recently Updated</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm text-soft font-semibold">
                <th className="p-4 pl-6">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4 text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentBlogs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-soft">
                    No blogs found. Start by creating your first post.
                  </td>
                </tr>
              ) : (
                recentBlogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-4 pl-6 font-medium text-dark">{blog.title}</td>
                    <td className="p-4">
                      {blog.published ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {blog.updatedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="p-4 text-right pr-6">
                      <Link 
                        href={`/admin/blogs/${blog.id}`}
                        className="text-primary hover:text-dark font-medium text-sm transition-colors"
                      >
                        Edit
                      </Link>
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
