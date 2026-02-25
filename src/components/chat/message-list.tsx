"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import type { ChatMessage } from "@/types";
import { MessageBubble } from "@/components/chat/message-bubble";
import { EmptyState } from "@/components/ui/empty-state";

interface MessageListProps {
  messages: ChatMessage[];
}

export function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <EmptyState
          icon={MessageCircle}
          title="No messages yet"
          description="Be the first to start the conversation in this room."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto py-2">
      {messages.map((message, index) => (
        <MessageBubble key={message.id} message={message} index={index} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
