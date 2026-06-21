import type { Metadata } from "next";
import "../styles/globals.css";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bot.jewelry"),
  title: {
    default: "Bot.Jewelry — AI Gold Advisor & Jewelry Intelligence Platform",
    template: "%s | Bot.Jewelry",
  },
  description:
    "AI-powered gold advisor: compare gold purity, estimate gold value, get jewelry buying guidance, and generate research reports — all powered by AI.",
  keywords: [
    "gold price guide",
    "buy gold",
    "gold jewelry",
    "wedding jewelry",
    "gold investment",
    "gold purity",
    "gold buying guide",
    "jewelry comparison",
  ],
  openGraph: {
    title: "Bot.Jewelry — AI Gold Advisor & Jewelry Intelligence Platform",
    description:
      "Search gold information, compare purity levels, estimate value, and get personalized jewelry guidance — powered by AI.",
    url: "https://bot.jewelry",
    siteName: "Bot.Jewelry",
    type: "website",
    images: ["/images/og-cover.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bot.Jewelry — AI Gold Advisor",
    description: "AI Gold Advisor & Jewelry Intelligence Platform",
    images: ["/images/og-cover.svg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bot.Jewelry",
    url: "https://bot.jewelry",
    applicationCategory: "LifestyleApplication",
    description:
      "AI-powered gold advisor and jewelry intelligence platform offering gold comparison, value estimation, buying guidance, and research reports.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
