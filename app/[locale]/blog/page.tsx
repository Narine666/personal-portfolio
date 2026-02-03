"use client";
import Link from "next/link"; // Սովորական Link-ը կարող է կորցնել locale-ը
import { useTranslations, useLocale } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale(); // Վերցնում ենք ընթացիկ լեզուն (en, am, կամ ru)

  const posts = t.raw('posts'); 

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-black uppercase tracking-tight mb-20">
        {t('archive')}
      </h1>

      <div className="space-y-16">
        {posts.map((post: any) => (
          <article key={post.slug} className="border-b pb-8">
            <p className="text-xs opacity-40 mb-2">2026-02-01</p>

            <h2 className="text-3xl font-bold mb-4">
              <Link
                // Ավելացնում ենք լեզվի կոդը հասցեի սկզբում
                href={`/${locale}/blog/${post.slug}`}
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