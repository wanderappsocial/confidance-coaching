"use client";

import Image from "next/image";

const sections = [
  {
    text: `Bina’s work is grounded in a deep understanding of both the mind and the body. 
              Her journey began with studying Psychology at university, where she developed 
              a strong interest in mindset, personal growth, and emotional development. 
              This foundation led her into Education, qualifying as a Primary School Teacher 
              and working closely with children for over 18 years.`,
    image: "/images/about2.png",
  },
  {
    text: `Throughout her career, Bina has supported children both within schools and 
              in private settings, giving her a broad and practical understanding of children’s 
              emotional, social, and developmental needs. Nearly two decades of hands-on 
              experience have allowed her to develop a thoughtful, effective, and nurturing 
              approach to mentoring young people.`,
    image: "/images/about1.png",
  },
  {
    text: `Alongside her work in education and coaching, Bina has spent the past five years 
              dancing professionally, building a strong connection to movement and body awareness. 
              She recognises that emotional expression and confidence are not only learned through 
              conversation, but also through how we move, hold ourselves, and connect with our bodies.`,
    image: "/images/about3.png",
  },
  {
    text: `By bringing together her background in Psychology, Education, Coaching, and Dance, 
              Bina offers a unique mind–body approach to life coaching for children. Her sessions 
              seamlessly blend emotional guidance with movement-based practices, allowing girls 
              to build self-awareness, inner strength, and confidence in a way that feels natural, 
              engaging, and empowering.`,
    image: "/images/about4.png",
  },
];

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
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-20">
          About Us
        </h2>


        {/* Sections */}
        <div className="space-y-24">

          {sections.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-500">
                    
                    <Image
                      src={item.image}
                      alt="About section"
                      fill
                      className="object-cover"
                    />

                  </div>
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/40 
                                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <p className="text-black/80 leading-relaxed text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}