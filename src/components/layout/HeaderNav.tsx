"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; links: NavLink[] };
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
  services: NavLink[];
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

function DesktopNav({ services, areaGroups, phone }: { services: NavLink[]; areaGroups: NavGroup[]; phone: PhoneProp }) {
  const [open, setOpen] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const isCurrent = useIsCurrent();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
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
            <DropdownPanel id="services" open={open === "services"} onNavigate={close} className="w-[36rem]">
              {services.length > 0 && (
                <ul className="grid grid-cols-2 gap-1 p-3">
                  {services.map((link) => (
                    <li key={link.href}>
                      <PanelLink link={link} />
                    </li>
                  ))}
                </ul>
              )}
              <PanelFooter links={SERVICE_FOOTER_LINKS} />
            </DropdownPanel>
          </li>
          <li className="relative">
            <DropdownButton id="areas" label="Service Areas" open={open === "areas"} onToggle={toggle} />
            <DropdownPanel id="areas" open={open === "areas"} onNavigate={close} className="w-[42rem]">
              {areaGroups.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-4">
                  {areaGroups.map((group) => (
                    <div key={group.label}>
                      <p className="px-3 pb-1 text-sm font-bold uppercase tracking-wide text-ink-muted">{group.label}</p>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <PanelLink link={link} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <PanelFooter links={[ALL_AREAS_LINK]} />
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

function PanelLink({ link }: { link: NavLink }) {
  return (
    <Link href={link.href} className="block rounded-md px-3 py-2 text-base text-ink hover:bg-primary-soft hover:text-primary">
      {link.label}
    </Link>
  );
}

function PanelFooter({ links }: { links: NavLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-line bg-surface px-6 py-3">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-base font-bold text-primary hover:underline">
          {link.label} →
        </Link>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile and tablet (below xl)
// ---------------------------------------------------------------------------

function MobileNav({ services, areaGroups, phone }: { services: NavLink[]; areaGroups: NavGroup[]; phone: PhoneProp }) {
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
