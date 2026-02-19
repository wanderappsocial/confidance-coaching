import Link from "next/link";

export default function ServicesPage() {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-semibold mb-20 text-black">
          Our Services
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-12">

          <Link
            href="/services/life-coaching"
            className="bg-white/80 backdrop-blur-md px-12 py-10 rounded-3xl shadow-xl text-2xl font-medium hover:scale-105 transition text-black"
          >
            Life Coaching
          </Link>

          <Link
            href="/services/other-services"
            className="bg-white/80 backdrop-blur-md px-12 py-10 rounded-3xl shadow-xl text-2xl font-medium hover:scale-105 transition text-black"
          >
            Other Services
          </Link>

        </div>
      </div>
    </section>
  );
}