"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-black">

          <li>
            <Link className="hover:opacity-70" href="/">Home</Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/about">About</Link>
          </li>

          <li>
            <Link className="hover:opacity-70" href="/areas">Areas</Link>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative group">
            <Link
              href="/services"
              className="hover:opacity-70 inline-flex items-center gap-1"
            >
              Our Services
              <span className="text-xs">▾</span>
            </Link>

            <div className="absolute left-0 mt-3 w-52 bg-white shadow-xl rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-pink-400 text-black px-5 py-2 rounded-full text-sm">
            Book a Free Call
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <div className="px-6 space-y-4 text-black">

          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/areas" onClick={() => setIsOpen(false)}>Areas</Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full"
            >
              Our Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>

            {servicesOpen && (
              <div className="pl-4 mt-3 space-y-3">
                <Link
                  href="/services/life-coaching"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Life Coaching
                </Link>

                <Link
                  href="/services/other-services"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  Other Services
                </Link>
              </div>
            )}
          </div>

          <Link href="/stories" onClick={() => setIsOpen(false)}>
            Success Stories
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQs
          </Link>

          <button className="w-full bg-pink-400 text-black px-5 py-2 rounded-full text-sm mt-4">
            Book a Free Call
          </button>

        </div>
      </div>
    </header>
  );
}