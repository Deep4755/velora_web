import AnimateIn from "../components/AnimateIn";

const sections = [
  {
    title: "What We Collect",
    content:
      "When you contact us through our website, we collect your name, email address, phone number (if provided) and any project details you share with us. We only collect information that is necessary to respond to your enquiry and deliver our services.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to respond to your enquiry, provide a quote, deliver our web design services and communicate with you about your project. We never sell, rent or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "Data Storage",
    content:
      "Your information is stored securely and only accessible to our team. We do not store payment card details — all payments are processed through secure third-party payment providers.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use basic analytics cookies to understand how visitors use our site. These cookies do not collect personal information and can be disabled in your browser settings.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access to, correction of, or deletion of your personal data at any time. Simply contact us at hello@agency.co.uk and we will respond within 30 days.",
  },
  {
    title: "Contact",
    content:
      "If you have any questions about how we handle your data, please contact us at hello@agency.co.uk. We are committed to protecting your privacy and handling your information responsibly.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Legal</p>
          <h1 className="heading-xl mb-4">Privacy Policy</h1>
          <div className="accent-line mx-auto mb-5" />
          <p className="body-lg !text-white/60 max-w-lg mx-auto">
            How we collect, use and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
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

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="body-md text-center">
              Last updated: January 2026. We may update this policy from time to time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
