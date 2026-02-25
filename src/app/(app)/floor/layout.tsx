import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floor | SeekerChat",
  description: "Your trading dashboard with portfolio, trending tokens, and active rooms",
};

export default function FloorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
