"use client";
import { useLanguage } from '@/context/LanguageContext';
import { notFound } from "next/navigation";
import { use } from "react"; // Next.js-ի նոր տարբերակներում params-ը կարդալու համար

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useLanguage();
  const resolvedParams = use(params); // Ստանում ենք slug-ը
  
  // Փնտրում ենք համապատասխան պոստը մեր թարգմանությունների միջից
  const post = t.blog.posts.find((p: any) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound(); // Եթե այդ slug-ով պոստ չկա
  }

  return (
    <article className="max-w-3xl mx-auto p-10 bg-[#f5f5f5] min-h-screen text-black">
      {/* Վերնագիրը կլինի ընտրված լեզվով */}
      <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter italic">
        {post.title}
      </h1>
      
      <p className="text-gray-500 mb-6 font-mono text-xs">2026-02-01 // ENTRY_ID: {post.slug}</p>
      
      {/* Բովանդակությունը (content) նույնպես պետք է լինի dictionaries.ts-ում */}
      <div className="text-lg leading-relaxed border-l-2 border-black pl-6 italic">
        {post.content || post.desc} 
      </div>
    </article>
  );
}