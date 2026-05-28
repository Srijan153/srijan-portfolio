import { client } from "../lib/sanity";

export default async function Home() {
  // THE GROQ QUERY: Fetching the title, description, cover image AND the gallery images!
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "img": image.asset->url,
    "gallery": gallery[].asset->url
  }`);

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

      {/* 2. PROJECTS SECTION (Showing Cover + Gallery + Description) */}
      <section className="px-8 md:px-16 pb-32 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-20 border-b border-white/10 pb-8">
          <h2 className="text-3xl font-bold tracking-tight uppercase">Selected Works</h2>
          <span className="text-neutral-500 text-sm tracking-widest uppercase">2024 — Present</span>
        </div>

        {projects.length === 0 ? (
           <p className="text-neutral-500 italic">No projects found. Make sure you hit "Publish" in your Sanity Studio!</p>
        ) : (
          <div className="flex flex-col gap-32"> {/* Massive spacing between different projects */}
            {projects.map((project) => (
              <div key={project._id} className="flex flex-col gap-10">
                
                {/* Project Header & Description */}
                <div className="max-w-4xl">
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h3>
                  {project.description && (
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed whitespace-pre-wrap">
                      {project.description}
                    </p>
                  )}
                </div>
                
                {/* Masonry Grid for this specific project's images */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  
                  {/* Show the Cover Image */}
                  {project.img && (
                    <div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-900">
                      <img 
                        src={project.img} 
                        alt={`${project.title} Cover`}
                        className="w-full h-auto block transition-all duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  
                  {/* Show all the Inside/Gallery Images */}
                  {project.gallery && project.gallery.map((galleryImg, index) => (
                    <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-900">
                      <img 
                        src={galleryImg} 
                        alt={`${project.title} Gallery Content ${index + 1}`}
                        className="w-full h-auto block transition-all duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                  
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="px-8 md:px-16 py-32 max-w-[1600px] mx-auto border-t border-white/10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's build something.</h2>
          <p className="text-xl text-neutral-400 mb-12">
            Whether you need a full event outreach campaign, fresh merchandise designs, or a compelling stage play poster, I'm currently available for freelance projects and internships.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <a href="mailto:your-email@example.com" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-teal-400 transition-colors inline-block text-center text-lg">
              Send an Email
            </a>
            <div className="flex items-center gap-8 text-neutral-400 text-lg ml-2">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MINIMAL FOOTER */}
      <footer className="px-8 md:px-16 pb-12 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 gap-4">
        <p>© {new Date().getFullYear()} Srijan Shubh. All rights reserved.</p>
        <p>Built with Next.js & Sanity</p>
      </footer>

    </main>
  );
}