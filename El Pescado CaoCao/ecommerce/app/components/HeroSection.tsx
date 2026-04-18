"use client";

import { motion } from "motion/react";
import Image from "next/image";

const drops = [
  { size: 18, top: "12%", right: "28%", delay: 0, color: "#2EC4B6" },
  { size: 12, top: "22%", right: "8%", delay: 0.4, color: "#0B3C5D" },
  { size: 22, top: "55%", right: "5%", delay: 0.8, color: "#2EC4B6" },
  { size: 10, top: "70%", right: "25%", delay: 1.2, color: "#5EDDD6" },
  { size: 16, top: "8%", right: "45%", delay: 0.6, color: "#0B3C5D" },
  { size: 8, top: "40%", right: "2%", delay: 1.5, color: "#2EC4B6" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#F7E8A4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left – text */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              <Image
                src="/logo-b2c.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span
                className="text-[#0B3C5D] font-bold text-sm tracking-wide"
                style={{ fontFamily: "var(--font-baloo-2)" }}
              >
                El Pescado CaoCao
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{ fontFamily: "var(--font-baloo-2)" }}
            >
              <span className="text-[#0B3C5D]">DEL MAR A TU MESA,</span>
              <br />
              <span className="text-[#2EC4B6]">SIN VUELTAS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#333333] text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              Pescado fresco, entregado rápido
              <br />y sin complicaciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:bg-[#25A99D] transition-colors"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                VER PRODUCTOS
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#0B3C5D] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:bg-[#0a3454] transition-colors"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                COMPRAR AHORA
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 justify-center lg:justify-start text-sm text-[#0B3C5D]"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              Entrega rápida en CDMX y área metropolitana
            </motion.div>
          </div>

          {/* Right – mascot + decorations */}
          <div className="flex-1 relative flex justify-center items-center min-h-[320px] lg:min-h-[420px]">
            {/* Water drops */}
            {drops.map((drop, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: drop.size,
                  height: drop.size * 1.35,
                  top: drop.top,
                  right: drop.right,
                  backgroundColor: drop.color,
                  opacity: 0.75,
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 12, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  delay: drop.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
              className="absolute bottom-8 left-0 lg:-left-4 z-10 bg-white rounded-full p-3 shadow-lg border-2 border-[#2EC4B6] w-24 h-24 flex flex-col items-center justify-center text-center"
            >
              <span className="text-[#2EC4B6] font-extrabold text-xs leading-tight" style={{ fontFamily: "var(--font-baloo-2)" }}>
                CALIDAD
              </span>
              <span className="text-[#0B3C5D] font-bold text-[10px] leading-tight" style={{ fontFamily: "var(--font-baloo-2)" }}>
                GARANTIZADA
              </span>
              <svg className="w-5 h-5 text-[#2EC4B6] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>

            {/* Mascot floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden"
                  style={{
                    backgroundImage: "url(/momentos.png)",
                    backgroundSize: "200%",
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0 20px 60px rgba(11, 60, 93, 0.2)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
