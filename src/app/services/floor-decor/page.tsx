import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Floor Decor Jaipur — Tiles, Marble, Vinyl Flooring Installation | Furnshin",
  description: "Complete flooring solutions in Jaipur — vitrified tiles, natural marble, engineered wood, and LVT vinyl flooring. Supply and installation. Free site visit. One-year warranty.",
};

const faqs = [
  { q: "What is the best flooring for Jaipur's climate?", a: "Vitrified tiles are the practical choice for most rooms — they don't react to humidity or temperature, are easy to maintain, and are available in natural stone finishes that look close to marble at a lower cost. For living areas where warmth and acoustic comfort matter, LVT (luxury vinyl tile) is a good option. Natural marble is beautiful but requires sealing and is cold underfoot in winter and can stain." },
  { q: "Do you supply the tiles or just install?", a: "Both. We supply from Jaipur's tile market — Somany, Kajaria, Nitco, and Morbi manufacturers — and install. Or we can install tiles you have already selected and sourced. The quote will specify which arrangement applies." },
  { q: "How long does a floor installation take?", a: "A typical 2BHK (900–1,100 sq ft) takes 5–8 days for tile fixing and grouting, with 24 hours curing before you can walk on it. Marble takes longer because joint cutting and polish coordination add time." },
  { q: "What is LVT flooring and is it suitable for Indian conditions?", a: "LVT (luxury vinyl tile) is a multi-layer synthetic flooring that looks like wood or stone but is waterproof and dimensionally stable. It is suitable for Jaipur's humidity swing between summer and monsoon. It is not UV-stable for outdoor use, but for internal spaces it performs well." },
  { q: "Can you install flooring over existing tiles?", a: "Yes, with conditions. For one layer over existing ceramic or vitrified tiles, it is possible if the substrate is level and the height addition is acceptable for doors and transitions. We check this on site before confirming." },
];

export default function FloorDecorPage() {
  return (
    <>
      <section className="pt-36 pb-20" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Floor Decor — Jaipur</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Flooring Installation<br /><span style={{ color: "#C9A96E" }}>in Jaipur — Tiles,</span><br />Marble & Vinyl
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              Complete flooring solutions — vitrified and ceramic tiles, natural marble, engineered wood, and LVT vinyl. Supply, laying, and grouting by our own team. One-year workmanship warranty.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get free site visit <ArrowRight size={15} /></Link>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded"><Phone size={14} /> {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#3D2218" }}>
        <div className="container-custom py-8">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            {["Supply and installation included", "Somany, Kajaria, Nitco, and Morbi options", "Anti-fracture membrane for large format", "One-year workmanship warranty", "Full floor prep before laying"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}><CheckCircle size={13} /> {t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Flooring types</span>
            <h2 className="text-4xl font-bold text-espresso mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Flooring solutions for every room and budget</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vitrified tiles", desc: "Double-charged and GVT (glazed vitrified) tiles in stone, marble, and wood-effect finishes. Most practical option for Jaipur — no maintenance, full moisture resistance, 20+ year lifespan.", specs: ["600x600 to 1200x2400mm sizes", "Rectified and polished options", "GVT and double-charged", "Anti-skid finish for bathrooms"] },
              { title: "Natural marble and granite", desc: "Makrana white, Bhandari green, black granite, and imported marble. Supplied and laid with matched grout lines and epoxy filling. Polished to mirror finish on-site.", specs: ["Makrana, Dungri, and Bhandari marble", "Imported Italian and Spanish marble", "Epoxy and cement grouting", "Machine polish after installation"] },
              { title: "Ceramic and porcelain tiles", desc: "Mid-range ceramic tiles for bathrooms, kitchens, balconies, and utility areas. Wall tiles to match floor in rectified format for seamless joint lines.", specs: ["300x300 to 600x1200mm range", "Wall and floor matched sets", "Anti-skid R11 for wet areas", "Designer and solid colour options"] },
              { title: "LVT and vinyl flooring", desc: "Click-lock luxury vinyl tile in wood and stone finishes. 100% waterproof, acoustically comfortable, and stable across Jaipur's temperature and humidity range.", specs: ["4mm to 8mm wear layer options", "Oak, walnut, and stone finishes", "Underfloor heating compatible", "Can install over existing floor"] },
              { title: "Engineered wood flooring", desc: "Real wood veneer on HDF core — the warmth and look of solid wood with significantly better dimensional stability in humid conditions.", specs: ["2mm–4mm real wood top layer", "Pre-finished or site-finished", "T&G click or glue-down", "AC4 wear rating for high traffic"] },
              { title: "Outdoor and terrace flooring", desc: "Anti-skid porcelain pavers, Kota stone, and composite deck tiles for terraces, balconies, and external areas. UV-stable and frost-resistant options.", specs: ["Kota stone for natural look", "Porcelain 20mm pavers for terraces", "Composite deck tiles", "Non-slip R12 rating"] },
            ].map(({ title, desc, specs }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-taupe/25 hover:border-sand-gold hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-espresso mb-2">{title}</h3>
                <p className="text-text-dark/55 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {specs.map((s) => <li key={s} className="flex items-center gap-2 text-xs text-text-dark/50"><CheckCircle size={11} style={{ color: "#C9A96E" }} /> {s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label">Comparison</span>
            <h2 className="text-4xl font-bold text-cream mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Flooring options compared for Jaipur homes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
                  <th className="text-left px-5 py-4 text-cream/35 text-xs tracking-widest uppercase w-40">Factor</th>
                  <th className="px-4 py-4 text-center text-cream/55 font-semibold">Vitrified</th>
                  <th className="px-4 py-4 text-center text-cream/55 font-semibold">Marble</th>
                  <th className="px-4 py-4 text-center text-cream/55 font-semibold">LVT Vinyl</th>
                  <th className="px-4 py-4 text-center text-cream/55 font-semibold">Eng. Wood</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Moisture resistance", "Excellent", "Needs sealing", "Excellent", "Good"],
                  ["Maintenance", "None", "Annual sealing", "Damp mop only", "Occasional oiling"],
                  ["Underfoot comfort", "Hard and cold", "Cold in winter", "Warm and quiet", "Warm and natural"],
                  ["Lifespan", "20–30 years", "Lifetime", "15–25 years", "20–30 years"],
                  ["Cost range (per sq ft)", "Rs. 65–250", "Rs. 120–600+", "Rs. 80–180", "Rs. 150–350"],
                  ["Best rooms", "All rooms", "Living, drawing", "Bedrooms, living", "Bedrooms"],
                ].map(([attr, ...cells], i) => (
                  <tr key={attr} style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: "1px solid rgba(201,169,110,0.07)" }}>
                    <td className="px-5 py-4 text-cream/55 font-medium">{attr}</td>
                    {cells.map((c, j) => <td key={j} className="px-4 py-4 text-center text-cream/40 text-xs">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Questions</span>
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Flooring — what people ask</h2>
          </div>
          <div className="flex flex-col divide-y divide-taupe/30">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-semibold text-espresso text-base">{q}</span>
                  <ChevronDown size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#C9A96E" }} />
                </summary>
                <p className="mt-3 text-text-dark/65 text-sm leading-relaxed pr-8">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get a flooring quote for your space</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">We measure the area, show you samples at the site, and send a written quote with material and installation costs separate. No hidden surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book free site visit <ArrowRight size={15} /></Link>
            <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm"><Phone size={14} /> {BRAND.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
