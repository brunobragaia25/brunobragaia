"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({ animate = false }: { animate?: boolean }) {
  const nav = (
    <nav className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between h-[84px]" style={{ zIndex: 10 }}>
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

      <div
        className="flex items-center gap-10 text-white text-[12px] tracking-[2.4px]"
        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
      >
        {[
          { label: "TRABALHOS", href: "/#trabalhos" },
          { label: "SERVIÇOS", href: "/#servicos" },
          { label: "ORÇAMENTO", href: "/#orcamento" },
        ].map((item) => (
          <Link key={item.label} href={item.href} className="group relative overflow-hidden inline-block" style={{ lineHeight: "1em", height: "1em" }}>
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{item.label}</span>
            <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{item.label}</span>
          </Link>
        ))}
      </div>

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
