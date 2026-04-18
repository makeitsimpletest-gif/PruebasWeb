"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const categories = [
  {
    name: "Pescado fresco",
    emoji: "🐟",
    gradient: "from-[#0B3C5D] to-[#1A5A8A]",
    label: "Ver más",
  },
  {
    name: "Mariscos",
    emoji: "🦐",
    gradient: "from-[#2EC4B6] to-[#0B3C5D]",
    label: "Ver más",
  },
  {
    name: "Filetes listos",
    emoji: "🍣",
    gradient: "from-[#F0803C] to-[#E05A1A]",
    label: "Ver más",
  },
  {
    name: "Combos familiares",
    emoji: "🥘",
    gradient: "from-[#2EC4B6] to-[#1A9A8E]",
    label: "Ver más",
  },
  {
    name: "Ofertas del día",
    emoji: "🔥",
    gradient: "from-[#FF595E] to-[#CC3A3F]",
    badge: "OFERTAS DEL DÍA",
    label: "Ver más",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function CategoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F7E8A4] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p
              className="text-[#2EC4B6] font-bold text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              ELIGE LO QUE MÁS TE GUSTA
            </p>
            <h2
              className="text-3xl font-extrabold text-[#0B3C5D]"
              style={{ fontFamily: "var(--font-baloo-2)" }}
            >
              Nuestras categorías
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#0B3C5D] hover:text-[#2EC4B6] transition-colors flex items-center gap-1"
            style={{ fontFamily: "var(--font-poppins-css)" }}
          >
            VER TODAS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative bg-gradient-to-br ${cat.gradient} rounded-2xl overflow-hidden cursor-pointer shadow-md`}
            >
              <div className="h-36 flex items-center justify-center text-6xl">
                {cat.emoji}
              </div>
              {cat.badge && (
                <div className="absolute top-2 right-2 bg-white text-[#FF595E] text-[10px] font-bold px-2 py-1 rounded-lg leading-tight text-center">
                  {cat.badge}
                </div>
              )}
              <div className="bg-[#0B3C5D] px-3 py-3">
                <p
                  className="text-white font-bold text-sm mb-1.5"
                  style={{ fontFamily: "var(--font-baloo-2)" }}
                >
                  {cat.name}
                </p>
                <span className="inline-block bg-[#F7E8A4] text-[#0B3C5D] text-[10px] font-bold px-3 py-1 rounded-full">
                  {cat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
