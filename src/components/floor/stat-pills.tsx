"use client";

import { motion } from "framer-motion";
import { TrendingUp, Hash, MessageSquare } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { portfolio } from "@/lib/seed-data";
import {
  formatPercent,
  springTransition,
  SPRING,
  staggerContainer,
  staggerItem,
} from "@/lib/utils";

const pills = [
  {
    label: "24h PnL",
    value: formatPercent(portfolio.change24h),
    icon: TrendingUp,
    positive: portfolio.change24h >= 0,
  },
  {
    label: "Rank",
    value: `#${portfolio.rank}`,
    icon: Hash,
    positive: null,
  },
  {
    label: "Active Rooms",
    value: String(portfolio.activeRooms),
    icon: MessageSquare,
    positive: null,
  },
] as const;

export function StatPills() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex gap-2.5 px-5 pt-4"
    >
      {pills.map((pill) => {
        const Icon = pill.icon;
        const colorClass =
          pill.positive === true
            ? "text-accent-green bg-green-subtle"
            : pill.positive === false
              ? "text-accent-red bg-red-subtle"
              : "text-text-secondary bg-bg-surface";

        return (
          <motion.div
            key={pill.label}
            variants={staggerItem}
            transition={springTransition(SPRING)}
            className={`flex flex-1 items-center gap-1.5 rounded-xl px-3 py-2.5 ${colorClass}`}
          >
            <Icon size={14} className="shrink-0" />
            <div className="flex flex-col">
              <Mono className="text-sm font-semibold leading-tight">
                {pill.value}
              </Mono>
              <span className="text-[10px] leading-tight text-text-secondary">
                {pill.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
