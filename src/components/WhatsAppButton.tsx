"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Chat bubble */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="bg-white rounded-2xl rounded-br-sm shadow-xl p-4 w-[220px] mb-1"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[11px] font-bold">BB</div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="text-[#111] text-[13px] font-semibold leading-none mb-0.5" style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Bruno Bragaia</p>
                <p className="text-[#25D366] text-[11px]" style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>● Online agora</p>
              </div>
            </div>

            {/* Message bubble */}
            <div className="bg-[#f0f0f0] rounded-xl rounded-tl-sm px-3 py-2">
              <p className="text-[#111] text-[13px] leading-snug" style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}>
                Olá! 👋 Fale comigo agora pelo WhatsApp.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5511992656555?text=Olá%20Bruno%2C%20gostaria%20de%20solicitar%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-[#25D366] text-white text-[12px] tracking-[1px] uppercase rounded-full h-9 flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
            >
              Iniciar conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão */}
      <button
        onClick={() => window.open("https://wa.me/5511992656555?text=Olá%20Bruno%2C%20gostaria%20de%20solicitar%20um%20orçamento!", "_blank")}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.19-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.388l-.361-.214-3.735.979 1.004-3.648-.235-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
        </svg>
      </button>
    </motion.div>
  );
}
