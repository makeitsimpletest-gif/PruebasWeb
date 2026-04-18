"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F7E8A4] py-14 overflow-hidden relative">
      {/* Decorative drops */}
      {[
        { size: 20, top: "15%", left: "5%", delay: 0 },
        { size: 14, top: "65%", left: "12%", delay: 0.5 },
        { size: 18, top: "20%", right: "8%", delay: 0.3 },
        { size: 10, top: "70%", right: "15%", delay: 0.8 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#2EC4B6] opacity-30"
          style={{
            width: d.size,
            height: d.size * 1.35,
            top: d.top,
            left: "left" in d ? d.left : undefined,
            right: "right" in d ? d.right : undefined,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
          animate={{ y: [0, -16, 0], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: d.delay }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0B3C5D] mb-3"
            style={{ fontFamily: "var(--font-baloo-2)" }}
          >
            🐟 Compra hoy y recibe fresco en casa
          </h2>
          <p
            className="text-[#333333] text-base mb-8"
            style={{ fontFamily: "var(--font-poppins-css)" }}
          >
            Pescado de calidad, entrega rápida y sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-white font-bold px-8 py-4 rounded-full text-sm shadow-lg hover:bg-[#25A99D] transition-colors"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              COMPRAR AHORA
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-[#0B3C5D] text-white font-bold px-8 py-4 rounded-full text-sm shadow-lg hover:bg-[#0a3454] transition-colors"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              VER OFERTAS
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
