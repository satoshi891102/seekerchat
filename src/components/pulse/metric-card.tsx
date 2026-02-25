"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { springTransition, SPRING } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: number;
  index?: number;
}

export function MetricCard({
  label,
  value,
  icon: Icon,
  trend,
  index = 0,
}: MetricCardProps) {
  const TrendIcon = trend !== undefined && trend >= 0 ? TrendingUp : TrendingDown;
  const trendColor =
    trend !== undefined
      ? trend >= 0
        ? "text-accent-green"
        : "text-accent-red"
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition(SPRING), delay: index * 0.06 }}
      className="flex flex-col gap-2 rounded-2xl bg-bg-surface p-4"
    >
      <div className="flex items-center justify-between">
        <Icon size={16} className="text-text-tertiary" />
        {trend !== undefined && (
          <div className={`flex items-center gap-0.5 ${trendColor}`}>
            <TrendIcon size={12} />
            <span className="text-[10px] font-semibold">
              {trend >= 0 ? "+" : ""}
              {trend.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <Mono className="text-lg font-bold text-text-primary">{value}</Mono>
        <span className="text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
