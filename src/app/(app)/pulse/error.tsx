"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function PulseError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      <ErrorState
        title="Pulse unavailable"
        message="Could not load network metrics. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
