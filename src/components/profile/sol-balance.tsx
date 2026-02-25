"use client";

import { motion } from "framer-motion";
import { Mono } from "@/components/ui/mono";
import { formatUsd, formatNumber, springTransition, SPRING } from "@/lib/utils";

interface SolBalanceProps {
  solBalance: number;
  solBalanceUsd: number;
}

export function SolBalance({ solBalance, solBalanceUsd }: SolBalanceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition(SPRING), delay: 0.18 }}
      className="flex flex-col items-center gap-1"
    >
      <span className="text-[10px] font-medium tracking-wide text-text-tertiary uppercase">
        SOL Balance
      </span>
      <Mono className="text-3xl font-bold text-text-primary">
        {formatNumber(solBalance, 1)}
      </Mono>
      <Mono className="text-sm text-text-secondary">
        {formatUsd(solBalanceUsd)}
      </Mono>
    </motion.div>
  );
}
