"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MessageSquare, Users } from "lucide-react";
import { rooms } from "@/lib/seed-data";
import { useAppStore } from "@/lib/store";
import {
  staggerContainer,
  staggerItem,
  springTransition,
  SPRING,
} from "@/lib/utils";

export function ActiveRoomsPreview() {
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const setActiveRoomId = useAppStore((s) => s.setActiveRoomId);
  const router = useRouter();

  // Show the top 3 rooms by online count
  const previewRooms = [...rooms]
    .sort((a, b) => b.onlineCount - a.onlineCount)
    .slice(0, 3);

  function handleRoomClick(roomId: string) {
    setActiveTab("rooms");
    setActiveRoomId(roomId);
    router.push(`/rooms/${roomId}`);
  }

  return (
    <div className="mt-6 px-5 pb-6">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <MessageSquare size={16} className="text-accent-green" />
        <h3 className="text-sm font-semibold text-text-primary">
          Active Rooms
        </h3>
      </div>

      {/* Room Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-3 flex flex-col gap-2.5"
      >
        {previewRooms.map((room) => {
          const Icon = room.icon;

          return (
            <motion.button
              key={room.id}
              variants={staggerItem}
              transition={springTransition(SPRING)}
              onClick={() => handleRoomClick(room.id)}
              className="flex items-start gap-3 rounded-2xl bg-bg-surface p-3.5 text-left transition-colors active:bg-bg-surface-hover"
            >
              {/* Room Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-elevated">
                <Icon size={18} className="text-text-secondary" />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-primary">
                    {room.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-live" />
                    <span className="text-[10px] text-text-tertiary">
                      {room.onlineCount.toLocaleString()} online
                    </span>
                  </div>
                </div>

                {/* Last Message Preview */}
                <p className="truncate text-xs text-text-secondary">
                  {room.lastMessage}
                </p>
              </div>

              {/* Member Count */}
              <div className="flex shrink-0 items-center gap-1 pt-0.5">
                <Users size={12} className="text-text-tertiary" />
                <span className="text-[11px] text-text-tertiary">
                  {room.memberCount.toLocaleString()}
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
