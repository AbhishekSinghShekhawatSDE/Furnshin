import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Interior Decoration Jaipur — Full Room Design & Fit-Out | Furnshin",
  description: "Complete interior decoration for homes and offices in Jaipur. False ceilings, wall finishes, lighting design, furniture layout, and full fit-out. 30 years. Free site visit.",
};

const faqs = [
  { q: "How is interior decoration different from interior design?", a: "In practice, most people mean the same thing. We do the planning, execution, and finishing — space measurement, layout decisions, material specification, and installation of everything from false ceilings to light fittings. If you're asking whether we produce AutoCAD drawings and mood boards: yes, we include a visual plan as part of the process." },
  { q: "Can you handle both a new flat and a renovation?", a: "Yes. For new construction, we come in after plastering and before tiling — which is the right sequence. For renovations, we assess what needs to be demolished, what can be retained, and plan accordingly. The two are priced differently." },
  { q: "Do you have a minimum room size or project size?", a: "No minimum room size. For project size, we are most effective above Rs. 3–4 lakh, where the planning investment makes sense. Below that, you may get better value from a single-trade contractor." },
  { q: "What is included in a false ceiling job?", a: "Gypsum board on MS framework, with tape and jointing compound for a seamless finish. We include all cove light channels, down-lighter cut-outs, and fan drop rods as part of the false ceiling scope. Electrical wiring runs are coordinated with your electrician." },
  { q: "How do you handle design decisions and changes?", a: "We prepare a design plan — 2D layout with material callouts and colour references — before any work starts. Approved changes before fabrication begin are free. Changes after fabrication starts attract a variation charge, which we discuss before proceeding." },
];

export default function InteriorDecorationPage() {
  return (
    <>
      <section className="pt-36 pb-20" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Interior Decoration — Jaipur</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-3 mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Full Interior Design<br /><span style={{ color: "#C9A96E" }}>& Fit-Out Services</span><br />in Jaipur
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-8">
              Complete interior transformation for homes, offices, and commercial spaces. Space planning, false ceilings, wall finishes, lighting, furniture, and floor-to-ceiling execution — all from one team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get free consultation <ArrowRight size={15} /></Link>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded"><Phone size={14} /> {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#3D2218" }}>
        <div className="container-custom py-8">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            {["Design plan before execution", "30 years in Jaipur residential and commercial", "Own craftsmen — no subcontracting", "Materials specified in writing", "Post-handover follow-up at 30 and 90 days"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}><CheckCircle size={13} /> {t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">What we do</span>
            <h2 className="text-4xl font-bold text-espresso mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Interior decoration scope</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Space planning and layout", desc: "How you move through and use a space is the first decision, not the last. We plan furniture placement, traffic flow, and light sources before specifying any material.", specs: ["2D layout with furniture positions", "Traffic flow and clearance", "Natural light assessment", "Electrical and plumbing coordination"] },
              { title: "False ceiling design", desc: "Gypsum board and POP ceilings with integrated cove lighting, down-lighters, fans, and accent zones. Designed around the room's proportions, not a catalogue template.", specs: ["Gypsum and POP options", "Cove light integration", "Fan drop and down-lighter positions", "Multi-level and curved formats"] },
              { title: "Wall finishes and textures", desc: "Textured paint, Venetian plaster, wallpaper, panelling, and feature walls. We specify by room type and orientation — not every wall needs the same treatment.", specs: ["Asian Paints Royale Texture", "Wallpaper with professional fixing", "MDF wall panelling", "Stone cladding feature walls"] },
              { title: "Lighting design", desc: "Layered lighting with ambient, task, and accent zones. We specify light temperatures and CRI for every room — warm versus cool, and where each belongs.", specs: ["Ambient, task, and accent zones", "Light temperature specification", "LED strip and cove integration", "Dimmer provision planning"] },
              { title: "Soft furnishing and decor", desc: "Curtain tracks and fabrics, cushion and upholstery coordination, and decor accessories. Selected to complement the furniture and finish palette rather than added as afterthoughts.", specs: ["Curtain and blind specification", "Fabric samples before order", "Cushion and throw coordination", "Decor and accessory placement"] },
              { title: "Full fit-out execution", desc: "For complete transformations, we manage the entire sequence — false ceiling, electrical rough-in, flooring, painting, furniture, and final styling — as a single coordinated project.", specs: ["Sequence plan for all trades", "Single point of contact", "Pre-delivery punch list", "Styled handover with client walkthrough"] },
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
            <span className="section-label">What to expect</span>
            <h2 className="text-4xl font-bold text-cream mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>From a first call to a finished room</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Site visit and brief", desc: "We visit the space, understand how you use it, and discuss your requirements, style preferences, and budget range. This takes 1–2 hours." },
              { step: "2", title: "Design plan", desc: "Layout drawing with furniture positions, ceiling zones, and lighting plan. Material and colour references for your approval." },
              { step: "3", title: "Specification and quote", desc: "Itemised quote covering every element with brand, grade, and finish specified. You know what you are paying for before committing." },
              { step: "4", title: "Execution and handover", desc: "Our team executes in sequence. You have one contact for all updates. Handover is done with a walkthrough and punch list closure." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}>{step}</div>
                <h3 className="font-bold text-cream mb-2">{title}</h3>
                <p className="text-cream/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Questions</span>
            <h2 className="text-4xl font-bold text-espresso mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>Interior decoration — what people ask</h2>
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
          <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Start your interior project</h2>
          <p className="text-cream/50 mb-8 leading-relaxed">Share your space details. We visit, plan, and send a written quote and design brief within 48 hours. No commitment before you see the plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact" className="btn-primary">Book free consultation <ArrowRight size={15} /></Link>
            <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 px-6 py-3 border border-cream/20 text-cream font-semibold hover:border-sand-gold hover:text-sand-gold transition-colors rounded text-sm"><Phone size={14} /> {BRAND.phone}</a>
          </div>
          <Link href="/case-studies" className="text-cream/30 text-xs hover:text-sand-gold transition-colors underline underline-offset-2">See completed interior projects</Link>
        </div>
      </section>
    </>
  );
}
