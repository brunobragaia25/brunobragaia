"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const entregas = [
  {
    title: "Uma marca que as pessoas lembram.",
    desc: "Logo, cores, tipografia e todo o universo visual da sua marca pensado pra criar uma identidade que gruda. Sabe aquela marca que você lembra sem esforço? É isso que a gente constrói.",
  },
  {
    title: "Consistência que gera confiança.",
    desc: "A inconsistência é silenciosa, mas o cliente sente. Uma marca que aparece igual em todo lugar transmite algo que nenhum copy consegue: credibilidade.",
  },
  {
    title: "A sensação de que sua marca chegou.",
    desc: "Tem um momento em que o cliente olha pra marca e pensa: isso representa de verdade o que a gente é. É esse sentimento que a gente trabalha pra entregar.",
  },
  {
    title: "Posicionamento que ocupa um lugar claro.",
    desc: "A gente descobre onde sua marca tem mais força e constrói a partir daí. Sem achismo, sem copiar concorrente. Só o que faz sentido pro seu negócio e pra quem você quer atrair.",
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="bg-[#0b0b0b] pt-16 pb-32 px-5">
      <div className="max-w-[1280px] mx-auto">

        {/* Eyebrow + título */}
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
            Serviços
          </span>
          <h2
            className="text-white leading-[0.9] mb-10"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400, fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Identidade<br />
            <span className="italic text-[#a8a8a8]">Visual.</span>
          </h2>
          <p
            className="text-white text-[20px] leading-relaxed max-w-[560px]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
          >
            A identidade visual é a essência da sua marca traduzida de forma visual. Não é sobre ser bonito. É sobre ser reconhecido na hora certa, pelo motivo certo, de um jeito que só a sua marca consegue ser.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-white/10 mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
          style={{ transformOrigin: "left" }}
        />

        {/* O que entregamos */}
        <div className="mb-20">
          <span
            className="text-[#a8a8a8] text-[11px] tracking-[2.4px] uppercase block mb-12"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            O que entregamos
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            {entregas.map((item, i) => (
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

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* CTA */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span
            className="text-[#a8a8a8] text-[12px] tracking-[2.4px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            Pronto(a) pra começar?
          </span>
          <Link
            href="/orcamento"
            className="flex items-center gap-3 bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
          >
            Vamos conversar
            <span>↗</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
