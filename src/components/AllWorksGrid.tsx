"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "./WorksSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const categories = ["Todos", "Branding", "UI/UX", "Motion", "Print", "Web"];

export default function AllWorksGrid({
  projects,
  imageMap,
}: {
  projects: Project[];
  imageMap: Record<string, string>;
}) {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32">
        {/* Filter pills — limitado a 1280px */}
        <div className="px-5 max-w-[1280px] mx-auto">
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 h-9 rounded-full text-[12px] tracking-[1.5px] uppercase transition-all duration-200 ${
                  active === cat
                    ? "bg-white text-[#0b0b0b]"
                    : "border border-white/20 text-[#a8a8a8] hover:border-white/50 hover:text-white"
                }`}
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-12" />
        </div>

        {/* Grid — full width */}
        <div className="px-5 grid grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing, delay: i * 0.05 }}
            >
              <Link href={`/trabalhos/${p.slug.current}`} className="group block">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                  {imageMap[p._id] && (
                    <img
                      src={imageMap[p._id]}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[#a8a8a8] text-[11px] tracking-[2px] uppercase"
                      style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                    >
                      {p.category}
                    </span>
                    <h3
                      className="text-white text-[20px] leading-tight"
                      style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <span
                    className="text-[#a8a8a8] text-[13px] mt-1"
                    style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 400 }}
                  >
                    {p.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-[#a8a8a8] text-[16px] text-center py-20"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
          >
            Nenhum projeto nessa categoria ainda.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}
