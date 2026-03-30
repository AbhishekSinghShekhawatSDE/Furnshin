import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Star, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Custom Furniture Jaipur — Modular Kitchens, Wardrobes, Built-In Storage | Furnshin",
  description: "Built-to-measure modular kitchens, wardrobes, beds, and storage in Jaipur. Every unit sized to your actual space. Free site visit. 30 years of craftsmanship.",
  openGraph: {
    title: "Custom Furniture in Jaipur | Furnshin",
    description: "Modular kitchens, wardrobes, TV units, and beds built to your exact dimensions. Own workshop. Written quote.",
  },
};

const faqs = [
  { q: "How long does a modular kitchen take to install?", a: "Typically 10–18 days from measurement sign-off to handover. That includes fabrication, site preparation, installation, and appliance fitting. If you are coordinating with a civil team, we give you a sequenced schedule." },
  { q: "What materials do you use for kitchen shutters?", a: "HDF, MDF, plywood, and solid wood depending on budget and application. We show you samples and explain durability differences. Laminate, acrylic, and membrane finishes are all options. We specify in the quote." },
  { q: "Can you work around non-standard room dimensions?", a: "That is the whole point of custom furniture. We measure the space, account for plumb issues, pipe runs, and beam positions, and design accordingly. Off-the-shelf units assume your room is standard — most Jaipur homes are not." },
  { q: "Do you fit appliances as part of the kitchen?", a: "We handle built-in hob, chimney, and microwave integration. We coordinate with your appliance supplier on cutout sizes. Standalone appliance supply is optional." },
  { q: "What is the difference between your wardrobes and a carpenter's job?", a: "Primarily precision and repeatability. Our units are fabricated in controlled conditions, checked dimensionally before delivery, and installed with alignment tools. A carpenter working on-site is measuring and cutting in the same room where sawdust is flying. Both approaches can produce good results — ours produces consistent results." },
];

