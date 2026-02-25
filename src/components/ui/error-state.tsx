"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { springTransition, SPRING } from "@/lib/utils";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-[50dvh] flex-col items-center justify-center gap-4 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={springTransition(SPRING)}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-subtle"
      >
        <AlertTriangle size={28} className="text-accent-red" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springTransition(SPRING), delay: 0.08 }}
        className="flex flex-col items-center gap-1.5"
      >
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        <p className="max-w-xs text-center text-sm text-text-secondary">
          {message}
        </p>
      </motion.div>

      {onRetry && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition(SPRING), delay: 0.16 }}
          whileTap={{ scale: 0.96 }}
          onClick={onRetry}
          className="mt-2 flex items-center gap-2 rounded-xl bg-bg-surface px-5 py-2.5 text-sm font-medium text-text-primary transition-colors active:bg-bg-surface-hover"
        >
          <RotateCcw size={14} />
          Try again
        </motion.button>
      )}
    </div>
  );
}
