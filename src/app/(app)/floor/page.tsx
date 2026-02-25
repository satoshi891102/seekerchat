"use client";

import { GreetingBar } from "@/components/floor/greeting-bar";
import { PortfolioValue } from "@/components/floor/portfolio-value";
import { StatPills } from "@/components/floor/stat-pills";
import { NetworkPulseCard } from "@/components/floor/network-pulse-card";
import { TrendingTokens } from "@/components/floor/trending-tokens";
import { ActiveRoomsPreview } from "@/components/floor/active-rooms-preview";

export default function FloorPage() {
  return (
    <div className="min-h-dvh pt-[calc(var(--safe-top)+1rem)]">
      <GreetingBar />
      <PortfolioValue />
      <StatPills />
      <NetworkPulseCard />
      <TrendingTokens />
      <ActiveRoomsPreview />
    </div>
  );
}
