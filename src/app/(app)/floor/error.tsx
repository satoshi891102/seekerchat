"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function FloorError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      <ErrorState
        title="Floor unavailable"
        message="Could not load the trading floor. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
