"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
          Contact Us
        </h1>

        {/* Sticker */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/images/girl7.png" // same as Success Stories
            alt="Decorative sticker"
            width={100}
            height={100}
            className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
            priority
          />
        </div>

  <p className="text-black/80 max-w-3xl mx-auto leading-relaxed mt-6">
    If you’re exploring coaching for your child, the FAQs page is a helpful place to start.
    If you still have questions or would like to talk things through, Bina would be happy to connect.
  </p>

</div>

        {/* Contact Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14">

          <p className="text-black/80 mb-10 leading-relaxed text-center">
            Complete the form below and Bina will be in touch to discuss next steps.
            Alternatively, for general enquiries, you can email directly at:
            <br />
            <a
            href="mailto:bina.confidancecoaching@gmail.com"
            className="font-medium text-black break-all hover:underline"
          >
            bina.confidancecoaching@gmail.com
          </a>
          </p>

          {/* Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-4 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white resize-none"
            />

            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 transition-colors text-black font-medium py-4 rounded-xl shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Discovery Call CTA */}
        <div className="text-center mt-16">
          <p className="text-black/80 mb-6">
            Bina offers a complimentary discovery call to discuss your child’s needs,
            answer questions, and explore the most supportive next step — with no obligation.
          </p>

          <button className="bg-pink-400 hover:bg-pink-500 transition-colors text-black px-8 py-3 rounded-full shadow-md">
            Book a FREE Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}