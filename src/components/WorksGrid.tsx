"use client";

import { motion } from "framer-motion";
import { Project } from "./WorksSection";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function FeaturedCard({ project, image, index }: { project: Project; image: string; index: number }) {
  return (
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
        <div className="absolute inset-0 bg-[#bf0603] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
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
  );
}

function GridCard({ project, image, index }: { project: Project; image: string; index: number }) {
  return (
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
        <div className="absolute inset-0 bg-[#bf0603] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
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
    <section id="trabalhos" className="bg-[#0b0b0b] py-32 px-5">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto mb-16 flex items-end justify-between">
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
          href="#"
          className="border border-white text-white text-[14px] px-5 h-11 flex items-center justify-center rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors mb-2"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Ver todos
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
        <div className="grid grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p._id} project={p} image={imageMap[p._id] ?? ""} index={i} />
          ))}
        </div>
      )}

      {/* Grid — 3 colunas full width */}
      {grid.length > 0 && (
        <div className="grid grid-cols-3 gap-6">
          {grid.map((p, i) => (
            <GridCard key={p._id} project={p} image={imageMap[p._id] ?? ""} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
