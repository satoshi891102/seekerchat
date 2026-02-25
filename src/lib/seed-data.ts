import { Landmark, Crosshair, TrendingUp, Code, Flame } from "lucide-react";
import { avatarColor } from "@/lib/utils";
import type {
  Token,
  RadarToken,
  Holding,
  Portfolio,
  UserBadge,
  ChatMessage,
  Room,
  NetworkStats,
  DexPair,
  UserProfile,
} from "@/types";

// ── Trending Tokens (6) ──────────────────────────────────────────────

export const trendingTokens: Token[] = [
  {
    symbol: "JUP",
    name: "Jupiter",
    price: 1.47,
    change24h: 8.3,
    sparkline: [1.12, 1.18, 1.15, 1.22, 1.28, 1.24, 1.31, 1.35, 1.29, 1.38, 1.42, 1.47],
  },
  {
    symbol: "BONK",
    name: "Bonk",
    price: 0.00003241,
    change24h: 15.7,
    sparkline: [0.000024, 0.000025, 0.000027, 0.000026, 0.000028, 0.000029, 0.000031, 0.000030, 0.000032, 0.000031, 0.000033, 0.00003241],
  },
  {
    symbol: "WIF",
    name: "dogwifhat",
    price: 2.84,
    change24h: -4.2,
    sparkline: [3.10, 3.05, 3.12, 3.00, 2.95, 3.02, 2.90, 2.88, 2.92, 2.85, 2.82, 2.84],
  },
  {
    symbol: "RENDER",
    name: "Render",
    price: 10.23,
    change24h: 3.1,
    sparkline: [9.50, 9.65, 9.72, 9.80, 9.68, 9.90, 10.05, 9.95, 10.10, 10.08, 10.18, 10.23],
  },
  {
    symbol: "JTO",
    name: "Jito",
    price: 3.67,
    change24h: -1.8,
    sparkline: [3.85, 3.80, 3.78, 3.82, 3.75, 3.70, 3.72, 3.68, 3.74, 3.65, 3.69, 3.67],
  },
  {
    symbol: "PYTH",
    name: "Pyth Network",
    price: 0.412,
    change24h: 6.9,
    sparkline: [0.365, 0.370, 0.378, 0.382, 0.375, 0.390, 0.395, 0.388, 0.402, 0.398, 0.408, 0.412],
  },
];

// ── Radar Tokens (12) ────────────────────────────────────────────────

