"use client";

import { motion } from "framer-motion";
import { SeekerBadge } from "@/components/ui/seeker-badge";
import { userProfile } from "@/lib/seed-data";
import { springTransition, SPRING } from "@/lib/utils";

export function GreetingBar() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition(SPRING)}
      className="flex items-center justify-between px-5 pt-5"
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm text-text-secondary">{greeting}</p>
        <p className="font-mono-numbers text-sm font-medium text-text-primary">
          {userProfile.walletShort}
        </p>
      </div>
      <SeekerBadge size="md" />
    </motion.div>
  );
}
