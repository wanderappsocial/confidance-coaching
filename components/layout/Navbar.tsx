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
        <Image
          src="/images/logo.png"
          alt="Confidance Logo"
          width={170}
          height={50}
          priority
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-black font-medium">

          <li><Link className="hover:opacity-70 font-bold" href="/">Home</Link></li>
          <li><Link className="hover:opacity-70 font-bold" href="/about">About</Link></li>
          <li><Link className="hover:opacity-70 font-bold" href="/areas">Areas</Link></li>

          {/* Desktop Dropdown */}
          <li className="relative group">
            <Link
              href="/services"
              className="hover:opacity-70 inline-flex items-center gap-1 font-bold"
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

          <li><Link className="hover:opacity-70 font-bold" href="/stories">Success Stories</Link></li>
          <li><Link className="hover:opacity-70 font-bold" href="/contact">Contact Us</Link></li>
          <li><Link className="hover:opacity-70 font-bold" href="/faq">FAQs</Link></li>

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

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Image
              src="/images/logo.png"
              alt="Confidance Logo"
              width={150}
              height={40}
            />
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col px-6 py-8 space-y-6 text-lg text-black">

            <Link href="/" onClick={() => setIsOpen(false)} className="block">
              Home
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)} className="block">
              About
            </Link>

            <Link href="/areas" onClick={() => setIsOpen(false)} className="block">
              Areas
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full"
              >
                <span>Our Services</span>
                <span className="text-xl">
                  {servicesOpen ? "−" : "+"}
                </span>
              </button>

              {servicesOpen && (
                <div className="flex flex-col mt-4 space-y-4 pl-4 text-base">
                  <Link
                    href="/services/life-coaching"
                    onClick={() => setIsOpen(false)}
                  >
                    Life Coaching
                  </Link>

                  <Link
                    href="/services/other-services"
                    onClick={() => setIsOpen(false)}
                  >
                    Other Services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/stories" onClick={() => setIsOpen(false)} className="block">
              Success Stories
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
              Contact Us
            </Link>

            <Link href="/faq" onClick={() => setIsOpen(false)} className="block">
              FAQs
            </Link>

            {/* CTA */}
            <button className="mt-6 bg-pink-400 text-black py-3 rounded-full text-base">
              Book a Free Call
            </button>

          </div>
        </div>
      )}
    </header>
  );
}