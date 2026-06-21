"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Sparkles, Scale, Calculator, Gift, FileText, Image as ImageIcon } from "lucide-react";

export default function HomePage() {
  const { strings } = useLocale();

  const features = [
    { href: "/chat", icon: Sparkles, title: strings.nav.chat, desc: "Ask anything about gold and jewelry." },
    { href: "/compare", icon: Scale, title: strings.nav.compare, desc: "Compare 24K, 22K, 21K, 18K, 14K." },
    { href: "/estimator", icon: Calculator, title: strings.nav.estimator, desc: "Educational gold value estimates." },
    { href: "/buying-assistant", icon: Gift, title: strings.nav.buying, desc: "Personalized jewelry recommendations." },
    { href: "/research", icon: FileText, title: strings.nav.research, desc: "Generate in-depth reports & guides." },
    { href: "/gallery", icon: ImageIcon, title: strings.nav.gallery, desc: "Browse jewelry inspiration." },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-[0.04]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          <span className="inline-block text-xs uppercase tracking-widest text-gold/80 border border-gold/30 rounded-full px-4 py-1 mb-6">
            {strings.tagline}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold gold-text mb-6 leading-tight">
            {strings.heroTitle}
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-10">{strings.heroSubtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/chat" className="btn-gold px-7 py-3 rounded-full">
              {strings.ctaStart}
            </Link>
            <Link
              href="/knowledge"
              className="px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            >
              {strings.ctaExplore}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="card-surface rounded-2xl p-6 hover:shadow-gold transition-shadow group"
            >
              <f.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg font-semibold text-stone-100 mb-1">{f.title}</h3>
              <p className="text-stone-400 text-sm">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="card-surface rounded-xl p-5 text-center text-xs text-stone-500">
          {strings.disclaimer}
        </div>
      </section>
    </div>
  );
}
