"use client";

import { useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope } from "react-icons/fa";

type IntroItem = {
  title: string;
  content: string;
  image: string;
};

export default function IntroVideo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const introItems: IntroItem[] = [
    {
      title: "What if she never had to lose herself first to find herself later?",
      content:
        "Life sometimes brings all of us moments of challenge, uncertainty, and self-doubt. Often, we don’t recognise the impact of these experiences until adulthood, when everything builds up and we realise we can no longer run from ourselves. Many of us begin the inner work later in life, but imagine how different things might have been if we’d grown up with tools that nurtured our emotional wellbeing from the start. Imagine the clarity, resilience, and self-belief we could have carried into adulthood.",
      image: "/images/sticker2.jpeg",
    },
    {
      title: "Nurturing emotionally strong and self-assured young women",
      content:
        "Bina is a dedicated Life Coach for girls aged 8 and above. She supports young girls in recognising, understanding, and regulating their emotions so they can grow into strong, self-assured, and independent-thinking young women. Her mission is to equip the next generation with the emotional tools they need to build a deep sense of self-worth, self-love, and trust in their own inner voice.",
      image: "/images/sticker1.jpeg",
    },
    {
      title: "Where Movement meets Mindset",
      content:
        "Bina strongly believes in the powerful connection between mind and body. Her sessions integrate both elements, combining mindset work with movement-based practices. Through guided mind tasks and expressive dance, she helps girls reconnect with themselves, strengthen their inner presence, and embody the emotional skills they are learning.",
      image: "/images/sticker6.jpeg",
    },
    {
      title: "Helping Girls Grow Into Their Most Confident and Authentic Selves",
      content:
        "With her compassionate and grounded style, Bina helps girls develop a strong sense of identity, healthy decision-making skills, and genuine self-belief.",
      image: "/images/sticker3.jpeg",
    },
  ];

  return (
    <section>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-14">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          <video
            src="/videos/IntroVideo.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        </div>

        {/* 🔥 Social Icons (NOW HERE) */}
        <div className="flex justify-center gap-6 mt-5 md:mt-7 text-2xl text-black">
          
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

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto px-6 pt-14 pb-20">
        <div className="space-y-10">

          {introItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-black/5 pt-12"
            >

              {/* Sticker */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md shadow-pink-200 ring-4 ring-white">
                  <img
                    src={item.image}
                    alt="icon"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Title */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-6 flex justify-between items-center text-black font-bold text-lg"
              >
                {item.title}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-black/80 leading-relaxed">
                  {item.content}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* CTA ONLY (socials removed from here) */}
      <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <button className="bg-pink-400 text-black px-8 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors shadow-md">
          Book Now
        </button>
      </div>

    </section>
  );
}