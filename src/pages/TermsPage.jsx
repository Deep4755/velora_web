import AnimateIn from "../components/AnimateIn";

const sections = [
  {
    title: "Project Scope",
    content:
      "All work is carried out based on the agreed quotation and project brief. Any additional features, pages or functionality requested after the project has started may require a revised quote. We will always discuss changes with you before proceeding.",
  },
  {
    title: "Payments",
    content:
      "We require 50% payment upfront before work begins, with the remaining 50% due upon project completion and before the website goes live. For larger projects, we may agree a payment plan split into three stages. Late payments may delay project delivery.",
  },
  {
    title: "Revisions",
    content:
      "Each package includes a set number of revision rounds as outlined in your quote. Additional revisions beyond the agreed scope may be charged at our standard hourly rate. We always aim to get things right first time through clear communication.",
  },
  {
    title: "Technical Support",
    content:
      "If a technical issue appears after delivery, we will do our best to investigate and fix it within a reasonable time, depending on the nature of the issue and the agreed project scope. Ongoing support and maintenance packages are available separately.",
  },
  {
    title: "Third-Party Services",
    content:
      "We are not responsible for issues caused by third-party services including hosting providers, domain registrars, plugins, payment gateways, external APIs or changes made by someone outside our team. We can advise on reliable providers and help troubleshoot where possible.",
  },
  {
    title: "Content Responsibility",
    content:
      "Clients are responsible for providing all text content, images and branding materials needed for the project. If content is not provided on time, this may delay the project timeline. We can help source stock images or write basic copy at an additional cost.",
  },
  {
    title: "Legal Notice",
    content:
      "We always aim to deliver high-quality websites, clear communication and reliable technical support. Any concerns should be raised with us directly first so we can review the matter professionally and try to resolve it fairly. False claims, misuse of our work, non-payment, harassment, threats or attempts to damage our business reputation may be treated seriously and, where necessary, legal advice may be taken. This notice does not affect any legal rights customers may have under applicable UK consumer or business law.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Legal</p>
          <h1 className="heading-xl mb-4">Terms & Conditions</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto">
            Clear, fair terms for working together. No complicated legal jargon — just straightforward expectations.
          </p>
        </div>
      </section>

      {/* Terms content */}
      <section className="bg-white section-pad">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="border-b border-gray-100 pb-8 last:border-0">
                  <h2 className="heading-md mb-4">{s.title}</h2>
                  <p className="body-lg">{s.content}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Effective date */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="body-md text-center">
              These terms are effective from January 2026. We may update them from time to time — any changes will be communicated clearly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
