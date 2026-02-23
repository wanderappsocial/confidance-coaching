import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // optional nice effect
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="relative z-10">
        <Hero />
        <IntroVideo />
      </div>
    </main>
  );
}