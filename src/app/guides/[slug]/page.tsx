import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs, { breadcrumbSchema } from "@/components/Breadcrumbs";
import { getArticle, getAllSlugs } from "@/lib/articles";
import ComparisonVideo from "@/components/ComparisonVideo";
import { siteConfig } from "@/lib/site-config";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/guides/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteConfig.url}/guides/${article.slug}`,
      type: "article",
      siteName: siteConfig.name,
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const breadcrumbItems = [
    { label: "Guides", url: "/guides" },
    { label: article.title, url: `/guides/${article.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.image}`,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
    datePublished: article.date,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/guides/${article.slug}`,
    },
  };

  const faqSchema = article.faqSchema || null;
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="rounded-[2rem] bg-gradient-to-br from-teal-950 via-teal-800 to-slate-900 px-6 py-10 text-white sm:px-10">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-200">TMJ Guide</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{article.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-teal-50">{article.description}</p>
        <p className="mt-6 text-sm text-teal-100">
          By {article.author} · Published {article.date} · Updated {article.dateModified}
        </p>
      </div>

      <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="prose max-w-none rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-8 shadow-sm [&_img]:w-full [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-6 [&_figure]:my-6 [&_figure]:mx-0 [&_figcaption]:text-xs [&_figcaption]:text-center [&_figcaption]:text-slate-500 [&_figcaption]:mt-2 [&_.infographic]:border [&_.infographic]:border-slate-100 [&_.infographic]:rounded-2xl">
          <div style={{overflowX:"hidden",maxWidth:"100%",wordBreak:"break-word"}} dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
              <ComparisonVideo />
        </div>
        <aside className="h-fit rounded-[2rem] border border-teal-100 bg-teal-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">Quick Start</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Monitor food intake, weight, and energy levels weekly.</li>
            <li>Premium nutrition and regular vet check-ups prevent most health issues.</li>
            <li>Contact your vet if your cat stops eating for 24+ hours or shows lethargy.</li>
          </ul>
        </aside>
      </div>
    </article>
  );
}
