"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Sparkline } from "@/components/ui/sparkline";
import { Mono } from "@/components/ui/mono";
import { trendingTokens } from "@/lib/seed-data";
import {
  formatPrice,
  formatPercent,
  changeColor,
  staggerContainer,
  staggerItem,
  springTransition,
  SPRING,
} from "@/lib/utils";

export function TrendingTokens() {
  return (
    <div className="mt-6 px-5">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <TrendingUp size={16} className="text-accent-green" />
        <h3 className="text-sm font-semibold text-text-primary">
          Trending Tokens
        </h3>
      </div>

      {/* Token List */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-3 flex flex-col"
      >
        {trendingTokens.map((token) => (
          <motion.div
            key={token.symbol}
            variants={staggerItem}
            transition={springTransition(SPRING)}
            className="flex items-center gap-3 rounded-xl px-1 py-2.5"
          >
            {/* Token Icon Circle */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-elevated">
              <span className="text-xs font-bold text-text-secondary">
                {token.symbol.slice(0, 2)}
              </span>
            </div>

            {/* Name & Symbol */}
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-semibold text-text-primary">
                {token.symbol}
              </span>
              <span className="truncate text-[11px] text-text-tertiary">
                {token.name}
              </span>
            </div>

            {/* Sparkline */}
            <Sparkline
              data={token.sparkline}
              width={64}
              height={28}
              positive={token.change24h >= 0}
            />

            {/* Price & Change */}
            <div className="flex flex-col items-end">
              <Mono className="text-sm font-medium text-text-primary">
                ${formatPrice(token.price)}
              </Mono>
              <Mono
                className={`text-[11px] font-medium ${changeColor(token.change24h)}`}
              >
                {formatPercent(token.change24h)}
              </Mono>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
