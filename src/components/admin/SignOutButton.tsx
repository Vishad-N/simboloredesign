"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleSignOut}
      disabled={loading}
      className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 font-medium transition-colors disabled:opacity-50"
    >
      <LogOut size={20} />
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
