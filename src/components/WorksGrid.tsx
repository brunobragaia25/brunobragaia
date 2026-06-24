"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "./WorksSection";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function FeaturedCard({ project, image, index }: { project: Project; image: string; index: number }) {
  return (
    <Link href={`/trabalhos/${project.slug.current}`}>
    <motion.div
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: easing, delay: index * 0.15 }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        {image && (
          <img
            src={image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      <div className="flex items-start justify-between pt-5">
        <div className="flex flex-col gap-1">
          <span className="text-[#a8a8a8] text-[12px] tracking-[2px] uppercase" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}>
            {project.category}
          </span>
          <h3 className="text-white text-[28px] leading-tight" style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}>
            {project.title}
          </h3>
        </div>
        <span className="text-[#a8a8a8] text-[14px] mt-1" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}>
          {project.year}
        </span>
      </div>
    </motion.div>
    </Link>
  );
}

function GridCard({ project, image, index }: { project: Project; image: string; index: number }) {
  return (
    <Link href={`/trabalhos/${project.slug.current}`}>
    <motion.div
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easing, delay: index * 0.1 }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        {image && (
          <img
            src={image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      <div className="flex items-start justify-between pt-4">
        <div className="flex flex-col gap-1">
          <span className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}>
            {project.category}
          </span>
          <h3 className="text-white text-[20px] leading-tight" style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}>
            {project.title}
          </h3>
        </div>
        <span className="text-[#a8a8a8] text-[13px] mt-1" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}>
          {project.year}
        </span>
      </div>
    </motion.div>
    </Link>
  );
}

export default function WorksGrid({
  featured,
  grid,
  imageMap,
}: {
  featured: Project[];
  grid: Project[];
  imageMap: Record<string, string>;
}) {
  return (
    <section id="trabalhos" className="bg-[#0b0b0b] pt-32 pb-16 px-5">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <span className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-3" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}>
            Trabalhos
          </span>
          <h2 className="text-white text-[56px] leading-[0.95]" style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}>
            Projetos<br />selecionados
          </h2>
        </motion.div>

        <motion.a
          href="/trabalhos"
          className="group overflow-hidden border border-white text-white text-[13px] tracking-[2px] uppercase px-8 h-12 flex items-center justify-center rounded-full transition-colors duration-300 mb-2"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="relative inline-block overflow-hidden" style={{ lineHeight: "1em", height: "1em" }}>
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Ver todos</span>
            <span className="block absolute inset-x-0 top-[100%] transition-transform duration-300 ease-out group-hover:-translate-y-[100%]">Ver todos</span>
          </span>
        </motion.a>
      </div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-white/10 mb-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easing }}
        style={{ transformOrigin: "left" }}
      />

      {/* Featured — 2 colunas full width */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p._id} project={p} image={imageMap[p._id] ?? ""} index={i} />
          ))}
        </div>
      )}

      {/* Grid — 3 colunas full width */}
      {grid.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((p, i) => (
            <GridCard key={p._id} project={p} image={imageMap[p._id] ?? ""} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
