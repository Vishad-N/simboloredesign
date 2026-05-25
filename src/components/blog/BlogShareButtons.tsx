"use client";

import { useState } from "react";

export default function BlogShareButtons({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? `${window.location.origin}/blog/${slug}` : `/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
      <p className="mb-4 text-sm font-bold uppercase tracking-wider text-soft">
        Share this article
      </p>
      <div className="flex items-center gap-3">
        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-dark shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary hover:text-white hover:shadow-md"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-dark shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-skyblue/25 hover:bg-skyblue hover:text-white hover:shadow-md"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-dark shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-skyblue/25 hover:bg-[#1877F2] hover:text-white hover:shadow-md"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          aria-label="Copy link to clipboard"
          className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-md ${
            copied
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-gray-200 bg-white/70 text-dark hover:border-primary/25 hover:text-primary"
          }`}
        >
          {copied ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
