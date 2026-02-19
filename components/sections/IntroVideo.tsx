export default function IntroVideo() {
    return (
      <section className="bg-white">
        
        {/* Video aligned with Hero width */}
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/videos/IntroVideo.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            />
          </div>
        </div>
  
        {/* Paragraph Below */}
        {/* 4 Content Boxes */}
        <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-black/5">
            <p className="text-base text-black/80 leading-relaxed">
                Life sometimes brings all of us moments of challenge, uncertainty, and self-doubt.
                Often, we don’t recognise the impact of these experiences until adulthood,
                when everything builds up and we realise we can no longer run from ourselves.
                Imagine the clarity, resilience, and self-belief we could have carried into adulthood.
            </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-black/5">
            <p className="text-base text-black/80 leading-relaxed">
                Bina is a dedicated Life Coach for girls aged 8 and above.
                She supports young girls in recognising, understanding, and regulating
                their emotions so they can grow into strong, self-assured young women.
                Her mission is to equip the next generation with emotional tools for self-worth and self-love.
            </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-black/5">
            <p className="text-base text-black/80 leading-relaxed">
                Bina believes in the powerful connection between mind and body.
                Her sessions combine mindset work with movement-based practices.
                Through guided tasks and expressive dance, girls strengthen their inner presence
                and embody the emotional skills they are learning.
            </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-black/5">
            <p className="text-base text-black/80 leading-relaxed">
                With her compassionate and grounded style, Bina helps girls develop
                strong identity, healthy decision-making skills, and genuine self-belief.
                Her work empowers children to navigate life’s ups and downs
                with confidence, resilience, and authenticity.
            </p>
            </div>

        </div>
        </div>

        {/* CTA Below Boxes */}
        <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <button className="bg-pink-400 text-black px-8 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors shadow-md">
            Book Now
        </button>
        </div>
  
      </section>
    );
  }