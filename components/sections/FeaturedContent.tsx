export default function FeaturedContent() {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
  
            {/* LEFT COLUMN (2/3 width) */}
            <div className="lg:col-span-2 space-y-24">
  
              {/* Main Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-4xl font-light leading-tight text-blue-400">
                    Jasdeep Degun &<br />
                    Yama Sarshar bring<br />
                    Raga Bageshri to Het Concertgebouw
                  </h2>
  
                  <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                    The Kleine Zaal in the late-19th-century Concertgebouw rewards
                    focus more than spectacle, which made it a good room for
                    award-winning sitarist Jasdeep Singh Degun and the virtuosic
                    tabla player Yama Sarshar to captivate...
                  </p>
  
                  <div className="mt-6 text-xs tracking-widest text-gray-500 uppercase">
                    Almax Features &nbsp;·&nbsp; October 8, 2025
                  </div>
                </div>
  
                {/* Main Image */}
                <div className="w-full h-[420px] bg-gray-200 rounded-2xl flex items-center justify-center text-sm text-gray-400">
                  Large Image
                </div>
              </div>
  
              {/* Secondary Feature */}
              <div>
                <h3 className="text-3xl font-medium text-black mb-6">
                  ‘The Mumbaikar’ Series, by Bina 
                </h3>
  
                <div className="text-xs tracking-widest text-gray-500 uppercase mb-8">
                  Artwork &nbsp;·&nbsp; November 22, 2021
                </div>
  
                {/* Image Row */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
                    Image
                  </div>
                  <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
                    Image
                  </div>
                  <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
                    Image
                  </div>
                </div>
              </div>
  
            </div>
  
            {/* RIGHT COLUMN (1/3 width) */}
            <aside className="space-y-10">
  
              <h4 className="text-sm tracking-widest uppercase text-gray-500">
                Featured
              </h4>
  
              {/* Featured Card 1 */}
              <div className="space-y-4">
                <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
                  Image
                </div>
  
                <h5 className="text-lg font-medium text-black leading-snug">
                  The 2025 DIY World Conflict Starter Kit
                </h5>
  
                <div className="text-xs tracking-widest uppercase text-gray-500">
                  Humour and Cartoons · April 2, 2025
                </div>
              </div>
  
              {/* Featured Card 2 */}
              <div className="space-y-4">
                <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400">
                  Image
                </div>
  
                <h5 className="text-lg font-medium text-black leading-snug">
                  Nightly Skincare Routine of the Far Right:
                  A Step-by-Step Guide
                </h5>
  
                <div className="text-xs tracking-widest uppercase text-gray-500">
                  Write-Wing · May 2, 2024
                </div>
              </div>
  
            </aside>
  
          </div>
        </div>
      </section>
    );
  }