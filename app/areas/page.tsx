import Image from "next/image";

export default function AreasPage() {
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

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-black mb-10 tracking-wide">
          Areas
        </h1>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-base md:text-lg text-black/80 leading-relaxed">
          Bina’s coaching sessions support girls through the emotional, social, and personal
          challenges they may experience as they grow. Sessions are tailored to each child and
          provide a safe, supportive space to explore thoughts, feelings, and experiences, while
          developing practical tools to navigate everyday life with greater self-awareness and
          confidence.
          </p>
        </div>

        {/* Illustration Image */}
        
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative w-full flex justify-center">
            
            <Image
              src="/images/arrow-transparent.png"
              alt="Growth and coaching journey"
              width={900}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />

          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Left: Bullet Areas */}
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/40">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Coaching may support girls with:
            </h2>

            <ul className="space-y-5 text-black/80">

            {[
              "Building confidence and a positive self-concept",
              "Developing a strong sense of identity and self-worth",
              "Understanding, naming, and expressing emotions",
              "Emotional regulation and managing anxiety",
              "Setting healthy boundaries and personal values",
              "Navigating friendships and communication skills",
              "Coping with bullying and peer challenges",
              "Managing low self-esteem and self-doubt",
              "Dealing with setbacks and disappointment",
              "Adjusting to life changes (moving, separation, loss)",
              "Supporting personal growth and emotional maturity",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  flex items-start gap-4
                  bg-white/60
                  px-5 py-4
                  rounded-xl
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-md
                  hover:-translate-y-1
                "
              >
                {/* Elegant Pink Dot */}
                <span className="mt-2 w-3 h-3 bg-pink-400 rounded-full flex-shrink-0" />

                <span className="leading-relaxed">
                  {item}
                </span>
              </li>
            ))}

          </ul>
          </div>

          {/* Right: Supporting Explanation */}
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/40 flex items-center">
            <p className="text-black/80 leading-relaxed text-base md:text-lg">
              All sessions are age-appropriate and delivered in a nurturing,
              non-judgemental way that encourages emotional awareness,
              resilience, and a healthy inner voice.
              <br /><br />
              Life coaching is not a replacement for therapy or clinical
              mental health support. Coaching focuses on emotional
              development, self-awareness, and skill-building, and can
              complement other professional support when needed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}