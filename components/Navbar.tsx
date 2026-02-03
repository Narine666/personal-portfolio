"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Ստեղծում ենք նոր հասցե լեզուն փոխելու համար
  const getNewPath = (newLocale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split('/');
    segments[1] = newLocale; 
    return segments.join('/') || "/";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center bg-[#f5f5f5]/80 backdrop-blur-md border-b border-black/5">
      {/* Logo */}
      <Link href={`/${currentLocale}`} className="font-black tracking-tighter text-2xl italic text-black uppercase">
        NARINE.
      </Link>

      <div className="flex items-center space-x-12">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.3em] font-bold text-black/60">
          <Link href={`/${currentLocale}/projects`} className="hover:text-black hover:line-through transition-colors">{t('projects')}</Link>
          <Link href={`/${currentLocale}/blog`} className="hover:text-black hover:line-through transition-colors">{t('blog')}</Link>
          <Link href={`/${currentLocale}/contact`} className="hover:text-black hover:line-through transition-colors">{t('contact')}</Link>
        </div>
        
        {/* Language Switcher - Ավելի մգացված տարբերակը */}
        <div className="flex space-x-4 border-l border-black/10 pl-8">
          {['en', 'ru', 'am'].map((l) => (
            <Link 
              key={l} 
              href={getNewPath(l)}
              className={`text-[12px] font-black uppercase tracking-widest transition-all
                ${currentLocale === l 
                  ? 'text-black border-b-2 border-black pb-1' // Ակտիվ լեզուն լրիվ սև է և ընդգծված
                  : 'text-black/30 hover:text-black/60'      // Ոչ ակտիվները մի քիչ բաց են
                }`}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}