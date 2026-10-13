import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName, getPhone } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use our website or request information about pest control services in Jacksonville, FL. Please read them carefully.",
  path: STATIC_ROUTES.terms,
});

// OWNER: have reviewed by a legal professional before launch
const LAST_UPDATED = "2026-10-12";

export default function TermsPage() {
  const company = getBusinessName() ?? "our company";
  const email = filled(siteConfig.email);
  const phone = getPhone();

  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", href: STATIC_ROUTES.terms }]} />
      <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
        <p>
          These Terms of Service apply to your use of this website, operated by {company} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By using the site, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.
        </p>

        <h2>Information on this website</h2>
        <p>
          The content on this site, including articles, pest descriptions, and prevention tips, is general information to help
          you understand common pest problems. It is not a substitute for an on-site inspection by a licensed professional.
          Every home and business is different, and the right treatment depends on what we find.
        </p>

        <h2>Quotes and services</h2>
        <p>
          Submitting a form or calling us does not create a service agreement. We provide quotes after an inspection, and any
          service we perform is governed by the written agreement or work order you approve at that time. If anything in that
          agreement differs from this website, the written agreement controls.
        </p>

        <h2>Guarantees</h2>
        <p>
          Any service guarantee, such as re-treatment between scheduled visits, applies only as described in your written
          service agreement, and may depend on following your technician&apos;s recommendations, such as fixing moisture
          problems or sealing entry points.
        </p>

        <h2>Safety information</h2>
        <p>
          Safety information on this site is general. Always follow the specific instructions your technician gives you about
          re-entry times, preparation, and pets. If you have health concerns about a treatment, tell us before service so we
          can discuss options.
        </p>

        <h2>Using this website</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false information or someone else&apos;s contact details through our forms</li>
          <li>Send spam, automated submissions, or harmful code through the site</li>
          <li>Copy or reuse our content, photos, or branding without written permission</li>
          <li>Interfere with the site&apos;s security or normal operation</li>
        </ul>

        <h2>Links to other websites</h2>
        <p>
          Our site may link to other websites, such as Google reviews or social media. We don&apos;t control those sites and
          aren&apos;t responsible for their content or privacy practices.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          This website is provided &quot;as is.&quot; To the fullest extent allowed by law, we are not liable for any loss or
          damage that results from using the site or relying on its general information. This does not limit any rights you
          have under a written service agreement with us or under applicable law.
        </p>

        <h2>Privacy</h2>
        <p>
          Our <Link href={STATIC_ROUTES.privacy}>Privacy Policy</Link> explains how we handle information you share with us.
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
          Questions about these terms? Contact us
          {email && (
            <>
              {" "}
              at <a href={`mailto:${email}`}>{email}</a>
            </>
          )}
          {phone && (
            <>
              {email ? " or" : ""} by phone at <a href={phone.href}>{phone.display}</a>
            </>
          )}
          {!email && !phone && (
            <>
              {" "}
              through our <Link href={STATIC_ROUTES.contact}>contact page</Link>
            </>
          )}
          .
        </p>
      </LegalPage>
    </>
  );
}
