import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cat Care Guides: Expert Advice for Happy Indoor Cats (2026)" },
  description: "Expert cat care guides, product reviews, and health advice for indoor cats. Trusted by cat owners worldwide.",
  alternates: { canonical: "https://catcareguides.com" },
  openGraph: {
    title: "Cat Care Guides: Expert Advice for Happy Indoor Cats (2026)",
    description: "Expert cat care guides, product reviews, and health advice for indoor cats. Trusted by cat owners worldwide.",
    url: "https://catcareguides.com",
    type: "website",
  },
};

export default async function HomePage() {
  const articles = await getAllArticles();
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Updated for 2026</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Cat Care Guides: Expert Advice for Happy, Healthy Indoor Cats
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vet-reviewed guides to help you choose the best food, litter, toys, and healthcare for your indoor cat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/best-cat-food-for-indoor-cats" className="inline-flex items-center justify-center bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors">Best Cat Food Picks</Link>
            <Link href="/best-cat-litter-boxes" className="inline-flex items-center justify-center bg-white text-cyan-700 border-2 border-cyan-200 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 transition-colors">Best Litter Boxes</Link>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Cat Care Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all duration-200">
                <span className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded mb-3">{g.category}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{g.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}