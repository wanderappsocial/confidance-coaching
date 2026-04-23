"use client";

import { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is life coaching for girls?",
      answer:
        "Life coaching for girls focuses on supporting emotional development, self-awareness, and confidence. Through guided conversations and practical tools, coaching helps girls understand their feelings and navigate everyday challenges in an empowering way.",
    },
    {
      question: "How is life coaching different from therapy or counselling?",
      answer:
        "Life coaching is strengths-based and growth-oriented. While Bina may gently explore past experiences when helpful, sessions focus on empowering growth in the present and future rather than diagnosing or treating mental health conditions.",
    },
    {
      question: "What age groups do you work with?",
      answer:
        "Bina works with girls aged 8 and above. Sessions are always age-appropriate and tailored to each child’s development, personality, and needs.",
    },
    {
      question: "What happens in a typical session?",
      answer:
        "Each session blends mindset coaching with movement-based activities. Girls are guided through discussions, reflective exercises, and expressive dance to support emotional awareness and confidence.",
    },
    {
      question: "Does my child need dance experience?",
      answer:
        "Not at all. Movement is used as self-expression, not performance. Sessions are gentle, inclusive, and adapted to suit each child’s comfort level.",
    },
    {
      question: "How involved are parents?",
      answer:
        "Parents play an important supportive role. While sessions are child-focused, Bina maintains open communication with parents when appropriate.",
    },
    {
      question: "Is everything confidential?",
      answer:
        "Yes. Sessions are confidential to create a safe and trusting space. Information is only shared when appropriate or if there is a safety concern.",
    },
    {
      question: "How many sessions will my child need?",
      answer:
        "Every child is different. Some benefit from short-term support, while others prefer ongoing sessions. This can be discussed after the initial session with Bina.",
    },
    {
      question: "How do I know if coaching is right for my daughter?",
      answer:
        "If your daughter would benefit from support with confidence, emotions, or self-expression, coaching can be empowering. If unsure, Bina is happy to discuss your child’s needs.",
    },
  ];

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

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Page Title */}
        <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
          FAQs
        </h1>

        {/* Sticker */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/images/girl4.png" // same support theme as Contact/Stories
            alt="Decorative sticker"
            width={100}
            height={100}
            className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
            priority
          />
        </div>

          <p className="text-black/80 mt-6">
            A few commonly asked questions to help you understand
            how coaching works.
          </p>

        </div>

        {/* Accordion */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-5 flex justify-between items-center text-black font-semibold"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-black/90 leading-relaxed font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Image Below FAQs */}
        <div className="mt-12 -mx-6">
          <Image
            src="/images/positive-thoughts-tp.png"
            alt="FAQ illustration"
            width={1200}
            height={800}
            className="w-full h-[220px] md:h-auto object-cover opacity-95"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-black/80 mb-6">
            Still have questions? Bina would be happy to connect.
          </p>

          <button className="bg-pink-400 hover:bg-pink-500 transition-colors text-black px-8 py-3 rounded-full shadow-md">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}