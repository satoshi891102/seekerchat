"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { TabBar } from "@/components/ui/tab-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const connectionStatus = useAppStore((s) => s.connectionStatus);
  const activeRoomId = useAppStore((s) => s.activeRoomId);
  const router = useRouter();

  // Auth guard — redirect to gate when not connected
  useEffect(() => {
    if (connectionStatus === "disconnected") {
      router.replace("/");
    }
  }, [connectionStatus, router]);

  // Don't render app shell while disconnected (gate page handles that)
  if (connectionStatus === "disconnected") {
    return null;
  }

  // Hide tab bar when inside a chat room view
  const showTabBar = activeRoomId === null;

  return (
    <div className="relative min-h-dvh bg-bg-primary">
      {/* Main content area — padded for bottom nav */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeRoomId ?? "tabs"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={showTabBar ? "pb-[calc(var(--nav-height)+var(--safe-bottom))]" : ""}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Bottom tab navigation — hidden in chat room view */}
      {showTabBar && <TabBar />}
    </div>
  );
}
