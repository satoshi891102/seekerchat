"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { networkStats } from "@/lib/seed-data";
import { springTransition, SPRING } from "@/lib/utils";

export function FeeTrackerCard() {
  const { avgPriorityFee } = networkStats;

  // Fee level indicator
  const feeLevel: "low" | "medium" | "high" =
    avgPriorityFee < 0.0002 ? "low" : avgPriorityFee < 0.001 ? "medium" : "high";

  const feeLevelConfig = {
    low: {
      label: "Low",
      color: "text-accent-green",
      dotColor: "bg-accent-green",
      desc: "Priority fees are currently low. Good time for transactions.",
    },
    medium: {
      label: "Medium",
      color: "text-accent-amber",
      dotColor: "bg-accent-amber",
      desc: "Moderate congestion. Consider slightly higher priority fees.",
    },
    high: {
      label: "High",
      color: "text-accent-red",
      dotColor: "bg-accent-red",
      desc: "Network congested. Higher priority fees recommended.",
    },
  };

  const config = feeLevelConfig[feeLevel];

  // Generate some realistic fee bar data
  const feeBars = [
    0.000098, 0.000112, 0.000134, 0.000089, 0.000156, 0.000142, 0.000118,
    0.000167, 0.000131, 0.000142,
  ];
  const maxFee = Math.max(...feeBars);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition(SPRING), delay: 0.48 }}
      className="rounded-2xl bg-bg-surface p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-text-tertiary" />
          <span className="text-sm font-semibold text-text-primary">
            Fee Tracker
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`h-2 w-2 rounded-full ${config.dotColor}`} />
          <span className={`text-xs font-semibold ${config.color}`}>
            {config.label}
          </span>
        </div>
      </div>

      {/* Average Fee */}
      <div className="mt-3 flex items-baseline gap-2">
        <Mono className="text-xl font-bold text-text-primary">
          {avgPriorityFee.toFixed(6)}
        </Mono>
        <span className="text-[10px] font-medium text-text-tertiary uppercase">
          SOL avg
        </span>
      </div>

      {/* Fee history bars */}
      <div className="mt-3 flex items-end gap-[4px]" style={{ height: 36 }}>
        {feeBars.map((fee, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              ...springTransition(SPRING),
              delay: 0.5 + i * 0.04,
            }}
            className="flex-1 origin-bottom rounded-sm bg-accent-green/40"
            style={{
              height: `${(fee / maxFee) * 100}%`,
            }}
          />
        ))}
      </div>

      <p className="mt-2 text-[10px] text-text-tertiary leading-relaxed">
        {config.desc}
      </p>
    </motion.div>
  );
}
