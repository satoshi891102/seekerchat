import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | SeekerChat",
  description: "Manage your wallet, view holdings, and track your trading stats",
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
