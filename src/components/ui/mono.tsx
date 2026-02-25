import { cn } from "@/lib/utils";

interface MonoProps {
  children: React.ReactNode;
  className?: string;
}

/** Renders children in JetBrains Mono with tabular-nums for numeric display */
export function Mono({ children, className }: MonoProps) {
  return (
    <span className={cn("font-mono-numbers", className)}>
      {children}
    </span>
  );
}
