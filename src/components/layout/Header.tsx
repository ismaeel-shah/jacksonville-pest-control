import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { filled, getPhone, previewable } from "@/lib/config";
import { getAreasByRegion, getPublishedServices } from "@/lib/content";
import { AREA_REGIONS, areaHref, serviceHref } from "@/lib/routes";
import { HeaderNav, type NavGroup } from "./HeaderNav";

/** Sticky site header. Navigation data is gathered here and handed to the client nav. */
export function Header() {
  const services = getPublishedServices().map((service) => ({
    label: service.navLabel,
    href: serviceHref(service.slug),
    icon: service.icon,
  }));

  const areaGroups: NavGroup[] = AREA_REGIONS.map((region) => ({
    label: region.label,
    links: getAreasByRegion(region.id).map((area) => ({ label: area.name, href: areaHref(area.slug) })),
  })).filter((group) => group.links.length > 0);

  const phone = getPhone();
  const logo = filled(siteConfig.logo);
  const name = previewable(siteConfig.businessName) ?? "Home";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2 whitespace-nowrap font-heading text-xl font-extrabold text-primary">
          {logo ? (
            // The roof makes the logo top-heavy, so its wordmark sits below the image center. Nudging it up by
            // that offset (6.4% of the logo height) lines the wordmark up with the nav text.
            <Image src={logo} alt={name} width={1865} height={467} className="h-11 w-auto -translate-y-[6.4%] lg:h-14 xl:h-12" preload />
          ) : (
            name
          )}
        </Link>
        <HeaderNav
          services={services}
          areaGroups={areaGroups}
          phone={phone ?? (previewable(siteConfig.phoneDisplay) ? { display: siteConfig.phoneDisplay, href: null } : null)}
        />
      </div>
    </header>
  );
}
