export default function Home() {
  // These are placeholders so you can see the advanced grid layout immediately. 
  // Later, we will swap these out for your live Sanity database!
  const placeholderProjects = [
    { 
      id: 1, 
      title: "Merchandise Design", 
      subtitle: "Apparel & Branding",
      span: "col-span-1 md:col-span-2 row-span-2 md:h-[600px] h-[400px]", 
      img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Stage Play Posters", 
      subtitle: "Print Design",
      span: "col-span-1 row-span-1 md:h-[288px] h-[300px]", 
      img: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Brand Identity", 
      subtitle: "Logo & Typography",
      span: "col-span-1 row-span-1 md:h-[288px] h-[300px]", 
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "Event Outreach", 
      subtitle: "Digital Campaigns",
      span: "col-span-1 md:col-span-3 row-span-1 md:h-[400px] h-[300px]", 
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-teal-500 selection:text-white font-sans">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="flex flex-col justify-center min-h-[85vh] px-8 md:px-16 max-w-[1600px] mx-auto">
        <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-700">
          Srijan <br /> Shubh.
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-[2px] w-16 bg-white/20"></div>
          <p className="max-w-2xl text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            Structuring visual narratives through precise graphic design, brand identity, and compelling visual storytelling.
          </p>
        </div>
      </section>

      {/* 2. ASYMMETRIC MASONRY GRID */}
      <section className="px-8 md:px-16 pb-24 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase">Selected Works</h2>
          <span className="text-neutral-500 text-sm tracking-widest uppercase">2024 — Present</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer ${project.span}`}
            >
              {/* Image with Hover Zoom & Grayscale effect */}
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              
              {/* Dark Overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.subtitle}
                </p>
                <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MINIMAL FOOTER */}
      <footer className="border-t border-white/10 px-8 md:px-16 py-12 max-w-[1600px] mx-auto flex justify-between items-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Srijan Shubh. All rights reserved.</p>
        <a href="mailto:your-email@example.com" className="hover:text-white transition-colors">
          Get in touch ↗
        </a>
      </footer>

    </main>
  );
}