"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const logos = [
  { src: "/logos/logo-4text.png", alt: "4Text" },
  { src: "/logos/logo-alta.png", alt: "Alta" },
  { src: "/logos/logo-avanza.png", alt: "Avanza" },
  { src: "/logos/logo-bulkers.png", alt: "Bulkers" },
  { src: "/logos/logo-celacanto.png", alt: "Celacanto" },
  { src: "/logos/logo-comprejunto.png", alt: "Compre Junto" },
  { src: "/logos/logo-devz.png", alt: "Devz" },
  { src: "/logos/logo-direct.png", alt: "Direct" },
  { src: "/logos/logo-dommu.png", alt: "Dommu" },
  { src: "/logos/logo-ecobubble.png", alt: "Eco Bubble" },
  { src: "/logos/logo-gbs.png", alt: "GBS" },
  { src: "/logos/logo-globalgcs.png", alt: "Global GCS" },
  { src: "/logos/logo-is.png", alt: "IS" },
  { src: "/logos/logo-m51.png", alt: "M51" },
  { src: "/logos/logo-mkr.png", alt: "MKR" },
  { src: "/logos/logo-nfx.png", alt: "NFX" },
  { src: "/logos/logo-privatech.png", alt: "Privatech" },
  { src: "/logos/logo-puppycare.png", alt: "Puppy Care" },
  { src: "/logos/logo-sabatelau.png", alt: "Sabatelau" },
  { src: "/logos/logo-silvana.png", alt: "Silvana" },
  { src: "/logos/logo-solvence.png", alt: "Solvence" },
  { src: "/logos/logo-storeauto.png", alt: "Store Auto" },
  { src: "/logos/logo-tec.png", alt: "Tec" },
  { src: "/logos/logo-thais.png", alt: "Thais" },
  { src: "/logos/logo-triontech.png", alt: "Trion Tech" },
  { src: "/logos/logo-vservices.png", alt: "V Services" },
  { src: "/logos/logo-yesso.png", alt: "Yesso" },
  { src: "/logos/logo-zimbel.png", alt: "Zimbel" },
];

const COLS = 7;
const rows: { src: string; alt: string }[][] = [];
for (let i = 0; i < logos.length; i += COLS) {
  rows.push(logos.slice(i, i + COLS));
}

export default function MarcasSection() {
  return (
    <section className="bg-[#0b0b0b]">
        {/* Grid — full width */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
        >
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid ${rowIndex < rows.length - 1 ? "border-b border-white/10" : ""}`}
              style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
            >
              {row.map((logo, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex items-center justify-center py-20 px-6 ${colIndex < row.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ maxHeight: "48px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

    </section>
  );
}
