import Image from "next/image";
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative">
      
      {/* Overlay */}

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.15] tracking-tight">
  
        <span className="font-playfair block font-semibold tracking-tight">
          Where Movement meets Mindset
        </span>

        <span className="font-lato block mt-3 text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-black/80">
        Building Confident Girls from the Inside Out
        </span>

        </h1>

          <div className="mt-8">
            <button className="bg-pink-400 text-black px-8 py-3 rounded-full text-sm tracking-wide hover:bg-pink-500 transition-all duration-300 shadow-md hover:shadow-lg">
              Book a Free Discovery Call
            </button>
          </div>
        </div>

        {/* Right: Image + Social Icons */}
        <div className="flex flex-col items-center md:items-end">

          <div className="rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Confidance Coaching"
              width={480}
              height={330}
              className="rounded-2xl"
              priority
            />
          </div>

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