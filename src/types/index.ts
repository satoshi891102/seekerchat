import type { LucideIcon } from "lucide-react";

// ── Tokens & Portfolio ──────────────────────────────────────────────

export interface Token {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  sparkline: number[];
}

export interface RadarToken extends Token {
  marketCap: number;
  change7d: number;
  watchlisted: boolean;
}

export interface Holding {
  symbol: string;
  name: string;
  amount: number;
  valueUsd: number;
  change24h: number;
}

export interface Portfolio {
  totalValue: number;
  change24h: number;
  rank: number;
  activeRooms: number;
  holdings: Holding[];
}

// ── Rooms & Messages ────────────────────────────────────────────────

export type BadgeType = "top-trader" | "seeker-verified" | "whale" | "mod";

export interface UserBadge {
  type: BadgeType;
  label: string;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  username: string;
  avatarColor: string;
  badge?: UserBadge;
  text: string;
  tokenMentions: string[];
  timestamp: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  memberCount: number;
  onlineCount: number;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

// ── Network & Pulse ─────────────────────────────────────────────────

export interface NetworkStats {
  tps: number;
  activeWallets: string;
  dexVolume: string;
  newTokens: number;
  solPrice: number;
  solChange24h: number;
  solPriceHistory: number[];
  avgPriorityFee: number;
  networkHealth: "green" | "amber" | "red";
}

export interface DexPair {
  pair: string;
  volume: string;
  price: number;
  change24h: number;
}

// ── Profile ─────────────────────────────────────────────────────────

export interface UserProfile {
  walletAddress: string;
  walletShort: string;
  solBalance: number;
  solBalanceUsd: number;
  memberSince: string;
  messagesSent: number;
  roomsJoined: number;
  tradingScore: number;
}

// ── Navigation ──────────────────────────────────────────────────────

export type TabId = "floor" | "rooms" | "radar" | "pulse" | "profile";

export interface TabItem {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

// ── Sort ────────────────────────────────────────────────────────────

export type RadarSort = "trending" | "gainers" | "losers" | "new";
