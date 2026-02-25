"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import type { RadarSort } from "@/types";

const sortOptions: { value: RadarSort; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "gainers", label: "Gainers" },
  { value: "losers", label: "Losers" },
  { value: "new", label: "New" },
];

export function SortControls() {
  const radarSort = useAppStore((s) => s.radarSort);
  const setRadarSort = useAppStore((s) => s.setRadarSort);

  return (
    <div className="flex gap-2" role="tablist" aria-label="Sort tokens">
      {sortOptions.map((opt) => {
        const isActive = radarSort === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => setRadarSort(opt.value)}
            className={cn(
              "relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors touch-target",
              isActive
                ? "text-accent-green"
                : "text-text-secondary hover:text-text-primary",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="radar-sort-pill"
                className="absolute inset-0 rounded-lg bg-green-subtle"
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