export default function CustomFurniturePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Custom Furniture — Jaipur</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Modular Kitchens,<br />
              <span style={{ color: "#C9A96E" }}>Wardrobes & Built-In</span><br />
              Storage in Jaipur
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              Furniture built to your exact room dimensions. Modular kitchens, full wardrobes, TV units, study tables, beds, and bespoke storage. Fabricated in our own workshop — not assembled from a catalogue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book free site visit <ArrowRight size={15} /></Link>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded">
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
            {["Free site visit and measurement", "Fabricated in own workshop", "Supply and installation included", "ISI-grade plywood and hardware", "Two-year workmanship warranty"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}>
                <CheckCircle size={13} /> {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">What we build</span>
            <h2 className="text-4xl font-bold text-espresso mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Custom furniture for every room
            </h2>
            <p className="text-text-dark/55 max-w-lg mx-auto text-sm">Every unit is built to spec. No standard sizes imposed on non-standard rooms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Modular kitchens", desc: "L-shaped, U-shaped, parallel, and island configurations. Hob, chimney, and oven integration. Loft and base units with soft-close hinges. Full layout plan before fabrication starts.", specs: ["HDF/plywood cabinet body", "Laminate, acrylic, or membrane shutters", "Soft-close hinges and drawer channels", "Chimney and appliance integration"] },
              { title: "Modular wardrobes", desc: "Full-height and mid-height wardrobes with internal layout designed for how you actually use the space — hanging sections, shelf zones, drawers, and accessory fittings.", specs: ["Walk-in and sliding door options", "Internal layout with zones", "Mirrors and loft integration", "Soft-close sliding hardware"] },
              { title: "TV units and entertainment walls", desc: "Floor-to-ceiling wall units with panel backdrops, concealed cable management, display niches, and storage below. Designed around your TV size and room dimensions.", specs: ["Full or partial wall coverage", "Concealed cable runs", "Floating or floor-standing base", "Backlit panel option"] },
              { title: "Study tables and home office", desc: "Built-in study units, work-from-home desks with overhead storage, and bookshelves designed to fit the wall — not a furniture catalogue dimension.", specs: ["Wall-fixed or freestanding", "Overhead shelving integration", "Cable management built-in", "Ergonomic depth options"] },
              { title: "Beds and bedroom furniture", desc: "Platform beds, storage beds with hydraulic lifts, bedside units, and dresser tables. All built to your mattress size and ceiling height.", specs: ["Standard and custom mattress sizes", "Hydraulic storage base option", "Upholstered headboard integration", "Matching side units"] },
              { title: "Crockery and display units", desc: "Dining room storage, crockery units with glass-front shutters, buffet sideboards, and bar cabinets. Designed for the dining space rather than placed against it.", specs: ["Glass shutter with interior lights", "Solid and mesh back panel options", "Integrated bar and wine storage", "Full-height and sideboard formats"] },
            ].map(({ title, desc, specs }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-taupe/25 hover:border-sand-gold hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-espresso mb-2">{title}</h3>
                <p className="text-text-dark/55 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-text-dark/50">
                      <CheckCircle size={11} style={{ color: "#C9A96E" }} /> {s}
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
              <span className="section-label">The actual problem</span>
              <h2 className="text-4xl font-bold text-espresso mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Most modular furniture in Jaipur is assembled, not designed
              </h2>
              <div className="flex flex-col gap-4 text-text-dark/65 text-sm leading-relaxed">
                <p>There is a difference between buying a modular system and installing it, versus designing furniture that actually fits your room. Most vendors in Jaipur — including large national brands — sell standard-dimension carcasses with swappable door panels. When your wall is 2,650mm and their unit is 2,400mm, the gap gets a filler panel and the job is done.</p>
                <p>We don't work that way. Every unit we build is dimensioned to your actual space. If the ceiling slopes, the wardrobe follows it. If the kitchen has a beam at one end, the loft unit steps to account for it. This takes more planning. It also means the result looks like it belongs in the room.</p>
                <p>Our workshop is in Jaipur. We fabricate, deliver, and install. If something is wrong on installation day, it gets corrected the same day — not after a six-week wait for a replacement component from a distributor.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Shield, title: "ISI-grade plywood as standard", desc: "We use BWP-grade (boiling waterproof) plywood for kitchen cabinets and MR-grade for wardrobes. The specification is in your quote — not a verbal assurance." },
                { icon: Clock, title: "Layout approval before fabrication", desc: "You see the detailed layout drawing, with dimensions, before a single cut is made. Changes are easier to make on paper than on a finished cabinet." },
                { icon: Star, title: "Hardware with load ratings", desc: "Hinge brands, drawer channels, and sliding systems are specified with weight ratings. We don't use un-branded hardware to save margins." },
                { icon: CheckCircle, title: "Installation by experienced fitters", desc: "The team that installs our furniture has been doing it for years. Cabinet alignment, plumb checks, and door adjustment are done to half-millimetre tolerance." },
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

      {/* Comparison */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label">How we compare</span>
            <h2 className="text-4xl font-bold text-cream mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Furnshin vs showroom modular vs local carpenter</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
                  <th className="text-left px-5 py-4 text-cream/35 text-xs tracking-widest uppercase w-48">What matters</th>
                  <th className="px-5 py-4 text-center font-bold" style={{ color: "#C9A96E" }}>Furnshin</th>
                  <th className="px-5 py-4 text-center text-cream/35">Showroom brand</th>
                  <th className="px-5 py-4 text-center text-cream/35">Local carpenter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Layout drawing before work", "Yes, with dimensions", "Standard catalogue layout", "No — verbal agreement"],
                  ["Custom dimensions", "Built to your exact space", "Standard sizes with fillers", "Yes, but tolerance varies"],
                  ["Material specification in quote", "Grade, brand, and thickness", "Category names only", "Verbal"],
                  ["Fabrication location", "Own workshop in Jaipur", "Factory (out of state)", "On-site"],
                  ["Hardware brands specified", "Yes, with load ratings", "Brand name, no specs", "Not specified"],
                  ["Warranty", "Two years workmanship", "One year parts", "None typically"],
                  ["Snagging on same day", "Standard practice", "Replacement part lead time", "Varies"],
                ].map(([attr, ours, showroom, carp], i) => (
                  <tr key={attr} style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: "1px solid rgba(201,169,110,0.07)" }}>
                    <td className="px-5 py-4 text-cream/55 font-medium">{attr}</td>
                    <td className="px-5 py-4 text-center font-semibold" style={{ color: "#C9A96E" }}>{ours}</td>
                    <td className="px-5 py-4 text-center text-cream/30">{showroom}</td>
                    <td className="px-5 py-4 text-center text-cream/30">{carp}</td>
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
            <span className="section-label">How it works</span>
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>From your room to the finished unit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Site measurement", desc: "We measure every wall, beam, and pipe run. Photos and dimensions are taken before any design discussion." },
              { step: "2", title: "Layout drawing", desc: "You receive a scaled drawing with unit dimensions, zones, and internal layout. You approve or modify before we proceed." },
              { step: "3", title: "Material samples", desc: "You see and touch the shutter finish, hardware, and internal fittings before sign-off. Nothing is assumed from a colour card." },
              { step: "4", title: "Fabrication and fit", desc: "Built in our workshop, delivered, and installed. Plumb and alignment checked before handover. Snags fixed same day." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-6 rounded-2xl border border-taupe/25 bg-white">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4" style={{ backgroundColor: "#2C1810", color: "#C9A96E" }}>{step}</div>
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
            <span className="section-label">Common questions</span>
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Custom furniture — what people ask</h2>
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
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get a custom furniture quote</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">Modular kitchen, wardrobe, storage, or bedroom furniture — we visit the space, take measurements, and send a layout drawing with quote within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact" className="btn-primary">Book free site visit <ArrowRight size={15} /></Link>
            <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm">
              <Phone size={14} /> {BRAND.phone}
            </a>
          </div>
          <Link href="/portfolio" className="text-cream/30 text-xs hover:text-sand-gold transition-colors underline underline-offset-2">See completed furniture projects</Link>
        </div>
      </section>
    </>
  );
}
