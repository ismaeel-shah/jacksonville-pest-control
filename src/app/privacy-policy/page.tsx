import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName, getFormEmbed, getPhone, getSiteUrl } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect the information you share when you visit our website or request a free pest inspection in Jacksonville, FL.",
  path: STATIC_ROUTES.privacy,
});

// OWNER: have reviewed by a legal professional before launch
const LAST_UPDATED = "2026-10-12";

export default function PrivacyPolicyPage() {
  const company = getBusinessName() ?? "our company";
  const email = filled(siteConfig.email);
  const phone = getPhone();
  const formEmbed = getFormEmbed();

  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: STATIC_ROUTES.privacy }]} />
      <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
        <p>
          This Privacy Policy explains how {company} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
          protects information when you visit {getSiteUrl().replace(/^https?:\/\//, "")} or contact us. We keep this simple:
          we only collect what we need to respond to you and run our business, and we never sell your information.
        </p>

        <h2>Information we collect</h2>
        <p>When you fill out our free inspection or quote form, we collect the information you choose to give us:</p>
        <ul>
          <li>Your name, phone number, and ZIP code</li>
          <li>Your email address, if you provide it</li>
          <li>Whether the property is residential or commercial, and your business name if you share it</li>
          <li>The pest problem you select and any message you write</li>
          <li>The web page you were on when you sent the form</li>
        </ul>
        {formEmbed && (
          <p>
            Our request form is provided by a third-party scheduling and customer management service. Information you enter
            in that form is sent to that provider to deliver your request to us, and is also handled under the provider&apos;s
            own privacy policy.
          </p>
        )}
        <p>
          When you browse our site, we also collect basic technical information automatically, such as your browser type,
          device type, general location (city or region), the pages you visit, and how you arrived at our site.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To call, text, or email you about your request and schedule your inspection or service</li>
          <li>To provide pest control services and keep records of the work we perform</li>
          <li>To understand which pages are helpful so we can improve our website</li>
          <li>To protect our website from spam and misuse</li>
          <li>To meet legal, tax, and regulatory requirements</li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          We use Google Analytics to understand how visitors use our site, for example which pages are visited and whether
          people use our phone and quote buttons. Google Analytics uses cookies and similar technologies to collect this
          information. You can block cookies in your browser settings or install the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>
          . Our site works normally without analytics cookies.
        </p>

        <h2>How we share information</h2>
        <p>We do not sell or rent your personal information. We share it only with:</p>
        <ul>
          <li>Service providers that help us run our business, such as our website host, email delivery service, and analytics provider, who may use it only to provide their services to us</li>
          <li>Authorities, when required by law or to protect our rights, our customers, or the public</li>
          <li>A buyer or successor, if our business is sold or transferred</li>
        </ul>

        <h2>How long we keep information</h2>
        <p>
          We keep form submissions and customer records for as long as needed to serve you and to meet legal and
          record-keeping requirements. When information is no longer needed, we delete it or make it anonymous.
        </p>

        <h2>How we protect information</h2>
        <p>
          Our website uses encrypted connections (HTTPS), and we limit access to your information to people who need it to
          help you. No method of sending or storing data is completely secure, but we take reasonable steps to protect what
          you share with us.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us to tell you what personal information we have about you, correct it, or delete it. You can also ask
          us to stop contacting you at any time. To make a request, contact us using the details below.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          Our website is meant for adults. We do not knowingly collect personal information from children under 13. If you
          believe a child has sent us information, please contact us and we will delete it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will change the &quot;Last updated&quot; date at the top
          of this page.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about this policy or your information? Reach us
          {email && (
            <>
              {" "}
              by email at <a href={`mailto:${email}`}>{email}</a>
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
