import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Building Confident Girls <br /> From The Inside Out
          </h1>

          <p className="mt-6 text-base md:text-lg text-black/80 max-w-md">
            Where girls discover who they are and grow into who 
            they're meant to be
          </p>

          {/* Subtle Divider */}
          <div className="mt-8 max-w-md w-full h-[2px] bg-black/20 rounded-full" />

          {/* NEW SEPARATED PARAGRAPH */}
          <p className="mt-10 text-sm text-black/70 max-w-md leading-relaxed">
            Through guided workshops, mentorship, and creative expression,
            we empower young girls to build resilience, leadership skills,
            and lasting self-confidence.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="bg-pink-400 text-black px-6 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors">
              Book a Free Discovery Call
            </button>
          </div>
        </div>

        {/* Right: Image + Social Icons */}
        <div className="flex flex-col items-center md:items-end">

          <div className="rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Confidance Coaching"
              width={480}
              height={330}
              className="rounded-2xl"
              priority
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-2xl text-black">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-70 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-70 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:scale-110 hover:opacity-70 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-70 transition"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}