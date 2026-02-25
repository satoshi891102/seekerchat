import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radar | SeekerChat",
  description: "Scan and track Solana tokens by trending, gainers, losers, and new listings",
};

export default function RadarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
