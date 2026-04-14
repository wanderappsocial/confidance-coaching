import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import TopBanner from "@/components/sections/TopBanner"; // 👈 ADD THIS

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
      }}
    >
      {/* Softer overlay for entire page */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      <div className="relative z-10">
        <TopBanner /> {/* 👈 ADD THIS */}
        <Hero />
        <IntroVideo />
      </div>
    </main>
  );
}