export const radarTokens: RadarToken[] = [
  {
    symbol: "SOL",
    name: "Solana",
    price: 178.42,
    change24h: 2.8,
    change7d: 11.3,
    sparkline: [158, 162, 160, 165, 168, 166, 170, 172, 174, 175, 177, 178.42],
    marketCap: 82_400_000_000,
    watchlisted: true,
  },
  {
    symbol: "JUP",
    name: "Jupiter",
    price: 1.47,
    change24h: 8.3,
    change7d: 22.1,
    sparkline: [1.12, 1.18, 1.15, 1.22, 1.28, 1.24, 1.31, 1.35, 1.29, 1.38, 1.42, 1.47],
    marketCap: 1_980_000_000,
    watchlisted: true,
  },
  {
    symbol: "BONK",
    name: "Bonk",
    price: 0.00003241,
    change24h: 15.7,
    change7d: 34.2,
    sparkline: [0.000024, 0.000025, 0.000027, 0.000026, 0.000028, 0.000029, 0.000031, 0.000030, 0.000032, 0.000031, 0.000033, 0.00003241],
    marketCap: 2_150_000_000,
    watchlisted: false,
  },
  {
    symbol: "WIF",
    name: "dogwifhat",
    price: 2.84,
    change24h: -4.2,
    change7d: -8.7,
    sparkline: [3.10, 3.05, 3.12, 3.00, 2.95, 3.02, 2.90, 2.88, 2.92, 2.85, 2.82, 2.84],
    marketCap: 2_840_000_000,
    watchlisted: true,
  },
  {
    symbol: "RENDER",
    name: "Render",
    price: 10.23,
    change24h: 3.1,
    change7d: 15.6,
    sparkline: [9.50, 9.65, 9.72, 9.80, 9.68, 9.90, 10.05, 9.95, 10.10, 10.08, 10.18, 10.23],
    marketCap: 5_120_000_000,
    watchlisted: false,
  },
  {
    symbol: "JTO",
    name: "Jito",
    price: 3.67,
    change24h: -1.8,
    change7d: 4.2,
    sparkline: [3.85, 3.80, 3.78, 3.82, 3.75, 3.70, 3.72, 3.68, 3.74, 3.65, 3.69, 3.67],
    marketCap: 440_000_000,
    watchlisted: false,
  },
  {
    symbol: "PYTH",
    name: "Pyth Network",
    price: 0.412,
    change24h: 6.9,
    change7d: 18.4,
    sparkline: [0.365, 0.370, 0.378, 0.382, 0.375, 0.390, 0.395, 0.388, 0.402, 0.398, 0.408, 0.412],
    marketCap: 1_480_000_000,
    watchlisted: true,
  },
  {
    symbol: "RAY",
    name: "Raydium",
    price: 5.82,
    change24h: 4.5,
    change7d: 9.8,
    sparkline: [5.10, 5.20, 5.30, 5.25, 5.40, 5.35, 5.50, 5.55, 5.60, 5.65, 5.75, 5.82],
    marketCap: 1_620_000_000,
    watchlisted: false,
  },
  {
    symbol: "ORCA",
    name: "Orca",
    price: 4.18,
    change24h: -2.3,
    change7d: -5.1,
    sparkline: [4.45, 4.40, 4.38, 4.35, 4.30, 4.28, 4.25, 4.22, 4.20, 4.18, 4.19, 4.18],
    marketCap: 280_000_000,
    watchlisted: false,
  },
  {
    symbol: "MNDE",
    name: "Marinade",
    price: 0.187,
    change24h: 12.4,
    change7d: 28.7,
    sparkline: [0.140, 0.145, 0.148, 0.155, 0.160, 0.158, 0.165, 0.170, 0.175, 0.180, 0.184, 0.187],
    marketCap: 156_000_000,
    watchlisted: false,
  },
  {
    symbol: "DRIFT",
    name: "Drift Protocol",
    price: 1.92,
    change24h: -6.1,
    change7d: -12.3,
    sparkline: [2.20, 2.18, 2.15, 2.10, 2.08, 2.05, 2.00, 1.98, 1.95, 1.94, 1.93, 1.92],
    marketCap: 520_000_000,
    watchlisted: false,
  },
  {
    symbol: "TENSOR",
    name: "Tensor",
    price: 0.742,
    change24h: 9.8,
    change7d: 16.2,
    sparkline: [0.620, 0.640, 0.650, 0.660, 0.670, 0.680, 0.690, 0.700, 0.710, 0.720, 0.735, 0.742],
    marketCap: 340_000_000,
    watchlisted: false,
  },
];

// ── Trading Rooms (5) ────────────────────────────────────────────────

