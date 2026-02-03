"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  // Եթե Context-ը դեռ չի բեռնվել, ցույց տանք դատարկ բլոկ, որ էռռոր չտա
  if (!t) return <nav className="p-8 h-20 bg-[#f5f5f5]"></nav>;

  return (
    <nav className="relative z-[100] p-8 flex justify-between items-center border-b border-black/10 bg-[#f5f5f5]">
      {/* Ձախ կողմում՝ NARINE */}
      <Link href="/" className="font-bold tracking-tighter text-xl underline decoration-2 italic text-black hover:opacity-70 transition-opacity">
        NARINE.
      </Link>

      <div className="flex items-center space-x-8">
        {/* Հղումներ */}
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium text-black">
          <Link href="/projects" className="hover:line-through">{t.nav.projects}</Link>
          <Link href="/blog" className="hover:line-through">{t.nav.blog}</Link>
          <Link href="/contact" className="hover:line-through">{t.nav.contact}</Link>
        </div>
        
        {/* Լեզվի կոճակներ (Շտկված) */}
        <div className="flex space-x-3 border-l border-black/20 pl-8 font-mono text-[11px]">
          {['en', 'ru', 'am'].map((l) => (
            <button 
              key={l} 
              type="button" // Ավելացրինք տիպը
              onClick={() => {
                console.log("Changing language to:", l); // Ստուգելու համար
                setLang(l);
              }}
              className={`cursor-pointer px-1 py-1 transition-all uppercase ${
                lang === l 
                ? 'font-black text-black border-b-2 border-black' 
                : 'text-black/40 hover:text-black'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}