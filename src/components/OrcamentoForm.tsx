"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const projectTypes = ["Branding", "UI/UX Design", "Web Design", "Outro"];

const budgets = ["Até R$ 3.000", "R$ 3.000 – R$ 8.000", "R$ 8.000 – R$ 20.000", "Acima de R$ 20.000", "A definir"];

type Status = "idle" | "loading" | "success" | "error";

export default function OrcamentoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectTypes: [] as string[],
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const toggleProjectType = (type: string) => {
    setForm((p) => ({
      ...p,
      projectTypes: p.projectTypes.includes(type)
        ? p.projectTypes.filter((t) => t !== type)
        : [...p.projectTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: form.projectTypes.join(", ") }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", projectTypes: [], budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 py-4 text-white text-[16px] placeholder-[#a8a8a8] focus:outline-none focus:border-white transition-colors duration-200";
  const labelClass = "text-[#a8a8a8] text-[11px] tracking-[2px] uppercase block mb-2";

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />

      <section className="px-5 pt-36 pb-32">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16 flex items-stretch justify-between gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            {/* Left: heading */}
            <div>
              <span
                className="text-[#bf0603] text-[12px] tracking-[2.4px] uppercase block mb-4"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
              >
                Orçamento
              </span>
              <h1
                className="text-white text-[56px] leading-[0.92] mb-6"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                Vamos criar<br />algo juntos?
              </h1>
              <p
                className="text-[#a8a8a8] text-[18px] leading-relaxed"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 300 }}
              >
                Preencha o formulário abaixo e entro em contato em até 24h.
              </p>
            </div>

            {/* Right: WhatsApp card */}
            <div className="shrink-0 border border-white/10 rounded-2xl p-6 w-[320px] flex flex-col justify-between">
              <p
                className="text-white text-[16px] mb-1"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                Prefere conversar pelo WhatsApp?
              </p>
              <p
                className="text-[#a8a8a8] text-[13px] mb-5"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
              >
                Respondo mais rápido por lá.
              </p>
              <a
                href="https://wa.me/5511992656555?text=Olá%20Bruno%2C%20gostaria%20de%20solicitar%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-[13px] tracking-[1px] uppercase px-6 h-11 rounded-full hover:opacity-90 transition-opacity w-full"
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.19-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.388l-.361-.214-3.735.979 1.004-3.648-.235-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          {status === "success" ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing }}
            >
              <p
                className="text-white text-[32px] mb-4"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif", fontWeight: 400 }}
              >
                Mensagem enviada!
              </p>
              <p
                className="text-[#a8a8a8] text-[16px]"
                style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
              >
                Obrigado pelo contato. Respondo em breve.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            >
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputClass}
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass}
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-8 items-end">
                <div>
                  <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Telefone</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputClass}
                    style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
                  />
                </div>
                <div className="flex flex-col justify-between" style={{ minHeight: "80px" }}>
                  <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Tipo de projeto</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleProjectType(t)}
                        className={`px-5 h-9 rounded-full text-[12px] tracking-[1px] transition-all duration-200 ${
                          form.projectTypes.includes(t)
                            ? "bg-white text-[#0b0b0b]"
                            : "border border-white/20 text-[#a8a8a8] hover:border-white/50 hover:text-white"
                        }`}
                        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Budget pills */}
              <div>
                <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Orçamento estimado</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => set("budget", b)}
                      className={`px-5 h-9 rounded-full text-[12px] tracking-[1px] transition-all duration-200 ${
                        form.budget === b
                          ? "bg-white text-[#0b0b0b]"
                          : "border border-white/20 text-[#a8a8a8] hover:border-white/50 hover:text-white"
                      }`}
                      style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 500 }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass} style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>Mensagem *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre o seu projeto..."
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4">
                {status === "error" && (
                  <p className="text-[#bf0603] text-[14px]" style={{ fontFamily: "'Clash Grotesk', sans-serif" }}>
                    Erro ao enviar. Tente novamente.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="ml-auto bg-[#bf0603] text-white text-[13px] tracking-[2px] uppercase px-8 h-12 rounded-full hover:bg-white hover:text-[#0b0b0b] transition-colors duration-300 disabled:opacity-50"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
