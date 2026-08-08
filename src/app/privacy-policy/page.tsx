import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | The Simbolo Multimedia",
  },
  description:
    "Read the official Privacy Policy of The Simbolo Multimedia explaining how we collect, use, store, and protect your information.",
  alternates: {
    canonical: "https://thesimbolo.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | The Simbolo Multimedia",
    description:
      "Read the official Privacy Policy of The Simbolo Multimedia explaining how we collect, use, store, and protect your information.",
    url: "https://thesimbolo.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The Simbolo Multimedia",
    description:
      "Read the official Privacy Policy of The Simbolo Multimedia explaining how we collect, use, store, and protect your information.",
  },
};

const effectiveDate = "May 18, 2026";

const openingParagraphs = [
  "Welcome to The Simbolo Multimedia. We are a premier multimedia marketing agency committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy practices of our website (https://www.thesimbolo.com/) and outlines how we collect, use, disclose, and safeguard your information when you utilize our services, including digital marketing, social media management, creative design, branding, and multimedia campaign execution.",
  "Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agreed to be bound by all the terms outlined herein. If you do not agree with the terms of this Privacy Policy, please discontinue access immediately.",
];

const policySections = [
  {
    title: "1. INFORMATION WE COLLECT",
    paragraphs: [
      "We collect information about our clients and website visitors in a variety of ways to provide optimized marketing solutions:",
    ],
    items: [
      "Personal Data: Personally identifiable information, such as your name, corporate email address, telephone number, company name, and designation, which you voluntarily provide when filling out contact forms, requesting service quotes, or subscribing to our newsletters.",
      "Derivative Data: Technical information automatically captured by our servers when you access our website, including your IP address, browser type, operating system, access times, and the specific pages viewed prior to and after navigating our site.",
      "Client Project Data: Strategic business data, creative briefs, brand assets, temporary social media credentials, and analytical historical parameters shared intentionally during the onboarding process to execute marketing mandates.",
    ],
  },
  {
    title: "2. USE OF YOUR INFORMATION",
    paragraphs: [
      "The information collected is used systematically to deliver high-quality marketing services and ensure an efficient client workflow. Specifically, we utilize your data to:",
    ],
    items: [
      "Configure, administer, and manage client accounts and active brand portfolios.",
      "Deliver customized marketing, premium branding, and multimedia content assets.",
      "Formulate tailored commercial quotations, project proposals, and strategic creative pitches.",
      "Send targeted promotional communications, industry insights, and agency updates (with the option to opt-out at any time).",
      "Analyze website traffic and consumer metrics to improve platform navigation and engagement layout.",
      "Maintain operational safety by monitoring and preventing fraudulent transactions or security vulnerabilities.",
    ],
  },
  {
    title: "3. DISCLOSURE OF YOUR INFORMATION",
    paragraphs: [
      "We maintain a strict policy against selling, renting, or trading personal data to unauthorized third parties. However, information may be shared under the following structured scenarios:",
    ],
    items: [
      "Legal Compliance: Where required by legislative mandates, court orders, or governmental regulatory authorities to protect legal rights, human safety, or corporate asset security.",
      "Third-Party System Providers: Controlled exposure to trusted third-party cloud infrastructure, automated email delivery systems, analytical platforms, and CRM tools operating explicitly under our operational directives.",
      "Corporate Transformations: In the event of a structural merger, asset divestiture, consolidation, or corporate acquisition, data assets may transfer safely as part of business continuity provisions.",
    ],
  },
  {
    title: "4. COOKIES AND TRACKING TECHNOLOGIES",
    paragraphs: [
      "Our website utilizes secure digital cookies, tracking pixels, and web beacons to optimize platform performance and map visitor retention. Cookies help analyze traffic patterns to customize your future interactions. You retain full autonomy within your native web browser to modify settings to block or delete cookies; however, disabling these tools may partially impact the execution of specific interactive features on our portal.",
    ],
  },
  {
    title: "5. THIRD-PARTY WEB LINKS",
    paragraphs: [
      "Our portal may occasionally display links to third-party digital web platforms, integrated application environments, or client reference portfolios. This Privacy Policy applies strictly to operations contained within https://www.thesimbolo.com/. We hold no responsibility for the external privacy terms, security setups, or data harvesting methodologies utilized by external third-party entities.",
    ],
  },
  {
    title: "6. DATA SECURITY MEASURES",
    paragraphs: [
      "We deploy robust technical, administrative, and physical security measures designed to shield your personal data from unauthorized extraction, alteration, loss, or misuse. While we continuously elevate our digital defenses, no method of electronic transmission or decentralized digital storage can be guaranteed as absolute proof against interception; therefore, we advise shared caution during online information transfers.",
    ],
  },
  {
    title: "7. POLICY CONCERNING MINORS",
    paragraphs: [
      "Our multimedia marketing operations are curated specifically for business entities and professional individuals. We do not knowingly gather or request personal data from minors under the age of 13. If it comes to light that any data belonging to a minor has been recorded inadvertently, we will immediately purge the record from our system servers.",
    ],
  },
  {
    title: "8. CLIENT RIGHTS AND PREFERENCES",
    paragraphs: [
      'You maintain clear authority over your personal information. You can connect with our administrative team at any point to inspect, update, correct, or request the systematic removal of your business records from our active marketing lists. To stop receiving automated agency newsletters or marketing emails, simply click the "Unsubscribe" mechanism included at the foot of our digital communications.',
    ],
  },
  {
    title: "9. CONTACT AND GRIEVANCE REDRESSAL",
    paragraphs: [
      "For clarifications, updates, data removal requests, or queries regarding this Privacy Policy, please get in touch with our office using the verified agency credentials below:",
    ],
  },
];

