"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const products = [
  { name: "Filete de Tilapia", weight: "500g", price: "$89.00", emoji: "🐟", bg: "from-blue-100 to-blue-200", offer: false },
  { name: "Filete de Salmón", weight: "500g", price: "$189.00", emoji: "🍣", bg: "from-orange-100 to-orange-200", offer: false },
  { name: "Camarón Chico", weight: "1/2 kg", price: "$129.00", emoji: "🦐", bg: "from-pink-100 to-pink-200", offer: false },
  { name: "Atún Lomo", weight: "300g", price: "$149.00", emoji: "🐠", bg: "from-gray-100 to-gray-200", offer: false },
  { name: "Mojarra Entera", weight: "1 pieza", price: "$68.00", emoji: "🐡", bg: "from-teal-100 to-teal-200", offer: false },
  { name: "Mix de Mariscos", weight: "500g", price: "$139.00", originalPrice: "$159.00", emoji: "🦞", bg: "from-purple-100 to-purple-200", offer: true },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p
              className="text-[#2EC4B6] font-bold text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              LO MÁS PEDIDO
            </p>
            <h2
              className="text-3xl font-extrabold text-[#0B3C5D]"
              style={{ fontFamily: "var(--font-baloo-2)" }}
            >
              Productos destacados
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#0B3C5D] hover:text-[#2EC4B6] transition-colors flex items-center gap-1"
            style={{ fontFamily: "var(--font-poppins-css)" }}
          >
            VER TODOS LOS PRODUCTOS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Products grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 12px 36px rgba(11,60,93,0.13)" }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer shadow-sm group"
            >
              {/* Product image */}
              <div className={`bg-gradient-to-br ${p.bg} h-28 flex items-center justify-center text-5xl relative`}>
                {p.emoji}
                {p.offer && (
                  <span className="absolute top-2 right-2 bg-[#FF595E] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    OFERTA
                  </span>
                )}
              </div>

              <div className="p-3">
                <p
                  className="font-bold text-[#0B3C5D] text-xs leading-snug mb-0.5"
                  style={{ fontFamily: "var(--font-baloo-2)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#666666] text-[10px] mb-2"
                  style={{ fontFamily: "var(--font-poppins-css)" }}
                >
                  {p.weight}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <span
                    className="text-[#0B3C5D] font-extrabold text-sm"
                    style={{ fontFamily: "var(--font-baloo-2)" }}
                  >
                    {p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="text-gray-400 text-[10px] line-through" style={{ fontFamily: "var(--font-poppins-css)" }}>
                      {p.originalPrice}
                    </span>
                  )}
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#2EC4B6] hover:bg-[#25A99D] text-white text-[10px] font-bold py-2 rounded-full flex items-center justify-center gap-1 transition-colors"
                  style={{ fontFamily: "var(--font-poppins-css)" }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  AGREGAR
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
