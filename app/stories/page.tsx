import Image from "next/image";

export default function StoriesPage() {
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

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Heading + Sticker */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
            Success Stories
          </h1>

          {/* Sticker */}
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/girl6.png" // best fit = support / outcome ✨
              alt="Decorative sticker"
              width={100}
              height={100}
              className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
              priority
            />
          </div>

        </div>

        {/* Text */}
        <p className="text-black/80 max-w-2xl mx-auto">
          Real journeys. Real growth. Real confidence.
          Stories coming soon.
        </p>

      </div>
    </section>
  );
}