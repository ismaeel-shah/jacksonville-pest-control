import type { DayHours } from "@/config/site";

const DAY_NAMES: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};
const DAY_ORDER = Object.keys(DAY_NAMES);

/** "Mon-Fri" -> ["Monday", ..., "Friday"], "Sat" -> ["Saturday"]. */
export function expandDays(days: string): string[] {
  const [start, end] = days.split("-").map((d) => d.trim());
  const from = DAY_ORDER.indexOf(start);
  const to = end ? DAY_ORDER.indexOf(end) : from;
  if (from === -1 || to === -1) return [];
  return DAY_ORDER.slice(from, to + 1).map((d) => DAY_NAMES[d]);
}

export const isClosed = (hours: DayHours) => hours.open === "closed" || hours.close === "closed";

/** "07:00" -> "7:00 AM", "19:30" -> "7:30 PM". */
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** "7:00 AM – 7:00 PM" or "Closed". */
export function formatHoursRange(hours: DayHours): string {
  return isClosed(hours) ? "Closed" : `${formatTime(hours.open)} – ${formatTime(hours.close)}`;
}

/** "2026-03-04" -> "March 4, 2026". Parsed as UTC so the date never shifts by timezone. */
export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
