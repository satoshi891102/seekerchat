"use client";

import { SearchX } from "lucide-react";
import { motion } from "framer-motion";
import { springTransition } from "@/lib/utils";

interface EmptySearchProps {
  query: string;
}

export function EmptySearch({ query }: EmptySearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springTransition()}
      className="flex flex-col items-center justify-center gap-3 py-16"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-surface">
        <SearchX size={24} className="text-text-tertiary" />
      </div>
      <p className="text-sm text-text-secondary">
        No tokens matching{" "}
        <span className="font-medium text-text-primary">&quot;{query}&quot;</span>
      </p>
      <p className="text-xs text-text-tertiary">
        Try a different symbol or name
      </p>
    </motion.div>
  );
}
