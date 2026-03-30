import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior & Furnishing Services in Jaipur — Glass, Furniture, Aluminum, Metal",
  description: "Furnshin offers complete interior and furnishing services in Jaipur — glass works, custom furniture, aluminum solutions, iron & metal fabrication, interior decoration, and floor decor. 30 years experience.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom text-center">
          <span className="section-label">What We Offer</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complete Interior & Furnishing Services
          </h1>
          <p className="text-cream/60 max-w-xl mx-auto">
            End-to-end design and execution under one partner. All six service verticals, all backed by 30 years of Jaipur craftsmanship.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRAND.services.map((service, i) => (
              <div key={service.id} className="bg-white rounded-2xl border border-taupe/30 p-8 card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0EBE3" }}>
                    <span className="text-2xl" style={{ color: "#C9A96E" }}>✦</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-espresso mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.name}
                    </h2>
                    <p className="text-text-dark/60 leading-relaxed mb-5">{service.description}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sand-gold font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="section-label">Why Choose Furnshin</span>
              <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                One Partner for Every Space Requirement
              </h2>
              {[
                "Design planning before execution begins — always",
                "Written scope and timeline for every project",
                "Branded hardware only — no cheap substitute materials",
                "Post-handover follow-up at 30 and 90 days",
                "All projects executed by our own craftsmen, not subcontracted",
                "Site visits within 48 hours of enquiry",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 mb-3">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                  <span className="text-text-dark/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
              <p className="text-sand-gold text-xs tracking-widest uppercase font-bold mb-3">Start Today</p>
              <h3 className="text-2xl font-bold text-cream mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get a Free Consultation
              </h3>
              <p className="text-cream/60 text-sm mb-6">Share your space photos. Design recommendation within 48 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
