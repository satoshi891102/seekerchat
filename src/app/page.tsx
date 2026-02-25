"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { ConnectButton } from "@/components/gate/connect-button";
import {
  springTransition,
  SPRING,
  staggerContainer,
  staggerItem,
} from "@/lib/utils";

const features = [
  "Real-time trading rooms",
  "On-chain portfolio tracking",
  "Seeker-verified community",
] as const;

export default function GatePage() {
  const connectionStatus = useAppStore((s) => s.connectionStatus);
  const router = useRouter();

  useEffect(() => {
    if (connectionStatus === "connected") {
      router.replace("/floor");
    }
  }, [connectionStatus, router]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg-primary px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex w-full max-w-sm flex-col items-center gap-10"
      >
        {/* Shield icon — animated on load */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={springTransition(SPRING)}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-subtle">
            <motion.div
              initial={{ rotate: -15 }}
              animate={{ rotate: 0 }}
              transition={springTransition({ stiffness: 200, damping: 12 })}
            >
              <ShieldCheck className="h-10 w-10 text-accent-green" />
            </motion.div>
          </div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition(SPRING), delay: 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            SeekerChat
          </h1>
          <p className="text-base text-text-secondary">
            The trading floor for Seeker holders
          </p>
        </motion.div>

        {/* Feature bullets */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3"
        >
          {features.map((feature) => (
            <motion.li
              key={feature}
              variants={staggerItem}
              className="flex items-center gap-3 text-sm text-text-secondary"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent-green" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* Connect button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition(SPRING), delay: 0.35 }}
          className="w-full"
        >
          <ConnectButton />
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-xs text-text-tertiary"
        >
          Requires a Solana Seeker device with wallet adapter
        </motion.p>
      </motion.div>
    </div>
  );
}
