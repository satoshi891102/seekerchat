"use client";

interface TokenPillProps {
  symbol: string;
}

export function TokenPill({ symbol }: TokenPillProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-subtle px-1.5 py-0.5 text-[11px] font-semibold leading-none text-accent-green">
      ${symbol}
    </span>
  );
}
