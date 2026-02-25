export default function ProfileLoading() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-8 pt-[calc(var(--safe-top)+1.5rem)]">
      {/* Header skeleton */}
      <div className="h-6 w-16 animate-shimmer rounded-md" />

      {/* Avatar + Identity skeleton */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-16 w-16 animate-shimmer rounded-full" />
        <div className="h-4 w-28 animate-shimmer rounded-md" />
        <div className="h-6 w-32 animate-shimmer rounded-full" />
      </div>

      {/* SOL Balance skeleton */}
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-bg-surface p-5">
        <div className="h-8 w-24 animate-shimmer rounded-md" />
        <div className="h-4 w-20 animate-shimmer rounded-md" />
      </div>

      {/* Holdings skeleton */}
      <div className="flex flex-col gap-3">
        <div className="h-5 w-20 animate-shimmer rounded-md" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-bg-surface p-3"
          >
            <div className="h-8 w-8 shrink-0 animate-shimmer rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="h-4 w-16 animate-shimmer rounded-md" />
              <div className="h-3 w-24 animate-shimmer rounded-md" />
            </div>
            <div className="h-4 w-16 animate-shimmer rounded-md" />
          </div>
        ))}
      </div>

      {/* Stats skeleton */}
      <div className="h-24 animate-shimmer rounded-2xl" />

      {/* Disconnect skeleton */}
      <div className="h-12 animate-shimmer rounded-2xl" />
    </div>
  );
}
