"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDict } from "@/context/DictContext";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const tools = ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Branding", "UI/UX"];

export default function QuemSou() {
  const dict = useDict();
  const q = dict.quemSou;

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="relative px-5 pt-36 pb-0">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
          <Image
            src="/hero-portrait.png"
            alt=""
            fill
            className="object-contain" style={{ transform: "scale(0.9) translateX(-27%)", transformOrigin: "center bottom" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0b0b0b]/10 to-[#0b0b0b]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end pb-20">
            <div />

            <motion.div
              className="pt-4 flex flex-col gap-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: easing }}
            >
              <div>
                <span
                  className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-6"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                >
                  {q.eyebrow}
                </span>
                <h1
                  className="text-white leading-[0.92] mb-10 whitespace-pre-line"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(40px, 5vw, 72px)" }}
                >
                  {q.title}
                </h1>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-10">
                <p
                  className="text-white text-[18px] leading-relaxed"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                >
                  {q.p1}
                </p>
                <p
                  className="text-[#a8a8a8] text-[18px] leading-relaxed"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
                >
                  {q.p2}
                </p>
              </div>

              <div>
                <p
                  className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase mb-4"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                >
                  {q.toolsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-white/20 rounded-full px-4 h-8 flex items-center text-white text-[12px]"
                      style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
