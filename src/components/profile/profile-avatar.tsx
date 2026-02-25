"use client";

import { motion } from "framer-motion";
import { springTransition, SPRING, walletInitials } from "@/lib/utils";

interface ProfileAvatarProps {
  walletAddress: string;
}

export function ProfileAvatar({ walletAddress }: ProfileAvatarProps) {
  const initials = walletInitials(walletAddress);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springTransition(SPRING)}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-bg-surface">
          <span className="font-mono-numbers text-3xl font-bold text-text-primary">
            {initials}
          </span>
        </div>
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-accent-green/30" />
      </div>
    </motion.div>
  );
}
