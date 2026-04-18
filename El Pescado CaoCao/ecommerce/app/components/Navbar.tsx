"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const navLinks = ["Inicio", "Productos", "Ofertas", "¿Cómo funciona?", "B2B"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo-b2c.png"
              alt="El Pescado CaoCao"
              width={44}
              height={44}
              className="object-contain"
            />
            <span
              className="font-bold text-[#0B3C5D] text-base hidden sm:block"
              style={{ fontFamily: "var(--font-baloo-2)" }}
            >
              El Pescado CaoCao
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#333333] hover:text-[#2EC4B6] transition-colors font-medium"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar productos..."
                className="bg-transparent text-sm outline-none w-36 text-gray-600 placeholder-gray-400"
              />
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#0B3C5D]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#0B3C5D] relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 bg-[#FF595E] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                2
              </span>
            </button>

            <button
              className="md:hidden p-2 text-[#0B3C5D]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 flex flex-col gap-3 border-t border-gray-100 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-[#333333] hover:text-[#2EC4B6] transition-colors font-medium px-2 py-1"
                    style={{ fontFamily: "var(--font-poppins-css)" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
