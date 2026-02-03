"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* --- Background Lines (SVG-ներ) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <svg className="absolute -top-10 -left-10 w-[400px] h-[400px]" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="0.2">
          <path d="M10,50 Q40,10 90,50 T10,90" />
        </svg>

        <svg className="absolute -bottom-20 -right-20 w-[600px] h-[600px]" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="0.15">
          <path d="M0,100 C20,80 50,110 70,70 S100,20 100,0 M100,100 C80,80 50,90 30,60 S0,20 0,0" />
        </svg>

        <svg className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="0.1">
          <path d="M30,50 A20,20 0 1,0 70,50 A20,20 0 1,0 30,50 M20,50 A30,30 0 1,0 80,50 A30,30 0 1,0 20,50" className="opacity-50" />
        </svg>
      </div>

      {/* --- Բովանդակությունը (Content) --- */}
      <div className="relative z-10">
        {/* ՈՒՇԱԴՐՈՒԹՅՈՒՆ. <nav> հատվածը հեռացված է, այն արդեն Layout-ում է */}

        <main className="px-8 pt-20 pb-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
              Editorial Issue / 2026
            </p>
            
            <h1 className="text-7xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] mb-16">
              DEVELOPER <br />
              <span className="ml-20 italic font-light">DESIGNER</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed max-w-md border-l-2 border-black pl-6 italic">
                  {/* Այստեղ կարող ես ավելացնել t.home.quote dictionaries.ts-ում */}
                  «Մոնոքրոմիկ դիզայնը ոչ թե գույների բացակայությունն է, այլ էության ներկայությունը։»
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-widest pl-6">
                  Frontend Developer & Visual Thinker
                </p>
              </div>
              
              <Link href="/projects" className="group relative inline-block self-start">
                <div className="bg-black text-white px-12 py-6 text-lg uppercase tracking-widest transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                  {t.nav.projects} {/* Օգտագործում ենք թարգմանությունը */}
                </div>
                <div className="absolute inset-0 border border-black -z-10 translate-y-1 translate-x-1"></div>
              </Link>
            </div>
          </div>
        </main>

        <footer className="px-8 py-12 mt-20 border-t border-black/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-gray-400">
          <p>© Archive №001</p>
          <p>Narine // 2026</p>
        </footer>
      </div>
    </div>
  );
}