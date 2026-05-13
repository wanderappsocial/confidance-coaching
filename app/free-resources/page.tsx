import Image from "next/image";

export default function FreeResourcesPage() {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading + Sticker + Intro */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
            Free Resources
          </h1>

          {/* Sticker */}
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/girl9.png"
              alt="Decorative sticker"
              width={100}
              height={100}
              className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
              priority
            />
          </div>

          {/* Intro Paragraph */}
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-base md:text-lg text-black/80 leading-relaxed">
              A collection of supportive resources designed to encourage emotional wellbeing,
              confidence, self-awareness, and personal growth in young girls and families.
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Resource Card 1 */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            
            <h2 className="text-2xl font-semibold text-black mb-4">
              Emotional Wellbeing
            </h2>

            <p className="text-black/80 leading-relaxed">
              Helpful guidance and tools to support emotional awareness,
              confidence-building, self-expression, and healthy emotional habits.
            </p>

          </div>

          {/* Resource Card 2 */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            
            <h2 className="text-2xl font-semibold text-black mb-4">
              Parent Support
            </h2>

            <p className="text-black/80 leading-relaxed">
              Supportive resources for parents navigating confidence,
              emotional development, friendships, anxiety, and growing independence.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}