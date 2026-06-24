"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const etapas = [
  {
    numero: "01",
    nome: "Naming",
    desc: "O naming é o ponto de partida estratégico para a construção da sua marca. Um bom nome vai além de uma simples palavra: ele comunica a essência do seu negócio, cria conexão com o público e se destaca no mercado.",
    steps: [
      { n: 1, title: "Imersão e Pesquisa", desc: "Serão analisados a empresa, seu público e diferenciais, além do mercado e concorrência, definindo os valores e a identidade estratégica da marca." },
      { n: 2, title: "Criação e Desenvolvimento", desc: "O Naming será desenvolvido estrategicamente, com verificação de disponibilidade e análise fonética para garantir um nome único, memorável e adequado ao mercado." },
      { n: 3, title: "Apresentação e Refinamento", desc: "Será entregue um relatório com 3 a 5 sugestões de nomes, cada uma acompanhada de uma justificativa conceitual." },
      { n: 4, title: "Entrega Final", desc: "O nome final validado será entregue junto com orientações para registro no INPI e sugestões de domínio e perfis para redes sociais." },
    ],
  },
  {
    numero: "02",
    nome: "Estratégia",
    desc: "Ter uma estratégia bem definida antes de começar é essencial para garantir o posicionamento correto da marca, agregar valor e atrair o público certo.",
    steps: [
      { n: 1, title: "Briefing", desc: "No início do projeto, enviamos um briefing para que você compartilhe detalhes sobre sua empresa, público-alvo e persona." },
      { n: 2, title: "Pesquisa", desc: "Após o briefing, realizamos uma pesquisa detalhada sobre o segmento da marca, buscando referências relevantes." },
      { n: 3, title: "DNA da Marca", desc: "Com o briefing preenchido e a pesquisa concluída, definimos a personalidade da marca, alinhada ao seu DNA." },
      { n: 4, title: "Moodboard", desc: "Iniciamos a elaboração do moodboard, selecionando referências visuais e gráficas que inspirem o projeto.", note: "* Participação direta do cliente" },
      { n: 5, title: "Concorrentes", desc: "Analisamos o posicionamento dos concorrentes para identificar oportunidades de diferenciação e criar uma estratégia única." },
    ],
  },
  {
    numero: "03",
    nome: "Identidade Visual & Branding",
    desc: "Com a estratégia definida, iniciamos a criação da Identidade Visual da marca — logotipo, paleta de cores, tipografia e demais componentes gráficos, sempre alinhados à estratégia estabelecida.",
    steps: [
      { n: 1, title: "Cores", desc: "Definimos a paleta de cores da Identidade Visual, especificando os tons em RGB, CMYK e, opcionalmente, Pantone.", note: "* Participação direta do cliente" },
      { n: 2, title: "Tipografia", desc: "A identidade visual é composta por duas tipografias: a principal, utilizada no logotipo, e a complementar, utilizada nos materiais institucionais." },
      { n: 3, title: "Logotipo", desc: "Passamos à criação do logotipo e todas as suas variações: versões vertical, horizontal e circular." },
      { n: 4, title: "Grafismos de apoio", desc: "Elementos visuais como padrões, texturas e designs que reforçam e complementam a Identidade Visual." },
      { n: 5, title: "Aplicações", desc: "Utilizamos mockups para visualizar a marca em contextos reais, como embalagens, sinalizações e materiais gráficos." },
      { n: 6, title: "Apresentação", desc: "Desenvolvemos a apresentação final em PDF com explicação detalhada gravada, facilitando a análise e aprovação do projeto." },
    ],
  },
];

const entregas = [
  "Logotipo em variações RGB e CMYK nos formatos AI, PNG, PDF e SVG",
  "Paleta de cores em RGB, CMYK e Pantone (opcional)",
  "Tipografia Principal e Complementar",
  "Grafismos de apoio",
  "Materiais previamente combinados",
  "Apresentação completa do projeto",
  "Materiais adicionais",
];

export default function ProcessoSection() {
  const [active, setActive] = useState(0);
  const [entregasOpen, setEntregasOpen] = useState(false);

  return (
    <section id="processo" className="bg-black px-5 pb-32">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
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
            Como trabalhamos
          </span>
          <h2
            className="text-white leading-[0.9]"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Etapas do Desenvolvimento
          </h2>
        </motion.div>

        {/* Tabs */}
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

        {/* Content */}
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
              {/* Desc */}
              <p
                className="text-[#a8a8a8] text-[16px] leading-relaxed max-w-[600px] mb-10"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
              >
                {etapas[active].desc}
              </p>

              {/* Steps grid */}
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
                      {step.n}
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
                      {step.note && (
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

        {/* Entregas — accordion */}
        <div className="mt-12 border-t border-white/10">
          <button
            onClick={() => setEntregasOpen((v) => !v)}
            className="w-full flex items-center justify-between py-6 group"
          >
            <span
              className="text-white text-[20px]"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
            >
              Entregas do Projeto
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
                  {entregas.map((item, i) => (
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

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-white/10">
          <span
            className="text-[#a8a8a8] text-[12px] tracking-[2.4px] uppercase"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          >
            Pronto(a) pra começar?
          </span>
          <Link
            href="/orcamento"
            className="group overflow-hidden flex items-center bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Vamos conversar</span>
              <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Vamos conversar</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
