"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { springTransition, SPRING } from "@/lib/utils";

interface ChatInputProps {
  onSend: (text: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  }, [text, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition(SPRING)}
      className="sticky bottom-0 z-30 border-t border-border-subtle bg-bg-primary/90 px-4 pb-[calc(var(--safe-bottom)+0.5rem)] pt-3 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="h-11 flex-1 rounded-xl bg-bg-surface px-4 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:bg-bg-surface-hover"
        />
        <button
          onClick={handleSend}
          disabled={!text.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-green text-text-inverse transition-opacity disabled:opacity-30 active:opacity-80 touch-target"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </motion.div>
  );
}
