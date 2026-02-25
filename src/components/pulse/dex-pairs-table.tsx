"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { dexPairs } from "@/lib/seed-data";
import {
  formatPrice,
  changeColor,
  springTransition,
  SPRING,
  staggerContainer,
  staggerItem,
} from "@/lib/utils";

export function DexPairsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition(SPRING), delay: 0.42 }}
      className="rounded-2xl bg-bg-surface p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2 pb-3">
        <ArrowLeftRight size={16} className="text-text-tertiary" />
        <span className="text-sm font-semibold text-text-primary">
          Top DEX Pairs
        </span>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-3 pb-2 text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
        <span>Pair</span>
        <span className="text-right">Volume</span>
        <span className="text-right">Price</span>
        <span className="text-right">24h</span>
      </div>

      {/* Rows */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {dexPairs.map((pair) => (
          <motion.div
            key={pair.pair}
            variants={staggerItem}
            className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-3 py-2.5 border-t border-border-subtle"
          >
            <span className="text-xs font-semibold text-text-primary truncate">
              {pair.pair}
            </span>
            <Mono className="text-xs text-text-secondary text-right">
              {pair.volume}
            </Mono>
            <Mono className="text-xs text-text-primary text-right">
              ${formatPrice(pair.price)}
            </Mono>
            <Mono
              className={`text-xs font-semibold text-right ${changeColor(pair.change24h)}`}
            >
              {pair.change24h >= 0 ? "+" : ""}
              {pair.change24h.toFixed(1)}%
            </Mono>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
