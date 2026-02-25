"use client";

import { motion } from "framer-motion";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import { WalletAddress } from "@/components/profile/wallet-address";
import { SolBalance } from "@/components/profile/sol-balance";
import { HoldingsList } from "@/components/profile/holdings-list";
import { StatsCard } from "@/components/profile/stats-card";
import { DisconnectButton } from "@/components/profile/disconnect-button";
import { SeekerBadge } from "@/components/ui/seeker-badge";
import { userProfile, holdings } from "@/lib/seed-data";
import { springTransition, SPRING } from "@/lib/utils";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-8 pt-[calc(var(--safe-top)+1.5rem)]">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={springTransition(SPRING)}
        className="text-xl font-bold text-text-primary"
      >
        Profile
      </motion.h1>

      {/* Avatar + Identity */}
      <div className="flex flex-col items-center gap-3">
        <ProfileAvatar walletAddress={userProfile.walletAddress} />
        <WalletAddress address={userProfile.walletAddress} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition(SPRING), delay: 0.12 }}
        >
          <SeekerBadge size="md" />
        </motion.div>
      </div>

      {/* SOL Balance */}
      <SolBalance
        solBalance={userProfile.solBalance}
        solBalanceUsd={userProfile.solBalanceUsd}
      />

      {/* Holdings */}
      <HoldingsList holdings={holdings} />

      {/* Stats */}
      <StatsCard profile={userProfile} />

      {/* Disconnect */}
      <DisconnectButton />

      {/* Version */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...springTransition(SPRING), delay: 0.42 }}
        className="text-center text-[10px] text-text-tertiary"
      >
        v1.0.0-beta
      </motion.p>
    </div>
  );
}
