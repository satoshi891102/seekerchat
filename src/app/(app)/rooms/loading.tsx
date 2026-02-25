export default function RoomsLoading() {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header skeleton */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <div className="h-5 w-5 animate-shimmer rounded" />
        <div className="h-5 w-32 animate-shimmer rounded-md" />
      </div>

      {/* Room cards skeleton */}
      <div className="flex flex-col gap-2.5 px-5 pb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 rounded-2xl bg-bg-surface p-4"
          >
            <div className="h-11 w-11 shrink-0 animate-shimmer rounded-xl" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-4 w-28 animate-shimmer rounded-md" />
              <div className="h-3 w-48 animate-shimmer rounded-md" />
              <div className="h-3 w-full animate-shimmer rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