const contactDetails = [
  { label: "Agency", value: "The Simbolo Multimedia" },
  { label: "Website", value: "https://www.thesimbolo.com/" },
  {
    label: "Address",
    value:
      "1st Floor, Sahil Regency, The Simbolo Multimedia, Plot No. ED/149, Ring Rd, near Khajrana square, IDA, Scheme, Indore, Madhya Pradesh 452016",
  },
  { label: "Phone", value: "089829 11880" },
  { label: "Email", value: "thesimbolomultimedia@gmail.com" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bglight">
      <section className="relative overflow-hidden px-4 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
        <div aria-hidden="true" className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-skyblue/12 blur-3xl" />

        <div className="mx-auto max-w-[1320px] text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-soft shadow-sm">
              <li>
                <Link href="/" className="text-primary transition-colors hover:text-dark">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">
                /
              </li>
              <li aria-current="page" className="text-dark">
                Privacy Policy
              </li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Privacy <span className="text-gradient-primary">Policy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-soft md:text-xl">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[900px]">
          <article className="space-y-6" aria-labelledby="privacy-policy-title">
            <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-soft md:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                The Simbolo Multimedia
              </p>
              <h2 id="privacy-policy-title" className="font-heading text-2xl font-extrabold text-dark md:text-3xl">
                PRIVACY POLICY
              </h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-soft">
                Effective Date: May 18, 2026 | Website: https://www.thesimbolo.com/
              </p>
              <div className="mt-8 space-y-5 text-base leading-8 text-soft md:text-lg md:leading-9">
                {openingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {policySections.map((section) => {
              const isContactSection = section.title.startsWith("9.");

              return (
                <section
                  key={section.title}
                  aria-labelledby={section.title.toLowerCase().replaceAll(" ", "-")}
                  className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft md:p-10"
                >
                  <h2
                    id={section.title.toLowerCase().replaceAll(" ", "-")}
                    className="font-heading text-2xl font-extrabold leading-tight text-dark md:text-3xl"
                  >
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-soft md:text-lg md:leading-9">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.items ? (
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {isContactSection ? (
                    <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 md:p-6">
                      <dl className="grid gap-5">
                        {contactDetails.map((detail) => (
                          <div key={detail.label} className="grid gap-1 md:grid-cols-[120px_1fr] md:gap-6">
                            <dt className="text-sm font-bold uppercase tracking-wider text-primary">
                              {detail.label}
                            </dt>
                            <dd className="text-base font-medium leading-7 text-dark md:text-lg">
                              {detail.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}
                </section>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}
