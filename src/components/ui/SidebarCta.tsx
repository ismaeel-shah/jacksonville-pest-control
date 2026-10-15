import { CallButton } from "./CallButton";
import { QuoteButton } from "./QuoteButton";

/** Navy call/quote card for sticky sidebars (blog posts, FAQ). `cta` is the analytics label for the quote button. */
export function SidebarCta({
  title,
  text = "Get a free inspection and an upfront quote from a local technician.",
  cta,
}: {
  title: string;
  text?: string;
  cta: string;
}) {
  return (
    <div className="rounded-2xl bg-secondary p-6 text-white">
      <p className="text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm text-white/80">{text}</p>
      <div className="mt-5 flex flex-col gap-3">
        <CallButton label="Call Now" showNumber={false} className="w-full" />
        <QuoteButton variant="outline-light" cta={cta} className="w-full">
          Free Inspection
        </QuoteButton>
      </div>
    </div>
  );
}
