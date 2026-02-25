"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, Hash, Trophy } from "lucide-react";
import { Mono } from "@/components/ui/mono";
import { formatCompact, springTransition, SPRING } from "@/lib/utils";
import type { UserProfile } from "@/types";

interface StatsCardProps {
  profile: UserProfile;
}

export function StatsCard({ profile }: StatsCardProps) {
  const memberSinceDate = new Date(profile.memberSince).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );

  const stats = [
    { icon: Calendar, label: "Member Since", value: memberSinceDate },
    { icon: MessageSquare, label: "Messages Sent", value: formatCompact(profile.messagesSent) },
    { icon: Hash, label: "Rooms Joined", value: String(profile.roomsJoined) },
    { icon: Trophy, label: "Trading Score", value: String(profile.tradingScore) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition(SPRING), delay: 0.3 }}
      className="rounded-2xl bg-bg-surface p-4"
    >
      <h3 className="mb-3 text-sm font-semibold text-text-primary">Stats</h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-elevated">
              <stat.icon size={14} className="text-text-tertiary" />
            </div>
            <div className="flex flex-col">
              <Mono className="text-sm font-semibold text-text-primary">
                {stat.value}
              </Mono>
              <span className="text-[10px] text-text-tertiary">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
