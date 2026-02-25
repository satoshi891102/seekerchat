import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg-primary px-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-surface">
        <Ghost size={28} className="text-text-tertiary" />
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <h2 className="text-base font-semibold text-text-primary">
          Page not found
        </h2>
        <p className="max-w-xs text-center text-sm text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="mt-2 flex items-center gap-2 rounded-xl bg-accent-green px-5 py-2.5 text-sm font-semibold text-text-inverse transition-opacity active:opacity-80"
      >
        Go home
      </Link>
    </div>
  );
}
