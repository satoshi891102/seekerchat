"use client";

import { motion } from "framer-motion";
import { Mono } from "@/components/ui/mono";
import { portfolio } from "@/lib/seed-data";
import { formatNumber, springTransition, SPRING } from "@/lib/utils";

export function PortfolioValue() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springTransition(SPRING)}
      className="px-5 pt-4"
    >
      <p className="text-xs font-medium tracking-wide text-text-secondary uppercase">
        Portfolio Value
      </p>
      <Mono className="mt-1 block text-4xl font-bold tracking-tight text-text-primary">
        ${formatNumber(portfolio.totalValue, 2)}
      </Mono>
    </motion.div>
  );
}
