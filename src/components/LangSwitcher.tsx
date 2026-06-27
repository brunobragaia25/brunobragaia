"use client";

import { useLang } from "@/context/DictContext";
import { usePathname, useRouter } from "next/navigation";

const langs = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
];

export default function LangSwitcher() {
  const lang = useLang();
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(targetLang: string) {
    const newPath = pathname.replace(`/${lang}`, `/${targetLang}`);
    router.push(newPath);
  }

  return (
    <div
      className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1"
      style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
    >
      {langs.map((l) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => switchLang(l.code)}
            disabled={isActive}
            className={`px-3 h-7 rounded-full text-[11px] tracking-[1.5px] uppercase transition-all duration-200 ${
              isActive
                ? "bg-white text-[#0b0b0b]"
                : "text-[#a8a8a8] hover:text-white"
            }`}
            style={{ fontWeight: 600 }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
