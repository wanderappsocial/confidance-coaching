"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Confidance Logo"
            width={170}
            height={50}
            priority
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-black">

          <li>
            <Link className="hover:opacity-70" href="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/areas">
              Areas
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            
            {/* Clickable Parent */}
            <Link
              href="/services"
              className="hover:opacity-70 inline-flex items-center gap-1"
            >
              Our Services
              <span className="text-xs">▾</span>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-3 w-52 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <Link
                href="/services/life-coaching"
                className="block px-5 py-3 hover:bg-pink-50 rounded-t-xl"
              >
                Life Coaching
              </Link>

              <Link
                href="/services/other-services"
                className="block px-5 py-3 hover:bg-pink-50 rounded-b-xl"
              >
                Other Services
              </Link>

            </div>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/stories">
              Success Stories
            </Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/contact">
              Contact Us
            </Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/faq">
              FAQs
            </Link>
          </li>

        </ul>

        {/* CTA */}
        <button className="bg-pink-400 text-black px-5 py-2 rounded-full text-sm">
          Book a Free Call
        </button>

      </nav>
    </header>
  );
}