export const rooms: Room[] = [
  {
    id: "the-senate",
    name: "The Senate",
    description: "General alpha and market discussion",
    icon: Landmark,
    memberCount: 2341,
    onlineCount: 847,
    lastMessage: "Anyone watching the $JUP breakout? Volume is insane rn",
    lastMessageTime: "2m ago",
    unreadCount: 12,
  },
  {
    id: "sniper-den",
    name: "Sniper Den",
    description: "Early token calls and low-cap gems",
    icon: Crosshair,
    memberCount: 1205,
    onlineCount: 423,
    lastMessage: "New pool just deployed, checking contract now...",
    lastMessageTime: "5m ago",
    unreadCount: 7,
  },
  {
    id: "macro-room",
    name: "Macro Room",
    description: "Macro analysis and market structure",
    icon: TrendingUp,
    memberCount: 892,
    onlineCount: 156,
    lastMessage: "Fed minutes dropping tomorrow, positioning accordingly",
    lastMessageTime: "18m ago",
    unreadCount: 3,
  },
  {
    id: "dev-alpha",
    name: "Dev Alpha",
    description: "Developer insights and protocol updates",
    icon: Code,
    memberCount: 634,
    onlineCount: 89,
    lastMessage: "New Firedancer update just shipped, TPS looking good",
    lastMessageTime: "42m ago",
    unreadCount: 0,
  },
  {
    id: "degen-pit",
    name: "Degen Pit",
    description: "High risk plays and memecoins",
    icon: Flame,
    memberCount: 3102,
    onlineCount: 1247,
    lastMessage: "LFG $BONK to the moon. Position sized accordingly",
    lastMessageTime: "1m ago",
    unreadCount: 24,
  },
];

// ── Chat Messages (10-12 per room, ~55 total) ────────────────────────

function msg(
  id: string,
  roomId: string,
  username: string,
  badge: UserBadge | undefined,
  text: string,
  tokenMentions: string[],
  minutesAgo: number,
): ChatMessage {
  const ts = new Date(Date.now() - minutesAgo * 60_000).toISOString();
  return {
    id,
    roomId,
    username,
    avatarColor: avatarColor(username),
    badge,
    text,
    tokenMentions,
    timestamp: ts,
  };
}

const topTrader = { type: "top-trader" as const, label: "Top Trader" };
const seekerVerified = { type: "seeker-verified" as const, label: "Seeker Verified" };
const whale = { type: "whale" as const, label: "Whale" };
const mod = { type: "mod" as const, label: "Mod" };

// ── The Senate Messages ──────────────────────────────────────────────

const senateMessages: ChatMessage[] = [
  msg("s1", "the-senate", "solMaxi", seekerVerified, "GM Senate. $SOL reclaimed 175, this is the breakout we were waiting for", ["SOL"], 48),
  msg("s2", "the-senate", "dexHunter", topTrader, "Volume on $JUP is 3x the 7d average. Something is brewing with the Jupuary airdrop speculation", ["JUP"], 42),
  msg("s3", "the-senate", "whaleWatcher", whale, "Just moved 50K $SOL to a Jupiter limit order. Not hiding it, conviction play", ["SOL"], 38),
  msg("s4", "the-senate", "onchainNerd", undefined, "Can confirm large wallet accumulation on $RENDER. 4 wallets buying 100K+ in last hour", ["RENDER"], 31),
  msg("s5", "the-senate", "alphaLeaks", seekerVerified, "Macro looks clean. DXY rolling over, risk assets should benefit this week", [], 24),
  msg("s6", "the-senate", "tradingView_pro", topTrader, "$WIF breaking down from the ascending wedge. I trimmed 30% of my position here", ["WIF"], 18),
  msg("s7", "the-senate", "solanaFM", mod, "Reminder: always verify contract addresses before aping. We had 3 fake token reports today", [], 14),
  msg("s8", "the-senate", "moonMaker", undefined, "Staking yield on $JTO looking juicy at 7.2%. Parking some profits there", ["JTO"], 9),
  msg("s9", "the-senate", "dexHunter", topTrader, "The $JUP move has legs. Watch the 1.50 level - if it flips, we see 2.00 next", ["JUP"], 5),
  msg("s10", "the-senate", "cryptoSage", seekerVerified, "Anyone watching the $JUP breakout? Volume is insane rn. On-chain data confirms retail inflow", ["JUP"], 2),
  msg("s11", "the-senate", "whaleWatcher", whale, "Network activity spiking. 3800+ TPS sustained. Solana is cooking", [], 1),
];

// ── Sniper Den Messages ──────────────────────────────────────────────

