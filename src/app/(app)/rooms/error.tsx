"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function RoomsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      <ErrorState
        title="Rooms unavailable"
        message="Could not load trading rooms. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
