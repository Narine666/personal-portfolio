import Link from 'next/link';

export default function ProjectsPage() {
  // Քո ուզած նոր ֆոնային նկարը
  const bgImage = "https://i.pinimg.com/736x/f3/43/31/f34331b705e6ddd0115d31e10d5f68ef.jpg";

  const projects = [
    {
      id: "01",
      title: "E-LEARNING PLATFORM",
      category: "ARCHIVE / WEB DEVELOPMENT",
      description: "a digital space for education focusing on minimalist interaction.",
      year: "2025",
    },
    {
      id: "02",
      title: "PORTFOLIO SYSTEM",
      category: "VISUAL IDENTITY / NEXT.JS",
      description: "monochrome editorial design for creative professionals.",
      year: "2026",
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black p-8 font-sans overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Էջի վերնագիրը */}
      <header className="mb-20 border-b border-black pb-4 flex justify-between items-end">
        <h1 className="text-3xl md:text-5xl font-light italic tracking-tighter uppercase">Selected_Works.pdf</h1>
        <span className="text-[10px] tracking-[0.3em] font-mono opacity-50 uppercase text-right">Total_Units: 02</span>
      </header>

      <div className="space-y-40">
        {projects.map((project) => (
          <section key={project.id} className="relative group min-h-[450px] flex flex-col justify-center border-b border-black/5 pb-20">
            
            {/* Ֆոնային նկարը՝ ձգված աջ և ձախ (w-full object-cover) */}
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <img 
                src={bgImage} 
                alt="Background Archive Schema" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Բովանդակությունը (Content) */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono">{project.id}</span>
                <div className="h-[1px] bg-black w-full origin-left group-hover:scale-x-105 transition-transform duration-1000"></div>
                <span className="text-xs font-mono">{project.year}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8 overflow-hidden">
                  {/* Մեծացող տառերի էֆեկտը (scale-110) */}
                  <h2 className="text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter uppercase transition-all duration-700 ease-out group-hover:scale-105 origin-left cursor-default">
                    {project.title}
                  </h2>
                  <p className="mt-8 text-[10px] tracking-[0.5em] text-gray-500 font-mono uppercase">
                    {project.category}
                  </p>
                </div>

                <div className="md:col-span-2 pt-6">
                  <p className="text-sm leading-relaxed lowercase italic border-l-2 border-black pl-6 max-w-[200px]">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-end items-center pt-6">
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="text-[10px] border border-black px-8 py-4 hover:bg-black hover:text-white transition-all uppercase tracking-[0.2em] font-bold bg-white/40 backdrop-blur-md"
                  >
                    Details_
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-40 pt-10 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase opacity-30 font-mono">
        <p>© Archive System / 2026</p>
        <p>N_01 / Index</p>
      </footer>
    </div>
  );
}