import Image from "next/image";

export default function TopBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-center">
      
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          width={400}
          height={600}
          className="w-[220px] md:w-[260px] h-auto"
          priority
        />
      </div>

    </div>
  );
}