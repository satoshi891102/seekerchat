"use client";

import { use, useCallback } from "react";
import { useRouter } from "next/navigation";
import { rooms } from "@/lib/seed-data";
import { useAppStore } from "@/lib/store";
import { ChatHeader } from "@/components/chat/chat-header";
import { MessageList } from "@/components/chat/message-list";
import { ChatInput } from "@/components/chat/chat-input";

interface ChatRoomPageProps {
  params: Promise<{ roomId: string }>;
}

export default function ChatRoomPage({ params }: ChatRoomPageProps) {
  const { roomId } = use(params);
  const router = useRouter();
  const storeMessages = useAppStore((s) => s.messagesByRoom);
  const sendMessage = useAppStore((s) => s.sendMessage);
  const setActiveRoomId = useAppStore((s) => s.setActiveRoomId);

  const room = rooms.find((r) => r.id === roomId);
  const messages = storeMessages[roomId] ?? [];

  const handleBack = useCallback(() => {
    setActiveRoomId(null);
    router.back();
  }, [setActiveRoomId, router]);

  const handleSend = useCallback(
    (text: string) => {
      sendMessage(roomId, text);
    },
    [sendMessage, roomId],
  );

  if (!room) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg-primary">
        <p className="text-sm text-text-secondary">Room not found</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg-primary">
      <ChatHeader room={room} onBack={handleBack} />
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
