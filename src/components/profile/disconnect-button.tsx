"use client";

import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { springTransition, SPRING } from "@/lib/utils";

export function DisconnectButton() {
  const disconnect = useAppStore((s) => s.disconnect);

  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition(SPRING), delay: 0.36 }}
      whileTap={{ scale: 0.97 }}
      onClick={disconnect}
      aria-label="Disconnect wallet"
      className="touch-target flex w-full items-center justify-center gap-2 rounded-2xl bg-red-subtle py-3.5 text-sm font-semibold text-accent-red transition-colors active:opacity-80"
    >
      <LogOut size={16} />
      Disconnect Wallet
    </motion.button>
  );
}
