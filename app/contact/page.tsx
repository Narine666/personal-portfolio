"use client"; // Պահանջ 1. Client Component
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  
  // Պահանջ 2. Basic Form Validation-ի համար նախատեսված վիճակ
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Սովորական validation. եթե դաշտերը դատարկ չեն, համարում ենք ուղարկված
    if (formData.name && formData.email && formData.message) {
      console.log("Form Data:", formData); // Այստեղ տվյալները պատրաստ են ուղարկվելու
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black p-8 font-sans uppercase">
      <header className="mb-20 border-b border-black pb-4">
        <h1 className="text-3xl font-light italic tracking-tighter">Secure_Messaging.v1</h1>
      </header>

      <div className="max-w-2xl mx-auto border border-black p-10 bg-white">
        {submitted ? (
          /* Success Message - Թասկի պահանջ */
          <div className="py-20 text-center space-y-4 animate-pulse">
            <h2 className="text-4xl font-black uppercase">Success_Sent</h2>
            <p className="text-xs opacity-60 tracking-widest">Your data has been processed.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 border border-black px-6 py-2 hover:bg-black hover:text-white transition-all text-[10px]"
            >
              Return_to_Form
            </button>
          </div>
        ) : (
          /* Form - Պահանջվող դաշտերով */
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">User_Name</label>
              <input 
                required 
                type="text" 
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic"
                placeholder="Required_"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">Email_Address</label>
              <input 
                required 
                type="email" 
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic"
                placeholder="name@provider.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.3em] font-mono opacity-40">Message_Payload</label>
              <textarea 
                required 
                rows={3}
                className="bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors font-bold italic resize-none"
                placeholder="Type_here..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-black text-white py-4 font-black tracking-[0.4em] text-xs hover:bg-gray-800 transition-all"
            >
              Execute_Submit_
            </button>
          </form>
        )}
      </div>
    </div>
  );
}