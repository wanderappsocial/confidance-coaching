"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Image from "next/image";

type ModalType = "stage1" | "stage2" | "stage3" | null;

export default function LifeCoachingPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Page Title */}
        {/* Heading + Sticker */}
        <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-wide">
          Life Coaching
        </h1>

        {/* Sticker */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/images/girl2.png" // best to use growth sticker here 🌸
            alt="Decorative sticker"
            width={100}
            height={100}
            className="h-[80px] md:h-[100px] lg:h-[110px] w-auto object-contain opacity-95"
            priority
          />
        </div>

        </div>

        {/* Coaching Journey Intro */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            The Coaching Journey
          </h2>

          <p className="text-black/80 leading-relaxed">
            Every child is unique, which is why Bina’s coaching follows a guided
            journey rather than a one-size-fits-all approach. Support is always
            tailored, age-appropriate and centred around building trust,
            emotional awareness and self-understanding.
            <br /><br />
            All coaching journeys begin with a strong foundation before moving
            into more personalised support.
          </p>
        </div>

        {/* Stage Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">

      {/* Stage 1 */}
      <button
        onClick={() => setActiveModal("stage1")}
        className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-white/85 backdrop-blur-md shadow-xl flex items-center justify-center text-center px-6 text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 font-semibold">

        <span className="leading-relaxed">
            Stage One<br />
            Identity Foundations
          </span>
          
          <Image
            src="/images/stage1.jpeg"
            alt=""
            width={70}
            height={70}
            className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
          />

          

        </div>
      </button>

      {/* Stage 2 */}
      <button
          onClick={() => setActiveModal("stage2")}
          className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-white/85 backdrop-blur-md shadow-xl flex items-center justify-center text-center px-6 text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 font-semibold">

          <span className="leading-relaxed">
              Stage Two<br />
              Personal Growth Coaching
            </span>
            
            <Image
              src="/images/stage2.jpeg"
              alt=""
              width={70}
              height={70}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
            />  

          </div>
        </button>

      {/* Stage 3 */}
      <button
          onClick={() => setActiveModal("stage3")}
          className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-white/85 backdrop-blur-md shadow-xl flex items-center justify-center text-center px-6 text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 font-semibold">

          <span className="leading-relaxed">
              Stage Three<br />
              Ongoing Support
            </span>
            
            <Image
              src="/images/stage3.jpeg"
              alt=""
              width={70}
              height={70}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90"
            />

          </div>
        </button>

      </div>
      </div>

      {/* Modal (unchanged below) */}
      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
      >
        {activeModal === "stage1" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Identity Foundations
            </h2>
            <p className="text-black/80 leading-relaxed">
            This is the starting point for all clients.
            During this stage, girls are gently supported to explore who they are, understand their emotions and begin developing a positive relationship with themselves. This phase focuses on emotional awareness, self-expression and building trust; allowing a strong and supportive coaching relationship to form.
            ‘Identity Foundations’ provides the grounding needed for meaningful growth and sets the tone for all future coaching.
            </p>
          </>
        )}

        {activeModal === "stage2" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Personal Growth Coaching
            </h2>
            <p className="text-black/80 leading-relaxed">
            Following the foundations stage, coaching becomes more personalised and shaped around the child’s individual needs, experiences and goals.
            This stage may support areas such as emotional regulation, anxiety, friendships, confidence, self-concept, navigating life changes, and personal development. Sessions are guided by the child’s pace and focus on helping them develop tools they can carry into everyday life.
            There is no fixed curriculum at this stage — support evolves as the child does.
            </p>
          </>
        )}

        {activeModal === "stage3" && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Ongoing Support
            </h2>
            <p className="text-black/80 leading-relaxed">
            Some children benefit from continued guidance and emotional support over time.
            Ongoing support provides consistency, reassurance and a safe space for children to process experiences as they grow and change. This stage is offered by recommendation, ensuring the level of support is appropriate for each child.
            </p>
          </>
        )}
      </Modal>

    </section>
  );
}