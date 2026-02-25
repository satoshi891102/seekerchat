export default function PulseLoading() {
  return (
    <div className="min-h-dvh bg-bg-primary pt-[calc(var(--safe-top)+1rem)]">
      {/* Header skeleton */}
      <div className="flex items-center gap-3 px-5 pb-4">
        <div className="h-5 w-5 animate-shimmer rounded" />
        <div className="h-5 w-16 animate-shimmer rounded-md" />
      </div>

      {/* Metric cards 2x2 grid skeleton */}
      <div className="grid grid-cols-2 gap-3 px-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-2xl bg-bg-surface p-4"
          >
            <div className="h-3 w-20 animate-shimmer rounded-md" />
            <div className="h-7 w-16 animate-shimmer rounded-md" />
            <div className="h-3 w-12 animate-shimmer rounded-md" />
          </div>
        ))}
      </div>

      {/* SOL Price chart skeleton */}
      <div className="mt-4 px-5">
        <div className="h-48 animate-shimmer rounded-2xl" />
      </div>

      {/* Network health skeleton */}
      <div className="mt-4 px-5">
        <div className="h-16 animate-shimmer rounded-2xl" />
      </div>

      {/* DEX pairs skeleton */}
      <div className="mt-4 px-5">
        <div className="h-64 animate-shimmer rounded-2xl" />
      </div>

      {/* Fee tracker skeleton */}
      <div className="mt-4 px-5 pb-6">
        <div className="h-24 animate-shimmer rounded-2xl" />
      </div>
    </div>
  );
}
