export default function ChatRoomLoading() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-primary">
      {/* Chat header skeleton */}
      <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
        <div className="h-8 w-8 animate-shimmer rounded-full" />
        <div className="flex flex-col gap-1.5">
          <div className="h-4 w-24 animate-shimmer rounded-md" />
          <div className="h-3 w-16 animate-shimmer rounded-md" />
        </div>
      </div>

      {/* Messages skeleton */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`flex gap-2.5 ${i % 3 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="h-8 w-8 shrink-0 animate-shimmer rounded-full" />
            <div className="flex max-w-[70%] flex-col gap-1">
              <div className="h-3 w-16 animate-shimmer rounded-md" />
              <div
                className="animate-shimmer rounded-2xl"
                style={{ height: 40 + (i % 3) * 20, width: 160 + (i % 4) * 40 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Input skeleton */}
      <div className="border-t border-border-subtle p-4">
        <div className="h-11 animate-shimmer rounded-2xl" />
      </div>
    </div>
  );
}
