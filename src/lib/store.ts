import { create } from "zustand";
import type {
  TabId,
  RadarSort,
  RadarToken,
  ChatMessage,
} from "@/types";
import type { ConnectionStatus } from "@/lib/types";
import {
  radarTokens as defaultRadarTokens,
  messagesByRoom as defaultMessagesByRoom,
} from "@/lib/seed-data";

// ── Store Shape ──────────────────────────────────────────────────────

interface AppStore {
  // Connection
  connectionStatus: ConnectionStatus;
  connect: () => void;
  disconnect: () => void;

  // Navigation
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  activeRoomId: string | null;
  setActiveRoomId: (roomId: string | null) => void;

  // Radar
  radarSort: RadarSort;
  setRadarSort: (sort: RadarSort) => void;
  radarSearch: string;
  setRadarSearch: (query: string) => void;
  radarTokens: RadarToken[];
  toggleWatchlist: (symbol: string) => void;

  // Chat
  messagesByRoom: Record<string, ChatMessage[]>;
  sendMessage: (roomId: string, text: string) => void;

  // Toast
  toast: { message: string; variant: "default" | "success" | "error" | "info" } | null;
  showToast: (message: string, variant?: "default" | "success" | "error" | "info") => void;
  clearToast: () => void;
}

// ── Store ────────────────────────────────────────────────────────────

export const useAppStore = create<AppStore>((set) => ({
  // ── Connection ───────────────────────────────────────────────────
  connectionStatus: "disconnected",

  connect: () => {
    set({ connectionStatus: "connecting" });
    setTimeout(() => {
      set({ connectionStatus: "connected", activeTab: "floor" });
    }, 1200);
  },

  disconnect: () => {
    set({
      connectionStatus: "disconnected",
      activeTab: "floor",
      activeRoomId: null,
    });
  },

  // ── Navigation ──────────────────────────────────────────────────
  activeTab: "floor",
  setActiveTab: (tab) => set({ activeTab: tab, activeRoomId: null }),

  activeRoomId: null,
  setActiveRoomId: (roomId) => set({ activeRoomId: roomId }),

  // ── Radar ───────────────────────────────────────────────────────
  radarSort: "trending",
  setRadarSort: (sort) => set({ radarSort: sort }),

  radarSearch: "",
  setRadarSearch: (query) => set({ radarSearch: query }),

  radarTokens: defaultRadarTokens,

  toggleWatchlist: (symbol) =>
    set((state) => ({
      radarTokens: state.radarTokens.map((t) =>
        t.symbol === symbol ? { ...t, watchlisted: !t.watchlisted } : t,
      ),
    })),

  // ── Chat ────────────────────────────────────────────────────────
  messagesByRoom: defaultMessagesByRoom,

  sendMessage: (roomId, text) =>
    set((state) => {
      const tokenRegex = /\$([A-Z]{2,10})/g;
      const mentions: string[] = [];
      let m: RegExpExecArray | null;
      while ((m = tokenRegex.exec(text)) !== null) {
        mentions.push(m[1]);
      }

      const newMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        roomId,
        username: "You",
        avatarColor: "oklch(0.72 0.19 155)",
        badge: { type: "seeker-verified", label: "Seeker Verified" },
        text,
        tokenMentions: mentions,
        timestamp: new Date().toISOString(),
      };

      const existing = state.messagesByRoom[roomId] ?? [];
      return {
        messagesByRoom: {
          ...state.messagesByRoom,
          [roomId]: [...existing, newMsg],
        },
      };
    }),

  // ── Toast ───────────────────────────────────────────────────────
  toast: null,

  showToast: (message, variant = "default") => {
    set({ toast: { message, variant } });
    setTimeout(() => {
      set({ toast: null });
    }, 2500);
  },

  clearToast: () => set({ toast: null }),
}));
