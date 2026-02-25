export default function RadarLoading() {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header skeleton */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <div className="h-5 w-5 animate-shimmer rounded" />
        <div className="h-5 w-16 animate-shimmer rounded-md" />
      </div>

      {/* Search bar skeleton */}
      <div className="px-5 pb-3">
        <div className="h-10 animate-shimmer rounded-xl" />
      </div>

      {/* Sort controls skeleton */}
      <div className="flex gap-2 px-5 pb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 animate-shimmer rounded-full"
          />
        ))}
      </div>

      {/* Token rows skeleton */}
      <div className="flex flex-col gap-2 px-5 pb-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-bg-surface p-3"
          >
            <div className="h-8 w-8 shrink-0 animate-shimmer rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="h-4 w-16 animate-shimmer rounded-md" />
              <div className="h-3 w-24 animate-shimmer rounded-md" />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="h-4 w-16 animate-shimmer rounded-md" />
              <div className="h-3 w-12 animate-shimmer rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
