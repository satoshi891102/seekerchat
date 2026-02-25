"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

const variantStyles: Record<string, string> = {
  default: "bg-bg-elevated text-text-primary",
  success: "bg-green-subtle text-accent-green",
  error: "bg-red-subtle text-accent-red",
  info: "bg-blue-subtle text-accent-blue",
};

export function Toast() {
  const toast = useAppStore((s) => s.toast);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={cn(
            "fixed left-1/2 top-12 z-[100] -translate-x-1/2",
            "rounded-xl px-4 py-2.5 text-sm font-medium shadow-elevated",
            variantStyles[toast.variant],
          )}
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
