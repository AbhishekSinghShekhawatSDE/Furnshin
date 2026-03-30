import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Iron & Metal Works in Jaipur — Custom Gates, Railings & Grills | Furnshin",
  description: "Custom iron gates, MS railings, safety grills, and decorative metal fabrication in Jaipur. Powder-coated MS and wrought iron by Furnshin — 30 years of metal craftsmanship.",
  alternates: { canonical: "/services/iron-metal-works" },
};

const features = [
  "Custom MS and wrought iron gates",
  "Balcony and staircase railings",
  "Window safety grills and security doors",
  "Decorative iron panels and wall art",
  "MS pergolas and outdoor structures",
  "Powder-coated and paint finish options",
  "Site measurement and design before fabrication",
];

const faqs = [
  { q: "What is the difference between MS and wrought iron?", a: "MS (mild steel) is manufactured and more consistent — suitable for most residential gates and railings. Wrought iron has a more traditional, textured appearance and is used for heritage-style designs. Wrought iron is typically more expensive." },
  { q: "How do you prevent rust on MS gates in Jaipur?", a: "Proper anti-rust primer followed by quality powder coating is essential. We specify minimum 2-coat primer plus powder coat on all exterior metal work. Powder coating lasts 8–12 years in Jaipur's conditions when applied correctly." },
  { q: "Can you design custom patterns?", a: "Yes — custom scroll designs, geometric patterns, and laser-cut patterns are all available. We share design options before fabrication begins for client approval." },
];

export default function IronMetalWorksPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Iron & Metal Works
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Custom iron gates, railings, grills, and decorative metal fabrication — built by Furnshin's metal craftsmen with 30 years of Jaipur experience.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What We Fabricate</h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Metal fabrication is one of Furnshin's founding service areas. Iron gates, compound railings, balcony balusters, and decorative metal work have been part of our portfolio since 1996. Every piece is designed specifically for its location and purpose — not selected from a catalogue.
              </p>
              <div className="flex flex-col gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                    <span className="text-text-dark/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-7 rounded-2xl bg-white border border-taupe/30">
                <h3 className="text-xl font-bold text-espresso mb-4">Frequently Asked Questions</h3>
                {faqs.map((faq) => (
                  <div key={faq.q} className="mb-5 pb-5 border-b border-taupe/20 last:border-0 last:pb-0 last:mb-0">
                    <p className="font-semibold text-espresso text-sm mb-2">{faq.q}</p>
                    <p className="text-text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="p-7 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #C9A96E, #b8966a)" }}>
                <h3 className="text-xl font-bold text-espresso mb-2">Get a Gate Quote</h3>
                <p className="text-espresso/70 text-sm mb-5">Share your gate dimensions and style reference for a quote.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
