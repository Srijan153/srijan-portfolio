import { client } from "../lib/sanity";

export default async function Home() {
  // THE GROQ QUERY: Fetching your actual projects from the Sanity cloud
  // Coalesce checks if the field is named "image" OR "mainImage" just in case!
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "subtitle": subtitle, 
    "img": coalesce(image.asset->url, mainImage.asset->url)
  }`);

  // THE ASYMMETRIC GRID LOGIC
  const layoutSpans = [
    "col-span-1 md:col-span-2 row-span-2 md:h-[600px] h-[400px]",
    "col-span-1 row-span-1 md:h-[288px] h-[300px]",
    "col-span-1 row-span-1 md:h-[288px] h-[300px]",
    "col-span-1 md:col-span-3 row-span-1 md:h-[400px] h-[300px]",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-teal-500 selection:text-white font-sans">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="flex flex-col justify-center min-h-[85vh] px-8 md:px-16 max-w-[1600px] mx-auto">
        <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-700">
          Srijan <br /> Shubh.
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-[2px] w-16 bg-teal-500"></div>
          <p className="max-w-2xl text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            Graphic Designer & Student Coordinator currently studying at BIT Mesra. Structuring visual narratives through precise graphic design, brand identity, and compelling storytelling.
          </p>
        </div>
      </section>

      {/* 2. ASYMMETRIC MASONRY GRID (Connected to Sanity) */}
      <section className="px-8 md:px-16 pb-24 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase">Selected Works</h2>
          <span className="text-neutral-500 text-sm tracking-widest uppercase">2024 — Present</span>
        </div>

        {projects.length === 0 ? (
           <p className="text-neutral-500 italic">No projects found. Make sure you hit "Publish" in your Sanity Studio!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project._id} 
                className={`group relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer ${layoutSpans[index % layoutSpans.length]}`}
              >
                {/* Pulling the actual image from Sanity */}
                {project.img && (
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  {project.subtitle && (
                    <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.subtitle}
                    </p>
                  )}
                  <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="px-8 md:px-16 py-24 max-w-[1600px] mx-auto border-t border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's build something.</h2>
          <p className="text-xl text-neutral-400 mb-12">
            Whether you need a full event outreach campaign, fresh merchandise designs, or a compelling stage play poster, I'm currently available for freelance projects and internships.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8">
            <a href="mailto:your-email@example.com" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-teal-400 transition-colors inline-block text-center">
              Send an Email
            </a>
            <div className="flex items-center gap-6 text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MINIMAL FOOTER */}
      <footer className="px-8 md:px-16 pb-12 max-w-[1600px] mx-auto flex justify-between items-center text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Srijan Shubh. All rights reserved.</p>
        <p>Built with Next.js & Sanity</p>
      </footer>

    </main>
  );
}