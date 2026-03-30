import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Furniture in Jaipur — Modular Kitchens, Wardrobes & More | Furnshin",
  description: "Bespoke custom furniture in Jaipur — modular kitchens, wardrobes, beds, study units, and TV units. Built to your exact dimensions with BWP ply and branded hardware.",
  alternates: { canonical: "/services/custom-furniture" },
};

const features = [
  "Modular kitchens — L-shape, U-shape, island, parallel",
  "Full-height wardrobes with zone-based internal layout",
  "Beds with hydraulic storage — queen, king, custom size",
  "Study units and work-from-home setups",
  "TV units and entertainment wall units",
  "Dining tables, console tables, and custom shelving",
  "BWP ply carcass, branded Hettich/Blum hardware",
];

const faqs = [
  { q: "How long does a modular kitchen take?", a: "A standard modular kitchen takes 12–20 working days from measurement to installation, including production time. Site preparation and electrical points need to be ready before we begin." },
  { q: "What is the difference between BWP and MDF?", a: "BWP (Boiling Waterproof) plywood is moisture-resistant and structurally stronger. MDF is smoother for paint but swells with moisture. For Jaipur's climate, we always use BWP ply for kitchen and bathroom applications." },
  { q: "Do you handle delivery and installation?", a: "Yes. Furnshin fabricates in our workshop and our team handles delivery and installation. No third-party installation contractors." },
];

export default function CustomFurniturePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Custom Furniture
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Built to your exact dimensions. Not a catalogue. Every piece designed for your specific room, your family's specific needs, and Jaipur's specific climate.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What We Build</h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Custom furniture is the most personal element of any interior. A wardrobe should work the way you store clothes. A kitchen should be designed around how you cook. A study unit should be built around how you work. At Furnshin, every piece starts with a conversation about how the space is actually used.
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
                <h3 className="text-xl font-bold text-espresso mb-2">Start Your Project</h3>
                <p className="text-espresso/70 text-sm mb-5">Share room dimensions and we'll plan the layout.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
