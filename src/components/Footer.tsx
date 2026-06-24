"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { SiBehance } from "react-icons/si";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-0 overflow-hidden">
      <div className="px-5 max-w-[1280px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 mb-20">
          {/* Left: pill + tagline + CTA */}
          <div className="max-w-[560px]">
            {/* Tagline */}
            <motion.h2
              className="text-white text-[clamp(24px,3vw,36px)] leading-[1.15] mb-10"
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
              href="/orcamento"
              className="group overflow-hidden inline-flex items-center justify-center bg-[#bf0603] text-white rounded-full px-8 h-12 text-[13px] uppercase tracking-[2px] hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            >
              <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Vamos conversar</span>
                <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Vamos conversar</span>
              </span>
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
                  { label: "Instagram", href: "https://instagram.com/brunobragaiadesign", icon: <FiInstagram size={18} /> },
                  { label: "Behance", href: "https://behance.net/brunobragaiadesign", icon: <SiBehance size={18} /> },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white text-[18px] hover:text-[#a8a8a8] transition-colors duration-200 group"
                      style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                    >
                      <span className="text-white group-hover:text-[#a8a8a8] transition-colors duration-200">{link.icon}</span>
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
                  { label: "Sobre", href: "/quem-sou" },
                  { label: "Contato", href: "https://wa.me/5511992656555" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-[18px] hover:text-[#a8a8a8] transition-colors duration-200"
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

      {/* Big name */}
      <div className="px-5 overflow-hidden leading-none">
        <motion.p
          className="text-white select-none w-full text-center"
          style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(40px, 11.5vw, 9999px)",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing }}
        >
          BRUNOBRAGAIA<span className="text-[#bf0603]">.</span>
        </motion.p>
      </div>

      {/* Copyright + Dev credit */}
      <div className="px-5 max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 pb-6 mt-4 border-t border-white/10">
        <p
          className="text-white/30 text-[11px] tracking-[1px] uppercase"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}
        >
          © 2026 Todos os direitos reservados
        </p>
        <div className="flex items-center gap-2">
          <span
            className="text-white/30 text-[11px] tracking-[1px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}
          >
            Desenvolvido por
          </span>
          <a href="https://www.devzdesign.com.br" target="_blank" rel="noopener noreferrer">
            <img src="/logodevz.svg" alt="DevzDesign" className="h-4 opacity-40 hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
