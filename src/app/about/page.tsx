export const metadata = { title: "About", alternates: { canonical: "https://catcareguides.com/about" } };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-bold">About Cat Care Guides</h1>
      <p>Cat Care Guides publishes practical reviews and comparisons to help people choose effective air cleaners for real homes and real budgets.</p>
      <p>Our editorial lead is <strong>Dr. Alex Chen</strong>. We focus on filtration quality, room-size matching, noise, and long-term ownership cost.</p>
    </div>
  );
}
