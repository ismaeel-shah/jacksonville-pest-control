"use server";

import { sendLeadEmail } from "@/lib/lead-email";
import { getPestOptions } from "@/lib/pest-options";
import {
  createQuoteSchema,
  firstErrors,
  HONEYPOT_FIELD,
  type QuoteField,
  type QuoteFieldErrors,
  readQuoteForm,
} from "@/lib/quote-form";

export type QuoteFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: QuoteFieldErrors; values: Record<QuoteField, string> }
  | { status: "failed"; values: Record<QuoteField, string> };

/** Quote form Server Action. Treats every request as untrusted input. */
export async function submitQuote(_previous: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  // Honeypot filled: almost certainly a bot. Pretend it worked and send nothing.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") return { status: "success" };

  const values = readQuoteForm(formData);
  const pestOptions = getPestOptions();
  const result = createQuoteSchema(pestOptions.map((option) => option.value)).safeParse(values);
  if (!result.success) return { status: "invalid", errors: firstErrors(result.error), values };

  const lead = result.data;
  const pestLabel = pestOptions.find((option) => option.value === lead.pestProblem)?.label ?? lead.pestProblem;
  const sent = await sendLeadEmail(lead, pestLabel);

  if (!sent.ok) {
    if (sent.reason === "not-configured" && process.env.NODE_ENV === "development") {
      // Lets the whole flow be tested locally before Resend is set up.
      console.info("[quote] Email env vars not set. Lead (dev only, not emailed):", { ...lead, pestLabel });
      return { status: "success" };
    }
    if (sent.reason === "not-configured") {
      console.error("[quote] RESEND_API_KEY, LEAD_NOTIFY_EMAIL, or LEAD_FROM_EMAIL is missing. Lead was not delivered.");
    }
    return { status: "failed", values };
  }

  return { status: "success" };
}

