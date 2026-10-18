// Format a byte count as a short human-readable string.
// Use "MB" for values >= 1 MiB, "KB" otherwise.
export function humanBytes(n) {
  if (n >= 1048576) {
    return Math.round(n / 1048576) + " MB";
  }
  return Math.round(n / 1024) + " KB";
}
