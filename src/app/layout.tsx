import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Air Purifier Guide",
    template: "%s | Air Purifier Guide",
  },
  description:
    "Expert air purifier reviews, comparisons, and buying guides for cleaner indoor air.",
  metadataBase: new URL("https://airpurifierreport.com"),
  openGraph: {
    siteName: "Air Purifier Guide",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
