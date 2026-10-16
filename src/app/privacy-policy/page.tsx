import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName, getPhone, getSiteUrl } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How this website collects and uses information when you browse it or call the phone number on it to be connected with a local pest control provider in Jacksonville, FL.",
  path: STATIC_ROUTES.privacy,
});

// OWNER: have reviewed by a legal professional before launch
const LAST_UPDATED = "2026-10-16";

export default function PrivacyPolicyPage() {
  const company = getBusinessName() ?? "this website";
  const email = filled(siteConfig.email);
  const phone = getPhone();

  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: STATIC_ROUTES.privacy }]} />
      <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
        <p>
          This Privacy Policy explains how {company} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the operator of{" "}
          {getSiteUrl().replace(/^https?:\/\//, "")}, collects and uses information when you visit this website or call the
          phone number shown on it. This website is an information and referral resource. We are not a pest control
          company. When you call, your call is connected to an independent, third-party pest control provider.
        </p>

        <h2>No forms on this website</h2>
        <p>
          This website does not have contact, request, or sign-up forms, and we do not ask you to type in your name, address,
          or other personal details. The only ways information reaches us are the technical information collected
          automatically while you browse, described below, and the phone calls you choose to make.
        </p>

        <h2>Information collected while you browse</h2>
        <p>
          When you browse our site, we collect basic technical information automatically, such as your browser type, device
          type, general location (city or region), the pages you visit, and how you arrived at our site.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          We use Google Analytics to understand how visitors use our site, for example which pages are visited and whether
          people use the call buttons. Google Analytics uses cookies and similar technologies to collect this information. You
          can block cookies in your browser settings or install the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>
          . Our site works normally without analytics cookies.
        </p>

        <h2>Phone calls</h2>
        <p>
          When you call the phone number on this website
          {phone && (
            <>
              {" "}
              (<a href={phone.href}>{phone.display}</a>)
            </>
          )}
          , your call is routed through a call-tracking service and connected to an independent, third-party pest control
          provider that serves your area. When you call, the following information may be collected:
        </p>
        <ul>
          <li>The phone number you are calling from</li>
          <li>The date, time, and length of the call</li>
          <li>Your general location, based on your phone number or area code</li>
          <li>The web page you were on when you called, if you called from the site</li>
        </ul>
        <p>
          Calls may be recorded and monitored for quality assurance, call routing, and billing purposes. By calling the number
          on this site, you agree that your call may be recorded.
        </p>
        <p>
          The provider you speak with is a separate business. Any information you give them during the call, such as your
          name, address, or details about your property, is handled by that provider under their own privacy practices. We
          do not control how providers use the information you share with them.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>To connect your call with a local pest control provider</li>
          <li>To measure call volume, call quality, and which pages lead to calls</li>
          <li>To understand which pages are helpful so we can improve our website</li>
          <li>To protect our website and phone line from spam, fraud, and misuse</li>
          <li>To meet legal, tax, and regulatory requirements</li>
        </ul>

        <h2>How we share information</h2>
        <p>
          We do not sell your personal information in the sense of offering lists of names or contact details for sale. We
          share call information with call-routing partners and the providers who receive your call so they can respond to
          your request. We may also share information with:
        </p>
        <ul>
          <li>Service providers that help us run this website, such as our website host and analytics provider, who may use it only to provide their services to us</li>
          <li>Authorities, when required by law or to protect our rights, our visitors, or the public</li>
          <li>A buyer or successor, if this website is sold or transferred</li>
        </ul>

        <h2>How long we keep information</h2>
        <p>
          We keep call records and website data only as long as needed for the purposes described above and to meet legal
          and record-keeping requirements. When information is no longer needed, we delete it or make it anonymous. Providers
          and call-routing partners keep their own records under their own policies.
        </p>

        <h2>How we protect information</h2>
        <p>
          Our website uses encrypted connections (HTTPS), and we limit access to call and website data to people who need it.
          No method of sending or storing data is completely secure, but we take reasonable steps to protect the information
          we handle.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us to tell you what personal information we have about you, correct it, or delete it. For information
          you gave directly to a pest control provider during a call, please contact that provider. To make a request to us,
          contact us using the details below.
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
          Questions about this policy or your information? Reach the website operator
          {email ? (
            <>
              {" "}
              by email at <a href={`mailto:${email}`}>{email}</a>
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
