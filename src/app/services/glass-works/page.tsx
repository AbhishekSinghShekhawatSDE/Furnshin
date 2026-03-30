import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Glass Works in Jaipur — Partitions, Doors, Shower Enclosures | Furnshin",
  description: "Custom glass work in Jaipur — decorative partitions, glass doors, shower enclosures, and structural glass installations. Toughened, frosted, and frameless glass by Furnshin.",
  alternates: { canonical: "/services/glass-works" },
};

const features = [
  "Full-height glass partitions for offices and homes",
  "Frameless shower enclosures and bath screens",
  "Decorative glass doors (sliding and hinged)",
  "Toughened safety glass — 8mm, 10mm, 12mm",
  "Frosted, tinted, and textured glass options",
  "Structural glass railings and balustrades",
];

const faqs = [
  { q: "What glass thickness do you recommend for office partitions?", a: "12mm toughened glass for full-height structural partitions, 8–10mm for internal non-structural dividers. We recommend based on height and application." },
  { q: "How long does office glass partition installation take?", a: "A standard office partition project (1,000–1,500 sq ft) typically takes 3–5 working days depending on complexity and access." },
  { q: "Can you do patterned or frosted glass?", a: "Yes — sandblasted, acid-etched, and film-applied frosting all available. Custom patterns are available for commercial and premium residential projects." },
];

export default function GlassWorksPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Glass Works
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Custom glass installations for residential and commercial spaces in Jaipur. Partitions, doors, enclosures, and structural glass — designed and installed by Furnshin.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What We Deliver
              </h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Glass is one of the highest-impact design choices in a commercial or residential space. Used correctly, it creates light, openness, and a sense of scale that no other material achieves. Furnshin's glass work division designs and installs custom glass installations across Jaipur with 30 years of precision and experience.
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
                <h3 className="text-xl font-bold text-espresso mb-2">Ready to Start?</h3>
                <p className="text-espresso/70 text-sm mb-5">Site visit within 48 hours of enquiry. Written quotation provided.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
