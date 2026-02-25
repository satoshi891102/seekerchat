"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Wallet } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { springTransition, SPRING } from "@/lib/utils";

export function ConnectButton() {
  const connectionStatus = useAppStore((s) => s.connectionStatus);
  const connect = useAppStore((s) => s.connect);

  const isConnecting = connectionStatus === "connecting";

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={springTransition(SPRING)}
      onClick={connect}
      disabled={isConnecting}
      aria-label={isConnecting ? "Connecting wallet" : "Connect wallet"}
      className="touch-target flex w-full items-center justify-center gap-3 rounded-2xl bg-accent-green px-6 py-4 text-base font-semibold text-text-inverse transition-opacity disabled:opacity-70"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isConnecting ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-3"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Connecting...</span>
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-3"
          >
            <Wallet className="h-5 w-5" />
            <span>Connect Wallet</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
