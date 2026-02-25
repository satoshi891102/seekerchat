"use client";

import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SeekerBadgeProps {
  className?: string;
  size?: "sm" | "md";
}

export function SeekerBadge({ className, size = "sm" }: SeekerBadgeProps) {
  const iconSize = size === "sm" ? 12 : 14;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-green-subtle font-semibold text-accent-green",
        size === "sm" && "px-2 py-0.5 text-[10px]",
        size === "md" && "px-2.5 py-1 text-xs",
        className,
      )}
    >
      <ShieldCheck size={iconSize} />
      Seeker Verified
    </span>
  );
}
