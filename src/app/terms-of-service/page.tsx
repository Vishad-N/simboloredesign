import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | The Simbolo Multimedia",
  },
  description:
    "Review the Terms of Service for using The Simbolo Multimedia website, services, proposals, creative deliverables, and digital marketing support.",
  alternates: {
    canonical: "https://thesimbolo.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | The Simbolo Multimedia",
    description:
      "Review the Terms of Service for using The Simbolo Multimedia website, services, proposals, creative deliverables, and digital marketing support.",
    url: "https://thesimbolo.com/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | The Simbolo Multimedia",
    description:
      "Review the Terms of Service for using The Simbolo Multimedia website, services, proposals, creative deliverables, and digital marketing support.",
  },
};

const effectiveDate = "May 18, 2026";

const openingParagraphs = [
  "Welcome to The Simbolo Multimedia. These Terms of Service outline the general rules, responsibilities, and conditions that apply when you access our website, request proposals, communicate with our team, or engage our multimedia marketing services.",
  "By using our website or services, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please discontinue use of our website and services immediately.",
];

const termsSections = [
  {
    title: "1. ACCEPTANCE OF TERMS",
    paragraphs: [
      "By accessing https://www.thesimbolo.com/ or engaging with The Simbolo Multimedia for digital marketing, branding, creative design, social media management, web development, video production, or related services, you agree to comply with these Terms of Service and all applicable laws and regulations.",
    ],
  },
  {
    title: "2. SERVICES PROVIDED",
    paragraphs: [
      "The Simbolo Multimedia provides creative and strategic marketing services that may include branding, digital campaigns, content creation, social media management, paid advertising support, multimedia production, website design, and consulting.",
      "Specific deliverables, timelines, responsibilities, pricing, and approval milestones will be defined through written proposals, quotations, invoices, contracts, or confirmed project communication.",
    ],
  },
  {
    title: "3. CLIENT RESPONSIBILITIES",
    paragraphs: [
      "Clients are responsible for providing accurate project information, brand assets, approvals, feedback, access credentials, and any required business documentation in a timely manner.",
      "Delays in client approvals, missing assets, incomplete information, or changes in project scope may affect timelines, deliverables, and project costs.",
    ],
  },
  {
    title: "4. PROPOSALS, PAYMENTS, AND BILLING",
    paragraphs: [
      "All pricing, payment schedules, retainers, milestone fees, and billing terms will be communicated through official proposals, invoices, or written confirmations.",
      "Work may begin only after required approvals and advance payments are received, unless otherwise agreed in writing. Late payments may result in delayed delivery, paused campaigns, or temporary suspension of active services.",
    ],
  },
  {
    title: "5. REVISIONS AND APPROVALS",
    paragraphs: [
      "Reasonable revisions may be provided according to the approved project scope. Requests beyond the agreed scope, major creative changes after approval, or additional deliverables may require revised timelines and additional charges.",
      "Once a concept, design, campaign, post, video, or other deliverable is approved by the client, further changes may be treated as additional work.",
    ],
  },
  {
    title: "6. INTELLECTUAL PROPERTY",
    paragraphs: [
      "Final ownership of approved and paid deliverables may transfer to the client as defined in the relevant proposal or agreement. The Simbolo Multimedia retains ownership of unused concepts, drafts, internal strategy documents, source files, working files, and creative methods unless explicitly transferred in writing.",
      "The Simbolo Multimedia may display completed work in its portfolio, website, social media channels, case studies, and promotional materials unless a written confidentiality restriction has been agreed.",
    ],
  },
  {
    title: "7. THIRD-PARTY TOOLS AND PLATFORMS",
    paragraphs: [
      "Projects may require the use of third-party platforms, hosting providers, advertising networks, analytics systems, plugins, stock assets, software tools, or social media platforms. The Simbolo Multimedia is not responsible for outages, policy changes, account restrictions, pricing changes, or technical issues caused by third-party providers.",
    ],
  },
  {
    title: "8. LIMITATION OF LIABILITY",
    paragraphs: [
      "The Simbolo Multimedia works to provide professional, reliable, and high-quality services. However, we do not guarantee specific business outcomes, revenue results, platform performance, search rankings, engagement rates, or advertising returns unless explicitly stated in writing.",
      "To the fullest extent permitted by law, The Simbolo Multimedia shall not be liable for indirect, incidental, consequential, or special damages arising from the use of our website or services.",
    ],
  },
  {
    title: "9. TERMINATION OF SERVICES",
    paragraphs: [
      "Either party may request termination of services according to the terms defined in the applicable proposal, invoice, retainer agreement, or written communication.",
      "Upon termination, all outstanding payments for completed work, active campaigns, third-party expenses, and approved deliverables must be cleared before final handover, where applicable.",
    ],
  },
  {
    title: "10. CONTACT INFORMATION",
    paragraphs: [
      "For questions, clarifications, billing concerns, or service-related communication regarding these Terms of Service, please contact our team using the details below:",
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

export default function TermsOfServicePage() {
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
                Terms of Service
              </li>
            </ol>
          </nav>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            Terms of <span className="text-gradient-primary">Service</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-soft md:text-xl">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[900px]">
          <article className="space-y-6" aria-labelledby="terms-of-service-title">
            <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-soft md:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                The Simbolo Multimedia
              </p>
              <h2 id="terms-of-service-title" className="font-heading text-2xl font-extrabold text-dark md:text-3xl">
                TERMS OF SERVICE
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

            {termsSections.map((section) => {
              const isContactSection = section.title.startsWith("10.");
              const sectionId = section.title.toLowerCase().replaceAll(" ", "-");

              return (
                <section
                  key={section.title}
                  aria-labelledby={sectionId}
                  className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft md:p-10"
                >
                  <h2 id={sectionId} className="font-heading text-2xl font-extrabold leading-tight text-dark md:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-soft md:text-lg md:leading-9">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
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
