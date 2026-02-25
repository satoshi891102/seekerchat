import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = localFont({
  src: "../../public/fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "SeekerChat — The Trading Floor for Seeker Holders",
  description: "Where Solana traders talk, not just trade. Real-time trading rooms, on-chain portfolio tracking, and Seeker-verified community for Solana Seeker device holders.",
  manifest: "/manifest.json",
  keywords: ["Solana", "Seeker", "trading", "chat", "crypto", "DeFi", "social trading"],
  authors: [{ name: "SeekerChat" }],
  openGraph: {
    title: "SeekerChat — The Trading Floor for Seeker Holders",
    description: "Where Solana traders talk, not just trade. Real-time trading rooms and on-chain portfolio tracking.",
    type: "website",
    siteName: "SeekerChat",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeekerChat — The Trading Floor for Seeker Holders",
    description: "Where Solana traders talk, not just trade.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SeekerChat",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#1a1a2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="top-center"
            theme="dark"
            toastOptions={{
              style: {
                background: "oklch(0.18 0.01 260)",
                color: "oklch(0.97 0 0)",
                border: "none",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
