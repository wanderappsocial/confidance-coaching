import Image from "next/image";

export default function TopBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-0 flex justify-center">
      
      <Image
        src="/images/banner-transparent.png"
        alt="Banner"
        width={400}
        height={600}
        className="w-[220px] md:w-[260px] h-auto"
        priority
      />

    </div>
  );
}