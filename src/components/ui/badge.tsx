"use client";

import { cn } from "@/lib/utils";
import { badgeColors } from "@/lib/utils";
import type { UserBadge } from "@/types";

interface BadgeProps {
  badge: UserBadge;
  className?: string;
}

export function Badge({ badge, className }: BadgeProps) {
  const colors = badgeColors(badge.type);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none",
        colors.bg,
        colors.text,
        className,
      )}
    >
      {badge.label}
    </span>
  );
}