const sniperMessages: ChatMessage[] = [
  msg("sn1", "sniper-den", "tokenSniper", topTrader, "New pool on Raydium just launched. LP locked 12 months, contract clean. Watching closely", [], 55),
  msg("sn2", "sniper-den", "alphaScanner", seekerVerified, "Caught $BONK at 0.000018 last week. Still holding, target is 0.00005", ["BONK"], 47),
  msg("sn3", "sniper-den", "earlyApe", undefined, "Contract: checked. Socials: active. LP: locked. Dev wallet: <2%. This one passes my checklist", [], 40),
  msg("sn4", "sniper-den", "rubyDev", undefined, "Just ran the contract through my scanner. No mint authority, no freeze. Looking clean", [], 34),
  msg("sn5", "sniper-den", "sniperElite", topTrader, "Entry at 80K mcap, already 400K. Taking profits at 1M then letting the rest ride", [], 28),
  msg("sn6", "sniper-den", "tokenSniper", topTrader, "Pro tip: always check if devs are in the Telegram. Ghost teams = ghost tokens", [], 22),
  msg("sn7", "sniper-den", "scannerBot", seekerVerified, "New $PYTH accumulation pattern detected. Smart money wallets buying heavily", ["PYTH"], 16),
  msg("sn8", "sniper-den", "dgenKing", undefined, "Missed the first 5x on this but the chart looks like it wants another leg up", [], 11),
  msg("sn9", "sniper-den", "alphaScanner", seekerVerified, "Birdeye showing unusual volume spike on a sub-1M cap token. Digging in now", [], 7),
  msg("sn10", "sniper-den", "earlyApe", undefined, "New pool just deployed, checking contract now. Will update in 5", [], 5),
];

// ── Macro Room Messages ──────────────────────────────────────────────

const macroMessages: ChatMessage[] = [
  msg("m1", "macro-room", "macroChad", topTrader, "CPI came in below expectations. This is bullish for risk assets across the board", [], 95),
  msg("m2", "macro-room", "yieldFarmer", seekerVerified, "Treasury yields dropping, money flowing into crypto. $SOL is the highest beta play here", ["SOL"], 82),
  msg("m3", "macro-room", "chartMaster", undefined, "DXY weekly chart forming a head and shoulders. If this breaks down, crypto goes parabolic", [], 68),
  msg("m4", "macro-room", "fedWatcher", whale, "Fed minutes dropping tomorrow. Positioning for a dovish surprise with 60% of my book in $SOL", ["SOL"], 55),
  msg("m5", "macro-room", "macroChad", topTrader, "BlackRock ETF inflows hit record yesterday. Institutional adoption is not slowing down", [], 42),
  msg("m6", "macro-room", "globalMacro", undefined, "Japan BOJ keeping rates. Carry trade back on. This supports risk-on sentiment globally", [], 35),
  msg("m7", "macro-room", "yieldFarmer", seekerVerified, "Stablecoin supply on Solana hit ATH. $4.2B in USDC alone. Capital is here and waiting", [], 28),
  msg("m8", "macro-room", "structureGuy", undefined, "Weekly $SOL structure is the cleanest in the top 20. Higher lows since October", ["SOL"], 22),
  msg("m9", "macro-room", "fedWatcher", whale, "My model says 85% chance of rate cut in March. Loading up on everything", [], 18),
  msg("m10", "macro-room", "chartMaster", undefined, "Fed minutes dropping tomorrow, positioning accordingly. Hedged with some puts just in case", [], 18),
  msg("m11", "macro-room", "macroChad", topTrader, "Volume profile shows massive support at $SOL 165. That is your dip buy zone", ["SOL"], 8),
];

// ── Dev Alpha Messages ───────────────────────────────────────────────

