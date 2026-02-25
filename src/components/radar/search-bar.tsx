"use client";

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { useRef } from "react";

export function SearchBar() {
  const radarSearch = useAppStore((s) => s.radarSearch);
  const setRadarSearch = useAppStore((s) => s.setRadarSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none"
      />
      <input
        ref={inputRef}
        type="text"
        value={radarSearch}
        onChange={(e) => setRadarSearch(e.target.value)}
        placeholder="Search tokens..."
        aria-label="Search tokens by name or symbol"
        className={cn(
          "w-full rounded-xl bg-bg-surface pl-10 pr-10 py-3",
          "text-sm text-text-primary placeholder:text-text-tertiary",
          "outline-none transition-colors",
          "focus:bg-bg-surface-hover",
          "touch-target",
        )}
      />
      <AnimatePresence>
        {radarSearch.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={() => {
              setRadarSearch("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-bg-surface-hover text-text-secondary"
          >
            <X size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
