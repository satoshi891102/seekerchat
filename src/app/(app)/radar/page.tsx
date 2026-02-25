"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { staggerContainer } from "@/lib/utils";
import { SearchBar } from "@/components/radar/search-bar";
import { SortControls } from "@/components/radar/sort-controls";
import { RadarTokenRow } from "@/components/radar/radar-token-row";
import { EmptySearch } from "@/components/radar/empty-search";
import type { RadarSort, RadarToken } from "@/types";

function sortTokens(tokens: RadarToken[], sort: RadarSort): RadarToken[] {
  const sorted = [...tokens];
  switch (sort) {
    case "trending":
      return sorted.sort((a, b) => b.marketCap - a.marketCap);
    case "gainers":
      return sorted.sort((a, b) => b.change24h - a.change24h);
    case "losers":
      return sorted.sort((a, b) => a.change24h - b.change24h);
    case "new":
      return sorted.sort((a, b) => a.marketCap - b.marketCap);
    default:
      return sorted;
  }
}

export default function RadarPage() {
  const radarTokens = useAppStore((s) => s.radarTokens);
  const radarSearch = useAppStore((s) => s.radarSearch);
  const radarSort = useAppStore((s) => s.radarSort);

  const filteredTokens = useMemo(() => {
    const query = radarSearch.toLowerCase().trim();
    const filtered = query
      ? radarTokens.filter(
          (t) =>
            t.symbol.toLowerCase().includes(query) ||
            t.name.toLowerCase().includes(query),
        )
      : radarTokens;
    return sortTokens(filtered, radarSort);
  }, [radarTokens, radarSearch, radarSort]);

  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <Target size={20} className="text-accent-green" />
        <h1 className="text-lg font-bold text-text-primary">Radar</h1>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-bg-elevated px-1.5 text-[10px] font-semibold text-text-secondary">
          {filteredTokens.length}
        </span>
      </div>

      {/* Search */}
      <div className="px-5 pb-3">
        <SearchBar />
      </div>

      {/* Sort Controls */}
      <div className="px-5 pb-4">
        <SortControls />
      </div>

      {/* Token List */}
      {filteredTokens.length === 0 ? (
        <EmptySearch query={radarSearch} />
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2 px-5 pb-6"
        >
          {filteredTokens.map((token, index) => (
            <RadarTokenRow
              key={token.symbol}
              token={token}
              index={index}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
