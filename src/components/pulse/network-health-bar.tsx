"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { networkStats } from "@/lib/seed-data";
import {
  getNetworkHealth,
  networkHealthLabel,
  networkHealthColor,
  springTransition,
  SPRING,
} from "@/lib/utils";

export function NetworkHealthBar() {
  const { tps } = networkStats;
  const health = getNetworkHealth(tps);
  const label = networkHealthLabel[health];
  const barColor = networkHealthColor[health];

  // TPS-based fill: max at ~5000 TPS
  const fillPercent = Math.min((tps / 5000) * 100, 100);

  const textColor: Record<"green" | "amber" | "red", string> = {
    green: "text-accent-green",
    amber: "text-accent-amber",
    red: "text-accent-red",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition(SPRING), delay: 0.36 }}
      className="rounded-2xl bg-bg-surface p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-text-tertiary" />
          <span className="text-sm font-semibold text-text-primary">
            Network Health
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={`h-2 w-2 rounded-full ${barColor} animate-pulse-live`}
          />
          <span className={`text-xs font-semibold ${textColor[health]}`}>
            {label}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${fillPercent}%` }}
          transition={{ ...springTransition(SPRING), delay: 0.5 }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>

      {/* TPS label */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] text-text-tertiary">
          Current throughput
        </span>
        <Mono className="text-xs font-semibold text-text-secondary">
          {tps.toLocaleString()} TPS
        </Mono>
      </div>
    </motion.div>
  );
}
