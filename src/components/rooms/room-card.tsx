"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import type { Room } from "@/types";
import { springTransition, SPRING } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
  index: number;
  onSelect: (roomId: string) => void;
}

export function RoomCard({ room, index, onSelect }: RoomCardProps) {
  const Icon = room.icon;

  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...springTransition(SPRING),
        delay: index * 0.06,
      }}
      onClick={() => onSelect(room.id)}
      aria-label={`Open ${room.name} — ${room.onlineCount} online, ${room.unreadCount} unread`}
      className="flex items-start gap-3.5 rounded-2xl bg-bg-surface p-4 text-left transition-colors active:bg-bg-surface-hover"
    >
      {/* Room Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-elevated">
        <Icon size={20} className="text-text-secondary" />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {/* Room name + online indicator */}
        <div className="flex items-center justify-between">
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

          {/* Unread badge */}
          {room.unreadCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent-green px-1.5 text-[10px] font-bold text-text-inverse">
              {room.unreadCount}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-text-tertiary">{room.description}</p>

        {/* Last message + meta */}
        <div className="flex items-center justify-between gap-2">
          <p className="min-w-0 flex-1 truncate text-xs text-text-secondary">
            {room.lastMessage}
          </p>
          <span className="shrink-0 text-[10px] text-text-tertiary">
            {room.lastMessageTime}
          </span>
        </div>

        {/* Member count */}
        <div className="flex items-center gap-1">
          <Users size={11} className="text-text-tertiary" />
          <span className="text-[10px] text-text-tertiary">
            {room.memberCount.toLocaleString()} members
          </span>
        </div>
      </div>
    </motion.button>
  );
}
