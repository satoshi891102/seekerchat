"use client";

import { sparklinePath } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  positive?: boolean;
  className?: string;
}

export function Sparkline({
  data,
  width = 80,
  height = 32,
  positive,
  className,
}: SparklineProps) {
  if (data.length < 2) return null;

  // Determine direction from data if not explicitly provided
  const isPositive = positive ?? data[data.length - 1] >= data[0];
  const points = sparklinePath(data, width, height);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={cn("shrink-0", className)}
    >
      <polyline
        points={points}
        stroke={
          isPositive
            ? "oklch(0.72 0.19 155)"
            : "oklch(0.62 0.2 25)"
        }
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
