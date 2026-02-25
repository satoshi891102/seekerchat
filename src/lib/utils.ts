import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { BadgeType, SpringConfig, SparklinePoint } from "./types";

// ── Class Merging ──────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ── Wallet Address ─────────────────────────────────────────────────

/** Truncate a wallet address to `7xKX...q3Fm` format */
export function truncateAddress(
  address: string,
  startLen = 4,
  endLen = 4,
): string {
  if (address.length <= startLen + endLen + 3) return address;
  return `${address.slice(0, startLen)}...${address.slice(-endLen)}`;
}

/** Get initials (first 2 chars) from a wallet address for avatars */
export function walletInitials(address: string): string {
  return address.slice(0, 2).toUpperCase();
}

// ── Number Formatting ──────────────────────────────────────────────

/** Format USD values: $1,234.56 or $1.2M etc. */
export function formatUsd(value: number, compact = false): string {
  if (compact && Math.abs(value) >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (compact && Math.abs(value) >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (compact && Math.abs(value) >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/** Format a number with commas: 1,234,567.89 */
export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Format a percentage: +12.4% or -3.2% */
export function formatPercent(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

/** Format large numbers compactly: 1.2M, 3.8K */
export function formatCompact(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toString();
}

/** Format a crypto price with appropriate decimals */
export function formatPrice(price: number): string {
  if (price >= 1000) return formatNumber(price, 2);
  if (price >= 1) return formatNumber(price, 2);
  if (price >= 0.01) return formatNumber(price, 4);
  return formatNumber(price, 6);
}

// ── Time Formatting ────────────────────────────────────────────────

/** Relative timestamp: "2m ago", "1h ago", "3d ago" */
export function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const seconds = Math.floor((now - then) / 1000);

  if (seconds < 60) return "now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// ── Color Helpers ──────────────────────────────────────────────────

/** Return the Tailwind text color class for a percentage change */
export function changeColor(value: number): string {
  if (value > 0) return "text-accent-green";
  if (value < 0) return "text-accent-red";
  return "text-text-secondary";
}

/** Return the Tailwind bg class for a percentage change */
export function changeBgColor(value: number): string {
  if (value > 0) return "bg-green-subtle";
  if (value < 0) return "bg-red-subtle";
  return "bg-bg-surface";
}

/** Badge color mapping */
export function badgeColors(type: BadgeType): {
  text: string;
  bg: string;
} {
  const map: Record<BadgeType, { text: string; bg: string }> = {
    "top-trader": { text: "text-accent-amber", bg: "bg-amber-subtle" },
    "seeker-verified": { text: "text-accent-green", bg: "bg-green-subtle" },
    whale: { text: "text-accent-blue", bg: "bg-blue-subtle" },
    mod: { text: "text-accent-purple", bg: "bg-purple-subtle" },
  };
  return map[type];
}

/** Generate a deterministic avatar color from a username */
export function avatarColor(username: string): string {
  const colors = [
    "oklch(0.65 0.15 30)",
    "oklch(0.65 0.15 60)",
    "oklch(0.65 0.15 120)",
    "oklch(0.65 0.15 180)",
    "oklch(0.65 0.15 240)",
    "oklch(0.65 0.15 300)",
    "oklch(0.72 0.19 155)",
    "oklch(0.62 0.2 25)",
    "oklch(0.75 0.15 75)",
    "oklch(0.6 0.15 250)",
  ];
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// ── Sparkline Helpers ──────────────────────────────────────────────

/** Convert a number array into normalized Y values for inline SVG sparkline */
export function sparklinePoints(
  data: number[],
  height: number,
  padding = 2,
): SparklinePoint[] {
  if (data.length === 0) return [];
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const drawH = height - padding * 2;

  return data.map((value, index) => ({
    index,
    value:
      padding + drawH - ((value - min) / range) * drawH,
  }));
}

/** Build an SVG polyline points string from sparkline data */
export function sparklinePath(
  data: number[],
  width: number,
  height: number,
  padding = 2,
): string {
  const points = sparklinePoints(data, height, padding);
  if (points.length === 0) return "";
  const drawW = width - padding * 2;
  const step = drawW / Math.max(points.length - 1, 1);

  return points
    .map((p, i) => `${padding + i * step},${p.value}`)
    .join(" ");
}

// ── Animation Presets ──────────────────────────────────────────────

export const SPRING: SpringConfig = {
  stiffness: 300,
  damping: 24,
};

export const SPRING_SOFT: SpringConfig = {
  stiffness: 200,
  damping: 20,
};

export const SPRING_BOUNCY: SpringConfig = {
  stiffness: 400,
  damping: 15,
};

/** Framer Motion spring transition */
export function springTransition(config: SpringConfig = SPRING) {
  return {
    type: "spring" as const,
    stiffness: config.stiffness,
    damping: config.damping,
    mass: config.mass ?? 1,
  };
}

/** Stagger children animation for lists */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: springTransition(),
  },
};

/** Fade-in scale animation for cards */
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: springTransition(),
};

// ── Token Mention Parser ───────────────────────────────────────────

/** Split message text into segments, identifying $TOKEN mentions */
export function parseTokenMentions(
  text: string,
): Array<{ type: "text" | "token"; value: string }> {
  const regex = /(\$[A-Z]{2,10})/g;
  const parts: Array<{ type: "text" | "token"; value: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "token", value: match[1].slice(1) });
    lastIndex = match.index + match[1].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: "text", value: text.slice(lastIndex) });
  }

  return parts;
}

// ── Clipboard ──────────────────────────────────────────────────────

/** Copy text to clipboard, returns success boolean */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// ── Network Health ─────────────────────────────────────────────────

/** Determine network health based on TPS */
export function getNetworkHealth(tps: number): "green" | "amber" | "red" {
  if (tps >= 2000) return "green";
  if (tps >= 1000) return "amber";
  return "red";
}

export const networkHealthLabel: Record<"green" | "amber" | "red", string> = {
  green: "Healthy",
  amber: "Degraded",
  red: "Congested",
};

export const networkHealthColor: Record<"green" | "amber" | "red", string> = {
  green: "bg-accent-green",
  amber: "bg-accent-amber",
  red: "bg-accent-red",
};
