import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for TMJ Relief Hub.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Terms of Service</h1>
        <div className="prose mt-8 max-w-none">
          <p>
            By accessing TMJ Relief Hub, you agree to use the site for lawful purposes only and to accept these terms.
            The site content is provided on an informational basis without warranties of any kind.
          </p>
          <p>
            We may update, remove, or revise content at any time. You are responsible for evaluating whether site
            information fits your needs. We are not liable for losses arising from reliance on general educational
            content, third-party links, or product purchases made through external retailers.
          </p>
          <p>
            All original site content, branding, and design elements are protected by applicable intellectual property
            law. You may reference or quote short portions with attribution, but you may not republish full articles or
            misrepresent our content as medical advice from your organization.
          </p>
        </div>
      </article>
    </section>
  );
}
