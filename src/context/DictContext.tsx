"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/dictionaries";

interface DictContextValue {
  dict: Dictionary;
  lang: string;
}

const DictContext = createContext<DictContextValue | null>(null);

export function DictProvider({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <DictContext.Provider value={{ dict, lang }}>
      {children}
    </DictContext.Provider>
  );
}

export function useDict() {
  const ctx = useContext(DictContext);
  if (!ctx) throw new Error("useDict must be used inside DictProvider");
  return ctx.dict;
}

export function useLang() {
  const ctx = useContext(DictContext);
  if (!ctx) throw new Error("useLang must be used inside DictProvider");
  return ctx.lang;
}
