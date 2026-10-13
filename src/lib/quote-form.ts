/**
 * Quote form schema shared by the browser (instant feedback) and the Server
 * Action (the real check). Keep the form short: no extra required fields.
 */
import { z } from "zod";

export const NOT_SURE = "not-sure";
/** Hidden honeypot input. Real visitors never see or fill it; bots usually do. */
export const HONEYPOT_FIELD = "company_website";

export type PestOption = { value: string; label: string };

const usPhoneDigits = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
};

export function createQuoteSchema(pestValues: string[]) {
  return z
    .object({
      name: z.string().trim().min(2, "Please enter your full name.").max(100, "Please shorten your name."),
      phone: z
        .string()
        .trim()
        .refine((value) => /^[2-9]\d{9}$/.test(usPhoneDigits(value)), "Please enter a valid US phone number, like (904) 555-0123."),
      email: z
        .string()
        .trim()
        .max(200)
        .refine((value) => value === "" || z.email().safeParse(value).success, "Please enter a valid email address, or leave it blank."),
      zip: z.string().trim().regex(/^\d{5}$/, "Please enter a 5-digit ZIP code."),
      propertyType: z.enum(["residential", "commercial"], "Please choose Residential or Commercial."),
      businessName: z.string().trim().max(120, "Please shorten the business name."),
      pestProblem: z
        .string()
        .refine((value) => pestValues.includes(value), 'Please choose a pest problem, or "Not sure".'),
      message: z.string().trim().max(1000, "Please keep your message under 1,000 characters."),
      pageUrl: z.string().trim().max(500),
    })
    .transform((data) => ({
      ...data,
      phone: usPhoneDigits(data.phone),
      businessName: data.propertyType === "commercial" ? data.businessName : "",
    }));
}

export type QuoteField = keyof z.input<ReturnType<typeof createQuoteSchema>>;
export type QuoteData = z.output<ReturnType<typeof createQuoteSchema>>;
export type QuoteFieldErrors = Partial<Record<QuoteField, string>>;

const FIELDS: QuoteField[] = [
  "name",
  "phone",
  "email",
  "zip",
  "propertyType",
  "businessName",
  "pestProblem",
  "message",
  "pageUrl",
];

/** Reads only the known fields from FormData, as strings. */
export function readQuoteForm(formData: FormData): Record<QuoteField, string> {
  return Object.fromEntries(
    FIELDS.map((field) => {
      const value = formData.get(field);
      return [field, typeof value === "string" ? value : ""];
    }),
  ) as Record<QuoteField, string>;
}

/** First error message per field. */
export function firstErrors(error: z.ZodError): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as QuoteField | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}

/** "9045550123" -> "(904) 555-0123". */
export const formatUsPhone = (digits: string) => `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
