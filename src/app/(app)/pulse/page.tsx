"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Users, BarChart3, Sparkles } from "lucide-react";
import { networkStats } from "@/lib/seed-data";
import { staggerContainer } from "@/lib/utils";
import { MetricCard } from "@/components/pulse/metric-card";
import { SolPriceChart } from "@/components/pulse/sol-price-chart";
import { NetworkHealthBar } from "@/components/pulse/network-health-bar";
import { DexPairsTable } from "@/components/pulse/dex-pairs-table";
import { FeeTrackerCard } from "@/components/pulse/fee-tracker-card";

export default function PulsePage() {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <Activity size={20} className="text-accent-green" />
        <h1 className="text-lg font-bold text-text-primary">Pulse</h1>
      </div>

      {/* Metric Cards Grid — 2×2 */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3 px-5"
      >
        <MetricCard
          label="TPS"
          value={networkStats.tps.toLocaleString()}
          icon={Gauge}
          trend={5.2}
          index={0}
        />
        <MetricCard
          label="Active Wallets 24h"
          value={networkStats.activeWallets}
          icon={Users}
          trend={3.8}
          index={1}
        />
        <MetricCard
          label="DEX Volume 24h"
          value={networkStats.dexVolume}
          icon={BarChart3}
          trend={12.1}
          index={2}
        />
        <MetricCard
          label="New Tokens 24h"
          value={networkStats.newTokens.toLocaleString()}
          icon={Sparkles}
          trend={-2.4}
          index={3}
        />
      </motion.div>

      {/* SOL Price Chart */}
      <div className="mt-4 px-5">
        <SolPriceChart />
      </div>

      {/* Network Health Bar */}
      <div className="mt-4 px-5">
        <NetworkHealthBar />
      </div>

      {/* Top DEX Pairs Table */}
      <div className="mt-4 px-5">
        <DexPairsTable />
      </div>

      {/* Fee Tracker */}
      <div className="mt-4 px-5 pb-6">
        <FeeTrackerCard />
      </div>
    </div>
  );
}