const devAlphaMessages: ChatMessage[] = [
  msg("d1", "dev-alpha", "rustDev", seekerVerified, "Firedancer testnet hit 600K TPS in latest benchmark. Mainnet upgrade expected Q2", [], 180),
  msg("d2", "dev-alpha", "solanaCore", mod, "New Agave client release v1.18.4 is live. Improved block packing efficiency by 15%", [], 150),
  msg("d3", "dev-alpha", "hackathonKing", undefined, "Just shipped a new DeFi primitive on Solana. Composable leverage vaults. Open source next week", [], 120),
  msg("d4", "dev-alpha", "auditorAnon", topTrader, "Reviewed the latest $JUP governance proposal. Smart contract changes look solid, no red flags", ["JUP"], 95),
  msg("d5", "dev-alpha", "protocolDev", seekerVerified, "$PYTH V2 oracle feeds now cover 400+ price pairs. Best infra on any chain", ["PYTH"], 75),
  msg("d6", "dev-alpha", "rustDev", seekerVerified, "Token extensions are underrated. Confidential transfers open up massive institutional use cases", [], 60),
  msg("d7", "dev-alpha", "solanaCore", mod, "Tip: if you are building on Solana, use Anchor 0.30. The new IDL format is much cleaner", [], 52),
  msg("d8", "dev-alpha", "buildoorMax", undefined, "Shipped my Seeker companion app. On-device signing with mobile wallet adapter works great", [], 45),
  msg("d9", "dev-alpha", "hackathonKing", undefined, "State compression for NFTs dropped storage costs 99%. Solana devs are on another level", [], 42),
  msg("d10", "dev-alpha", "auditorAnon", topTrader, "New Firedancer update just shipped, TPS looking good. Blocks are 50% fuller on average", [], 42),
];

// ── Degen Pit Messages ───────────────────────────────────────────────

const degenMessages: ChatMessage[] = [
  msg("dp1", "degen-pit", "dgenKing", undefined, "LFG! $BONK up 20% in an hour. I told you degenerates to ape in this morning", ["BONK"], 35),
  msg("dp2", "degen-pit", "apeFirst", undefined, "Just aped 10 $SOL into a token with a dog wearing a hat. This is the way", ["SOL"], 30),
  msg("dp3", "degen-pit", "moonMission", seekerVerified, "$WIF pullback is your entry. I am loading up heavy here. Trust the chart", ["WIF"], 25),
  msg("dp4", "degen-pit", "rugSurvivor", undefined, "After getting rugged 5 times I finally hit a 100x. Net positive gang", [], 22),
  msg("dp5", "degen-pit", "memeLord", topTrader, "The meta is shifting to AI agent tokens. Watch for the next wave on Solana specifically", [], 18),
  msg("dp6", "degen-pit", "apeFirst", undefined, "Sold my $RENDER to buy more memecoins. No ragrets. The degen pit does not sleep", ["RENDER"], 15),
  msg("dp7", "degen-pit", "copiumMax", undefined, "Down 40% on this play but diamond hands activate. We ride this to zero or Valhalla", [], 12),
  msg("dp8", "degen-pit", "moonMission", seekerVerified, "Pro tip: set your stop losses. I know this is the degen pit but capital preservation matters", [], 8),
  msg("dp9", "degen-pit", "dgenKing", undefined, "New meta just dropped. Cat tokens are the move. Already in 3 of them", [], 5),
  msg("dp10", "degen-pit", "memeLord", topTrader, "LFG $BONK to the moon. Position sized accordingly. Only risking what I can afford to lose", ["BONK"], 3),
  msg("dp11", "degen-pit", "whaleAlert", whale, "Just spotted a 500K $BONK buy. Whale wallet that was early on $WIF. Following", ["BONK", "WIF"], 1),
];

export const messagesByRoom: Record<string, ChatMessage[]> = {
  "the-senate": senateMessages,
  "sniper-den": sniperMessages,
  "macro-room": macroMessages,
  "dev-alpha": devAlphaMessages,
  "degen-pit": degenMessages,
};

