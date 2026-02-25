import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms | SeekerChat",
  description: "Browse and join real-time Solana trading discussion rooms",
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
