"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Mono } from "@/components/ui/mono";
import { networkStats } from "@/lib/seed-data";
import { formatPrice, changeColor, springTransition, SPRING } from "@/lib/utils";

function buildChartData(prices: number[]) {
  return prices.map((price, i) => ({
    hour: `${i}h`,
    price,
  }));
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-bg-elevated px-3 py-1.5 shadow-elevated">
      <Mono className="text-xs font-semibold text-text-primary">
        ${formatPrice(payload[0].value)}
      </Mono>
    </div>
  );
}

export function SolPriceChart() {
  const { solPrice, solChange24h, solPriceHistory } = networkStats;
  const data = buildChartData(solPriceHistory);
  const isPositive = solChange24h >= 0;
  const strokeColor = isPositive
    ? "oklch(0.72 0.19 155)"
    : "oklch(0.62 0.2 25)";
  const fillId = "solPriceGradient";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springTransition(SPRING), delay: 0.3 }}
      className="rounded-2xl bg-bg-surface p-4"
    >
      {/* Header */}
      <div className="flex items-baseline justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
            SOL Price
          </span>
          <Mono className="text-xl font-bold text-text-primary">
            ${formatPrice(solPrice)}
          </Mono>
        </div>
        <Mono className={`text-sm font-semibold ${changeColor(solChange24h)}`}>
          {solChange24h >= 0 ? "+" : ""}
          {solChange24h.toFixed(1)}%
        </Mono>
      </div>

      {/* Chart */}
      <div className="mt-3 -mx-1" style={{ height: 140 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={strokeColor} stopOpacity={0.3} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="hour" hide />
            <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "oklch(0.4 0.01 260)",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke={strokeColor}
              strokeWidth={2}
              fill={`url(#${fillId})`}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-1 text-[10px] text-text-tertiary">24h price chart</p>
    </motion.div>
  );
}
