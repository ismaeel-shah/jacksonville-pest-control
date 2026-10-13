import { getPlaceholderPaths } from "@/lib/config";

/** Development-only banner listing config values that are still placeholders. */
export function ConfigWarningBanner() {
  if (process.env.NODE_ENV !== "development") return null;

  const paths = getPlaceholderPaths();
  if (paths.length === 0) return null;

  return (
    <div role="note" className="bg-yellow-100 px-4 py-2 text-sm text-yellow-950 border-b border-yellow-300">
      <strong>Dev only:</strong> {paths.length} value{paths.length === 1 ? "" : "s"} in{" "}
      <code>src/config/site.ts</code> still need real data: <code>{paths.join(", ")}</code>
    </div>
  );
}
