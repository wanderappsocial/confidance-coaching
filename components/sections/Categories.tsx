export default function Categories() {
    const categories = [
      { title: "Pages from a Diary" },
      { title: "Armchair Arbiters" },
      { title: "Ends of the Earth" },
      { title: "Restless Cases" },
    ];
  
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold text-black tracking-wide">
              CATEGORIES
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 mx-auto mt-4" />
          </div>
  
          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
            {categories.map((item, index) => (
              <div key={index} className="text-center">
                
                {/* Image Placeholder */}
                <div className="w-full h-48 flex items-center justify-center mb-8">
                  <div className="w-40 h-40 border border-gray-300 flex items-center justify-center text-xs text-gray-400">
                    Image
                  </div>
                </div>
  
                {/* Title */}
                <h3 className="text-xl font-medium text-black">
                  {item.title}
                </h3>
  
                {/* Underline */}
                <div className="w-10 h-0.5 bg-blue-400 mx-auto mt-4" />
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }