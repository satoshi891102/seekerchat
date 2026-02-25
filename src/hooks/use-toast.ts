import { useAppStore } from "@/lib/store";

/** Convenience hook for the toast system */
export function useToast() {
  const showToast = useAppStore((s) => s.showToast);
  const clearToast = useAppStore((s) => s.clearToast);

  return {
    toast: showToast,
    dismiss: clearToast,
    success: (message: string) => showToast(message, "success"),
    error: (message: string) => showToast(message, "error"),
    info: (message: string) => showToast(message, "info"),
  };
}
