"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { useDict, useLang } from "@/context/DictContext";
import LangSwitcher from "./LangSwitcher";

export default function Navbar({ animate = false }: { animate?: boolean }) {
  const [open, setOpen] = useState(false);
  const dict = useDict();
  const lang = useLang();

  const links = [
    { label: dict.navbar.trabalhos, href: `/${lang}/#trabalhos` },
    { label: dict.navbar.servicos, href: `/${lang}/#servicos` },
    { label: dict.navbar.etapas, href: `/${lang}/#processo` },
    { label: dict.navbar.quemSou, href: `/${lang}/quem-sou` },
  ];

  const nav = (
    <nav className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between h-[84px]">
      <Link href={`/${lang}`} className="flex items-baseline gap-0" onClick={() => setOpen(false)}>
        <span className="text-white text-[16px]" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}>brunobragaia</span>
        <span className="text-[#bf0603] text-[16px]" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}>design</span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10 text-white text-[12px] tracking-[2.4px]" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}>
        {links.map((item) => (
          <Link key={item.label} href={item.href} className="group relative overflow-hidden inline-block" style={{ lineHeight: "1em", height: "1em" }}>
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{item.label}</span>
            <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <LangSwitcher />
        <Link href={`/${lang}/orcamento`} onClick={() => track("click_vamos_conversar", { source: "navbar" })} className="flex bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 items-center justify-center rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300 group overflow-hidden" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}>
          <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{dict.navbar.cta}</span>
            <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{dict.navbar.cta}</span>
          </span>
        </Link>
      </div>

      {/* Mobile: pill + hamburger */}
      <div className="md:hidden flex items-center gap-3 relative z-[60]">
        <LangSwitcher />
        <button className="flex flex-col gap-[5px] p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
        <motion.span className="block w-6 h-[1.5px] bg-white origin-center" animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
        <motion.span className="block w-6 h-[1.5px] bg-white" animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
        <motion.span className="block w-6 h-[1.5px] bg-white origin-center" animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {animate ? (
        <motion.div className="relative z-[60]" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}>
          {nav}
        </motion.div>
      ) : (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-md border-b border-white/10">
          {nav}
        </div>
      )}

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col pt-[84px] px-5 pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-8 mt-10">
              {links.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white text-[32px] leading-tight"
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                  >
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <LangSwitcher />
              <Link
                href={`/${lang}/orcamento`}
                onClick={() => { setOpen(false); track("click_vamos_conversar", { source: "navbar_mobile" }); }}
                className="flex items-center justify-center bg-[#bf0603] text-white text-[14px] h-12 rounded-full w-full"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                {dict.navbar.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
