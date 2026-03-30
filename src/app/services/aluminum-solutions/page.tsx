import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aluminum Windows & Doors in Jaipur — UPVC Alternatives | Furnshin",
  description: "Architectural-grade aluminum windows, doors, facades, and structural aluminum fabrication in Jaipur. Heat and dust resistant — built for Rajasthan's climate.",
  alternates: { canonical: "/services/aluminum-solutions" },
};

const features = [
  "Aluminum casement and sliding windows",
  "Aluminum doors — hinged, sliding, pivot",
  "Aluminum composite panel facades for commercial spaces",
  "Powder-coated finish — any RAL colour",
  "EPDM weatherstripping for dust and rain sealing",
  "Toughened glass integration — 5mm, 8mm, 10mm",
  "Structural aluminum fabrication for commercial builds",
];

const faqs = [
  { q: "Aluminum or UPVC for Jaipur homes?", a: "Aluminum is generally the better choice for Jaipur. It is structurally stronger at thinner profiles, available in any colour, and performs better in the extreme temperature range (5°C to 45°C) Jaipur experiences." },
  { q: "How do you maintain aluminum windows?", a: "Aluminum windows require minimal maintenance — clean the frame occasionally with a damp cloth and lubricate hinges annually. The powder coating does not need repainting unlike wood." },
  { q: "Do you provide guarantees on the powder coating?", a: "We specify minimum 60-micron powder coating on all projects. This provides a 10–15 year finish life in Jaipur's conditions. We document the specification in writing for every project." },
];

export default function AluminumSolutionsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Aluminum Solutions
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Architectural-grade aluminum windows, doors, and facades — built for Jaipur's climate, specified to last 25+ years without warping, rusting, or maintenance burden.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What We Install</h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Aluminum is the material of choice for Jaipur's climate — it does not warp in heat, does not rust in monsoon, and does not require repainting. Furnshin fabricates and installs architectural-grade aluminum window and door systems for residential and commercial clients across Jaipur.
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
                <h3 className="text-xl font-bold text-espresso mb-2">Get a Window Quote</h3>
                <p className="text-espresso/70 text-sm mb-5">Share your window count and dimensions for a quick quotation.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
