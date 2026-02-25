"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { springTransition, SPRING } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springTransition(SPRING)}
      className="flex flex-col items-center justify-center gap-3 py-16"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-surface">
        <Icon size={24} className="text-text-tertiary" />
      </div>
      <p className="text-sm font-medium text-text-secondary">{title}</p>
      <p className="max-w-xs text-center text-xs text-text-tertiary">
        {description}
      </p>
      {action && (
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={action.onClick}
          className="mt-2 rounded-xl bg-accent-green px-4 py-2 text-sm font-semibold text-text-inverse transition-opacity active:opacity-80"
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  );
}
