import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative">

      <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 md:pb-20 flex flex-col items-center text-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.15] tracking-tight">
          
          <span className="font-playfair block font-semibold tracking-tight">
            Move Through Your Feelings
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
    </section>
  );
}