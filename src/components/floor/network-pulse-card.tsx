"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { networkStats, solInflowBars } from "@/lib/seed-data";
import { springTransition, SPRING, fadeInScale } from "@/lib/utils";

export function NetworkPulseCard() {
  const maxBar = Math.max(...solInflowBars.map((b) => b.value));

  return (
    <motion.div
      initial={fadeInScale.initial}
      animate={fadeInScale.animate}
      transition={springTransition(SPRING)}
      className="mx-5 mt-6 rounded-2xl bg-bg-surface p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Activity size={16} className="text-accent-green" />
        <h3 className="text-sm font-semibold text-text-primary">
          Network Pulse
        </h3>
      </div>

      {/* SOL Inflow Bar Chart */}
      <div className="mt-3 flex items-end gap-[3px]" style={{ height: 48 }}>
        {solInflowBars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              ...springTransition(SPRING),
              delay: i * 0.03,
            }}
            className="flex-1 origin-bottom rounded-sm"
            style={{
              height: `${(bar.value / maxBar) * 100}%`,
              backgroundColor: bar.positive
                ? "oklch(0.72 0.19 155)"
                : "oklch(0.62 0.2 25)",
            }}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[10px] text-text-tertiary">
        Net SOL inflow (24h)
      </p>

      {/* Stats Row */}
      <div className="mt-3 flex gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
            TPS
          </span>
          <Mono className="text-sm font-semibold text-text-primary">
            {networkStats.tps.toLocaleString()}
          </Mono>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
            Active Wallets
          </span>
          <Mono className="text-sm font-semibold text-text-primary">
            {networkStats.activeWallets}
          </Mono>
        </div>
      </div>
    </motion.div>
  );
}
