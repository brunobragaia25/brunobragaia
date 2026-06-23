"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0b0b0b]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-[14px] tracking-[2px] uppercase"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
        >
          Bruno Bragaia
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {[
            { label: "Trabalhos", href: "/#trabalhos" },
            { label: "Sobre", href: "/#sobre" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/60 text-[13px] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="mailto:bruninhugood@gmail.com"
            className="border border-white/30 text-white text-[13px] px-5 h-9 flex items-center rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
