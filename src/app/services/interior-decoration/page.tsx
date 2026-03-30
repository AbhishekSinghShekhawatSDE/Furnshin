import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Decoration in Jaipur — Full Space Transformation | Furnshin",
  description: "Complete interior decoration for homes and commercial spaces in Jaipur. False ceiling, flooring, painting, lighting, and decor — end-to-end by Furnshin.",
  alternates: { canonical: "/services/interior-decoration" },
};

const features = [
  "Full-room and full-home interior decoration",
  "False ceiling design and installation (gypsum, PVC, wood)",
  "Wall textures, wallpaper, and feature wall design",
  "Integrated lighting design — ambient, task, accent",
  "Flooring — vitrified tiles, marble, wood-effect",
  "Bathroom renovation and remodelling",
  "Living room, bedroom, and dining area complete makeovers",
];

export default function InteriorDecorationPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl">
          <span className="section-label">Services</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interior Decoration
          </h1>
          <p className="text-cream/60 text-lg max-w-xl">
            Complete interior design and execution for homes and commercial spaces in Jaipur. From a design concept to a finished room — with no need to manage multiple vendors.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-flex">Get a Free Quote <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line" />
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Full-Space Transformation</h2>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Interior decoration is the most comprehensive service Furnshin offers. It brings together ceiling work, wall finishes, flooring, lighting, and furniture into a cohesive space. The design is planned before the first material is ordered. Every choice is made to work with the light, the lifestyle, and the budget of the specific client.
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
                <h3 className="text-xl font-bold text-espresso mb-4">Our Interior Process</h3>
                {[
                  { step: "01", title: "Site Visit & Measurement", desc: "We visit your space, measure every room, and photograph the existing conditions." },
                  { step: "02", title: "Design Planning & Material Selection", desc: "We present a design direction and material samples. You approve before production starts." },
                  { step: "03", title: "Execution", desc: "Phased execution — ceiling, walls, floors, and furniture in a planned sequence." },
                  { step: "04", title: "Handover & Follow-Up", desc: "Final walkthrough and 30-day post-handover follow-up." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 mb-4 pb-4 border-b border-taupe/20 last:border-0 last:pb-0 last:mb-0">
                    <span className="text-2xl font-bold flex-shrink-0" style={{ color: "rgba(201,169,110,0.4)", fontFamily: "'Playfair Display', serif" }}>{step}</span>
                    <div>
                      <p className="font-semibold text-espresso text-sm mb-1">{title}</p>
                      <p className="text-text-dark/60 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-7 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #C9A96E, #b8966a)" }}>
                <h3 className="text-xl font-bold text-espresso mb-2">Start Your Interior Project</h3>
                <p className="text-espresso/70 text-sm mb-5">Share space photos and we'll plan your transformation.</p>
                <Link href="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
