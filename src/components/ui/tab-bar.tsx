"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  MessageSquare,
  Target,
  Activity,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import type { TabId } from "@/types";

const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "floor", label: "Floor", icon: Home },
  { id: "rooms", label: "Rooms", icon: MessageSquare },
  { id: "radar", label: "Radar", icon: Target },
  { id: "pulse", label: "Pulse", icon: Activity },
  { id: "profile", label: "Profile", icon: User },
];

export function TabBar() {
  const activeTab = useAppStore((s) => s.activeTab);
  const setActiveTab = useAppStore((s) => s.setActiveTab);
  const router = useRouter();
  const pathname = usePathname();

  // Sync store with URL when navigating via browser back/forward
  useEffect(() => {
    const segment = pathname.split("/")[1] as TabId | undefined;
    if (segment && tabs.some((t) => t.id === segment) && segment !== activeTab) {
      setActiveTab(segment);
    }
  }, [pathname, activeTab, setActiveTab]);

  function handleTabClick(tabId: TabId) {
    setActiveTab(tabId);
    router.push(`/${tabId}`);
  }

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-bg-primary/90 backdrop-blur-xl",
        "border-t border-border-subtle",
      )}
      style={{ paddingBottom: "var(--safe-bottom)" }}
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "touch-target relative flex flex-1 flex-col items-center gap-0.5 py-2 transition-colors",
                isActive
                  ? "text-accent-green"
                  : "text-text-tertiary",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute -top-px left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-accent-green"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                />
              )}
              <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
              <span
                className={cn(
                  "text-[10px] leading-none",
                  isActive ? "font-semibold" : "font-medium",
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
