import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white/70 backdrop-blur-md">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="font-playfair text-2xl font-semibold text-black">
            Confidance Coaching
          </h3>
          <p className="mt-4 text-sm text-black/70 leading-relaxed max-w-sm">
            Helping young girls build confidence, emotional strength,
            and self-belief through mindset and movement.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 text-sm text-black">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/areas" className="hover:opacity-70">Areas</Link>
          <Link href="/services" className="hover:opacity-70">Services</Link>
          <Link href="/stories" className="hover:opacity-70">Success Stories</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </div>

        {/* Socials */}
        <div>
          <p className="text-sm font-medium text-black">Connect with us</p>

          <div className="flex gap-5 mt-4 text-xl text-black">
            <a href="#" className="hover:scale-110 hover:opacity-70 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-110 hover:opacity-70 transition">
              <FaTiktok />
            </a>
            <a href="#" className="hover:scale-110 hover:opacity-70 transition">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:scale-110 hover:opacity-70 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 py-4 px-6 text-xs text-black/60 flex flex-col items-center justify-center gap-2 text-center">
  
            <p>
                © {new Date().getFullYear()} Confidance Coaching. All rights reserved.
            </p>

            <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:opacity-70">
                Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:opacity-70">
                Terms & Conditions
                </Link>
            </div>

            </div>

    </footer>
  );
}