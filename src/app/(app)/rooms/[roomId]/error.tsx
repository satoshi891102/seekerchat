"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function ChatRoomError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg-primary">
      <ErrorState
        title="Chat unavailable"
        message="Could not load this room. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
