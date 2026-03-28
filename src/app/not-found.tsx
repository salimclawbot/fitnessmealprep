import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-16 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-5 text-lg text-slate-600">
          The page you requested does not exist or may have moved.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
