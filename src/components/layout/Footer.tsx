import { BadgeCheck, ClipboardCheck, Clock, House, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { filled, getPhone, previewable } from "@/lib/config";
import { getPublishedAreas, getPublishedServices } from "@/lib/content";
import { formatHoursRange } from "@/lib/format";
import { STATIC_ROUTES, areaHref, serviceHref } from "@/lib/routes";

const COMPANY_LINKS = [
  { label: "Residential", href: STATIC_ROUTES.residential },
  { label: "Commercial", href: STATIC_ROUTES.commercial },
  { label: "About Us", href: STATIC_ROUTES.about },
  { label: "Reviews", href: STATIC_ROUTES.reviews },
  { label: "FAQ", href: STATIC_ROUTES.faq },
  { label: "Blog", href: STATIC_ROUTES.blog },
  { label: "Contact", href: STATIC_ROUTES.contact },
];

// OWNER: confirm each trust claim below
const TRUST_BADGES = [
  { icon: BadgeCheck, label: "Licensed & insured" },
  { icon: House, label: "Locally owned" },
  { icon: ClipboardCheck, label: "Free inspections" },
];

/** Cached so pages stay static; refreshed daily so the year rolls over on its own. */
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const headingClass = "font-heading text-sm font-bold uppercase tracking-wider text-white/70";
const linkClass = "text-white/85 underline-offset-4 hover:text-white hover:underline";

export async function Footer() {
  const year = await getCurrentYear();
  const name = previewable(siteConfig.businessName);
  const legalName = filled(siteConfig.legalName) ?? filled(siteConfig.businessName);
  const logo = filled(siteConfig.logo);
  const phone = getPhone();
  const email = filled(siteConfig.email);
  const license = filled(siteConfig.licenseNumber);
  const { address } = siteConfig;
  const street = address.showPublicly ? filled(address.street) : null;
  const zip = filled(address.zip);

  const services = getPublishedServices();
  const areas = getPublishedAreas();

  return (
    <footer className="bg-secondary text-white">
      {/* Brand + contact */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Link
            href="/"
            className={`inline-block font-heading text-2xl font-extrabold text-white md:text-3xl ${logo ? "rounded-xl bg-white px-4 py-3" : ""}`}
          >
            {logo ? (
              // White card: the logo is drawn for light backgrounds and would disappear on the navy footer.
              <Image src={logo} alt={name ?? "Home"} width={1865} height={467} className="h-14 w-auto" />
            ) : (
              (name ?? siteConfig.tagline)
            )}
          </Link>
          <p className="mt-4 max-w-xl text-white/85">
            Local pest control for homes and businesses across Jacksonville, the Beaches, and Clay, St. Johns, and Nassau
            counties. Every visit starts with a free inspection and an upfront quote.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-base font-semibold">
                <Icon aria-hidden className="size-5 text-white" />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex max-w-xl items-start gap-3 text-white/85">
            <ShieldCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-white" />
            <span>
              <span className="font-semibold text-white">Our guarantee: </span>
              {siteConfig.guarantee}
            </span>
          </p>
        </div>

        <div className="self-start rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 lg:col-span-5">
          <h2 className={headingClass}>Get in touch</h2>
          <ul className="mt-4 space-y-4">
            {phone && (
              <li>
                <a href={phone.href} className="flex items-center gap-3 text-2xl font-extrabold text-white hover:underline">
                  <Phone aria-hidden className="size-6 text-accent" />
                  {phone.display}
                </a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`} className={`flex items-center gap-3 break-all ${linkClass}`}>
                  <Mail aria-hidden className="size-5 shrink-0" />
                  {email}
                </a>
              </li>
            )}
            {street && (
              <li className="flex items-start gap-3 text-white/85">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0" />
                <address className="not-italic">
                  {street}, {address.city}, {address.state} {zip}
                </address>
              </li>
            )}
            <li className="flex items-start gap-3">
              <Clock aria-hidden className="mt-1 size-5 shrink-0 text-white/85" />
              <dl className="grid flex-1 grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-white/85">
                {siteConfig.hours.map((hours) => (
                  <div key={hours.days} className="contents">
                    <dt className="font-semibold text-white">{hours.days}</dt>
                    <dd>{formatHoursRange(hours)}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-white/15">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        {services.length > 0 && (
          <nav aria-labelledby="footer-services" className="lg:col-span-4">
            <h2 id="footer-services" className={headingClass}>
              Services
            </h2>
            <ul className="mt-4 columns-2 gap-x-6 text-base [&>li]:mb-2 [&>li]:break-inside-avoid">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)} className={linkClass}>
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {areas.length > 0 && (
          <nav aria-labelledby="footer-areas" className="lg:col-span-6">
            <h2 id="footer-areas" className={headingClass}>
              Service Areas
            </h2>
            <ul className="mt-4 columns-2 gap-x-6 text-base sm:columns-3 [&>li]:mb-2 [&>li]:break-inside-avoid">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={areaHref(area.slug)} className={linkClass}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={STATIC_ROUTES.serviceAreas} className="mt-4 inline-block font-semibold text-white hover:underline">
              View all service areas →
            </Link>
          </nav>
        )}

        <nav aria-labelledby="footer-company" className="md:col-span-2 lg:col-span-2">
          <h2 id="footer-company" className={headingClass}>
            Company
          </h2>
          <ul className="mt-4 columns-2 gap-x-6 text-base sm:columns-3 lg:columns-1 [&>li]:mb-2 [&>li]:break-inside-avoid">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/75 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {year}
            {legalName ? ` ${legalName}.` : ""} All rights reserved.
            {license && <> Florida pest control license #{license}.</>}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href={STATIC_ROUTES.privacy} className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={STATIC_ROUTES.terms} className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
