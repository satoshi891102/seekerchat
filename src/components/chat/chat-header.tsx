"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users } from "lucide-react";
import type { Room } from "@/types";
import { springTransition, SPRING } from "@/lib/utils";

interface ChatHeaderProps {
  room: Room;
  onBack: () => void;
}

export function ChatHeader({ room, onBack }: ChatHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition(SPRING)}
      className="sticky top-0 z-30 flex items-center gap-3 bg-bg-primary/90 px-4 pb-3 pt-[calc(var(--safe-top)+0.75rem)] backdrop-blur-xl"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg-surface transition-colors active:bg-bg-surface-hover touch-target"
        aria-label="Go back"
      >
        <ArrowLeft size={18} className="text-text-primary" />
      </button>

      {/* Room name + live indicator */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2">
          <h1 className="truncate text-sm font-bold text-text-primary">
            {room.name}
          </h1>
          <span className="flex items-center gap-1 rounded-full bg-green-subtle px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-live" />
            <span className="text-[10px] font-semibold text-accent-green">
              LIVE
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={11} className="text-text-tertiary" />
          <span className="text-[10px] text-text-tertiary">
            {room.memberCount.toLocaleString()} members
          </span>
        </div>
      </div>
    </motion.header>
  );
}
