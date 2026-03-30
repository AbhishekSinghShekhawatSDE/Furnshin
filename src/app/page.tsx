"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Phone, ChevronDown,
  Star, Clock, Shield, Users, Award, MapPin,
  Layers, Grid, Hammer, Columns, Layout
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useState, useRef, useEffect } from "react";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), { ssr: false });

// ─── BEFORE/AFTER SLIDER ───────────────────────────────────────────────────
function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const el = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!el.current) return;
    const rect = el.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  useEffect(() => {
    const up = () => { dragging.current = false; };
    const mm = (e: MouseEvent) => { if (dragging.current) move(e.clientX); };
    const tm = (e: TouchEvent) => { if (dragging.current && e.touches[0]) move(e.touches[0].clientX); };
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchend", up);
    window.addEventListener("touchmove", tm);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchmove", tm);
    };
  }, []);

  return (
    <div
      ref={el}
      className="relative rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl"
      style={{ height: 440 }}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) move(e.touches[0].clientX); }}
    >
      {/* BEFORE — base layer */}
      <div className="absolute inset-0">
        <Image
          src="/room-before.jpg"
          alt="Room before Furnshin renovation"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* AFTER — clipped left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/room-after.jpg"
          alt="Luxury room after Furnshin renovation"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-bold text-espresso" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>BEFORE</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded text-xs font-bold text-cream" style={{ backgroundColor: "rgba(44,24,16,0.88)" }}>AFTER</div>
      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${pos}%` }} />
      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center shadow-xl"
        style={{ left: `${pos}%`, width: 40, height: 40, borderRadius: "50%", backgroundColor: "#fff", border: "2px solid rgba(201,169,110,0.6)" }}
      >
        <div className="flex gap-0.5">
          <div style={{ width: 2, height: 14, backgroundColor: "#C9A96E", borderRadius: 2 }} />
          <div style={{ width: 2, height: 14, backgroundColor: "#C9A96E", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

// ─── COUNTER ───────────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(to / 60);
        const id = setInterval(() => {
          start = Math.min(start + step, to);
          setVal(start);
          if (start >= to) clearInterval(id);
        }, 24);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── SERVICE ICON MAP ───────────────────────────────────────────────────────
const svcIcons: Record<string, React.ElementType> = {
  "interior-decoration": Layout,
  "glass-works": Layers,
  "custom-furniture": Grid,
  "aluminum-solutions": Columns,
  "iron-metal-works": Hammer,
  "floor-decor": Grid,
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does an interior project take in Jaipur?",
      a: "Depends on scope. A single-room fit-out takes 10–18 days. A full 3BHK transformation runs 45–60 days if materials are pre-approved. We give a written timeline before work starts — nothing ambiguous."
    },
    {
      q: "Do you work outside Jaipur?",
      a: "Our primary service zone is Jaipur and Rajasthan. We've done work in Ajmer and Kota. Anything further gets an added travel/logistics cost, which we discuss before quoting."
    },
    {
      q: "What is your minimum project size?",
      a: "We don't have a fixed minimum, but we're most effective for projects above Rs. 2–3 lakh. Below that, the planning overhead doesn't make sense for either side. Call us and we'll tell you honestly."
    },
    {
      q: "Do you subcontract to other vendors?",
      a: "No. All work — fabrication, glass, flooring, furniture — is done by our own craftsmen or long-term partners we directly supervise. No middlemen, no accountability gaps."
    },
    {
      q: "Can I see ongoing or completed projects?",
      a: "Yes. We can set up a site visit to a completed project with the client's permission, or walk you through our portfolio. We'd rather show than tell."
    },
  ];

  const testimonials = [
    { name: "Priya Malhotra", location: "Vaishali Nagar", text: "The office fit-out was done in 12 days. Glass partitions, flooring, furniture — all from one team. No chasing multiple vendors. First time I've seen a contractor actually stick to the quote.", rating: 5 },
    { name: "Rohit Singhania", location: "Mansarovar", text: "We got quotes from 4 contractors. Furnshin was the only one who came with a space plan before quoting. That told us everything. The work matched exactly what was promised.", rating: 5 },
    { name: "Anita Joshi", location: "Civil Lines", text: "The modular kitchen came out better than what we saw in the sample. 14 days, on budget. Minor snag with hinge alignment was fixed the next morning without any follow-up needed.", rating: 5 },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, #3D1F10 0%, #2C1000 30%, #0F0805 100%)" }}
      >
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>
        {/* Left gradient — keeps text readable without killing canvas visibility */}
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to right, rgba(15,8,5,0.96) 0%, rgba(15,8,5,0.82) 40%, rgba(15,8,5,0.35) 65%, rgba(15,8,5,0) 100%)" }} />

        <div className="relative z-[2] container-custom pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-5" style={{ color: "#C9A96E" }}>
              Est. 1996 — Jaipur, Rajasthan
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold text-cream leading-none mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Spaces<br />
              <span style={{ color: "#C9A96E" }}>Designed</span><br />
              for Luxury
            </h1>
            <p className="text-cream/65 text-lg leading-relaxed mb-10 max-w-lg">
              Interior and furnishing work for homes and businesses in Jaipur. 30 years of delivery. No middlemen. Written scope before anything starts.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3.5 text-base font-semibold text-cream border border-cream/20 hover:border-sand-gold hover:text-sand-gold transition-colors rounded"
              >
                View Our Work
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                "30+ years of delivery",
                "Own craftsmen, no subcontracting",
                "Written quote with scope",
                "Jaipur's local partner",
              ].map((t) => (
                <p key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(201,169,110,0.8)" }}>
                  <CheckCircle size={14} />
                  {t}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1 text-cream/30 hover:text-cream/60 transition-colors text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: 30, suffix: "+", label: "Years operating" },
              { val: 50, suffix: "+", label: "Projects completed" },
              { val: 6, suffix: "", label: "Service verticals" },
              { val: 100, suffix: "%", label: "Own team, no subcontracting" },
            ].map(({ val, suffix, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-4xl font-bold text-cream mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#C9A96E" }}
                >
                  <Counter to={val} suffix={suffix} />
                </p>
                <p className="text-cream/40 text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Honest Execution Since 1996</span>
              <h2
                className="text-4xl font-bold text-espresso mt-3 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why most interior projects in Jaipur fail to deliver
              </h2>
              <div className="flex flex-col gap-4 text-text-dark/70 text-base leading-relaxed">
                <p>
                  In our 30 years of operating in Rajasthan, we've seen the same pattern: vendors who don't communicate, materials ordered without site verification, and "all-inclusive" quotes that hide massive surprises.
                </p>
                <p>
                  Furnshin was built to be the antidote. One team of master craftsmen. One point of contact. Precise design planning before a single unit is fabricated. We don't start until you've approved every material sample and signed off on a fixed-cost scope.
                </p>
                <p>
                  This human-first approach is why 70% of our business comes from word-of-mouth. Whether it's a 3BHK home in Mansarovar or an office glass partition in C-Scheme, the standard remains identical: Built to last, delivered on time.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/about" className="btn-secondary">
                  Our 30-Year Story <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: Shield, title: "Fixed written scope", desc: "Every hinge, finish, and timeline is itemised in a document. No verbal promises that disappear when the work starts." },
                { icon: Users, title: "Master craftsmen only", desc: "We don't outsource to lowest-bidder teams. The masters who quote your job are the ones physically building it." },
                { icon: Clock, title: "Pre-execution site visits", desc: "We measure twice and plan once. No generic estimates over WhatsApp. We see the space, find the snags, then quote." },
                { icon: Award, title: "Lifetime snags support", desc: "Our relationship doesn't end at handover. 30 and 90-day follow-ups ensure every door alignment and finish remains perfect." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 p-5 rounded-xl border border-taupe/30 bg-white shadow-sm"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#F0EBE3" }}
                  >
                    <Icon size={20} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="font-bold text-espresso mb-1">{title}</p>
                    <p className="text-text-dark/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP & LEGACY (NEW E-E-A-T SECTION) ─────────────────── */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
           <div className="w-[800px] h-[800px] border-[60px] border-sand-gold rounded-full -mr-[400px] -mt-[400px]"></div>
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
               <span className="section-label">Our Heritage</span>
               <h2 className="text-4xl md:text-5xl font-bold text-espresso mt-4 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A Legacy of Craftsmanship,<br/>Born in Jaipur
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                     <p className="text-text-dark/70 leading-relaxed font-medium">
                        Since 1996, the core of Furnshin has been an obsession with detail. We started as a small workshop specialising in high-finish wood furniture and evolved into a full-scale interior solutions provider.
                     </p>
                     <p className="text-text-dark/60 text-sm leading-relaxed">
                        We don't just 'install' products; we fabricate them. Our deep understanding of wood, metal, glass, and aluminum comes from decades of physical work on site.
                     </p>
                  </div>
                  <div className="bg-sand-gold/5 p-6 rounded-2xl border border-sand-gold/20">
                     <p className="text-sand-gold font-bold mb-3 tracking-widest uppercase text-xs">Direct Supervision</p>
                     <p className="text-espresso font-serif italic text-lg leading-relaxed">
                        "If I wouldn't have it in my own home, it doesn't leave the workshop. That has been our only rule for 30 years."
                     </p>
                     <p className="text-text-dark/40 text-xs mt-4">Founder, Furnshin</p>
                  </div>
               </div>
               <div className="flex flex-wrap gap-8">
                  {[
                    ["500+", "Homes Transformed"],
                    ["1996", "Year of Foundation"],
                    ["30+", "Expert Craftsmen"]
                  ].map(([v, l]) => (
                    <div key={l}>
                       <p className="text-3xl font-bold text-espresso mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</p>
                       <p className="text-text-dark/40 text-xs uppercase tracking-widest">{l}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-5 relative">
               <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl skew-x-1 group">
                 <Image 
                    src="/room-after.jpg" 
                    alt="Bespoke furniture craftsmanship in Jaipur" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent"></div>
               </div>
               <div 
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl border border-white/20"
                  style={{ backgroundColor: "#2C1810" }}
               >
                  <p className="text-sand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Quality Guarantee</p>
                  <p className="text-cream text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Certified Craftsmanship</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section id="services" className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">Core Verticals</span>
            <h2
              className="text-4xl font-bold text-espresso mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Expert space solutions,<br />locally mastered
            </h2>
            <p className="text-text-dark/55 max-w-xl mx-auto">
              From high-rise apartments in Vaishali to boutique offices in C-Scheme, we manage the entire lifecycle of your interior project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                slug: "interior-decoration",
                name: "Interior Decoration",
                tagline: "Turnkey fit-out solutions",
                desc: "Complete space design including false ceilings, bespoke lighting, wall panelling, and soft furnishings. We handle the coordination, you handle the keys.",
                scope: ["Consultative space planning", "False ceilings & mood lighting", "Premium wall finishes & paint", "Full fit-out management"],
              },
              {
                slug: "glass-works",
                name: "Glass Works",
                tagline: "Architectural glass specialists",
                desc: "Specialised office glass partitioning, frameless shower enclosures, and designer glass railings. Toughened safety glass cut and installed to site dimensions.",
                scope: ["Acoustic office partitions", "Toughened shower enclosures", "Frameless glass systems", "Safety-rated balustrades"],
              },
              {
                slug: "custom-furniture",
                name: "Custom Furniture",
                tagline: "Built for life, not just looks",
                desc: "Custom modular kitchens and wardrobes that solve actual storage problems. High-end hardware and moisture-resistant materials selected for Jaipur's climate.",
                scope: ["Modular kitchen engineering", "Ergonomic wardrobe layouts", "Bespoke bedroom furniture", "Living room storage units"],
              },
              {
                slug: "aluminum-solutions",
                name: "Aluminum Solutions",
                tagline: "Modern structural glazing",
                desc: "Architectural sliding doors and windows with premium thermal profiles. Better insulation, lower maintenance, and engineered for high-wind Rajasthan rooftops.",
                scope: ["High-performance casements", "Architecture sliding doors", "Structural balcony glazing", "Energy-efficient profiles"],
              },
              {
                slug: "iron-metal-works",
                name: "Iron & Metal Works",
                tagline: "Security meets aesthetic",
                desc: "Customised iron main gates, MS railings, and safety grilles. Fabricated in our house forge and finished with industrial-grade powder coating.",
                scope: ["Architectural iron gates", "Safety-rated MS railings", "Decorative laser-cut panels", "Powder-coated finishes"],
              },
              {
                slug: "floor-decor",
                name: "Floor Decor",
                tagline: "Foundation of luxury",
                desc: "Expert laying of vitrified tiles, natural marble, and engineered wood flooring. Professional levelling and grouting for a seamless, lifelong finish.",
                scope: ["Vitrified tile laying", "Italian marble polishing", "Engineered wood floors", "Vinyl & LVT installation"],
              },
            ].map((s, i) => {
              const Icon = svcIcons[s.slug] || Layers;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-7 border border-taupe/25 group hover:border-sand-gold hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ backgroundColor: "#F0EBE3" }}
                  >
                    <Icon size={22} style={{ color: "#C9A96E" }} />
                  </div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-1" style={{ color: "#C9A96E" }}>
                    {s.tagline}
                  </p>
                  <h3
                    className="text-xl font-bold text-espresso mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-text-dark/60 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="flex flex-col gap-2 mb-7 flex-grow">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-text-dark/55">
                        <CheckCircle size={13} style={{ color: "#C9A96E" }} className="flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-espresso group-hover:text-sand-gold transition-colors flex items-center gap-2 border-t border-taupe/20 pt-4"
                  >
                    Full Scope & Specs <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              All services overview <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Market Comparison</span>
            <h2
              className="text-4xl font-bold text-cream mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why we remain distinct
            </h2>
            <p className="text-cream/50 max-w-lg mx-auto text-sm">
              We compete on execution quality and accountability, not just catalogue variety.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-2xl overflow-hidden shadow-2xl">
              <thead>
                <tr style={{ backgroundColor: "rgba(201,169,110,0.12)" }}>
                  <th className="text-left px-5 py-5 text-cream/40 text-xs tracking-widest uppercase font-semibold w-72 border-b border-white/5">Property</th>
                  <th className="px-5 py-5 text-center font-bold border-b border-white/5" style={{ color: "#C9A96E" }}>Furnshin</th>
                  <th className="px-5 py-5 text-center text-cream/40 font-semibold border-b border-white/5">Large Platforms</th>
                  <th className="px-5 py-5 text-center text-cream/40 font-semibold border-b border-white/5">Local Labor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Initial Site Inspection", "On-site by technical leads", "Virtual or visual only", "Subject to availability"],
                  ["Project Deliverable Scope", "Fixed & written specification", "Package-based", "Verbal agreement"],
                  ["Manufacturing Source", "Our own Jaipur factory", "Outsourced to vendor nodes", "Third-party supply"],
                  ["Project Accountability", "Single technical point of contact", "Multiple account managers", "Owner-operator only"],
                  ["After-sales Support", "Proactive 30/90-day checks", "Standard portal ticket", "None to inconsistent"],
                ].map(([attr, ours, national, local], i) => (
                  <tr
                    key={attr}
                    style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <td className="px-5 py-5 text-cream/70 font-medium">{attr}</td>
                    <td className="px-5 py-5 text-center font-bold" style={{ color: "#C9A96E" }}>{ours}</td>
                    <td className="px-5 py-5 text-center text-cream/35">{national}</td>
                    <td className="px-5 py-5 text-center text-cream/35">{local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">Execution Workflow</span>
            <h2
              className="text-4xl font-bold text-espresso mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Predictable delivery, every time
            </h2>
            <p className="text-text-dark/55 max-w-lg mx-auto">
              We've refined our execution into a 6-step system that eliminates communication gaps.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(201,169,110,0.2)" }} />
            <div className="flex flex-col gap-10">
              {[
                { step: "01", title: "Site Audit & Discovery", desc: "A technician visits your space to map dimensions, structural constraints, and utility points. No quotes are generated until we see the reality of the site." },
                { step: "02", title: "Specification Mapping", desc: "We select materials, finishes, and hardware based on your usage profile. You receive physical samples to approve before work begins." },
                { step: "03", title: "Fixed-Cost Quotation", desc: "You receive an itemised, non-variable quote. If the scope doesn't change, the price doesn't change. No mid-project price escalations." },
                { step: "04", title: "Precision Fabrication", desc: "Work begins in our workshop. Each unit is built to the site measurements verified in step 01. You get weekly video updates on fabrication progress." },
                { step: "05", title: "Scheduled Installation", desc: "Our team arrives on a fixed date. We work with site cleanup protocols and safety standards. No endless 'tomorrow' promises." },
                { step: "06", title: "Snagging & Follow-up", desc: "A final walkthrough identifies any minor adjustments needed. We return automatically at day 30 and 90 to verify the structural integrity of all moving parts." },
              ].map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`relative flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  <div className={`flex-1 bg-white border border-taupe/25 rounded-2xl p-7 shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <p className="text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#C9A96E" }}>Phase {step}</p>
                    <h3 className="text-xl font-bold text-espresso mb-2">{title}</h3>
                    <p className="text-text-dark/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center z-10 text-sm font-bold relative shadow-xl"
                    style={{ backgroundColor: "#2C1810", color: "#C9A96E", border: "2px solid rgba(201,169,110,0.3)" }}
                  >
                    {step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Start with a free site visit <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Real transformations</span>
              <h2
                className="text-4xl font-bold text-espresso mt-3 mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Same space.<br />Completely different room.
              </h2>
              <p className="text-text-dark/60 leading-relaxed mb-6">
                Mansarovar, Jaipur. A 400 sq ft living room with water-damaged walls, no ceiling, and mismatched flooring. Transformed in 14 days. New false ceiling, wall texture, LVT flooring, and custom TV unit.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["14", "Days"], ["Rs. 4.2L", "Total cost"], ["1", "Team, 1 contact"]].map(([v, l]) => (
                  <div key={l} className="text-center p-4 rounded-xl bg-white border border-taupe/20">
                    <p className="font-bold text-espresso text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</p>
                    <p className="text-xs text-text-dark/40 mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" className="btn-secondary">
                Read the full case study <ArrowRight size={14} />
              </Link>
            </div>
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Client feedback</span>
            <h2
              className="text-4xl font-bold text-cream mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What clients actually say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, text, rating }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#C9A96E" style={{ color: "#C9A96E" }} />
                  ))}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
                  >
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">{name}</p>
                    <p className="text-cream/30 text-xs flex items-center gap-1"><MapPin size={10} />{location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL PRESENCE ───────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Based in Jaipur</span>
              <h2
                className="text-4xl font-bold text-espresso mt-3 mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We know Jaipur's spaces, climate, and materials
              </h2>
              <p className="text-text-dark/60 leading-relaxed mb-4">
                Pink sandstone walls. Monsoon humidity. Flat rooftops that become family spaces. Jaipur homes have specific needs that a Bangalore or Delhi contractor catalogue won't account for.
              </p>
              <p className="text-text-dark/60 leading-relaxed mb-8">
                We've worked in Vaishali Nagar, Mansarovar, Civil Lines, Sanganer, Pratap Nagar, and C-Scheme. We know which materials hold in Rajasthan's summer heat and which don't. That's 30 years of local experience — not a showroom pitch.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Vaishali Nagar", "Mansarovar", "Civil Lines", "Sanganer", "Pratap Nagar", "C-Scheme", "Ajmer Road", "Sitapura"].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-xs font-medium rounded border"
                    style={{ backgroundColor: "#F0EBE3", borderColor: "rgba(201,169,110,0.3)", color: "#5C3D2E" }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years in Jaipur", value: "30+" },
                { label: "Projects in city", value: "50+" },
                { label: "Neighbourhoods served", value: "15+" },
                { label: "Referral-based clients", value: "70%+" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl text-center"
                  style={{ backgroundColor: "#F0EBE3", border: "1px solid rgba(201,169,110,0.2)" }}
                >
                  <p
                    className="text-4xl font-bold text-espresso mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value}
                  </p>
                  <p className="text-text-dark/45 text-xs uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Questions</span>
              <h2
                className="text-4xl font-bold text-espresso mt-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What people usually ask
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-taupe/30">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-semibold text-espresso text-base pr-4">{q}</span>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 mt-0.5 transition-transform"
                      style={{ color: "#C9A96E", transform: activeFaq === i ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                  {activeFaq === i && (
                    <p className="mt-3 text-text-dark/65 text-sm leading-relaxed pr-8">{a}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-text-dark/50 text-sm mb-3">Still have a question?</p>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi, I have a question about your interior services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Phone size={15} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4"
        style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
      >
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="section-label">Start today</span>
          <h2
            className="text-5xl font-bold text-cream mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tell us about your space
          </h2>
          <p className="text-cream/55 text-lg mb-10 leading-relaxed">
            Share photos and location. We'll visit, plan, and send a written quote within 48 hours. No commitment required before that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="px-8 py-4 text-base font-semibold text-cream border border-cream/20 hover:border-sand-gold hover:text-sand-gold transition-colors rounded flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call {BRAND.phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-cream/30 text-xs">
            <MapPin size={12} />
            <span>201 Petunia, Manglam Aananda, Sanganer, Jaipur 302020</span>
          </div>
        </div>
      </section>
    </>
  );
}
