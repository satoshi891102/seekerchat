"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function ProfileError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col gap-6 bg-bg-primary px-4 pt-[calc(var(--safe-top)+1.5rem)]">
      <ErrorState
        title="Profile unavailable"
        message="Could not load your profile. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
