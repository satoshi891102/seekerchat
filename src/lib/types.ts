// Re-export all types from the canonical location
export type {
  Token,
  RadarToken,
  Holding,
  Portfolio,
  BadgeType,
  UserBadge,
  ChatMessage,
  Room,
  NetworkStats,
  DexPair,
  UserProfile,
  TabId,
  TabItem,
  RadarSort,
} from "@/types";

// ── App State ──────────────────────────────────────────────────────

export type ConnectionStatus = "disconnected" | "connecting" | "connected";

export interface AppState {
  connectionStatus: ConnectionStatus;
  activeTab: import("@/types").TabId;
  activeRoomId: string | null;
}

// ── Animation Presets ──────────────────────────────────────────────

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass?: number;
}

// ── Toast ──────────────────────────────────────────────────────────

export type ToastVariant = "default" | "success" | "error" | "info";

// ── Sparkline ──────────────────────────────────────────────────────

export interface SparklinePoint {
  index: number;
  value: number;
}
