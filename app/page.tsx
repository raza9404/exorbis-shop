import React from 'react';

// NEW COLOR PALETTE:
// Deep Blue: #27187D (Authority/Nav)
// Royal Blue: #758AFD (Primary/Action)
// Soft Periwinkle: #AEB8FF (Accents)
// Ice White: #F1F2F6 (Background)
// Sunset Orange: #FF8601 (CTA/Badges)

const COLORS = {
  deepBlue: "#27187D",
  royalBlue: "#758AFD",
  periwinkle: "#AEB8FF",
  iceWhite: "#F1F2F6",
  orange: "#FF8601",
};

// Dummy Data for 16 Products (Bada grid banane ke liye)
const products = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Exorbis Elite Edition - Model ${String.fromCharCode(65 + i)}`,
  price: (Math.random() * 8000 + 1200).toLocaleString('en-IN'),
  category: i % 2 === 0 ? "Premium Gear" : "Tech Lifestyle",
  rating: (Math.random() * 1.5 + 3.5).toFixed(1)
}));

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.iceWhite }}>
      
      {/* 1. PROFESSIONAL NAVIGATION (Deep Blue) */}
      <nav className="sticky top-0 z-50 shadow-xl" style={{ backgroundColor: COLORS.deepBlue }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg rotate-45" style={{ backgroundColor: COLORS.orange }}></div>
            <h1 className="text-2xl font-black text-white tracking-tighter">EXORBIS SHOP</h1>
          </div>
          
          <div className="flex-1 mx-12 hidden md:block">
            <div className="flex shadow-inner rounded-lg overflow-hidden bg-white">
              <input 
                type="text" 
                placeholder="Search for premium tech and lifestyle..." 
                className="w-full p-3 outline-none text-gray-800" 
              />
              <button className="px-8 text-white font-bold transition-opacity hover:opacity-90" 
                      style={{ backgroundColor: COLORS.orange }}>
                SEARCH
              </button>
            </div>
          </div>

          <div className="flex gap-8 text-white font-bold items-center">
            <span className="cursor-pointer hover:opacity-80 transition-all text-sm uppercase">Login</span>
            <div className="relative cursor-pointer group">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-2 -right-3 text-[10px] rounded-full px-1.5 py-0.5 border border-white" 
                    style={{ backgroundColor: COLORS.orange }}>0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MASSIVE SCROLLABLE HERO (Gradient of Blue & Orange) */}
      <section className="mt-6 px-4">
        <div className="max-w-7xl mx-auto h-[450px] rounded-[30px] flex flex-col justify-center items-start px-16 text-white relative overflow-hidden shadow-2xl transition-all"
             style={{ background: `linear-gradient(135deg, ${COLORS.deepBlue} 0%, ${COLORS.royalBlue} 100%)` }}>
          
          <div className="z-10 animate-fade-in">
            <span className="px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block" 
                  style={{ backgroundColor: COLORS.orange }}>LIMITED TIME OFFER</span>
            <h2 className="text-7xl font-extrabold leading-tight mb-4">
              The Future <br /> Is <span style={{ color: COLORS.periwinkle }}>Blue.</span>
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-lg leading-relaxed">
              Discover the new Exorbis collection designed with precision, power, and the perfect color palette.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-4 rounded-xl font-black text-lg shadow-lg hover:scale-105 transition-transform" 
                      style={{ backgroundColor: COLORS.orange }}>GET STARTED</button>
              <button className="px-10 py-4 rounded-xl font-black text-lg border-2 hover:bg-white hover:text-blue-900 transition-all" 
                      style={{ borderColor: COLORS.periwinkle }}>LEARN MORE</button>
            </div>
          </div>
          
          {/* Abstract Design Elements */}
          <div className="absolute right-[-10%] bottom-[-20%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20" 
               style={{ backgroundColor: COLORS.orange }}></div>
        </div>
      </section>

      {/* 3. HORIZONTAL DEALS ROW (Amazon Style) */}
      <section className="max-w-7xl mx-auto mt-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-black flex items-center gap-3" style={{ color: COLORS.deepBlue }}>
            <span className="w-1.5 h-10 rounded-full" style={{ backgroundColor: COLORS.orange }}></span>
            Hot Deals
          </h3>
          <span className="font-bold cursor-pointer underline transition-colors" style={{ color: COLORS.royalBlue }}>View All</span>
        </div>
        
        <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar">
          {products.slice(0, 8).map((p) => (
            <div key={p.id} className="min-w-[320px] bg-white p-5 rounded-2xl shadow-sm hover:shadow-2xl border border-transparent hover:border-[#AEB8FF] transition-all group">
              <div className="overflow-hidden rounded-xl mb-4 h-52 relative">
                <img src="/product.jpg" alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md font-bold text-xs shadow-sm">⭐ {p.rating}</div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: COLORS.royalBlue }}>{p.category}</p>
              <h4 className="font-bold text-lg truncate" style={{ color: COLORS.deepBlue }}>{p.name}</h4>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-black" style={{ color: COLORS.deepBlue }}>₹{p.price}</span>
                <button className="px-4 py-2 rounded-lg text-white font-bold text-sm" 
                        style={{ backgroundColor: COLORS.deepBlue }}>ADD</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN PRODUCT GRID (Flipkart Style) */}
      <section className="max-w-7xl mx-auto mt-12 px-4 pb-32">
        <h3 className="text-3xl font-black mb-8" style={{ color: COLORS.deepBlue }}>Recommended For You</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-3xl transition-all duration-500 flex flex-col border border-gray-100 overflow-hidden">
              <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                <img src="/product.jpg" alt="product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4">
                   <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black shadow-lg" 
                         style={{ color: COLORS.orange }}>SAVE 20%</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform" style={{ color: COLORS.deepBlue }}>{p.name}</h4>
                <div className="flex items-center gap-1 mb-4 text-xs font-bold" style={{ color: COLORS.royalBlue }}>
                  <span>Free Delivery</span>
                  <span>•</span>
                  <span>Top Rated</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <p className="text-3xl font-black" style={{ color: COLORS.deepBlue }}>₹{p.price}</p>
                    <p className="text-sm line-through opacity-40">₹{(parseInt(p.price.replace(/,/g, '')) * 1.2).toFixed(0)}</p>
                  </div>
                  <button className="w-full py-4 rounded-2xl font-black text-white shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 hover:opacity-90"
                          style={{ backgroundColor: COLORS.orange }}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-4" style={{ backgroundColor: COLORS.deepBlue }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white opacity-90">
          <div>
            <h4 className="text-xl font-black mb-4">EXORBIS TECH LABS</h4>
            <p className="text-sm leading-relaxed opacity-60">Architecting the future of digital commerce with cinematic experiences and high-performance engineering.</p>
          </div>
          <div>
            <h4 className="text-xl font-black mb-4">QUICK LINKS</h4>
            <ul className="text-sm space-y-2 opacity-60">
              <li className="hover:text-[#FF8601] cursor-pointer">Project Ishq</li>
              <li className="hover:text-[#FF8601] cursor-pointer">MiyoKart</li>
              <li className="hover:text-[#FF8601] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-4">NEWSLETTER</h4>
            <div className="flex gap-2">
              <input type="text" placeholder="Your email" className="bg-white/10 p-2 rounded-lg outline-none w-full border border-white/20" />
              <button className="px-4 py-2 rounded-lg font-bold" style={{ backgroundColor: COLORS.orange }}>JOIN</button>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-xs border-t border-white/10 pt-8 text-white/40">
           © 2026 Exorbis Tech Labs. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
