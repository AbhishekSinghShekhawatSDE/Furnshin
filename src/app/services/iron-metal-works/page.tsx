import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Iron & Metal Works Jaipur — Custom Gates, Railings, Grilles | Furnshin",
  description: "Custom iron gates, MS railings, safety grilles, staircase balusters, and decorative metalwork in Jaipur. Fabricated in our own workshop. Powder-coated finish. Free site visit.",
};

const faqs = [
  { q: "What is the difference between MS, wrought iron, and cast iron for gates?", a: "MS (mild steel) is the standard for gates and railings today — it is stronger than cast iron by weight, easier to weld, and cheaper. Wrought iron is a historical material rarely used in new work. Cast iron is brittle and used for decorative elements, not structural components. When someone calls a gate 'wrought iron' in Jaipur, they usually mean MS with a traditional profile." },
  { q: "How long does a custom gate take?", a: "Standard single or double gates take 7–12 working days from measurement to installation. More elaborate designs with scroll work or panel inserts take 14–20 days. We give a written timeline before you place an order." },
  { q: "Do you do powder coating or paint?", a: "Both, though we recommend powder coating for external work. It is applied electrostatically and baked at 200°C — far more durable than brush or spray paint in Jaipur's UV conditions. It typically lasts 8–12 years versus 2–3 for painted finishes." },
  { q: "Can you replicate an existing gate design?", a: "Yes. Bring photos or measurements. If the design has unusual profiles that require casting, we discuss that before quoting — most standard scroll and bar work can be replicated in MS." },
  { q: "Do your prices include installation?", a: "Yes. All our quotes include fabrication, transport, and installation. We don't quote fabrication-only and then add installation separately." },
];

export default function IronMetalWorksPage() {
  return (
    <>
      <section className="pt-36 pb-20" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Iron & Metal Works — Jaipur</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Custom Iron Gates,<br /><span style={{ color: "#C9A96E" }}>Railings & Metalwork</span><br />in Jaipur
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              Custom iron gates, MS railings, staircase balusters, security grilles, and decorative metalwork. Fabricated in our own workshop, powder-coated, and installed by the same team.
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
            {["Fabricated in own workshop in Jaipur", "Powder-coat finish as standard", "MS and SS options", "Installation by fabrication team", "Structural load certification on request"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}><CheckCircle size={13} /> {t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">What we fabricate</span>
            <h2 className="text-4xl font-bold text-espresso mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Metal fabrication work in Jaipur</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom iron gates", desc: "Single leaf, double leaf, and sliding gates for residential and commercial properties. Traditional scroll designs, flat bar grilles, or modern panel configurations.", specs: ["MS flat bar and square section", "Scroll and panel design options", "Motorisation provision", "Powder-coat any RAL color"] },
              { title: "Staircase railings", desc: "Internal and external staircase railings in MS, SS 304, or combinatio of both. Post spacing and baluster design to Building Code requirements.", specs: ["100mm max baluster spacing", "Handrail in round or flat bar", "SS 304 for outdoor exposure", "Glass infill panel option"] },
              { title: "Balcony balusters", desc: "Fixed MS or SS balcony railings with solid infill, vertical bar, or horizontal cable designs. Load-tested during installation.", specs: ["Min. 900mm height as standard", "Vertical and horizontal post options", "Stainless cable infill available", "Anchor-fixed or cast-in base"] },
              { title: "Window grilles and security", desc: "Fixed and openable security grilles for windows, doors, and vents. Flat bar, round bar, and anti-climb designs. Powder-coated.", specs: ["Fixed and hinged configurations", "Keyed-release emergency opening", "Anti-cut bar spacing option", "Matching gates and railings"] },
              { title: "Pergolas and steel structures", desc: "MS and galvanised steel pergola frames, car canopy structures, and shade structures. Welded and bolted construction.", specs: ["Hot-dip galvanised option", "Polycarbonate or GI sheet roofing", "Bolt-down base plate foundation", "Custom spans up to 6m"] },
              { title: "Decorative metalwork", desc: "Laser-cut and hand-wrought decorative panels, room dividers, name plates, and architectural feature metalwork.", specs: ["Laser cut flat plate designs", "Hand-scroll traditional work", "Powder or metallic paint finish", "Indoor and outdoor rated"] },
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

      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Our approach</span>
              <h2 className="text-4xl font-bold text-espresso mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                The gate is not just a gate — it sets the tone for the whole property
              </h2>
              <div className="flex flex-col gap-4 text-text-dark/65 text-sm leading-relaxed">
                <p>In Jaipur, the entrance gate is the first thing anyone sees of your home or business. It communicates the standard of everything behind it. A flimsy gate with uneven gaps and peeling paint communicates the same about the interior — whether or not the interior deserves it.</p>
                <p>We design and fabricate gates that are structurally sound, proportionally right for the opening, and finished to last. Powder coating is standard — not an upgrade. We don't offer brush-painted gates because they don't hold in Jaipur's UV and temperature cycles for more than two seasons.</p>
                <p>The same applies to railings. A staircase railing at the wrong height or with excessive deflection at the post is a safety issue, not just a cosmetic one. We follow standard spacing and height requirements on every job.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Shield, title: "Powder coat as standard", desc: "Electrostatically applied and baked at 200°C. Lasts 8–12 years in Jaipur's climate. Not an upgrade option — included in all external work." },
                { icon: Clock, title: "Fabricated in Jaipur, not outsourced", desc: "Our own workshop. If something needs a design change mid-fabrication, it can happen. No waiting for an out-of-state factory to respond." },
                { icon: CheckCircle, title: "Load-tested railings", desc: "Staircase and balcony railings are tested to 0.74 kN/m horizontal load before handover. We note this in the completion document." },
                { icon: Shield, title: "Anti-rust primer before top coat", desc: "All MS work gets a red oxide or epoxy primer before powder coating. This layer is the actual rust protection — the top coat is the UV and abrasion protection." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl border border-taupe/25">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0EBE3" }}><Icon size={18} style={{ color: "#C9A96E" }} /></div>
                  <div><p className="font-bold text-espresso mb-1 text-sm">{title}</p><p className="text-text-dark/50 text-xs leading-relaxed">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Questions</span>
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Iron and metal work — what people ask</h2>
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
          <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get a metalwork quote</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">Gate, railing, grille, or structural steelwork — we visit the site, measure, and send a written specification and quote within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book free site visit <ArrowRight size={15} /></Link>
            <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm"><Phone size={14} /> {BRAND.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
