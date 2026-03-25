import Image from 'next/image';

const COLORS = {
  lavender: "#9381FF",
  teal: "#5F9EA0",
  rose: "#C28E8E",
  mist: "#F4F2FF",
  grape: "#3800b2",
  lilac: "#988ec3"
};

// Dummy Data for 12 Products
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Exorbis Premium Product ${i + 1}`,
  price: (Math.random() * 5000 + 500).toFixed(0),
  category: i % 2 === 0 ? "Lifestyle" : "Tech Gear"
}));

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.mist }}>
      
      {/* 1. AMAZON STYLE NAV BAR */}
      <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: COLORS.grape }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-black text-white italic tracking-widest">MiyoKart</h1>
          <div className="flex-1 mx-8 hidden md:block">
            <div className="flex">
              <input type="text" placeholder="Search for products..." className="w-full p-2 rounded-l-md outline-none" />
              <button className="px-6 rounded-r-md text-white font-bold" style={{ backgroundColor: COLORS.lavender }}>Search</button>
            </div>
          </div>
          <div className="flex gap-6 text-white font-semibold">
            <span className="cursor-pointer hover:text-[#E2DBFF]">Login</span>
            <div className="relative cursor-pointer">
              <span>Cart</span>
              <span className="absolute -top-2 -right-3 bg-red-500 text-[10px] rounded-full px-1">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. BIG SCROLLABLE HERO BANNER */}
      <section className="mt-4 px-4">
        <div className="max-w-7xl mx-auto h-[400px] rounded-2xl flex flex-col justify-center items-start px-12 text-white relative overflow-hidden shadow-2xl"
             style={{ background: `linear-gradient(45deg, ${COLORS.grape}, ${COLORS.rose})` }}>
          <div className="z-10">
            <h2 className="text-6xl font-bold mb-4">Summer <br /> Evolution.</h2>
            <p className="text-xl opacity-90 mb-6 max-w-md">Experience of Demo new color pallate for Miyokart.</p>
            <button className="px-8 py-3 rounded-full font-black text-lg transition-transform hover:scale-105" 
                    style={{ backgroundColor: COLORS.lavender }}>SHOP COLLECTION</button>
          </div>
          <div className="absolute right-[-5%] top-[-10%] w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: COLORS.teal }}></div>
        </div>
      </section>

      {/* 3. HORIZONTAL SCROLLABLE ROW (Amazon 'Deals' Style) */}
      <section className="max-w-7xl mx-auto mt-10 px-4">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.grape }}>
          <span className="w-2 h-8 rounded-full" style={{ backgroundColor: COLORS.teal }}></span>
          Trending Now
        </h3>
        <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="min-w-[280px] bg-white p-4 rounded-xl shadow-sm border border-[#E2DBFF] hover:border-[#9381FF] transition-all">
              <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.teal }}>{p.category}</p>
              <h4 className="font-bold truncate" style={{ color: COLORS.grape }}>{p.name}</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-black" style={{ color: COLORS.lavender }}>₹{p.price}</span>
                <button className="p-2 rounded-full text-white" style={{ backgroundColor: COLORS.grape }}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN VERTICAL GRID (Flipkart Style) */}
      <section className="max-w-7xl mx-auto mt-8 px-4 pb-20">
        <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.grape }}>All Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img src="/product.jpg" alt="product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 left-2 px-3 py-1 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: COLORS.rose }}>NEW</div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold mb-2 group-hover:text-[#9381FF] transition-colors" style={{ color: COLORS.grape }}>{p.name}</h4>
                <div className="mt-auto">
                  <p className="text-2xl font-black mb-4" style={{ color: COLORS.lavender }}>₹{p.price}</p>
                  <button className="w-full py-3 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all"
                          style={{ backgroundColor: COLORS.teal }}>
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-[#E2DBFF]" style={{ backgroundColor: COLORS.grape, color: '#fff' }}>
        <p className="opacity-70">© 2026 Exorbis Tech Labs | </p>
      </footer>
    </div>
  );
}