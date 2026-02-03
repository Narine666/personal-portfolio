"use client";
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      {/* Հին վերնագիրը */}
      <h1 className="text-5xl font-black uppercase tracking-tight mb-20">
        {t.blog.archive}
      </h1>

      <div className="space-y-16">
        {t.blog.posts.map((post: any) => (
          <article key={post.slug} className="border-b pb-8">
            <p className="text-xs opacity-40 mb-2">2026-02-01</p>

            <h2 className="text-3xl font-bold mb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>

            <p className="opacity-60 max-w-xl">
              {post.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}