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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">

          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
            <Image
              src="/images/hero-image.png"
              alt="Coaching Session"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Center Image (Highlighted) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl scale-105 border-4 border-white">
            <Image
              src="/images/hero-image.png"
              alt="Dance Session"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
            <Image
              src="/images/hero-image.png"
              alt="Mentorship"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

        </div>

        {/* Text Box */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/40">
          <h3 className="text-2xl font-semibold mb-6 text-black">
            Bina Purohit
          </h3>

          <p className="text-black/80 leading-relaxed mb-6">
          Bina’s work is grounded in a deep understanding of both the mind and the body. Her journey began with studying Psychology at university, where she developed a strong interest in mindset, personal growth, and emotional development. This foundation led her into Education, qualifying as a Primary School Teacher and working closely with children for over 18 years.
          </p>

          <p className="text-black/80 leading-relaxed">
          Throughout her career, Bina has supported children both within schools and in private settings, giving her a broad and practical understanding of children’s emotional, social, and developmental needs. Nearly two decades of hands-on experience have allowed her to develop a thoughtful, effective, and nurturing approach to mentoring young people.
          Alongside her work in education and coaching, Bina has spent the past five years dancing professionally, building a strong connection to movement and body awareness. She recognises that emotional expression and confidence are not only learned through conversation, but also through how we move, hold ourselves, and connect with our bodies.
          By bringing together her background in Psychology, Education, Coaching, and Dance, Bina offers a unique mind–body approach to life coaching for children. Her sessions seamlessly blend emotional guidance with movement-based practices, allowing girls to build self-awareness, inner strength, and confidence in a way that feels natural, engaging, and empowering.
          </p>
        </div>

      </div>
    </section>
  );
}