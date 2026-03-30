import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Aluminum Windows & Doors Jaipur — uPVC, Sliding, Casement | Furnshin",
  description: "Aluminum and uPVC windows, sliding doors, casement windows, and architectural facades in Jaipur. Climate-rated for Rajasthan heat. Free site visit and written quote.",
};

const faqs = [
  { q: "What is the difference between aluminum and uPVC windows?", a: "Aluminum is stronger and slimmer — better for large openings and commercial facades. uPVC has better thermal insulation and is lower maintenance. Both are more durable than wood in Rajasthan's climate. We recommend based on the opening size and use." },
  { q: "How do aluminum windows perform in Jaipur's summer heat?", a: "Aluminum conducts heat, so thermal break profiles are recommended for west and south-facing windows. The break is a polyamide strip inside the frame that separates the interior and exterior aluminium, reducing heat transfer by around 60%." },
  { q: "Can you match the existing window style in my home?", a: "Usually yes. We can match standard section profiles and colors. For unusual profiles in older buildings, we assess on-site before committing." },
  { q: "Do you supply glazing separately from the frame?", a: "No — we supply and install the complete unit: frame, glass, and hardware. This avoids the common problem of glazing supplied by one contractor and frames by another, with no one accountable for the seal." },
  { q: "How long does a full house window replacement take?", a: "A typical 2BHK with 8–10 windows takes 3–5 days. We work room by room to minimise disruption. The house is never fully open at any one time." },
];

export default function AluminumSolutionsPage() {
  return (
    <>
      <section className="pt-36 pb-20" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Aluminum Solutions — Jaipur</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Aluminum Windows,<br /><span style={{ color: "#C9A96E" }}>Doors & Facades</span><br />in Jaipur
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              uPVC and aluminum windows with thermal break glazing for Rajasthan's climate. Sliding, casement, and tilt-and-turn configurations. Architectural facades and shopfronts. Supply and installation by our own team.
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
            {["Thermal break profiles for Rajasthan heat", "Tempered double-glazed options", "5-year workmanship warranty", "Free site measurement", "Complete supply and installation"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}><CheckCircle size={13} /> {t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Products and scope</span>
            <h2 className="text-4xl font-bold text-espresso mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Aluminum solutions we provide in Jaipur</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Casement windows", desc: "Single and double casement, top-hung, and tilt-and-turn configurations. Suitable for bedrooms and ventilation-priority spaces.", specs: ["Aluminum or uPVC section", "Single, double, and triple glazed", "Mosquito mesh integration", "Powder coat in any RAL color"] },
              { title: "Sliding windows and doors", desc: "Two, three, and four-track sliding systems for large openings, balconies, and terrace access. Low-sill threshold options for accessibility.", specs: ["Heavy-duty roller hardware", "Interlocking sash for security", "Fly mesh track integration", "Up to 3m panel width"] },
              { title: "Fixed and picture windows", desc: "Floor-to-ceiling fixed glazing for views and natural light. Combined with casement or sliding vents where ventilation is required.", specs: ["Structural silicone glazing", "Structural or thermally broken frame", "Internal and external bead glazing", "Tinted and low-E glass options"] },
              { title: "Aluminum entrance doors", desc: "Single and double-leaf aluminum framed entrance doors with multi-point locking, hydraulic closers, and flush or panel profiles.", specs: ["Multi-point locking as standard", "Powder or anodised finish", "Hydraulic or concealed closer", "Digital lock integration possible"] },
              { title: "Shopfront systems", desc: "Commercial aluminum shopfronts with automatic sliding, swing, or bi-fold configurations. High-traffic rated hardware.", specs: ["Stainless or powder coat finish", "Full-height glazed panels", "Auto-slide option", "Security grille integration"] },
              { title: "Architectural facades", desc: "Curtain wall, structural glazing, and cladding systems for commercial and residential buildings. Engineering support for large-span installations.", specs: ["Stick and unitised curtain wall", "Structural sealant glazing", "Composite and ACM cladding", "Thermal and acoustic performance"] },
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
              <span className="section-label">Why this matters in Jaipur</span>
              <h2 className="text-4xl font-bold text-espresso mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Wood warps. Aluminum doesn't.</h2>
              <div className="flex flex-col gap-4 text-text-dark/65 text-sm leading-relaxed">
                <p>Jaipur averages 46°C in summer and 95%+ humidity during the monsoon. Wooden windows absorb both. They swell in July, split in April, and need repainting every two years. Most homeowners accept this as normal because they grew up with it.</p>
                <p>Aluminum profiles — particularly those with thermal break inserts — do not change dimension with temperature or humidity. The window that opens smoothly in December opens the same way in June. That is not a marketing claim; it is a material property.</p>
                <p>The other issue is glazing. A single pane of glass in Jaipur's west-facing rooms is effectively a radiator from noon to 6pm. Double-glazed units with a 12mm air gap reduce solar heat gain by 40–60%. We specify glass based on orientation, not just size.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Shield, title: "Thermal break profiles specified by orientation", desc: "West and south-facing openings get thermal break as standard. North and east facing get standard profiles unless you specify otherwise." },
                { icon: Clock, title: "Measured on site, not from drawings", desc: "Openings in Jaipur construction are rarely plumb. We measure the actual reveals, not the architect's drawing dimensions." },
                { icon: CheckCircle, title: "Sealed and tested before handover", desc: "All windows get a water infiltration check with a hose. Any joint that leaks gets resealed before we leave." },
                { icon: Shield, title: "Five-year workmanship warranty", desc: "Frame and glazing seal covered for five years. Hardware warranty follows manufacturer terms — typically two to five years." },
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

      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label">Comparison</span>
            <h2 className="text-4xl font-bold text-cream mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Aluminum vs wood vs uPVC for Jaipur homes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
                  <th className="text-left px-5 py-4 text-cream/35 text-xs tracking-widest uppercase w-48">Factor</th>
                  <th className="px-5 py-4 text-center font-bold" style={{ color: "#C9A96E" }}>Aluminum</th>
                  <th className="px-5 py-4 text-center text-cream/35">Wood</th>
                  <th className="px-5 py-4 text-center text-cream/35">uPVC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Heat resistance", "Excellent (with thermal break)", "Poor — warps above 38°C", "Good"],
                  ["Humidity resistance", "Excellent", "Poor — swells in monsoon", "Excellent"],
                  ["Maintenance", "Powder coat: 15+ years", "Repaint every 2 years", "Wipe clean, no paint"],
                  ["Spanning large openings", "Excellent structural strength", "Limited span", "Limited span"],
                  ["Thermal insulation", "Good with thermal break", "Good naturally", "Very good"],
                  ["Design range", "Any RAL color, anodised", "Natural wood tones", "Limited to white/woodgrain"],
                  ["Lifespan", "30+ years", "10–15 with maintenance", "20+ years"],
                ].map(([attr, al, wood, upvc], i) => (
                  <tr key={attr} style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: "1px solid rgba(201,169,110,0.07)" }}>
                    <td className="px-5 py-4 text-cream/55 font-medium">{attr}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#C9A96E" }}>{al}</td>
                    <td className="px-5 py-4 text-center text-cream/30">{wood}</td>
                    <td className="px-5 py-4 text-center text-cream/30">{upvc}</td>
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
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Aluminum windows — what people ask</h2>
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
          <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get a window replacement or new installation quote</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">We measure the openings, specify the profiles for your orientation, and send a written quote within 48 hours. No commitment before that.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book free site visit <ArrowRight size={15} /></Link>
            <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm"><Phone size={14} /> {BRAND.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
