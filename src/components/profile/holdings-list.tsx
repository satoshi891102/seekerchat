"use client";

import { motion } from "framer-motion";
import { Mono } from "@/components/ui/mono";
import {
  formatUsd,
  formatNumber,
  formatPercent,
  changeColor,
  springTransition,
  SPRING,
  staggerContainer,
  staggerItem,
} from "@/lib/utils";
import type { Holding } from "@/types";

interface HoldingsListProps {
  holdings: Holding[];
}

export function HoldingsList({ holdings }: HoldingsListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition(SPRING), delay: 0.24 }}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">
          Portfolio Holdings
        </h3>
        <span className="text-xs text-text-tertiary">
          {holdings.length} tokens
        </span>
      </div>
      {holdings.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface">
            <span className="text-lg text-text-tertiary">0</span>
          </div>
          <p className="text-sm text-text-secondary">No holdings yet</p>
          <p className="text-xs text-text-tertiary">
            Your token holdings will appear here
          </p>
        </div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2"
        >
          {holdings.map((holding) => (
            <HoldingRow key={holding.symbol} holding={holding} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

function HoldingRow({ holding }: { holding: Holding }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex items-center justify-between rounded-2xl bg-bg-surface p-3"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated">
          <span className="text-xs font-bold text-text-secondary">
            {holding.symbol.slice(0, 2)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text-primary">
            {holding.symbol}
          </span>
          <Mono className="text-[11px] text-text-tertiary">
            {formatHoldingAmount(holding.amount)} {holding.symbol}
          </Mono>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Mono className="text-sm font-semibold text-text-primary">
          {formatUsd(holding.valueUsd)}
        </Mono>
        <Mono className={`text-[11px] ${changeColor(holding.change24h)}`}>
          {formatPercent(holding.change24h)}
        </Mono>
      </div>
    </motion.div>
  );
}

function formatHoldingAmount(amount: number): string {
  if (amount >= 1_000_000) return formatNumber(amount / 1_000_000, 1) + "M";
  if (amount >= 1_000) return formatNumber(amount / 1_000, 1) + "K";
  return formatNumber(amount, 1);
}
