"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const steps = [
  {
    number: "1",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Elige tu pescado",
    desc: "Selecciona lo que quieres recibir en casa",
  },
  {
    number: "2",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "Lo preparamos con cuidado",
    desc: "Lo limpiamos, empacamos y mantenemos la cadena de frío.",
  },
  {
    number: "3",
    icon: (
      <div
        className="w-8 h-8"
        style={{
          backgroundImage: "url(/momentos.png)",
          backgroundSize: "200%",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
      />
    ),
    title: "Te lo llevamos fresco",
    desc: "Recíbelo rápido y a la puerta de tu casa.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-[#2EC4B6] font-bold text-xs tracking-widest uppercase mb-1"
            style={{ fontFamily: "var(--font-poppins-css)" }}
          >
            ASÍ DE FÁCIL
          </p>
          <h2
            className="text-3xl font-extrabold text-[#0B3C5D]"
            style={{ fontFamily: "var(--font-baloo-2)" }}
          >
            ¿Cómo funciona?
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-full bg-[#F7E8A4] border-4 border-[#2EC4B6] flex items-center justify-center">
                  {step.icon}
                </div>
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-extrabold text-sm"
                  style={{ fontFamily: "var(--font-baloo-2)" }}
                >
                  {step.number}
                </div>
              </div>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute translate-x-[200%] top-8 w-full h-0.5 bg-[#F7E8A4]" />
              )}

              <h3
                className="font-bold text-[#0B3C5D] text-lg mb-2"
                style={{ fontFamily: "var(--font-baloo-2)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#666666] text-sm max-w-xs"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
