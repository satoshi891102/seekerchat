"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { copyToClipboard, springTransition, SPRING } from "@/lib/utils";

interface WalletAddressProps {
  address: string;
}

export function WalletAddress({ address }: WalletAddressProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyToClipboard(address);
    if (ok) {
      setCopied(true);
      toast.success("Wallet address copied");
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition(SPRING), delay: 0.06 }}
      className="flex items-center gap-2"
    >
      <span className="font-mono-numbers text-xs text-text-secondary break-all text-center leading-relaxed">
        {address}
      </span>
      <button
        onClick={handleCopy}
        className="touch-target flex shrink-0 items-center justify-center rounded-lg bg-bg-surface p-2 text-text-secondary transition-colors active:bg-bg-surface-hover"
        aria-label="Copy wallet address"
      >
        {copied ? (
          <Check size={14} className="text-accent-green" />
        ) : (
          <Copy size={14} />
        )}
      </button>
    </motion.div>
  );
}
