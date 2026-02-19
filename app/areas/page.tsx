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
            Bina’s coaching sessions support girls through the emotional,
            social, and personal challenges they may experience as they grow.
            Sessions are tailored to each child and provide a safe,
            supportive space to explore thoughts and feelings while
            developing practical tools for everyday life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Left: Bullet Areas */}
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/40">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Coaching may support girls with:
            </h2>

            <ul className="space-y-4 text-black/80 leading-relaxed">
              <li>• Building confidence and a positive self-concept</li>
              <li>• Developing a strong sense of identity and self-worth</li>
              <li>• Understanding, naming, and expressing emotions</li>
              <li>• Emotional regulation and managing anxiety</li>
              <li>• Setting healthy boundaries and personal values</li>
              <li>• Navigating friendships and communication skills</li>
              <li>• Coping with bullying and peer challenges</li>
              <li>• Managing low self-esteem and self-doubt</li>
              <li>• Dealing with setbacks and disappointment</li>
              <li>• Adjusting to life changes (moving, separation, loss)</li>
              <li>• Supporting personal growth and emotional maturity</li>
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