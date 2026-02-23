"use client";

import { useState } from "react";

type IntroItem = {
  title: string;
  content: string;
};

export default function IntroVideo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const introItems: IntroItem[] = [
    {
      title: "What if she never had to lose herself first to find herself later?",
      content:
        "Life sometimes brings all of us moments of challenge, uncertainty, and self-doubt. Often, we don’t recognise the impact of these experiences until adulthood, when everything builds up and we realise we can no longer run from ourselves. Many of us begin the inner work later in life, but imagine how different things might have been if we’d grown up with tools that nurtured our emotional wellbeing from the start. Imagine the clarity, resilience, and self-belief we could have carried into adulthood.",
    },
    {
      title: "Nurturing emotionally strong and self-assured young women",
      content:
        "Bina is a dedicated Life Coach for girls aged 8 and above. She supports young girls in recognising, understanding, and regulating their emotions so they can grow into strong, self- assured, and independent-thinking young women. Her mission is to equip the next generation with the emotional tools they need to build a deep sense of self-worth, self-love, and trust in their own inner voice.",
    },
    {
      title: "Where mindset meets movement",
      content:
        "Bina strongly believes in the powerful connection between mind and body. Her sessions integrate both elements, combining mindset work with movement-based practices. Through guided mind tasks and expressive dance, she helps girls reconnect with themselves, strengthen their inner presence, and embody the emotional skills they are learning. This holistic approach allows children to experience personal growth on both a mental and physical level, shaping not only how they think, but how they move through their world.",
    },
    {
      title: "Helping Girls Grow Into Their Most Confident and Authentic Selves",
      content:
        "With her compassionate and grounded style, Bina helps girls develop a strong sense of identity, healthy decision-making skills, and genuine self-belief, while also nurturing qualities such as humility, empathy, and care for others. Her work empowers children to navigate life’s ups and downs with confidence, resilience, and authenticity.",
    },
  ];

  return (
    <section>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          <video
            src="/videos/IntroVideo.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">

          {introItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md overflow-hidden border border-black/5"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-6 flex justify-between items-center text-black font-medium text-lg"
              >
                {item.title}
                <span className="text-2xl transition-transform">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-black/80 leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <button className="bg-pink-400 text-black px-8 py-3 rounded-full text-sm hover:bg-pink-500 transition-colors shadow-md">
          Book Now
        </button>
      </div>

    </section>
  );
}