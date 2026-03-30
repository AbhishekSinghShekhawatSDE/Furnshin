import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Star, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Glass Works Jaipur — Partitions, Shower Enclosures, Glass Doors | Furnshin",
  description: "Glass partition walls, shower enclosures, frameless glass doors, and office glass work in Jaipur. Tempered and frosted glass installed by our own team. Free site visit.",
  openGraph: {
    title: "Glass Works in Jaipur | Furnshin",
    description: "Office glass partitions, shower enclosures, and glass railings in Jaipur. 30 years. Own team. Written quote.",
  },
};

const faqs = [
  { q: "How thick is the glass used for office partitions?", a: "10mm or 12mm toughened glass for full-height partitions. 8mm for door panels. We specify thickness in the quote based on height and application — not a guess." },
  { q: "Can glass partitions be installed without drilling into the ceiling?", a: "Yes. We use channel or bottom-fixed systems for spaces where drilling into concrete above is not possible. The structural method depends on the slab type — we check during the site visit." },
  { q: "What's the difference between tempered and laminated glass?", a: "Tempered glass is heat-treated, stronger, and shatters into small cubes. Laminated glass has a plastic interlayer — when it breaks, it holds together. We recommend laminated for shower screens and glass floors, tempered for partitions and doors." },
  { q: "Do you supply glass or just install?", a: "Both. We source from manufacturers in Jaipur and Jodhpur — both tempered and laminated, clear, frosted, tinted, and patterned. Supply and installation are quoted together." },
  { q: "How long does a glass partition installation take?", a: "A standard 400 sq ft office partition takes 2–4 working days including frame work. Full glass-fronted cabins with doors take 5–7 days. We give a written timeline before we start." },
];

