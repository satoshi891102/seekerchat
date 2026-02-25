export default function FloorLoading() {
  return (
    <div className="min-h-dvh pt-[calc(var(--safe-top)+1rem)]">
      {/* Greeting skeleton */}
      <div className="px-5 pb-4">
        <div className="h-5 w-32 animate-shimmer rounded-md" />
      </div>

      {/* Portfolio value skeleton */}
      <div className="flex flex-col items-center gap-2 px-5 pb-6">
        <div className="h-10 w-48 animate-shimmer rounded-lg" />
        <div className="h-4 w-24 animate-shimmer rounded-md" />
      </div>

      {/* Stat pills skeleton */}
      <div className="flex gap-3 overflow-hidden px-5 pb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-16 w-28 shrink-0 animate-shimmer rounded-xl"
          />
        ))}
      </div>

      {/* Network pulse card skeleton */}
      <div className="mx-5 mb-4 h-24 animate-shimmer rounded-2xl" />

      {/* Trending tokens skeleton */}
      <div className="px-5 pb-4">
        <div className="mb-3 h-5 w-28 animate-shimmer rounded-md" />
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 w-36 shrink-0 animate-shimmer rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* Active rooms skeleton */}
      <div className="px-5 pb-6">
        <div className="mb-3 h-5 w-32 animate-shimmer rounded-md" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="h-20 animate-shimmer rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
