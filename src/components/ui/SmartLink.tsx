import Link from "next/link";
import type { ReactNode } from "react";
import { isLinkable } from "@/lib/links";

/**
 * Renders a link only when the target is published. Links to unpublished or
 * missing pages fall back to plain text so the site never links to a 404.
 */
export function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (!isLinkable(href)) return <>{children}</>;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
