"use client";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans selection:bg-black selection:text-white">
      <main className="px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 text-gray-500 font-mono">
            Editorial Issue / 2026
          </p>
          
          <h1 className="text-[9vw] font-bold tracking-tighter leading-[0.8] mb-16 uppercase break-words">
            {t('hero')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed max-w-md border-l-2 border-black pl-6 italic">
                «{t('quote')}»
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest pl-6 font-mono">
                {t('role')}
              </p>
            </div>
            
            <Link 
              href={`/${locale}/projects`} 
              className="group relative inline-block self-start md:justify-self-end"
            >
              <div className="bg-black text-white px-12 py-6 text-lg uppercase tracking-widest transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                {t('button')}
              </div>
              <div className="absolute inset-0 border border-black -z-10 translate-y-1 translate-x-1"></div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}