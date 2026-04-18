"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    text: "Llegó súper fresco y rápido. El pescado de muy buena calidad. Ya voy a pedir cada semana.",
    author: "Laura G.",
    stars: 5,
  },
  {
    text: "Excelente servicio y atención. Como restaurante, necesitamos proveedores confiables y CaoCao nunca falla.",
    author: "Carlos M.",
    subtitle: "Restaurante El Puerto",
    stars: 4,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Testimonials */}
          <div className="flex-1">
            <div className="mb-8">
              <p
                className="text-[#2EC4B6] font-bold text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                CLIENTES FELICES
              </p>
              <div className="flex items-center justify-between">
                <h2
                  className="text-3xl font-extrabold text-[#0B3C5D]"
                  style={{ fontFamily: "var(--font-baloo-2)" }}
                >
                  Lo que dicen de nosotros
                </h2>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#0B3C5D] hover:text-[#2EC4B6] flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "var(--font-poppins-css)" }}
                >
                  VER MÁS OPINIONES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.author}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <Stars count={t.stars} />
                  <p
                    className="text-[#333333] text-sm mt-3 mb-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins-css)" }}
                  >
                    "{t.text}"
                  </p>
                  <div>
                    <p
                      className="font-bold text-[#0B3C5D] text-sm"
                      style={{ fontFamily: "var(--font-baloo-2)" }}
                    >
                      {t.author}
                    </p>
                    {t.subtitle && (
                      <p
                        className="text-[#666666] text-xs"
                        style={{ fontFamily: "var(--font-poppins-css)" }}
                      >
                        {t.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* B2B sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-72 bg-[#F7E8A4] rounded-2xl p-6 flex flex-col gap-4"
          >
            <div>
              <p
                className="text-[#2EC4B6] font-bold text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                ¿TIENES UN NEGOCIO?
              </p>
              <h3
                className="text-xl font-extrabold text-[#0B3C5D] leading-snug mb-3"
                style={{ fontFamily: "var(--font-baloo-2)" }}
              >
                Te surtimos como profesional
              </h3>
              <p
                className="text-[#333333] text-sm"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                Precios especiales, entrega puntual y calidad constante para tu restaurante o negocio.
              </p>
            </div>

            <div className="relative h-32 rounded-xl overflow-hidden">
              <Image
                src="/logo-b2b.png"
                alt="B2B"
                fill
                className="object-contain p-4"
              />
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#0B3C5D] text-white font-bold text-sm py-3 px-6 rounded-full text-center hover:bg-[#0a3454] transition-colors"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              QUIERO PRECIOS DE MAYOREO
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
