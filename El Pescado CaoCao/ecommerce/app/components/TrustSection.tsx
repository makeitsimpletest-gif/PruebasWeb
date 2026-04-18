"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const items = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Calidad garantizada",
    desc: "Seleccionamos lo mejor del mar",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "Cadena de frío asegurada",
    desc: "Frescura intacta hasta tu puerta",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Entrega rápida",
    desc: "Llega fresco y a tiempo",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#2EC4B6" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Producto fresco del día",
    desc: "Directo del mar a tu mesa",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex items-start gap-3"
            >
              <div className="bg-[#F7E8A4] rounded-xl p-2.5 shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <p
                  className="font-bold text-[#0B3C5D] text-sm leading-snug"
                  style={{ fontFamily: "var(--font-baloo-2)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[#666666] text-xs leading-snug mt-0.5"
                  style={{ fontFamily: "var(--font-poppins-css)" }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
