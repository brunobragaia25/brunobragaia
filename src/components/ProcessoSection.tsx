"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { useDict, useLang } from "@/context/DictContext";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function ProcessoSection() {
  const [active, setActive] = useState(0);
  const [entregasOpen, setEntregasOpen] = useState(false);
  const dict = useDict();
  const lang = useLang();
  const p = dict.processo;
  const etapas = p.etapas;

  return (
    <section id="processo" className="bg-black px-5 pb-32">
      <div className="max-w-[1280px] mx-auto">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <span
            className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-5"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            {p.eyebrow}
          </span>
          <h2
            className="text-white leading-[0.9]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {p.heading}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-2 mb-10">
          {etapas.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 h-11 rounded-full text-[12px] tracking-[1.5px] transition-all duration-200 ${
                active === i
                  ? "bg-white text-[#0b0b0b]"
                  : "border border-white/20 text-[#a8a8a8] hover:border-white/50 hover:text-white"
              }`}
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
            >
              <span className="opacity-50">{e.numero}</span>
              {e.nome}
            </button>
          ))}
        </div>

        <div className="border-t border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easing }}
              className="pt-10"
            >
              <p
                className="text-[#a8a8a8] text-[16px] leading-relaxed max-w-[600px] mb-10"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
              >
                {etapas[active].desc}
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0" style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", paddingLeft: "20px", paddingRight: "20px" }}>
                <div
                  className="grid gap-3"
                  style={{ gridTemplateColumns: `repeat(${etapas[active].steps.length}, minmax(260px, 1fr))` }}
                >
                  {etapas[active].steps.map((step, si) => (
                    <div
                      key={si}
                      className="border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[340px]"
                    >
                      <span
                        className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[#a8a8a8] text-[11px]"
                        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        {si + 1}
                      </span>
                      <div>
                        <h4
                          className="text-[#bf0603] text-[15px] mb-2"
                          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                        >
                          {step.title}
                        </h4>
                        <p
                          className="text-[#a8a8a8] text-[13px] leading-relaxed"
                          style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
                        >
                          {step.desc}
                        </p>
                        {"note" in step && step.note && (
                          <p
                            className="text-white/40 text-[10px] tracking-[1px] uppercase mt-3"
                            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
                          >
                            {step.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 border-t border-white/10">
          <button
            onClick={() => setEntregasOpen((v) => !v)}
            className="w-full flex items-center justify-between py-6 group"
          >
            <span
              className="text-white text-[20px]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
            >
              {p.entregasTitle}
            </span>
            <span
              className="text-[#a8a8a8] text-[20px] transition-transform duration-300"
              style={{ transform: entregasOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>

          <AnimatePresence>
            {entregasOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: easing }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pb-8">
                  {p.entregas.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 border-t border-white/10 py-4 pr-8">
                      <span
                        className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[#a8a8a8] text-[11px] shrink-0"
                        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        {i + 1}
                      </span>
                      <p
                        className="text-white text-[14px] leading-relaxed"
                        style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 pt-10 border-t border-white/10">
          <span
            className="text-[#a8a8a8] text-[12px] tracking-[2.4px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            {p.readyCta}
          </span>
          <Link
            href={`/${lang}/orcamento`}
            onClick={() => track("click_vamos_conversar", { source: "processo" })}
            className="group overflow-hidden flex items-center justify-center bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300 w-full md:w-auto"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{p.ctaBtn}</span>
              <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">{p.ctaBtn}</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
