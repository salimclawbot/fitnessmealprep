import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Cat Care Guides — Expert Advice for Cat Owners",
  description: "Browse all Cat Care Guides articles covering nutrition, health, litter, toys, and everyday feline care. Evidence-based guidance from veterinary experts.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Cat Care Guides",
    "description": "Browse all Cat Care Guides articles covering nutrition, health, litter, toys, and everyday feline care.",
    "url": "https://catcareguides.com/guides",
    "publisher": {
      "@type": "Organization",
      "name": "Cat Care Guides",
      "url": "https://catcareguides.com"
    }
  };

  const articles = await getAllArticles();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">All Guides</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Cat care guides built for confident everyday decisions.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Browse evidence-based guidance on nutrition, litter setups, wellness routines, and cat product comparisons. Each guide is researched and reviewed by veterinary professionals so you can make informed decisions for your cat.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[5/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* eslint-disable */}
              <img src={article.image} alt={article.title} className="w-full h-full object-cover absolute inset-0" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{article.date}</p>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
              <Link
                href={`/guides/${article.slug}`}
                className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-2.5 font-semibold text-white transition hover:bg-teal-800"
              >
                Read Guide
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">About Our Guides</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Cat Care Guides was built because most cat health information online is either too vague to be useful or too technical to be practical. Our goal is to bridge that gap — delivering veterinary-quality guidance in plain language that everyday cat owners can act on.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Every guide on this site is developed with veterinary input and follows a structured research process. We review published studies, consult with practising veterinarians, and test the products we recommend. We update our guides as veterinary guidelines evolve.
        </p>

        <h2 className="mt-12 text-3xl font-black tracking-tight text-slate-900">What You Will Find Here</h2>
        <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-600 list-disc list-inside">
          <li><strong>Nutrition guides</strong> — how to choose the right food for your cat&apos;s age, weight, and health status</li>
          <li><strong>Health and wellness</strong> — preventive care, vaccination schedules, dental health, and when to call the vet</li>
          <li><strong>Behaviour guides</strong> — understanding cat body language, introducing new pets, and managing common behaviour problems</li>
          <li><strong>Product comparisons</strong> — honest, research-backed comparisons of cat food brands, litter boxes, toys, and accessories</li>
          <li><strong>Symptom guides</strong> — what common symptoms might mean and when they require urgent veterinary attention</li>
        </ul>

        <h2 className="mt-12 text-3xl font-black tracking-tight text-slate-900">Our Editorial Standards</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          We take editorial accuracy seriously. All guides are reviewed for factual accuracy before publication. Health claims are supported by peer-reviewed research or established veterinary guidelines. We clearly distinguish between evidence-based recommendations and general opinion. When evidence is limited or conflicting, we say so.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Product recommendations may include affiliate links. Our editorial process is independent of commercial partnerships — we never recommend products solely because of affiliate arrangements. See our <Link href="/affiliate-disclosure" className="text-teal-700 hover:underline">affiliate disclosure</Link> for full details.
        </p>
      </div>
    </section>
  );
}
