import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  dateModified: string;
  category: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const articleMeta: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    dateModified: string;
  }
> = {
  "best-air-purifier-asthma": {
    title: "Best Air Purifier for Asthma (2026)",
    description:
      "Placeholder guide: top air purifiers for asthma-sensitive households, focused on CADR, HEPA filtration, and real-world noise levels.",
    category: "Health Guide",
    date: "2026-03-10",
    dateModified: "2026-03-10",
  },
  "best-air-purifier-mold": {
    title: "Best Air Purifier for Mold (2026)",
    description:
      "Placeholder guide: mold-focused air purifier picks with strong particulate capture and practical room-sizing recommendations.",
    category: "Problem-Solution",
    date: "2026-03-10",
    dateModified: "2026-03-10",
  },
  "best-air-purifier-baby-room": {
    title: "Best Air Purifier for Baby Room (2026)",
    description:
      "Placeholder guide: quiet, low-emission air purifier recommendations for nurseries and small bedrooms.",
    category: "Family Guide",
    date: "2026-03-10",
    dateModified: "2026-03-10",
  },
};

function processContent(raw: string): string {
  let processed = raw;
  processed = processed.replace(/^#\s+.*\n+/, "");
  return processed;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const meta = articleMeta[slug];
  if (!meta) return null;

  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const processed = processContent(raw);
  const result = await remark().use(html, { sanitize: false }).process(processed);

  const excerptMatch = raw.match(/\*\*(.*?)\*\*/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : meta.description;

  return {
    slug,
    title: meta.title,
    description: meta.description,
    excerpt,
    content: processed,
    htmlContent: result.toString(),
    date: meta.date,
    dateModified: meta.dateModified,
    category: meta.category,
  };
}

export function getAllSlugs(): string[] {
  return Object.keys(articleMeta);
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = getAllSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticle(slug)));
  return articles.filter(Boolean) as Article[];
}
