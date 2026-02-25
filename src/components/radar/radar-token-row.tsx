"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { cn, formatPrice, formatPercent, changeColor, formatCompact, springTransition } from "@/lib/utils";
import { Sparkline } from "@/components/ui/sparkline";
import { Mono } from "@/components/ui/mono";
import { useAppStore } from "@/lib/store";
import type { RadarToken } from "@/types";

interface RadarTokenRowProps {
  token: RadarToken;
  index: number;
}

export function RadarTokenRow({ token, index }: RadarTokenRowProps) {
  const toggleWatchlist = useAppStore((s) => s.toggleWatchlist);

  const handleTap = () => {
    toast.info("Token detail coming in v2");
  };

  const handleWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWatchlist(token.symbol);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...springTransition(),
        delay: index * 0.04,
      }}
      onClick={handleTap}
      className="flex items-center gap-3 rounded-2xl bg-bg-surface p-3.5 active:bg-bg-surface-hover transition-colors cursor-pointer"
    >
      {/* Token icon circle */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-elevated">
        <span className="text-xs font-bold text-text-primary">
          {token.symbol.slice(0, 2)}
        </span>
      </div>

      {/* Name + mcap */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-sm font-semibold text-text-primary truncate">
          {token.symbol}
        </span>
        <span className="text-xs text-text-tertiary truncate">
          {token.name}
        </span>
      </div>

      {/* 7d sparkline */}
      <Sparkline
        data={token.sparkline}
        width={64}
        height={28}
        positive={token.change24h >= 0}
        className="shrink-0"
      />

      {/* Price + change */}
      <div className="flex flex-col items-end gap-0.5 shrink-0">
        <Mono className="text-sm text-text-primary">
          ${formatPrice(token.price)}
        </Mono>
        <Mono className={cn("text-xs", changeColor(token.change24h))}>
          {formatPercent(token.change24h)}
        </Mono>
      </div>

      {/* MCap badge */}
      <div className="hidden min-[420px]:flex flex-col items-end shrink-0">
        <span className="text-[10px] text-text-tertiary uppercase tracking-wider">
          MCap
        </span>
        <Mono className="text-xs text-text-secondary">
          ${formatCompact(token.marketCap)}
        </Mono>
      </div>

      {/* Watchlist heart */}
      <button
        onClick={handleWatchlist}
        aria-label={token.watchlisted ? `Remove ${token.symbol} from watchlist` : `Add ${token.symbol} to watchlist`}
        aria-pressed={token.watchlisted}
        className="touch-target flex items-center justify-center shrink-0"
      >
        <Heart
          size={18}
          className={cn(
            "transition-colors",
            token.watchlisted
              ? "fill-accent-green text-accent-green"
              : "text-text-tertiary",
          )}
        />
      </button>
    </motion.div>
  );
}
