"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({ animate = false }: { animate?: boolean }) {
  const nav = (
    <nav className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between h-[84px]" style={{ zIndex: 10 }}>
      {/* Logo */}
      <Link href="/" className="flex items-baseline gap-0">
        <span
          className="text-white text-[16px] leading-normal"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}
        >
          brunobragaia
        </span>
        <span
          className="text-[#bf0603] text-[16px] leading-normal"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
        >
          design
        </span>
      </Link>

      {/* Nav links */}
      <div
        className="flex items-center gap-10 text-white text-[12px] tracking-[2.4px]"
        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
      >
        <Link href="/#trabalhos" className="hover:text-[#bf0603] transition-colors">TRABALHOS</Link>
        <Link href="/#servicos" className="hover:text-[#bf0603] transition-colors">SERVIÇOS</Link>
        <Link href="/#orcamento" className="hover:text-[#bf0603] transition-colors">ORÇAMENTO</Link>
      </div>

      {/* CTA */}
      <Link
        href="/#orcamento"
        className="bg-[#bf0603] text-white text-[14px] px-5 h-11 flex items-center justify-center rounded-full hover:bg-[#a00502] transition-colors"
        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
      >
        Vamos conversar?
      </Link>
    </nav>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        {nav}
      </motion.div>
    );
  }

  return <div className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/10">{nav}</div>;
}
