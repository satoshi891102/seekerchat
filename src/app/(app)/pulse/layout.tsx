import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse | SeekerChat",
  description: "Live Solana network metrics, SOL price, DEX pairs, and fee tracking",
};

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
