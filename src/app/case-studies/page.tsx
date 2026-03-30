import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies-data";
import { ArrowRight, Clock, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Real Interior Projects in Jaipur",
  description: "Real interior project case studies from Furnshin — residential and commercial transformations across Jaipur. Challenges, solutions, timelines, and client outcomes.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom text-center">
          <span className="section-label">Real Projects, Real Results</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Client Case Studies
          </h1>
          <p className="text-cream/60 max-w-lg mx-auto">
            Detailed breakdowns of residential and commercial interior projects across Jaipur — challenge, solution, timeline, and client outcome.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-taupe/30 card-hover"
              >
                <div className="h-52 flex items-center justify-center" style={{ backgroundColor: cs.type === "Commercial" ? "#2C1810" : "#F0EBE3" }}>
                  <span className="text-5xl">{cs.type === "Commercial" ? "🏢" : "🏠"}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: cs.type === "Commercial" ? "#2C1810" : "#F0EBE3", color: cs.type === "Commercial" ? "#C9A96E" : "#5C3D2E" }}>
                      {cs.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-dark/40">
                      <Clock size={10} /> {cs.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-espresso mb-2 group-hover:text-secondary-brown transition-colors">{cs.title}</h2>
                  <div className="flex items-center gap-2 mb-3 text-text-dark/50 text-sm">
                    <MapPin size={12} className="text-sand-gold" /> {cs.location}
                  </div>
                  <p className="text-text-dark/60 text-sm leading-relaxed mb-4">{cs.challenge.slice(0, 150)}...</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.services.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#F0EBE3", color: "#5C3D2E" }}>{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-espresso text-sm">{cs.budget}</span>
                    <span className="flex items-center gap-1 text-sand-gold text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
