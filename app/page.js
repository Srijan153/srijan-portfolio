import { client, urlFor } from '@/lib/sanity';
import MediaGallery from './MediaGallery';
import FadeIn from './components/FadeIn';

async function getProjects() {
  const query = `*[_type == "project"] | order(order asc) {
    title,
    description,
    image,
    "videoUrls": videos[].asset->url,
    "galleryUrls": gallery[].asset->url,
    order
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const projects = await getProjects();
  const getImageUrl = (project) => project?.image ? urlFor(project.image).url() : null;

  // Tools duplicated to create the seamless infinite scroll effect
  const tools = ['Photoshop', 'Figma', 'Canva', 'DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Illustrator', 'Photoshop', 'Figma', 'Canva', 'DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Illustrator'];

  return (
    // Added bg-noise to combine the grid with the analog film texture
    <main className="min-h-screen bg-[#F4F4F5] text-[#111111] font-sans selection:bg-[#111111] selection:text-white relative scroll-smooth grid-pattern bg-noise">
      
      {/* HEADER */}
      <header className="sticky top-0 w-full flex justify-between items-center px-6 md:px-8 py-4 md:py-5 border-b border-neutral-300 text-xs font-semibold uppercase tracking-widest bg-[#F4F4F5]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-[#111111] md:group-hover:scale-150 transition-transform duration-300"></span>
            <span>Srijan Shubh</span>
          </div>
          <nav className="hidden md:flex gap-6 text-neutral-500">
            <a href="#work" className="hover:text-[#111111] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#111111] transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <a href="/srijan_shubh_resume.pdf" download className="border border-neutral-300 rounded-full px-5 py-2 md:px-6 hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm">
            Resume
          </a>
        </div>
      </header>

      {/* HERO SECTION WITH AMBIENT SPOTLIGHT */}
      <section className="relative px-6 md:px-8 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
        
        {/* The Ambient "Stage Light" Glow Effect */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl sm:text-7xl md:text-[11rem] font-black uppercase tracking-tighter leading-none mb-8 relative z-10 drop-shadow-sm">
            Srijan<br />
            <span className="text-neutral-400">Shubh</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12 max-w-4xl text-neutral-800 relative z-10">
            Structuring visual narratives through precise graphic design and video editing.
          </h2>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col gap-8 border-t border-neutral-300 pt-8">
            <p className="max-w-xl text-base md:text-lg text-neutral-600 font-light leading-relaxed">
              Second-year student at BIT Mesra, specializing in structured visual identities and digital storytelling for major organizations.
            </p>
            
            {/* INFINITE SCROLLING MARQUEE */}
            <div className="w-full max-w-3xl overflow-hidden border-y border-neutral-300 py-3 relative bg-white/50 backdrop-blur-sm">
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F4F4F5] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F4F4F5] to-transparent z-10"></div>
              
              <div className="animate-marquee gap-8">
                {tools.map((tool, i) => (
                  <span key={i} className="text-sm font-bold uppercase tracking-widest text-neutral-800 whitespace-nowrap">
                    {tool} <span className="text-neutral-300 ml-8">•</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* HYBRID BENTO BOX SECTION */}
      <section id="work" className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-16 scroll-mt-20">
        <FadeIn delay={0.1}>
          <div className="flex justify-between items-end border-b border-neutral-300 pb-4 mb-8 md:mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Selected Works</h2>
            <span className="text-xs font-mono text-neutral-400 hidden md:block">Hover to reveal details</span>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {projects.map((project, index) => {
            let spanClass = "md:col-span-12"; 
            if (index === 0) spanClass = "md:col-span-12 lg:col-span-8"; 
            else if (index === 1) spanClass = "md:col-span-12 lg:col-span-4"; 
            else if (index === 2) spanClass = "md:col-span-12 lg:col-span-5"; 
            else if (index === 3) spanClass = "md:col-span-12 lg:col-span-7"; 
            else spanClass = "md:col-span-6"; 

            return (
              <div key={index} className={`flex flex-col md:block relative w-full rounded-2xl overflow-hidden group border border-neutral-200 bg-white shadow-md hover:shadow-2xl hover:border-neutral-400 transition-all duration-500 md:h-[600px] ${spanClass}`}>
                <div className="relative w-full h-[350px] sm:h-[450px] md:absolute md:inset-0 md:h-full bg-neutral-200">
                  <div className="w-full h-full transform transition-transform duration-1000 ease-out md:group-hover:scale-105">
                    <MediaGallery project={project} coverImage={getImageUrl(project)} />
                  </div>
                </div>
                <div className="relative md:absolute md:inset-0 bg-[#111111] md:bg-[#111111]/85 md:backdrop-blur-md flex flex-col justify-end p-6 sm:p-8 md:p-12 text-white transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20">
                  <div className="md:border-l-2 md:border-white/30 md:pl-6 transform md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                    <span className="text-white/50 text-xs font-mono mb-3 block">{String(index + 1).padStart(2, '0')} — PROJECT</span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">{project.title || `Untitled Work`}</h3>
                    <div className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-xl">
                      {project.description ? <p>{project.description}</p> : <div className="flex flex-col gap-2 md:gap-3"><p><strong className="font-semibold text-white tracking-wide">Context:</strong> Visual identity and outreach strategy.</p><p><strong className="font-semibold text-white tracking-wide">Impact:</strong> Cohesive marketing materials.</p></div>}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-6 left-6 bg-white/90 backdrop-blur-sm border border-neutral-200 px-4 py-2 rounded-full z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#111111]">{project.title || `Project ${index + 1}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT & CONTACT SECTION */}
      <section id="contact" className="px-6 md:px-8 py-20 md:py-32 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-md hover:shadow-xl transition-shadow duration-500 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none"></div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 relative z-10">About the Artist</h2>
            <div className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-6 relative z-10">Bridging the gap between the stage and the screen.</div>
            <p className="text-neutral-600 font-light leading-relaxed relative z-10">My background in award-winning theater taught me how to structure a compelling story and command an audience. I channel that same energy into the digital canvas, ensuring every project communicates effectively.</p>
          </div>
          <div className="bg-[#111111] text-white rounded-3xl border border-neutral-800 shadow-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="relative z-10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Get in Touch</h2>
                <div className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Let's build something significant.</div>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
                <a href="mailto:shubh.srijan@example.com" className="text-xl font-medium hover:text-neutral-400 transition-colors">shubh.srijan@example.com</a>
                <a href="https://wa.me/917209682555" className="text-xl font-medium hover:text-neutral-400 transition-colors">WhatsApp: +91 72096 82555</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-8 py-12 flex justify-center text-center border-t border-neutral-300 bg-[#F4F4F5]/50 backdrop-blur-md relative">
        <div className="text-neutral-400 text-xs font-semibold tracking-widest uppercase">© 2026 Srijan Shubh. All rights reserved.</div>
        <div className="absolute bottom-6 right-6 text-neutral-300 opacity-0 hover:opacity-100 transition-opacity duration-700 cursor-default select-none">
          <span className="text-[10px] font-semibold tracking-widest uppercase">अंतः अस्ति प्रारंभः</span>
        </div>
      </footer>
    </main>
  );
}