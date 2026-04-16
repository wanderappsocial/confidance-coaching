"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Image from "next/image";

type ServiceType =
  | "Private Dance Classes"
  | "School Workshops"
  | "Weddings & Events"
  | "Birthday & Hen Parties"
  | "What To Expect"
  | null;

export default function OtherServicesPage() {
  const [activeModal, setActiveModal] = useState<ServiceType>(null);

  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/images/pink-marble.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading + Sticker */}
        <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
          Other Services
        </h1>

        {/* Sticker */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/images/girl2.png" // you can change this if you want a neutral sticker later
            alt="Decorative sticker"
            width={100}
            height={100}
            className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
            priority
          />
        </div>

        </div>

        {/* Buttons Layout */}
        <div className="flex flex-col items-center gap-16">

          {/* Circular Buttons */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12">

            {/* Private Dance */}
            <button
                onClick={() => setActiveModal("Private Dance Classes")}
                className="w-60 h-60 md:w-64 md:h-64 rounded-full bg-white/85 backdrop-blur-md shadow-xl flex items-center justify-center text-center px-6 text-black font-semibold transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/images/privatedance.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
                  />
                  <span>Private Dance Classes</span>
                </div>
              </button>

            {/* School Workshops */}
            <button
              onClick={() => setActiveModal("School Workshops")}
              className="
                w-60 h-60 md:w-64 md:h-64
                rounded-full
                bg-white/85 backdrop-blur-md
                shadow-xl
                flex items-center justify-center
                text-center
                px-6
                text-black font-semibold
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/images/school.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
                  />
                  <span>School Workshops</span>
                </div>
            </button>

            {/* Weddings */}
            <button
              onClick={() => setActiveModal("Weddings & Events")}
              className="
                w-60 h-60 md:w-64 md:h-64
                rounded-full
                bg-white/85 backdrop-blur-md
                shadow-xl
                flex items-center justify-center
                text-center
                px-6
                text-black font-semibold
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/images/wedding.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
                  />
                  <span>Weddings & Events</span>
                </div>
            </button>

            {/* Birthday & Hen */}
            <button
              onClick={() => setActiveModal("Birthday & Hen Parties")}
              className="
                w-60 h-60 md:w-64 md:h-64
                rounded-full
                bg-white/85 backdrop-blur-md
                shadow-xl
                flex items-center justify-center
                text-center
                px-6
                text-black font-semibold
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/images/birthday.png"
                    alt=""
                    width={80}
                    height={80}
                    className="h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
                  />
                  <span>Birthday & Hen Parties</span>
                </div>
            </button>

          </div>

          {/* Rectangular Button */}
          <button
            onClick={() => setActiveModal("What To Expect")}
            className="
              bg-white/85 backdrop-blur-md
              px-14 py-6
              rounded-2xl
              shadow-lg
              text-black font-semibold
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            What To Expect
          </button>

        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      >

        {activeModal === "School Workshops" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              School Workshops
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                Bina delivers engaging and uplifting school workshops designed
                to support confidence, self-expression, and connection through movement.
              </p>
              <p>
                Each workshop runs for 45 minutes to one hour and introduces
                students to Bollywood dance using colourful props and costumes.
              </p>
              <p>
                Sessions begin with a gentle warm-up, followed by guided dance
                routines and the learning of a simple choreography.
              </p>
              <p>
                Workshops help children build body awareness, coordination,
                teamwork, and joy in movement — with a focus on participation
                rather than perfection.
              </p>
            </div>
          </>
        )}

        {activeModal === "Private Dance Classes" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Private Dance Classes & Events
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                Private sessions for individuals and groups looking for a fun,
                confidence-boosting experience rooted in Bollywood fusion.
              </p>
              <p>
                Open to children, teens, adults, and mixed-age groups,
                with one-to-one or group bookings available.
              </p>
              <p>
                The focus is always on enjoyment, self-expression,
                and feeling good in your body — no experience needed.
              </p>
            </div>
          </>
        )}

        {activeModal === "Weddings & Events" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Weddings & Special Events
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                Tailored choreography for individuals, families, and groups
                performing at weddings and special occasions.
              </p>
              <p>
                Sessions are structured over a short series,
                allowing time to learn, practise, and feel confident.
              </p>
              <p>
                Fully adapted to your music, ability level, and time frame.
              </p>
            </div>
          </>
        )}

        {activeModal === "Birthday & Hen Parties" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Birthday Parties & Hen Parties
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>
                High-energy, inclusive dance sessions designed for celebration.
              </p>
              <p>
                Includes warm-up, choreographed routine,
                and group performance.
              </p>
              <p>
                Costumes and props can be included
                to add creativity and excitement.
              </p>
            </div>
          </>
        )}

        {activeModal === "What To Expect" && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-black">
              What To Expect
            </h2>
            <div className="space-y-4 text-black/80 leading-relaxed">
              <p>All private dance sessions include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A fun and gentle warm-up</li>
                <li>Learning Bollywood fusion choreography</li>
                <li>Rehearsal and performance (for events)</li>
                <li>A relaxed and supportive environment</li>
              </ul>
              <p>
                Sessions are delivered at a venue of your choice
                and adapted to suit your group.
              </p>
            </div>
          </>
        )}

      </Modal>

    </section>
  );
}