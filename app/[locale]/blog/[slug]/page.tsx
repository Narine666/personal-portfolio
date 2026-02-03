"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import { useTranslations } from 'next-intl';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Օգտագործում ենք 'blog' բաժինը
  const t = useTranslations('blog');
  const resolvedParams = use(params);
  
  // Վերցնում ենք posts զանգվածը JSON-ից
  const posts = t.raw('posts'); 
  
  // Փնտրում ենք համապատասխան պոստը ըստ slug-ի
  const post = posts.find((p: any) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound(); 
  }

  return (
    <article className="max-w-3xl mx-auto p-10 bg-[#f5f5f5] min-h-screen text-black">
      <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter italic">
        {post.title}
      </h1>
      
      <p className="text-gray-500 mb-6 font-mono text-xs">
        2026-02-01 // ENTRY_ID: {post.slug}
      </p>
      
      <div className="text-lg leading-relaxed border-l-2 border-black pl-6 italic">
        {/* Եթե JSON-ում կա content, ցույց կտա այն, եթե ոչ՝ desc-ը */}
        {post.content || post.desc} 
      </div>
    </article>
  );
}