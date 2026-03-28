"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-cyan-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-cyan-800">Cat Care Guides</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/best-cat-food-for-indoor-cats" className="hover:text-cyan-700">Cat Food</Link>
          <Link href="/best-cat-litter-boxes" className="hover:text-cyan-700">Litter Boxes</Link>
          <Link href="/best-cat-toys-indoor-cats" className="hover:text-cyan-700">Cat Toys</Link>
          <Link href="/about" className="hover:text-cyan-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
