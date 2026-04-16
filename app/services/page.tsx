import Link from "next/link";
import Image from "next/image";

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

        {/* Heading + Sticker */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
            Our Services
          </h1>

          {/* Sticker */}
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/girl2.png" // or create a new one later
              alt="Decorative sticker"
              width={100}
              height={100}
              className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
              priority
            />
          </div>

        </div>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-12">

          <Link
            href="/services/life-coaching"
            className="bg-white/80 backdrop-blur-md px-12 py-10 rounded-3xl shadow-xl hover:scale-105 transition text-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-4 font-semibold text-xl">

            <span>Life Coaching</span>

              <Image
                src="/images/stage3.jpeg" // growth = perfect for life coaching
                alt=""
                width={80}
                height={80}
                className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
              />

              

            </div>
          </Link>

        <Link
          href="/services/other-services"
          className="bg-white/80 backdrop-blur-md px-12 py-10 rounded-3xl shadow-xl hover:scale-105 transition text-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center gap-4 font-semibold text-xl">

          <span>Other Services</span>

            <Image
              src="/images/birthday.png" // matches your services theme
              alt=""
              width={80}
              height={80}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
            />

            

          </div>
        </Link>

        </div>

      </div>
    </section>
  );
}