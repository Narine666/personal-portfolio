"use client";
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black p-8 font-sans uppercase">
      <header className="mb-20 border-b border-black pb-4 flex justify-between items-end">
        <h1 className="text-3xl font-light italic tracking-tighter">{t.contact.header}</h1>
        <span className="text-[10px] opacity-30 font-mono italic">Status: Online</span>
      </header>

      <div className="max-w-2xl mx-auto border border-black p-10 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
        {submitted ? (
          <div className="py-20 text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <h2 className="text-4xl font-black italic">{t.contact.success}</h2>
            <p className="text-[10px] opacity-60 tracking-widest">{t.contact.successDesc}</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 border border-black px-8 py-3 hover:bg-black hover:text-white transition-all text-[10px] font-bold tracking-widest"
            >
              {t.contact.back}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">{t.contact.name}</label>
              <input 
                required 
                type="text" 
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic"
                placeholder={t.contact.required}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">{t.contact.email}</label>
              <input 
                required 
                type="email" 
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic"
                placeholder="USER@HOST.COM"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">{t.contact.message}</label>
              <textarea 
                required 
                rows={3}
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic resize-none"
                placeholder="..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-5 font-black tracking-[0.5em] text-xs hover:bg-neutral-800 transition-all shadow-lg"
            >
              {t.contact.send}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}