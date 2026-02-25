"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function RadarError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      <ErrorState
        title="Radar unavailable"
        message="Could not load token data. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
