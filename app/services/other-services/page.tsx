"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

type ServiceType =
  | "Private Dance Classes"
  | "School Workshops"
  | "Weddings & Events"
  | "Birthday & Hen Parties"
  | "What To Expect"
  | null;

export default function OtherServicesPage() {
  const [activeModal, setActiveModal] = useState<ServiceType>(null);

  const services: ServiceType[] = [
    "Private Dance Classes",
    "School Workshops",
    "Weddings & Events",
    "Birthday & Hen Parties",
    "What To Expect",
  ];

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
        <h1 className="text-4xl font-semibold mb-16 text-black">
          Other Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item) => (
            <button
              key={item}
              onClick={() => setActiveModal(item)}
              className="bg-white/80 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition text-black"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

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
            Bina delivers engaging and uplifting school workshops designed to
            support confidence, self-expression, and connection through movement.
            </p>

            <p>
            Each workshop runs for 45 minutes to one hour and introduces
            students to Bollywood dance using colourful props and costumes.
            </p>

            <p>
            Sessions begin with a gentle warm-up, followed by guided dance
            routines and the learning of a simple choreography. Students are
            given the opportunity to perform in a supportive environment.
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
            and feeling good in your body — no experience needed!
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
            Sessions are structured over a short series, allowing time
            to learn, practise, and feel confident.
            </p>

            <p>
            Fully adapted to your music, ability level, and time frame,
            ensuring the experience feels relaxed and enjoyable.
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
            High-energy, inclusive dance sessions designed for celebration
            and fun.
            </p>

            <p>
            Includes warm-up, choreographed routine, and group performance
            in a supportive and celebratory atmosphere.
            </p>

            <p>
            Costumes and props can be included to add an extra touch of
            creativity and excitement.
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
            <li>Learning a Bollywood fusion choreography</li>
            <li>Rehearsal and performance (for events)</li>
            <li>A relaxed and supportive environment</li>
            </ul>

            <p>
            Sessions are delivered at a venue of your choice and fully
            adapted to suit your group and time available.
            </p>
        </div>
        </>
    )}
    </Modal>

    </section>
  );
}