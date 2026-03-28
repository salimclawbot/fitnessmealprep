import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan-100 bg-cyan-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">Cat Care Guides</h3>
          <p className="mt-2">Expert cat care guides, product reviews, and health advice for indoor cats. Trusted by cat owners worldwide.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Guides</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/best-cat-food-for-indoor-cats" className="hover:text-cyan-700">Best Cat Food for Indoor Cats</Link></li>
            <li><Link href="/best-cat-litter-boxes" className="hover:text-cyan-700">Best Cat Litter Boxes</Link></li>
            <li><Link href="/best-cat-trees-scratching-posts" className="hover:text-cyan-700">Best Cat Trees &amp; Scratching Posts</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Contact</h3>
          <p className="mt-2">hello@catcareguides.com</p>
        </div>
      </div>
      <div className="border-t border-cyan-100 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Cat Care Guides</div>
    </footer>
  );
}
