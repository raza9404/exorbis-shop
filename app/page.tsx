import React from 'react';

// ARCHIVAL STUDIO - PREMIUM DESIGN PALETTE
const COLORS = {
  background: "#FFFBF4",    // Swatch 1: Primary body background
  accentCards: "#D6CFC2",   // Swatch 2: Features, stats background
  textPrimary: "#000000",   // Swatch 3: Main headings & body text
  textSecondary: "#5A564D", // Swatch 4: Subtitles & descriptions
  primaryAccent: "#8B1E3F", // Swatch 5: Signature color (Buttons/Hover)
};

const products = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Exorbis Archival - Edition ${String.fromCharCode(65 + i)}`,
  price: (Math.random() * 8000 + 1200).toLocaleString('en-IN'),
  category: i % 2 === 0 ? "Heritage Collection" : "Modern Craft",
  rating: (Math.random() * 1.5 + 3.5).toFixed(1)
}));

export default function Home() {
  return (
    <div className="min-h-screen font-serif" style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
      
      {/* 1. PREMIUM NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-black/10 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: COLORS.primaryAccent }}></div>
            <h1 className="text-2xl font-bold tracking-widest uppercase italic" style={{ color: COLORS.textPrimary }}>MiyoKart</h1>
          </div>
          
          <div className="flex-1 mx-16 hidden md:block">
            <div className="flex border-b-2 border-black/20 focus-within:border-[#8B1E3F] transition-all">
              <input 
                type="text" 
                placeholder="Search archival collections..." 
                className="w-full py-2 bg-transparent outline-none text-sm italic" 
              />
              <button className="px-4 text-xs font-black tracking-widest uppercase" style={{ color: COLORS.primaryAccent }}>
                SEARCH
              </button>
            </div>
          </div>

          <div className="flex gap-10 items-center text-xs font-bold tracking-widest uppercase">
            <span className="cursor-pointer hover:opacity-50 transition-all">Account</span>
            <div className="relative cursor-pointer">
              <span>Bag (0)</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. ARCHIVAL HERO SECTION */}
      <section className="mt-12 px-6">
        <div className="max-w-7xl mx-auto h-[550px] rounded-[2px] flex flex-col justify-center items-center text-center relative overflow-hidden shadow-sm border border-black/5"
             style={{ backgroundColor: COLORS.accentCards }}>
          
          <div className="z-10 px-4">
            <span className="text-[10px] tracking-[0.5em] font-bold mb-6 block" style={{ color: COLORS.textSecondary }}>ESTABLISHED 2026</span>
            <h2 className="text-7xl font-light leading-tight mb-8 italic" style={{ color: COLORS.textPrimary }}>
              The Art of <br /> <span className="font-bold not-italic">Acquisition.</span>
            </h2>
            <p className="text-sm italic opacity-80 mb-10 max-w-md mx-auto leading-relaxed" style={{ color: COLORS.textSecondary }}>
              Experience the convergence of heritage design and future-ready intelligence. Curated for the modern architect.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-12 py-4 font-bold text-[10px] tracking-[0.3em] shadow-lg hover:bg-black hover:text-white transition-all uppercase" 
                      style={{ backgroundColor: COLORS.primaryAccent, color: '#FFF' }}>COLLECTION</button>
              <button className="px-12 py-4 font-bold text-[10px] tracking-[0.3em] border border-black/20 hover:bg-white transition-all uppercase">HISTORY</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURATED DEALS (Horizontal) */}
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <div className="flex items-end justify-between mb-10 border-b border-black/10 pb-4">
          <h3 className="text-4xl font-light italic" style={{ color: COLORS.textPrimary }}>
            Seasonal <span className="font-bold not-italic">Editions</span>
          </h3>
          <span className="text-[10px] tracking-widest font-black uppercase cursor-pointer border-b border-black pb-1">Explore All</span>
        </div>
        
        <div className="flex overflow-x-auto gap-10 pb-12 no-scrollbar">
          {products.slice(0, 8).map((p) => (
            <div key={p.id} className="min-w-[350px] group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#EBE7DF]">
                <img src="/product.jpg" alt="Product" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: COLORS.primaryAccent }}>{p.category}</p>
              <h4 className="font-bold text-lg mb-1">{p.name}</h4>
              <p className="text-xl font-light italic">₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RECOMMENDATIONS GRID */}
      <section className="max-w-7xl mx-auto mt-20 px-6 pb-32">
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-12 text-center">Selected for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((p) => (
            <div key={p.id} className="group flex flex-col items-center text-center">
              <div className="relative h-96 w-full mb-6 overflow-hidden">
                <img src="/product.jpg" alt="product" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#8B1E3F]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{p.name}</h4>
              <p className="text-xs italic mb-4" style={{ color: COLORS.textSecondary }}>Verified Heritage Quality</p>
              <p className="text-lg font-bold mb-6" style={{ color: COLORS.primaryAccent }}>₹{p.price}</p>
              
              <button className="w-full py-3 border border-black text-[10px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                REQUEST ACCESS
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 border-t border-black/10" style={{ backgroundColor: COLORS.accentCards }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-6">Archival Studio</h4>
            <p className="text-xs italic leading-loose opacity-70" style={{ color: COLORS.textSecondary }}>
              An Exorbis Tech Labs initiative. Dedicated to the preservation of design integrity and the pursuit of digital excellence.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-6">Atelier</h4>
            <ul className="text-[10px] tracking-widest font-bold space-y-4 uppercase opacity-60">
              <li className="hover:text-[#8B1E3F] cursor-pointer">Project Ishq</li>
              <li className="hover:text-[#8B1E3F] cursor-pointer">MiyoKart Legacy</li>
              <li className="hover:text-[#8B1E3F] cursor-pointer">Privacy & Terms</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-6">Correspondence</h4>
            <div className="flex border-b border-black/20 pb-2">
              <input type="text" placeholder="Your email address" className="bg-transparent text-[10px] italic outline-none w-full" />
              <button className="text-[10px] font-black tracking-widest">JOIN</button>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center text-[9px] font-bold tracking-[0.5em] uppercase opacity-40">
            © 2026 EXORBIS TECH LABS. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
