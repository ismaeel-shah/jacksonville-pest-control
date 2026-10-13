"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  type FormEvent,
  type ReactNode,
  useActionState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { submitQuote, type QuoteFormState } from "@/app/actions/quote";
import { QUOTE_FORM_ID } from "@/components/ui/QuoteButton";
import { trackEvent } from "@/lib/analytics";
import {
  createQuoteSchema,
  firstErrors,
  HONEYPOT_FIELD,
  type PestOption,
  type QuoteField,
  type QuoteFieldErrors,
  readQuoteForm,
} from "@/lib/quote-form";

const INITIAL_STATE: QuoteFormState = { status: "idle" };
const FIELD_ORDER: QuoteField[] = ["name", "phone", "email", "zip", "propertyType", "businessName", "pestProblem", "message"];

type Props = {
  pestOptions: PestOption[];
  phoneDisplay: string | null;
  title: string;
  intro?: string;
  /** Pre-selects a property type, e.g. commercial on the Commercial page. */
  defaultPropertyType?: "residential" | "commercial";
};

/**
 * Remounts the form with fresh state after a successful submit once the page is
 * hidden by client navigation, so going Back never shows a stale filled-in form.
 */
export function QuoteFormClient(props: Props) {
  const [formKey, setFormKey] = useState(0);
  const reset = useCallback(() => setFormKey((key) => key + 1), []);
  return <QuoteFormInner key={formKey} {...props} onReset={reset} />;
}

