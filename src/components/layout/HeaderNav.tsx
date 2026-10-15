"use client";

import { ArrowRight, ChevronDown, ChevronRight, type LucideIcon, MapPin, Menu, Phone, SprayCan, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import type { IconKey } from "@/content/types";
import { ICONS } from "@/lib/icons";

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; links: NavLink[] };
export type ServiceNavLink = NavLink & { icon: IconKey };
/** href is null only for the development preview before a phone number is set. */
type PhoneProp = { display: string; href: string | null } | null;

type MenuId = "services" | "areas";

const TOP_LINKS: NavLink[] = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
];
const TRAILING_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
const SERVICE_FOOTER_LINKS: NavLink[] = [
  { label: "Residential pest control", href: "/residential" },
  { label: "Commercial pest control", href: "/commercial" },
];
/** Shorter labels for the same two links, sized for the Services dropdown buttons. */
const AUDIENCE_LINKS: NavLink[] = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
];
const ALL_AREAS_LINK: NavLink = { label: "View all service areas", href: "/service-areas" };
const QUOTE_HREF = "/contact#quote-form";

function useIsCurrent() {
  const pathname = usePathname();
  return (href: string) => (pathname === href ? ("page" as const) : undefined);
}

export function HeaderNav({
  services,
  areaGroups,
  phone,
}: {
  services: ServiceNavLink[];
  areaGroups: NavGroup[];
  phone: PhoneProp;
}) {
  return (
    <>
      <DesktopNav services={services} areaGroups={areaGroups} phone={phone} />
      <MobileNav services={services} areaGroups={areaGroups} phone={phone} />
    </>
  );
}

// ---------------------------------------------------------------------------
// Desktop (xl and up)
// ---------------------------------------------------------------------------

