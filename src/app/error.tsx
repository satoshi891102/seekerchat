"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-bg-primary">
      <ErrorState
        title="Something went wrong"
        message="The app encountered an unexpected error. Please try again."
        onRetry={reset}
      />
    </div>
  );
}
