"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface GalleryItem {
  url: string;
  caption: string | null;
  fullWidth: boolean;
}

interface AdjacentProject {
  title: string;
  slug: string;
  image: string;
}

interface Props {
  title: string;
  category: string;
  year: string;
  client: string | null;
  services: string[];
  coverUrl: string;
  description: string | null;
  intro: string | null;
  gallery: GalleryItem[];
  prev: AdjacentProject | null;
  next: AdjacentProject | null;
}

export default function CaseStudy({
  title,
  category,
  year,
  client,
  services,
  coverUrl,
  description,
  intro,
  gallery,
  prev,
  next,
}: Props) {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      {/* Back link */}
      <div className="px-5 pt-10 pb-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#a8a8a8] text-[13px] hover:text-white transition-colors"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
        >
          <span>←</span> Voltar
        </Link>
      </div>

      {/* Hero */}
      <section className="px-5 pt-16 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            <span
              className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-4"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
            >
              {category}
            </span>
            <h1
              className="text-white text-[72px] leading-[0.92] mb-10"
              style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
            >
              {title}
            </h1>
          </motion.div>

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap gap-16 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
          >
            {client && (
              <div>
                <span
                  className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                >
                  Cliente
                </span>
                <span
                  className="text-white text-[16px]"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                >
                  {client}
                </span>
              </div>
            )}
            <div>
              <span
                className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                Ano
              </span>
              <span
                className="text-white text-[16px]"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                {year}
              </span>
            </div>
            {services.length > 0 && (
              <div>
                <span
                  className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                >
                  Serviços
                </span>
                <span
                  className="text-white text-[16px]"
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                >
                  {services.join(", ")}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cover image — full width */}
      {coverUrl && (
        <motion.div
          className="w-full aspect-[16/9] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: easing }}
        >
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Intro text */}
      {(description || intro) && (
        <section className="px-5 py-24">
          <div className="max-w-[800px] mx-auto">
            {description && (
              <motion.p
                className="text-[#a8a8a8] text-[18px] leading-relaxed mb-6"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: easing }}
              >
                {description}
              </motion.p>
            )}
            {intro && (
              <motion.p
                className="text-white text-[22px] leading-relaxed"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: easing }}
              >
                {intro}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="px-5 pb-24 space-y-5">
          {gallery.map((img, i) =>
            img.fullWidth ? (
              <motion.div
                key={i}
                className="w-full overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: easing }}
              >
                <img src={img.url} alt={img.caption ?? ""} className="w-full object-cover" />
                {img.caption && (
                  <p
                    className="text-[#a8a8a8] text-[13px] mt-3"
                    style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
                  >
                    {img.caption}
                  </p>
                )}
              </motion.div>
            ) : null
          )}

          {/* Non-full-width items in 2-col grid */}
          {gallery.filter((img) => !img.fullWidth).length > 0 && (
            <div className="grid grid-cols-2 gap-5">
              {gallery
                .filter((img) => !img.fullWidth)
                .map((img, i) => (
                  <motion.div
                    key={i}
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: easing, delay: i % 2 === 0 ? 0 : 0.1 }}
                  >
                    <img src={img.url} alt={img.caption ?? ""} className="w-full object-cover" />
                    {img.caption && (
                      <p
                        className="text-[#a8a8a8] text-[13px] mt-3"
                        style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
                      >
                        {img.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
            </div>
          )}
        </section>
      )}

      {/* Divider */}
      <div className="px-5">
        <div className="w-full h-px bg-white/10" />
      </div>

      {/* Next / Prev navigation */}
      <section className="grid grid-cols-2">
        {prev ? (
          <Link
            href={`/trabalhos/${prev.slug}`}
            className="group relative overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 border-r border-white/10"
          >
            {prev.image && (
              <img
                src={prev.image}
                alt={prev.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            )}
            <div className="relative z-10">
              <span
                className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                ← Anterior
              </span>
              <p
                className="text-white text-[24px] leading-tight"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/trabalhos/${next.slug}`}
            className="group relative overflow-hidden aspect-[4/3] flex flex-col justify-end items-end p-8 text-right"
          >
            {next.image && (
              <img
                src={next.image}
                alt={next.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            )}
            <div className="relative z-10">
              <span
                className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                Próximo →
              </span>
              <p
                className="text-white text-[24px] leading-tight"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                {next.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </section>
      <Footer />
    </main>
  );
}