// ── Portfolio Holdings (5 tokens, ~47K USD) ──────────────────────────

export const holdings: Holding[] = [
  {
    symbol: "SOL",
    name: "Solana",
    amount: 142.5,
    valueUsd: 25_424.85,
    change24h: 2.8,
  },
  {
    symbol: "JUP",
    name: "Jupiter",
    amount: 8450,
    valueUsd: 12_421.50,
    change24h: 8.3,
  },
  {
    symbol: "BONK",
    name: "Bonk",
    amount: 120_000_000,
    valueUsd: 3_889.20,
    change24h: 15.7,
  },
  {
    symbol: "WIF",
    name: "dogwifhat",
    amount: 1250,
    valueUsd: 3_550.00,
    change24h: -4.2,
  },
  {
    symbol: "RENDER",
    name: "Render",
    amount: 194,
    valueUsd: 1_984.62,
    change24h: 3.1,
  },
];

export const portfolio: Portfolio = {
  totalValue: 47_283.50,
  change24h: 12.4,
  rank: 847,
  activeRooms: 5,
  holdings,
};

// ── Network Stats (realistic Solana mainnet) ─────────────────────────

export const networkStats: NetworkStats = {
  tps: 3847,
  activeWallets: "1.2M",
  dexVolume: "$847M",
  newTokens: 1243,
  solPrice: 178.42,
  solChange24h: 2.8,
  solPriceHistory: [
    168.20, 170.45, 169.80, 172.10, 171.50, 173.80, 174.20, 173.90,
    175.60, 174.80, 176.30, 177.10, 176.50, 177.80, 178.20, 177.60,
    178.00, 177.40, 178.10, 178.50, 177.90, 178.30, 178.00, 178.42,
  ],
  avgPriorityFee: 0.000142,
  networkHealth: "green",
};

// ── DEX Pairs (8) ────────────────────────────────────────────────────

export const dexPairs: DexPair[] = [
  { pair: "SOL/USDC", volume: "$124.5M", price: 178.42, change24h: 2.8 },
  { pair: "JUP/USDC", volume: "$45.2M", price: 1.47, change24h: 8.3 },
  { pair: "BONK/SOL", volume: "$38.7M", price: 0.00003241, change24h: 15.7 },
  { pair: "WIF/USDC", volume: "$31.4M", price: 2.84, change24h: -4.2 },
  { pair: "RAY/USDC", volume: "$22.8M", price: 5.82, change24h: 4.5 },
  { pair: "RENDER/USDC", volume: "$18.3M", price: 10.23, change24h: 3.1 },
  { pair: "ORCA/SOL", volume: "$14.6M", price: 4.18, change24h: -2.3 },
  { pair: "PYTH/USDC", volume: "$12.1M", price: 0.412, change24h: 6.9 },
];

// ── User Profile ─────────────────────────────────────────────────────

export const userProfile: UserProfile = {
  walletAddress: "7xKXjjV4ehFRLgfAasPa3dMKSQqq3FmEBKaGauN3q3Fm",
  walletShort: "7xKX...q3Fm",
  solBalance: 142.5,
  solBalanceUsd: 25_424.85,
  memberSince: "2024-11-15",
  messagesSent: 1247,
  roomsJoined: 5,
  tradingScore: 847,
};

// ── SOL Inflow Data (for Network Pulse bar chart) ────────────────────

export const solInflowBars: { value: number; positive: boolean }[] = [
  { value: 12, positive: true },
  { value: 8, positive: true },
  { value: 15, positive: true },
  { value: 5, positive: false },
  { value: 18, positive: true },
  { value: 3, positive: false },
  { value: 22, positive: true },
  { value: 10, positive: true },
  { value: 7, positive: false },
  { value: 14, positive: true },
  { value: 20, positive: true },
  { value: 11, positive: true },
  { value: 4, positive: false },
  { value: 16, positive: true },
  { value: 25, positive: true },
  { value: 9, positive: true },
];
