"use client";

import { motion } from "framer-motion";
import type { ChatMessage } from "@/types";
import { Badge } from "@/components/ui/badge";
import { TokenPill } from "@/components/chat/token-pill";
import { parseTokenMentions, timeAgo, springTransition, SPRING } from "@/lib/utils";

interface MessageBubbleProps {
  message: ChatMessage;
  index: number;
}

export function MessageBubble({ message, index }: MessageBubbleProps) {
  const segments = parseTokenMentions(message.text);
  const initials = message.username.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...springTransition(SPRING),
        delay: index * 0.03,
      }}
      className="flex items-start gap-2.5 px-4 py-1.5"
    >
      {/* Avatar */}
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
        style={{ backgroundColor: message.avatarColor }}
      >
        {initials}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {/* Username + badge + time */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-text-primary">
            {message.username}
          </span>
          {message.badge && <Badge badge={message.badge} />}
          <span className="ml-auto shrink-0 text-[10px] text-text-tertiary">
            {timeAgo(message.timestamp)}
          </span>
        </div>

        {/* Message text with token pills */}
        <p className="text-[13px] leading-relaxed text-text-secondary">
          {segments.map((seg, i) =>
            seg.type === "token" ? (
              <TokenPill key={i} symbol={seg.value} />
            ) : (
              <span key={i}>{seg.value}</span>
            ),
          )}
        </p>
      </div>
    </motion.div>
  );
}
