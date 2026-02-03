"use client";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function ProjectsPage() {
  // Օգտագործում ենք 'projects' բաժինը JSON-ից
  const t = useTranslations('projects');
  const locale = useLocale();
  
  // Վերցնում ենք նախագծերի ցուցակը որպես զանգված
  const projectsList = t.raw('list');

  const bgImage = "https://i.pinimg.com/736x/f3/43/31/f34331b705e6ddd0115d31e10d5f68ef.jpg";

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black p-8 font-sans overflow-x-hidden">
      <header className="mb-20 border-b border-black pb-4 flex justify-between items-end">
        <h1 className="text-3xl md:text-5xl font-light italic tracking-tighter uppercase">
          {t('title')}
        </h1>
        <span className="text-[10px] tracking-[0.3em] font-mono opacity-50 uppercase">
          {t('units')}: {projectsList.length}
        </span>
      </header>

      <div className="space-y-40">
        {projectsList.map((project: any) => (
          <section key={project.id} className="relative group min-h-[450px] flex flex-col justify-center border-b border-black/5 pb-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
              <img src={bgImage} className="w-full h-full object-cover grayscale" alt="" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono">{project.id}</span>
                <div className="h-[1px] bg-black w-full origin-left group-hover:scale-x-105 transition-transform duration-1000"></div>
                <span className="text-xs font-mono">2026</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h2 className="text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase transition-all duration-700 group-hover:scale-105 origin-left">
                    {project.title}
                  </h2>
                  <p className="mt-8 text-[10px] tracking-[0.5em] text-gray-500 font-mono uppercase">
                    {project.cat}
                  </p>
                </div>

                <div className="md:col-span-2 pt-6">
                  <p className="text-sm leading-relaxed lowercase italic border-l-2 border-black pl-6">
                    {project.desc}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-end items-center pt-6">
                  {/* Համոզվիր, որ Link-ը ներառում է լեզվի կոդը */}
                  <Link href={`/${locale}/projects/${project.id}`} className="text-[10px] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all uppercase font-bold bg-white/40">
                    {t('details')}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}