export default function GlassWorksPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Glass Works — Jaipur</span>
            <h1
              className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Glass Partitions,<br />
              <span style={{ color: "#C9A96E" }}>Enclosures & Doors</span><br />
              in Jaipur
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              Tempered glass partitions for offices. Frameless shower enclosures. Glass railings and balustrades. Installed by our own team — no subcontracting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a free site visit <ArrowRight size={15} />
              </Link>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded"
              >
                <Phone size={14} /> {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ backgroundColor: "#3D2218" }}>
        <div className="container-custom py-8">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            {[
              "Free site visit and measurement",
              "Tempered and laminated glass supply",
              "Own installation team — no subcontracting",
              "Written quote before work starts",
              "One-year workmanship warranty",
            ].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}>
                <CheckCircle size={13} />
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Scope of work</span>
            <h2
              className="text-4xl font-bold text-espresso mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Glass work we handle in Jaipur
            </h2>
            <p className="text-text-dark/55 max-w-lg mx-auto text-sm">
              Everything below is quoted with material specifications, not vague estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Office glass partitions",
                desc: "Full-height and partition-height glass walls for offices and commercial spaces. Framed, frameless, or semi-frameless. Frosted films and manifestation available.",
                specs: ["8mm–12mm toughened glass", "Full or half-height", "Door integration possible", "Frosted and clear options"],
              },
              {
                title: "Frameless shower enclosures",
                desc: "Pivot doors, sliding enclosures, and walk-in shower screens. Stainless steel or chrome hardware. Installed level and sealed — no leaking from day one.",
                specs: ["10mm toughened glass", "Frameless pivot and sliding", "Chrome and matte black fittings", "Sealed at base and joints"],
              },
              {
                title: "Glass railings and balustrades",
                desc: "Staircase glass railings, balcony balustrades, and mezzanine guards. Post-fixed or channel-fixed depending on the slab.",
                specs: ["Laminated safety glass", "Post and channel mounting", "Handrail integration", "Indoor and outdoor"],
              },
              {
                title: "Glass doors",
                desc: "Frameless glass entrance doors, internal glass doors with handles and hinges, and hinged or pivot configurations. Tinted and clear options.",
                specs: ["12mm toughened glass", "Floor spring or patch fittings", "Pull handles and lock integration", "Tinted and sandblasted options"],
              },
              {
                title: "Structural glass facades",
                desc: "Commercial shopfront glazing, structural sealant glazing, and curtain wall systems for retail and office buildings.",
                specs: ["Spider glazing and point fixing", "Sealant and framed systems", "Single and double glazed", "UV filtering coatings"],
              },
              {
                title: "Glass canopies and skylights",
                desc: "Entrance canopies, garden skylights, and internal roof lights. Laminated glass with structural support. Weatherproofed and sealed.",
                specs: ["Laminated safety glass", "Structural steel support", "Weatherproof silicone", "Fixed and operable options"],
              },
            ].map(({ title, desc, specs }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-taupe/25 hover:border-sand-gold hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-espresso mb-2">{title}</h3>
                <p className="text-text-dark/55 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-text-dark/50">
                      <CheckCircle size={11} style={{ color: "#C9A96E" }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">The real issue</span>
              <h2
                className="text-4xl font-bold text-espresso mt-3 mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bad glass work shows up within six months
              </h2>
              <div className="flex flex-col gap-4 text-text-dark/65 text-sm leading-relaxed">
                <p>
                  The most common complaints we fix aren't about glass quality. They're about installation. Partitions that aren't plumb. Shower doors that don't seal. Railings with deflection at the post. All of it comes from installation teams that don't specialise in glass.
                </p>
                <p>
                  We do glass work specifically. Our installation team works exclusively on glass and glazing — not general contractors who happen to handle glass as a side job. That difference shows in the finish level, sealing, and structural security of every job.
                </p>
                <p>
                  Every glass job we do gets a written specification before installation — glass thickness, fitting type, hardware specification, and tolerance allowances. If something isn't in the spec, it doesn't get built.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Shield, title: "Glass to specification only", desc: "We specify glass thickness, tempering, and laminate composition in writing. No substitutes without written approval." },
                { icon: Clock, title: "Measurements before fabrication", desc: "Glass is cut after site verification, not from drawings. Walls in Jaipur are rarely perfectly square — we account for this." },
                { icon: Star, title: "Hardware that lasts", desc: "Shower hinges, patch fittings, and door closers are from brands with verified load ratings. Not the cheapest option on the market." },
                { icon: CheckCircle, title: "Sealed and tested before handover", desc: "Shower enclosures get a water test. Railings get a load test. Partitions get a vertical check. Nothing signed off from a visual glance only." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl border border-taupe/25">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0EBE3" }}>
                    <Icon size={18} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="font-bold text-espresso mb-1 text-sm">{title}</p>
                    <p className="text-text-dark/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label">How we compare</span>
            <h2
              className="text-4xl font-bold text-cream mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Glass work: Furnshin vs generic contractor
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
                  <th className="text-left px-5 py-4 text-cream/35 text-xs tracking-widest uppercase w-56">What matters</th>
                  <th className="px-5 py-4 text-center font-bold" style={{ color: "#C9A96E" }}>Furnshin</th>
                  <th className="px-5 py-4 text-center text-cream/35 font-medium">Generic contractor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Glass specification in writing", "Yes — thickness, tempering, hardware", "Verbal or vague quote"],
                  ["Measurement before fabrication", "Site measurement, not drawing-based", "Often based on drawing"],
                  ["Installation team", "Dedicated glass team", "General carpentry team"],
                  ["Shower enclosure sealing", "Water-tested before handover", "Visual check only"],
                  ["Hardware brand", "Specified with load rating", "Cheapest available"],
                  ["Railing structural check", "Load test at each post", "Not standard practice"],
                  ["Warranty", "One year on workmanship", "Varies or none"],
                  ["Post-installation follow-up", "30 and 90 days", "On request only"],
                ].map(([attr, ours, generic], i) => (
                  <tr
                    key={attr}
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                      borderBottom: "1px solid rgba(201,169,110,0.07)"
                    }}
                  >
                    <td className="px-5 py-4 text-cream/55 font-medium">{attr}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#C9A96E" }}>{ours}</td>
                    <td className="px-5 py-4 text-center text-cream/30">{generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">The process</span>
            <h2
              className="text-4xl font-bold text-espresso mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From site visit to signed-off installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Site visit and measurement", desc: "Free. We measure the space, check the substrate and slab, and identify the right installation method. Nothing is assumed from a photo." },
              { step: "2", title: "Material spec and quote", desc: "You receive a written specification: glass type, thickness, hardware brand, and installation method. Itemised cost alongside it." },
              { step: "3", title: "Glass fabrication", desc: "Cut and tempered to site measurements after your approval. Lead time is 3–7 days depending on specification." },
              { step: "4", title: "Installation and testing", desc: "Our glass team installs and tests. Shower enclosures get a water test. Partitions and railings get structural and level checks. Snagging items fixed on the day." },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative p-6 rounded-2xl border border-taupe/25 bg-white"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                  style={{ backgroundColor: "#2C1810", color: "#C9A96E" }}
                >
                  {step}
                </div>
                <h3 className="font-bold text-espresso mb-2">{title}</h3>
                <p className="text-text-dark/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Questions</span>
            <h2
              className="text-4xl font-bold text-espresso mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Glass work — common questions
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-taupe/30">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="py-5 group">
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

      {/* CTA */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
      >
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2
            className="text-4xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get a free glass work quote
          </h2>
          <p className="text-cream/50 mb-8 leading-relaxed">
            Office partitions, shower enclosures, doors, railings — tell us what you need. We'll visit the site and send a written specification and quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact" className="btn-primary">
              Book free site visit <ArrowRight size={15} />
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm"
            >
              <Phone size={14} /> {BRAND.phone}
            </a>
          </div>
          <Link href="/case-studies" className="text-cream/30 text-xs hover:text-sand-gold transition-colors underline underline-offset-2">
            See our completed glass projects
          </Link>
        </div>
      </section>
    </>
  );
}
