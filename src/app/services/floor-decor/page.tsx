import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Floor Decor in Jaipur — Premium Flooring Solutions | Furnshin",
  description: "Premium flooring installation in Jaipur — vitrified tiles, marble, engineered wood, SPC vinyl, and designer tiles. Complete floor decor by Furnshin.",
  alternates: { canonical: "/services/floor-decor" },
};

const features = [
  "Vitrified and porcelain tiles — 600x600 to 1200x1200mm",
  "Marble and natural stone flooring",
  "Engineered wood and wood-effect tiles",
  "SPC (Stone Plastic Composite) vinyl — ideal for offices",
  "Anti-skid tiles for bathrooms and outdoor areas",
  "Epoxy flooring for industrial and commercial spaces",
  "Complete floor removal and reinstallation",
];

export default function FloorDecorPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Floor Decor
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Premium flooring installation for homes and commercial spaces in Jaipur. Material selection guidance, proper laying, and a finish that holds up under daily use.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Flooring That Lasts</h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Flooring is the most-touched surface in any room. It needs to hold up under daily foot traffic, resist Jaipur's dust, and look as good in year 5 as it did on day one. Furnshin's floor decor service covers material selection, substrate preparation, and installation — all under one team.
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
                <h3 className="text-xl font-bold text-espresso mb-4">Flooring Price Guide (Jaipur 2026)</h3>
                {[
                  ["Basic vitrified tiles (600x600)", "₹45–80 per sq ft (installed)"],
                  ["Large format tiles (800x800+)", "₹75–130 per sq ft (installed)"],
                  ["Marble / natural stone", "₹120–300+ per sq ft (installed)"],
                  ["Engineered wood", "₹90–180 per sq ft (installed)"],
                  ["SPC vinyl", "₹65–120 per sq ft (installed)"],
                ].map(([material, price]) => (
                  <div key={material} className="flex justify-between py-2.5 border-b border-taupe/20 last:border-0 text-sm">
                    <span className="text-text-dark/70">{material}</span>
                    <span className="font-semibold text-espresso">{price}</span>
                  </div>
                ))}
                <p className="text-xs text-text-dark/40 mt-3">*Prices include supply and installation. Material selection affects final price.</p>
              </div>
              <div className="p-7 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #C9A96E, #b8966a)" }}>
                <h3 className="text-xl font-bold text-espresso mb-2">Get a Flooring Quote</h3>
                <p className="text-espresso/70 text-sm mb-5">Share room dimensions and preferred material for a quick estimate.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
