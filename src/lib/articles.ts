import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

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
  author: string;
  image: string;
  faqSchema?: Record<string, unknown> | null;
  articleSchema?: Record<string, unknown> | null;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

function isPlaceholderFaq(parsed: Record<string, unknown>): boolean {
  const entities = (parsed.mainEntity as Array<Record<string, unknown>>) || [];
  if (!entities.length) return false;
  return entities.every((e: Record<string, unknown>) => {
    const ans = (e.acceptedAnswer as Record<string, unknown>)?.text as string || "";
    return ans.includes("See the full guide on ");
  });
}

function parseJsonField(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "string") return null;
  try {
    const normalized = value;
    const parsed = JSON.parse(normalized);
    if (parsed["@type"] === "FAQPage" && isPlaceholderFaq(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function processContent(raw: string): string {
  let processed = raw;
  processed = processed.trimStart().replace(/^#\s+.*\n+/, "");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]\((.*?)\)/g, "[$2](/$1)");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]/g, "[$1](/$1)");
  return processed;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  const content = processContent(parsed.content);
  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(content);

  const title = (data.title as string) || slug;
  const description = (data.meta_description as string) || (data.description as string) || "Cat care guide article.";
  const author = (data.author as string) || "Dr. Emily Parsons, DVM";
  const date = (data.datePublished as string) || "2026-03-10";
  const dateModified = (data.dateModified as string) || date;
  const category = "Guide";

  let htmlContent = result.toString();

  htmlContent = htmlContent.replace(/<(h[2-6])>(.*?)<\/\1>/g, (match: string, tag: string, text: string) => {
    const customIdMatch = text.match(/\{#([^}]+)\}/);
    let id: string;
    let displayText = text;
    if (customIdMatch) {
      id = customIdMatch[1];
      displayText = text.replace(/\s*\{#[^}]+\}/, '');
    } else {
      const cleanText = text.replace(/<[^>]+>/g, "");
      id = toSlug(cleanText);
    }
    return `<${tag} id="${id}">${displayText}</${tag}>`;
  });

  const excerptMatch = parsed.content.match(/\*\*(.*?)\*\*/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : description;

  const image = (data.image as string) || '/og-image.jpg';

  return {
    slug,
    title,
    description,
    excerpt,
    content,
    htmlContent,
    date,
    dateModified,
    category,
    author,
    image,
    faqSchema: parseJsonField(data.faq_schema),
    articleSchema: parseJsonField(data.article_schema),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = getAllSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticle(slug)));
  return articles.filter(Boolean) as Article[];
}
