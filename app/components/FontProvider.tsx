"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_FONT_ID,
  FONT_STORAGE_KEY,
  isFontId,
  type FontId,
} from "@/lib/fontChoice";

type FontContextValue = {
  font: FontId;
  setFont: (f: FontId) => void;
};

const FontContext = createContext<FontContextValue | null>(null);

export function useFont(): FontContextValue {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFont must be used within FontProvider");
  return ctx;
}

export function FontProvider({ children }: { children: ReactNode }) {
  const [font, setFontState] = useState<FontId>(DEFAULT_FONT_ID);

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(FONT_STORAGE_KEY);
      if (stored && isFontId(stored)) {
        // Migrate old default font to new default
        const effective = stored === "wenkai" ? DEFAULT_FONT_ID : stored;
        setFontState(effective);
        document.documentElement.setAttribute("data-site-font", effective);
        if (effective !== stored) {
          localStorage.setItem(FONT_STORAGE_KEY, effective);
        }
        return;
      }
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-site-font", DEFAULT_FONT_ID);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-site-font", font);
    try {
      localStorage.setItem(FONT_STORAGE_KEY, font);
    } catch {
      /* ignore */
    }
  }, [font]);

  const setFont = useCallback((f: FontId) => {
    setFontState(f);
  }, []);

  const value = useMemo(() => ({ font, setFont }), [font, setFont]);

  return (
    <FontContext.Provider value={value}>{children}</FontContext.Provider>
  );
}
