import Image from "next/image";

const footerLinks = {
  Productos: ["Pescado fresco", "Mariscos", "Filetes", "Combos", "Ofertas"],
  Ayuda: ["¿Cómo funciona?", "Preguntas frecuentes", "Envíos y entregas", "Políticas de compra", "Contacto"],
  B2B: ["Mayoreo", "Restaurantes", "Cotizaciones"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo-b2c.png"
              alt="El Pescado CaoCao"
              width={60}
              height={60}
              className="object-contain mb-3"
            />
            <p
              className="text-white/70 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-poppins-css)" }}
            >
              Del mar a tu mesa, sin vueltas.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="font-bold text-sm mb-4 text-white"
                style={{ fontFamily: "var(--font-baloo-2)" }}
              >
                {section.toUpperCase()}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-xs hover:text-[#2EC4B6] transition-colors"
                      style={{ fontFamily: "var(--font-poppins-css)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm mb-4 text-white"
              style={{ fontFamily: "var(--font-baloo-2)" }}
            >
              CONTACTO
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2EC4B6] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.518 5.83L.036 23.185a.75.75 0 00.926.905l5.237-1.516A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 22c-1.88 0-3.636-.523-5.134-1.43l-.368-.217-3.797 1.098 1.068-3.693-.24-.38A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <a href="https://wa.me/5512345678" className="text-white/60 text-xs hover:text-[#2EC4B6] transition-colors" style={{ fontFamily: "var(--font-poppins-css)" }}>
                  55 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2EC4B6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-poppins-css)" }}>
                  hola@elpescadocaocao.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2EC4B6] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-poppins-css)" }}>
                  Lun - Sáb: 8:00 a 20:00
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {["facebook", "instagram", "tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2EC4B6] flex items-center justify-center transition-colors text-white text-xs font-bold"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-poppins-css)" }}
          >
            © 2024 El Pescado CaoCao. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {["Aviso de privacidad", "Términos y condiciones"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
                style={{ fontFamily: "var(--font-poppins-css)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
