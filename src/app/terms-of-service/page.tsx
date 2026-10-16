import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use this website or call the phone number on it to be connected with an independent pest control provider in Jacksonville, FL.",
  path: STATIC_ROUTES.terms,
});

// OWNER: have reviewed by a legal professional before launch
const LAST_UPDATED = "2026-10-16";

export default function TermsPage() {
  const company = getBusinessName() ?? "this website";
  const email = filled(siteConfig.email);

  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", href: STATIC_ROUTES.terms }]} />
      <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
        <p>
          These Terms of Service apply to your use of this website, operated by {company} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By using the site or calling the phone number on it, you agree to these terms. If you don&apos;t
          agree, please don&apos;t use the site.
        </p>

        <h2>What this website is</h2>
        <p>
          This website is an information and referral resource. We are not a pest control company, we do not employ pest
          control technicians, and we do not perform pest control or any other services. When you call the phone number on
          this site, your call is connected to an independent, third-party pest control provider that serves your area.
        </p>

        <h2>Information on this website</h2>
        <p>
          The content on this site, including articles, pest descriptions, and prevention tips, is general information to help
          you understand common pest problems. It is not professional advice and is not a substitute for an on-site visit by a
          qualified pest control professional. Every home and business is different, and the right approach depends on the
          conditions at your property.
        </p>

        <h2>Independent providers</h2>
        <p>
          The providers you are connected with are independent businesses. They are not our employees, agents, or partners,
          and we do not supervise or control their work. Each provider is solely responsible for:
        </p>
        <ul>
          <li>The services they offer and perform</li>
          <li>Their pricing, billing, and payment terms</li>
          <li>Scheduling, availability, and the areas they serve</li>
          <li>Their own licensing, insurance, and compliance with applicable laws</li>
          <li>Any agreement, work order, or contract you make with them</li>
        </ul>
        <p>
          Calling the number on this site does not create an agreement between you and us, or between you and any provider.
          Any agreement for services is made directly between you and the provider. We make no warranty or guarantee about any
          provider, their work, or the results of any service. Before hiring any provider, we encourage you to ask about their
          experience, licensing, and terms.
        </p>

        <h2>Phone calls</h2>
        <p>
          Calls placed to the number on this site are routed through a call-tracking service and may be recorded and
          monitored for quality assurance, call routing, and billing purposes. By calling, you agree that your call may be
          recorded. Our <Link href={STATIC_ROUTES.privacy}>Privacy Policy</Link> explains what call information is collected
          and how it is shared.
        </p>

        <h2>Safety information</h2>
        <p>
          Safety information on this site is general. Always follow the specific instructions the provider gives you about
          re-entry times, preparation, and pets, and follow product label directions. If you have health concerns about a
          treatment, discuss them with the provider before any work begins.
        </p>

        <h2>Using this website</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Place false, prank, or automated calls to the number on this site</li>
          <li>Send spam or harmful code through the site</li>
          <li>Copy or reuse our content, photos, or branding without written permission</li>
          <li>Interfere with the site&apos;s security or normal operation</li>
        </ul>

        <h2>Links to other websites</h2>
        <p>
          Our site may link to other websites. We don&apos;t control those sites and aren&apos;t responsible for their content
          or privacy practices.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          This website is provided &quot;as is.&quot; To the fullest extent allowed by law, we are not liable for any loss or
          damage that results from using the site, relying on its general information, or any services performed, or not
          performed, by a provider you are connected with. Any claim about a provider&apos;s services must be made directly
          with that provider. This does not limit any rights you have under applicable law.
        </p>

        <h2>Privacy</h2>
        <p>
          Our <Link href={STATIC_ROUTES.privacy}>Privacy Policy</Link> explains how we handle information collected when you
          browse the site or call the number on it.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the State of Florida, without regard to conflict-of-law rules.</p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The &quot;Last updated&quot; date at the top of this page shows when they
          last changed. Continuing to use the site after a change means you accept the updated terms.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about these terms? Contact the website operator
          {email ? (
            <>
              {" "}
              at <a href={`mailto:${email}`}>{email}</a>
            </>
          ) : (
            <>
              {" "}
              through our <Link href={STATIC_ROUTES.contact}>contact page</Link>
            </>
          )}
          . Please note that the phone number on this site connects you to a pest control provider, not to the website
          operator.
        </p>
      </LegalPage>
    </>
  );
}