function DesktopNav({ services, areaGroups, phone }: { services: ServiceNavLink[]; areaGroups: NavGroup[]; phone: PhoneProp }) {
  const [open, setOpen] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const isCurrent = useIsCurrent();

  // Close on any navigation, including back/forward (the header stays mounted between pages).
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(null);
  }

  useEffect(() => {
    if (!open) return;
    // Any press outside the open panel and its own button closes it, including other nav links.
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const panel = document.getElementById(`nav-panel-${open}`);
      const button = navRef.current?.querySelector(`[aria-controls="nav-panel-${open}"]`);
      if (!panel?.contains(target) && !button?.contains(target)) setOpen(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggle = (id: MenuId) => setOpen((current) => (current === id ? null : id));
  const close = () => setOpen(null);
  const linkClass = "whitespace-nowrap rounded-md px-2.5 py-2 font-semibold text-ink hover:bg-primary-soft hover:text-primary aria-[current=page]:text-primary";

  return (
    <div className="hidden flex-1 items-center justify-end gap-2 xl:flex">
      <nav ref={navRef} aria-label="Main" className="flex-1">
        <ul className="flex items-center justify-center gap-0.5 text-[1.0625rem]">
          {TOP_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass} aria-current={isCurrent(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <DropdownButton id="services" label="Services" open={open === "services"} onToggle={toggle} />
            <DropdownPanel id="services" open={open === "services"} onNavigate={close} className="w-[60rem]">
              <ServicesPanel services={services} isCurrent={isCurrent} />
            </DropdownPanel>
          </li>
          <li className="relative">
            <DropdownButton id="areas" label="Service Areas" open={open === "areas"} onToggle={toggle} />
            <DropdownPanel id="areas" open={open === "areas"} onNavigate={close} className="w-[60rem]">
              <AreasPanel areaGroups={areaGroups} isCurrent={isCurrent} />
            </DropdownPanel>
          </li>
          {TRAILING_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass} aria-current={isCurrent(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {phone && <PhoneLink phone={phone} className="whitespace-nowrap px-2 font-bold text-secondary" showNumber />}
      <Link
        href={QUOTE_HREF}
        data-cta="header_free_inspection"
        className="inline-flex min-h-12 shrink-0 items-center whitespace-nowrap rounded-lg bg-accent px-5 font-bold text-accent-foreground hover:bg-accent-hover"
      >
        Free Inspection
      </Link>
    </div>
  );
}

function DropdownButton({
  id,
  label,
  open,
  onToggle,
}: {
  id: MenuId;
  label: string;
  open: boolean;
  onToggle: (id: MenuId) => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={`nav-panel-${id}`}
      onClick={() => onToggle(id)}
      className="flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 font-semibold text-ink hover:bg-primary-soft hover:text-primary"
    >
      {label}
      <ChevronDown aria-hidden className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function DropdownPanel({
  id,
  open,
  onNavigate,
  className = "",
  children,
}: {
  id: MenuId;
  open: boolean;
  onNavigate: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      id={`nav-panel-${id}`}
      hidden={!open}
      onClick={(event) => {
        if ((event.target as Element).closest("a")) onNavigate();
      }}
      className={`absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-white shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

function AreasPanel({ areaGroups, isCurrent }: { areaGroups: NavGroup[]; isCurrent: (href: string) => "page" | undefined }) {
  const areaCount = areaGroups.reduce((total, group) => total + group.links.length, 0);

  return (
    <div className="grid grid-cols-[15rem_1fr]">
      <PanelIntro
        icon={MapPin}
        title="Serving Northeast Florida"
        text={
          areaCount > 0
            ? `Local pest control in ${areaCount} neighborhoods and towns across ${areaGroups.length} ${areaGroups.length === 1 ? "region" : "regions"}.`
            : null
        }
      >
        <PanelIntroLink link={ALL_AREAS_LINK} />
      </PanelIntro>
      {/* CSS columns pack groups of different lengths without leaving gaps under the short ones. */}
      <div className="columns-3 gap-6 p-6">
        {areaGroups.map((group) => (
          <div key={group.label} className="mb-5 break-inside-avoid">
            <p className="flex items-center gap-2 px-2 pb-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              {group.label}
              <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[0.6875rem] leading-none">{group.links.length}</span>
            </p>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent(link.href)}
                    className="group/area flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-[0.9375rem] text-ink hover:bg-primary-soft hover:text-primary aria-[current=page]:bg-primary-soft aria-[current=page]:font-semibold aria-[current=page]:text-primary"
                  >
                    {link.label}
                    <ChevronRight
                      aria-hidden
                      className="size-4 shrink-0 opacity-0 transition-opacity group-hover/area:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesPanel({ services, isCurrent }: { services: ServiceNavLink[]; isCurrent: (href: string) => "page" | undefined }) {
  return (
    <div className="grid grid-cols-[15rem_1fr]">
      <PanelIntro
        icon={SprayCan}
        title="Pest Control Services"
        text={services.length > 0 ? `${services.length} treatments for Jacksonville homes and businesses, starting with a free inspection.` : null}
      >
        {AUDIENCE_LINKS.map((link, i) => (
          <PanelIntroLink key={link.href} link={link} secondary={i > 0} />
        ))}
      </PanelIntro>
      <ul className="grid grid-cols-3 content-start gap-1 p-4">
        {services.map((link) => {
          const Icon = ICONS[link.icon];
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(link.href)}
                className="group/service flex items-center gap-3 rounded-lg p-2 text-[0.9375rem] font-semibold leading-snug text-ink hover:bg-primary-soft hover:text-primary aria-[current=page]:bg-primary-soft aria-[current=page]:text-primary"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover/service:bg-primary group-hover/service:text-white group-aria-[current=page]/service:bg-primary group-aria-[current=page]/service:text-white">
                  <Icon aria-hidden className="size-[1.125rem]" />
                </span>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Left column of a dropdown panel: icon, title, one line of context, and its main links. */
function PanelIntro({ icon: Icon, title, text, children }: { icon: LucideIcon; title: string; text: string | null; children: ReactNode }) {
  return (
    <div className="flex flex-col bg-primary-soft p-6">
      <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
        <Icon aria-hidden className="size-5" />
      </span>
      <p className="mt-4 font-heading text-lg font-extrabold leading-snug text-secondary">{title}</p>
      {text && <p className="mt-2 text-sm text-ink-muted">{text}</p>}
      <div className="mt-auto flex flex-col gap-2 pt-6">{children}</div>
    </div>
  );
}

function PanelIntroLink({ link, secondary = false }: { link: NavLink; secondary?: boolean }) {
  return (
    <Link
      href={link.href}
      className={`inline-flex items-center justify-between gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold ${
        secondary ? "border border-primary/30 bg-white text-primary hover:border-primary" : "bg-primary text-white hover:bg-primary-dark"
      }`}
    >
      {link.label}
      <ArrowRight aria-hidden className="size-4" />
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Mobile and tablet (below xl)
// ---------------------------------------------------------------------------

function MobileNav({ services, areaGroups, phone }: { services: ServiceNavLink[]; areaGroups: NavGroup[]; phone: PhoneProp }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<MenuId | null>(null);
  const isCurrent = useIsCurrent();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggleGroup = (id: MenuId) => setExpanded((current) => (current === id ? null : id));
  const linkClass = "block rounded-md px-3 py-3 text-lg font-semibold text-ink hover:bg-primary-soft aria-[current=page]:text-primary";

  return (
    <div className="flex items-center gap-1 xl:hidden">
      {phone && (
        <PhoneLink
          phone={phone}
          className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground"
          ariaLabel={`Call ${phone.display}`}
        />
      )}
      <Link
        href={QUOTE_HREF}
        data-cta="header_free_inspection"
        className="ml-1 hidden min-h-12 items-center whitespace-nowrap rounded-lg bg-accent px-5 font-bold text-accent-foreground hover:bg-accent-hover md:inline-flex"
      >
        Free Inspection
      </Link>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-12 items-center justify-center rounded-md text-secondary hover:bg-primary-soft"
      >
        {open ? <X aria-hidden className="size-7" /> : <Menu aria-hidden className="size-7" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        onClick={(event) => {
          if ((event.target as Element).closest("a")) setOpen(false);
        }}
        className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-4 pb-24 pt-4 lg:h-[calc(100dvh-5rem)]"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {TOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass} aria-current={isCurrent(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <MobileGroup id="services" label="Services" expanded={expanded === "services"} onToggle={toggleGroup}>
              {[...services, ...SERVICE_FOOTER_LINKS].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block rounded-md px-3 py-2 text-base text-ink hover:bg-primary-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </MobileGroup>
            <MobileGroup id="areas" label="Service Areas" expanded={expanded === "areas"} onToggle={toggleGroup}>
              {areaGroups.flatMap((group) => group.links).concat(ALL_AREAS_LINK).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block rounded-md px-3 py-2 text-base text-ink hover:bg-primary-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </MobileGroup>
            {TRAILING_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass} aria-current={isCurrent(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 grid gap-3">
          {phone && (
            <PhoneLink
              phone={phone}
              showNumber
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-lg font-bold text-accent-foreground"
            />
          )}
          <Link
            href={QUOTE_HREF}
            data-cta="mobile_menu_free_inspection"
            className="flex min-h-12 items-center justify-center rounded-lg border-2 border-primary px-6 text-lg font-bold text-primary"
          >
            Get a Free Inspection
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  id,
  label,
  expanded,
  onToggle,
  children,
}: {
  id: MenuId;
  label: string;
  expanded: boolean;
  onToggle: (id: MenuId) => void;
  children: ReactNode;
}) {
  return (
    <li>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={`mobile-group-${id}`}
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-lg font-semibold text-ink hover:bg-primary-soft"
      >
        {label}
        <ChevronDown aria-hidden className={`size-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <ul id={`mobile-group-${id}`} hidden={!expanded} className="mb-2 ml-3 border-l-2 border-primary-soft pl-2">
        {children}
      </ul>
    </li>
  );
}

function PhoneLink({
  phone,
  className,
  showNumber = false,
  ariaLabel,
}: {
  phone: NonNullable<PhoneProp>;
  className: string;
  showNumber?: boolean;
  ariaLabel?: string;
}) {
  const content = (
    <>
      <Phone aria-hidden className="size-5 shrink-0" />
      {showNumber && <span>{phone.display}</span>}
    </>
  );
  // Development preview before a real number exists: same look, not clickable.
  if (!phone.href) {
    return (
      <span aria-label={ariaLabel} className={`${className} flex items-center gap-2 opacity-70`}>
        {content}
      </span>
    );
  }
  return (
    <a href={phone.href} aria-label={ariaLabel} className={`${className} flex items-center gap-2`}>
      {content}
    </a>
  );
}
