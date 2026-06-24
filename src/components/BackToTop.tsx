"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-24 z-50 flex items-center gap-2 border border-white/20 bg-[#0b0b0b]/80 backdrop-blur-md text-white text-[11px] tracking-[2px] uppercase px-5 h-10 rounded-full hover:border-white/60 transition-colors duration-300"
          style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: easing }}
        >
          ↑ Topo
        </motion.button>
      )}
    </AnimatePresence>
  );
}
