import Link from "next/link";
import { LayoutDashboard, FileText, Image as ImageIcon, Settings } from "lucide-react";
import SignOutButton from "@/components/admin/SignOutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-88px)] md:min-h-[calc(100vh-104px)] mt-[88px] md:mt-[104px] bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex sticky top-[104px] h-[calc(100vh-104px)]">
        <div className="p-6 border-b border-gray-200">
          <h1 className="font-heading text-2xl font-bold text-dark">Simbolo CMS</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
            <FileText size={20} />
            All Blogs
          </Link>
          <Link href="/admin/media" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
            <ImageIcon size={20} />
            Media Library
          </Link>
          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
              <Settings size={20} />
              Settings
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <SignOutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-[88px] md:top-[104px] z-30">
          <div className="font-medium text-gray-800">
            Welcome back, Admin
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-primary hover:underline font-medium flex items-center gap-1.5">
              Back to Website
            </Link>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
