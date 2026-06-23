"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10 pt-16 pb-0 overflow-hidden">
      <div className="px-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-20">
          {/* Left: pill + tagline + CTA */}
          <div className="max-w-[560px]">
            {/* Pill */}
            <div
              className="inline-flex items-center border border-white/30 rounded-full px-4 h-8 mb-10"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "2px" }}
            >
              <span className="text-white uppercase">Bruno Bragaia Design</span>
            </div>

            {/* Tagline */}
            <motion.h2
              className="text-white text-[36px] leading-[1.15] mb-10"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easing }}
            >
              Marcas que ficam na memória{" "}
              <br />não são coincidência.{" "}
              <br />
              <span className="text-[#bf0603]">São intencionais.</span>
            </motion.h2>

            {/* CTA */}
            <motion.a
              href="mailto:bruninhugood@gmail.com"
              className="inline-flex items-center justify-center bg-[#bf0603] text-white rounded-full px-8 h-12 text-[13px] uppercase tracking-[2px] hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            >
              Vamos conversar
            </motion.a>
          </div>

          {/* Right: Social + Nav columns */}
          <div className="flex gap-20 pt-2">
            <div>
              <p
                className="text-[#bf0603] text-[11px] tracking-[2px] uppercase mb-6"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
              >
                Social
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Behance", href: "https://behance.net" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-[18px] hover:text-[#bf0603] transition-colors duration-200"
                      style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-[#bf0603] text-[11px] tracking-[2px] uppercase mb-6"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
              >
                Navegação
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Trabalhos", href: "/#trabalhos" },
                  { label: "Sobre", href: "/#sobre" },
                  { label: "Contato", href: "mailto:bruninhugood@gmail.com" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-[18px] hover:text-[#bf0603] transition-colors duration-200"
                      style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Big name + copyright row */}
      <div className="relative">
        {/* Copyright — positioned above the big name */}
        <div className="px-5 flex justify-end mb-2">
          <p
            className="text-white/30 text-[11px] tracking-[1px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}
          >
            © 2026 Todos os direitos reservados
          </p>
        </div>

        {/* Big name */}
        <div className="px-5 overflow-hidden leading-none">
          <motion.p
            className="text-white select-none whitespace-nowrap"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(80px, 14vw, 200px)",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing }}
          >
            BRAGAIA<span className="text-[#bf0603]">.</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
