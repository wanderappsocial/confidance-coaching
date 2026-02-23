"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-center text-black mb-20 tracking-wide">
          About Us
        </h2>

        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-500">
            <Image
              src="/images/about1.png"
              alt="Coaching Session"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl scale-105 border-4 border-white hover:scale-[1.07] transition-all duration-500">
            <Image
              src="/images/about2.png"
              alt="Dance Session"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-500">
            <Image
              src="/images/about3.png"
              alt="Mentorship"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

        </div>

        {/* Name Heading */}
        <h3 className="text-2xl font-semibold text-center text-black mb-14">
          Bina Purohit
        </h3>

        {/* 4 Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Box 1 */}
          <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 
                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-black/80 leading-relaxed">
              Bina’s work is grounded in a deep understanding of both the mind and the body. 
              Her journey began with studying Psychology at university, where she developed 
              a strong interest in mindset, personal growth, and emotional development. 
              This foundation led her into Education, qualifying as a Primary School Teacher 
              and working closely with children for over 18 years.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 
                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-black/80 leading-relaxed">
              Throughout her career, Bina has supported children both within schools and 
              in private settings, giving her a broad and practical understanding of children’s 
              emotional, social, and developmental needs. Nearly two decades of hands-on 
              experience have allowed her to develop a thoughtful, effective, and nurturing 
              approach to mentoring young people.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 
                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-black/80 leading-relaxed">
              Alongside her work in education and coaching, Bina has spent the past five years 
              dancing professionally, building a strong connection to movement and body awareness. 
              She recognises that emotional expression and confidence are not only learned through 
              conversation, but also through how we move, hold ourselves, and connect with our bodies.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40 
                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-black/80 leading-relaxed">
              By bringing together her background in Psychology, Education, Coaching, and Dance, 
              Bina offers a unique mind–body approach to life coaching for children. Her sessions 
              seamlessly blend emotional guidance with movement-based practices, allowing girls 
              to build self-awareness, inner strength, and confidence in a way that feels natural, 
              engaging, and empowering.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}