function QuoteFormInner({ pestOptions, phoneDisplay, title, intro, defaultPropertyType, onReset }: Props & { onReset: () => void }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(submitQuote, INITIAL_STATE);
  const [clientErrors, setClientErrors] = useState<QuoteFieldErrors | null>(null);
  const [propertyType, setPropertyType] = useState(state.status === "invalid" ? state.values.propertyType : (defaultPropertyType ?? ""));
  const formRef = useRef<HTMLFormElement>(null);
  const shouldReset = useRef(false);

  const values = state.status === "invalid" || state.status === "failed" ? state.values : null;
  const errors: QuoteFieldErrors = clientErrors ?? (state.status === "invalid" ? state.errors : {});

  useEffect(() => {
    if (state.status !== "success") return;
    shouldReset.current = true;
    const pageUrl = formRef.current?.querySelector<HTMLInputElement>('input[name="pageUrl"]')?.value ?? "";
    trackEvent("form_submit", { page_path: pageUrl ? new URL(pageUrl).pathname : window.location.pathname });
    router.push("/thank-you");
  }, [state, router]);

  useEffect(() => {
    if (state.status === "invalid") focusFirstError(formRef.current, state.errors);
  }, [state]);

  useLayoutEffect(() => {
    return () => {
      if (shouldReset.current) onReset();
    };
  }, [onReset]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    form.querySelector<HTMLInputElement>('input[name="pageUrl"]')!.value = window.location.href;

    // Instant feedback in the browser. The Server Action validates again.
    const result = createQuoteSchema(pestOptions.map((option) => option.value)).safeParse(readQuoteForm(new FormData(form)));
    if (!result.success) {
      event.preventDefault();
      const found = firstErrors(result.error);
      setClientErrors(found);
      focusFirstError(form, found);
      return;
    }
    setClientErrors(null);
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      ref={formRef}
      id={QUOTE_FORM_ID}
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${QUOTE_FORM_ID}-title`}
      className="scroll-mt-28"
    >
      <h2 id={`${QUOTE_FORM_ID}-title`} className="text-2xl font-extrabold text-secondary">
        {title}
      </h2>
      {intro && <p className="mt-2 text-base text-ink-muted">{intro}</p>}
      <p className="mt-2 text-sm text-ink-muted">
        Fields marked <span aria-hidden className="font-bold text-red-700">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div aria-live="polite" role="status" className="mt-4">
        {errorCount > 0 && (
          <p className="rounded-lg bg-red-50 p-3 text-base font-semibold text-red-800">
            Please fix {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`} below.
          </p>
        )}
        {state.status === "failed" && (
          <p className="rounded-lg bg-red-50 p-3 text-base font-semibold text-red-800">
            Sorry, we couldn&apos;t send your request right now.
            {phoneDisplay ? ` Please call us at ${phoneDisplay} and we'll help you right away.` : " Please try again in a few minutes."}
          </p>
        )}
        {state.status === "success" && (
          <p className="rounded-lg bg-primary-soft p-3 text-base font-semibold text-primary-dark">
            Thank you! Your request was sent. We&apos;ll call you shortly.
          </p>
        )}
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required error={errors.name} className="sm:col-span-2">
          {(aria) => (
            <input {...aria} type="text" autoComplete="name" defaultValue={values?.name} className={inputClass(errors.name)} />
          )}
        </Field>
        <Field name="phone" label="Phone" required error={errors.phone}>
          {(aria) => (
            <input
              {...aria}
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="(904) 555-0123"
              defaultValue={values?.phone}
              className={inputClass(errors.phone)}
            />
          )}
        </Field>
        <Field name="zip" label="ZIP code" required error={errors.zip}>
          {(aria) => (
            <input
              {...aria}
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              defaultValue={values?.zip}
              className={inputClass(errors.zip)}
            />
          )}
        </Field>
        <Field name="email" label="Email" hint="Optional" error={errors.email} className="sm:col-span-2">
          {(aria) => (
            <input {...aria} type="email" autoComplete="email" defaultValue={values?.email} className={inputClass(errors.email)} />
          )}
        </Field>

        <fieldset
          className="sm:col-span-2"
          aria-invalid={errors.propertyType ? true : undefined}
          aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
        >
          <legend className="mb-2 font-semibold text-ink">
            Property type <RequiredMark />
          </legend>
          <div className="grid grid-cols-2 gap-3">
            {(["residential", "commercial"] as const).map((type) => (
              <label
                key={type}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border-2 border-line px-4 has-[:checked]:border-primary has-[:checked]:bg-primary-soft"
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  defaultChecked={(values ? values.propertyType : defaultPropertyType) === type}
                  onChange={() => setPropertyType(type)}
                  className="size-5 accent-primary"
                />
                <span className="font-semibold">{type === "residential" ? "Residential" : "Commercial"}</span>
              </label>
            ))}
          </div>
          <FieldError id="propertyType-error" message={errors.propertyType} />
        </fieldset>

        {propertyType === "commercial" && (
          <Field name="businessName" label="Business name" hint="Optional" error={errors.businessName} className="sm:col-span-2">
            {(aria) => (
              <input
                {...aria}
                type="text"
                autoComplete="organization"
                defaultValue={values?.businessName}
                className={inputClass(errors.businessName)}
              />
            )}
          </Field>
        )}

        <Field name="pestProblem" label="Pest problem" required error={errors.pestProblem} className="sm:col-span-2">
          {(aria) => (
            <select {...aria} defaultValue={values?.pestProblem ?? ""} className={inputClass(errors.pestProblem)}>
              <option value="" disabled>
                Choose one…
              </option>
              {pestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field name="message" label="Message" hint="Optional" error={errors.message} className="sm:col-span-2">
          {(aria) => (
            <textarea
              {...aria}
              rows={3}
              maxLength={1000}
              placeholder="Tell us what you're seeing and where."
              defaultValue={values?.message}
              className={inputClass(errors.message)}
            />
          )}
        </Field>
      </div>

      {/* Honeypot: hidden from people and screen readers, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Company website</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="pageUrl" defaultValue="" />

      <button
        type="submit"
        disabled={pending}
        data-cta="quote_form_submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-lg font-bold text-accent-foreground hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Get My Free Inspection"}
      </button>
      <p className="mt-3 text-sm text-ink-muted">
        We&apos;ll only use your details to contact you about this request. See our{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

// ---------------------------------------------------------------------------

type AriaProps = {
  id: string;
  name: string;
  required?: boolean;
  "aria-required"?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

function Field({
  name,
  label,
  required = false,
  hint,
  error,
  className = "",
  children,
}: {
  name: QuoteField;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: (aria: AriaProps) => ReactNode;
}) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block font-semibold text-ink">
        {label} {required && <RequiredMark />}
        {hint && <span className="ml-1 text-sm font-normal text-ink-muted">({hint})</span>}
      </label>
      {children({
        id: name,
        name,
        required: required || undefined,
        "aria-required": required || undefined,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-base font-semibold text-red-700">
      {message}
    </p>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden className="font-bold text-red-700">
      *
    </span>
  );
}

const inputClass = (error?: string) =>
  `block min-h-12 w-full rounded-lg border-2 bg-white px-4 py-2 text-lg text-ink placeholder:text-ink-muted/70 focus:border-primary ${
    error ? "border-red-700" : "border-line"
  }`;

function focusFirstError(form: HTMLFormElement | null, errors: QuoteFieldErrors) {
  const first = FIELD_ORDER.find((field) => errors[field]);
  if (!form || !first) return;
  form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
}
