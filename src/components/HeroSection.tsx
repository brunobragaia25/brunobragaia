"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
      {/* Watermark — atrás de tudo */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        style={{ zIndex: 1 }}
      >
        <motion.p
          className="text-[#a8a8a8] opacity-10 whitespace-nowrap leading-none"
          style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(120px, 15.6vw, 300px)",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          brunobragaia&nbsp;&nbsp;•&nbsp;&nbsp;brunobragaia&nbsp;&nbsp;•&nbsp;&nbsp;
        </motion.p>
      </div>

      {/* Portrait image — fade in from right */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <Image
          src="/hero-portrait.png"
          alt="Bruno Bragaia"
          fill
          priority
          className="object-contain object-bottom"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            transform: "scale(0.98) translateX(15%)",
            transformOrigin: "center bottom",
          }}
        />
      </motion.div>

      {/* Navbar */}
      <div style={{ position: "relative", zIndex: 20 }}>
        <Navbar animate />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-[1280px] px-5 flex flex-col gap-14 py-32" style={{ zIndex: 10 }}>

        {/* Heading */}
        <div className="flex flex-col gap-5 max-w-[804px]">
          <h1
            className="text-[80px] leading-[0.9] text-white flex flex-col"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
          >
            {["Transformamos marcas", "em experiências", "memoráveis."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className={`block ${i >= 1 ? "text-[#bf0603]" : ""}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.p
            className="text-white text-[28px] leading-[1.2] max-w-[506px]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Unimos estratégia, design e cultura para criar marcas que moldam mercados.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-3"
          custom={0.85}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#orcamento"
            className="bg-[#bf0603] text-white text-[14px] px-5 h-11 flex items-center justify-center rounded-full hover:bg-[#a00502] transition-colors"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            Vamos conversar?
          </a>
          <a
            href="#trabalhos"
            className="border border-white text-white text-[14px] px-5 h-11 flex items-center justify-center rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            Meus trabalhos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
