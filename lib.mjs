// Format a byte count as a short human-readable string.
// BUG: it always reports "KB", even for values large enough to be "MB".
// The fix: return "MB" for values >= 1 MiB, "KB" otherwise.
export function humanBytes(n) {
  return Math.round(n / 1024) + " KB";
}
