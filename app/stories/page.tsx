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
        <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
          Success Stories
        </h1>

        <p className="text-black/80 max-w-2xl mx-auto">
          Real journeys. Real growth. Real confidence.
          Stories coming soon.
        </p>
      </div>
    </section>
  );
}