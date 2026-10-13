import "server-only";
import { formatUsPhone, type QuoteData } from "./quote-form";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

type LeadEmailResult = { ok: true } | { ok: false; reason: "not-configured" | "send-failed" };

/** Sends the new-lead notification through Resend, using the env vars in .env.example. */
export async function sendLeadEmail(lead: QuoteData, pestLabel: string): Promise<LeadEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !to || !from) return { ok: false, reason: "not-configured" };

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", formatUsPhone(lead.phone)],
    ["Email", lead.email || "Not given"],
    ["ZIP code", lead.zip],
    ["Property type", lead.propertyType === "commercial" ? "Commercial" : "Residential"],
    ...(lead.businessName ? ([["Business name", lead.businessName]] as [string, string][]) : []),
    ["Pest problem", pestLabel],
    ["Message", lead.message || "None"],
    ["Submitted from", lead.pageUrl || "Unknown page"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<h2>New free inspection request</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        subject: `New quote request: ${pestLabel} (${lead.zip})`,
        text,
        html,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });
    if (!response.ok) {
      console.error("[quote] Resend rejected the email:", response.status, await response.text());
      return { ok: false, reason: "send-failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[quote] Could not reach Resend:", error);
    return { ok: false, reason: "send-failed" };
  }
}
