"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { rooms } from "@/lib/seed-data";
import { useAppStore } from "@/lib/store";
import { staggerContainer } from "@/lib/utils";
import { RoomCard } from "@/components/rooms/room-card";
import { EmptyState } from "@/components/ui/empty-state";

export default function RoomsPage() {
  const setActiveRoomId = useAppStore((s) => s.setActiveRoomId);
  const router = useRouter();

  const handleSelect = useCallback(
    (roomId: string) => {
      setActiveRoomId(roomId);
      router.push(`/rooms/${roomId}`);
    },
    [setActiveRoomId, router],
  );

  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <MessageSquare size={20} className="text-accent-green" aria-hidden="true" />
        <h1 className="text-lg font-bold text-text-primary">Trading Rooms</h1>
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-bg-elevated px-1.5 font-mono text-[10px] font-semibold text-text-secondary">
          {rooms.length}
        </span>
      </div>

      {/* Room List */}
      {rooms.length === 0 ? (
        <EmptyState
          icon={MessageSquare}
          title="No rooms available"
          description="Trading rooms will appear here when they are created."
        />
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2.5 px-5 pb-6"
        >
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              index={index}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
