import { CallButton } from "./CallButton";

/** Navy call card for sticky sidebars (blog posts, FAQ). */
export function SidebarCta({
  title,
  text = "Call to talk with a local pest control pro who serves your area.",
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="rounded-2xl bg-secondary p-6 text-white">
      <p className="text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm text-white/80">{text}</p>
      <div className="mt-5 flex flex-col gap-3">
        <CallButton label="Call Now" showNumber={false} className="w-full" />
      </div>
    </div>
  );
}
