"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { useDict, useLang } from "@/context/DictContext";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function ServicosSection() {
  const dict = useDict();
  const lang = useLang();
  const s = dict.servicos;

  return (
    <section id="servicos" className="bg-black pt-16 pb-32 px-5">
      <div className="max-w-[1280px] mx-auto">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <span
            className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-6"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            {s.eyebrow}
          </span>
          <h2
            className="text-white leading-[0.9] mb-10"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400, fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            {s.heading}<br />
            <span className="italic text-[#a8a8a8]">{s.headingItalic}</span>
          </h2>
          <p
            className="text-white text-[20px] leading-relaxed max-w-[560px]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
          >
            {s.intro}
          </p>
        </motion.div>

        <motion.div
          className="w-full h-px bg-white/10 mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
          style={{ transformOrigin: "left" }}
        />

        <div className="mb-20">
          <span
            className="text-[#a8a8a8] text-[11px] tracking-[2.4px] uppercase block mb-12"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            {s.entregasLabel}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            {s.entregas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: easing, delay: i * 0.1 }}
                className="border-t border-white/10 pt-8"
              >
                <h3
                  className="text-white text-[24px] leading-snug mb-4"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#a8a8a8] text-[16px] leading-relaxed"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span
            className="text-[#a8a8a8] text-[12px] tracking-[2.4px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            {s.readyCta}
          </span>
          <Link
            href={`/${lang}/orcamento`}
            onClick={() => track("click_vamos_conversar", { source: "servicos" })}
            className="group overflow-hidden flex items-center justify-center bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300 w-full md:w-auto"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{s.ctaBtn}</span>
              <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{s.ctaBtn}</span>
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
