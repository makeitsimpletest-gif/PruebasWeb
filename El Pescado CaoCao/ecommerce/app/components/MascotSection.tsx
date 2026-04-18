"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function MascotSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0B3C5D] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.div
              animate={inView ? { y: [0, -14, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-[#2EC4B6]"
                style={{
                  backgroundImage: "url(/momentos.png)",
                  backgroundSize: "200%",
                  backgroundPosition: "bottom left",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="relative"
          >
            {/* Speech bubble */}
            <div className="bg-white rounded-2xl px-8 py-6 shadow-lg relative max-w-md">
              <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderRight: "16px solid white",
                }}
              />
              <p
                className="text-[#0B3C5D] font-extrabold text-xl sm:text-2xl leading-snug"
                style={{ fontFamily: "var(--font-baloo-2)" }}
              >
                "Yo me encargo de que
                <br />te llegue fresco 😉"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative water drops */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: 10 + i * 4,
              height: 14 + i * 5,
              backgroundColor: "#2EC4B6",
              top: `${20 + i * 12}%`,
              left: `${5 + i * 3}%`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
