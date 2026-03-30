import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies-data";
import { ArrowLeft, Clock, MapPin, Star, CheckCircle } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    keywords: cs.keywords,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.metaDescription,
    datePublished: cs.publishedAt,
    author: { "@type": "Organization", name: "Furnshin" },
    publisher: { "@type": "Organization", name: "Furnshin" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-4xl mx-auto">
          <Link href="/case-studies" className="flex items-center gap-2 text-cream/50 hover:text-sand-gold transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,169,110,0.2)", color: "#C9A96E" }}>
              {cs.type}
            </span>
            <span className="flex items-center gap-1 text-cream/40 text-xs"><Clock size={10} /> {cs.duration}</span>
            <span className="flex items-center gap-1 text-cream/40 text-xs"><MapPin size={10} /> {cs.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-6">
            {[["Client", cs.client], ["Budget", cs.budget], ["Duration", cs.duration]].map(([k, v]) => (
              <div key={k}>
                <p className="text-cream/30 text-xs uppercase tracking-wider">{k}</p>
                <p className="text-cream font-bold text-sm mt-1">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-10">
              {[
                { label: "The Challenge", text: cs.challenge },
                { label: "Our Solution", text: cs.solution },
                { label: "The Result", text: cs.result },
              ].map(({ label, text }) => (
                <div key={label}>
                  <span className="gold-line" />
                  <h2 className="text-2xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</h2>
                  <p className="text-text-dark/70 leading-relaxed">{text}</p>
                </div>
              ))}

              {/* Testimonial */}
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#2C1810" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="#C9A96E" color="#C9A96E" />)}
                </div>
                <p className="text-cream text-lg leading-relaxed italic mb-4">"{cs.testimonial}"</p>
                <p className="text-sand-gold text-sm font-bold">— {cs.testimonialAuthor}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-white border border-taupe/30">
                <h3 className="font-bold text-espresso mb-4">Project Details</h3>
                {[
                  ["Location", cs.location],
                  ["Type", cs.type],
                  ["Duration", cs.duration],
                  ["Budget", cs.budget],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2 border-b border-taupe/20 text-sm last:border-0">
                    <span className="text-text-dark/50">{k}</span>
                    <span className="font-semibold text-espresso">{v}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-taupe/30">
                <h3 className="font-bold text-espresso mb-4">Services Provided</h3>
                {cs.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 py-1.5 text-sm">
                    <CheckCircle size={14} style={{ color: "#C9A96E" }} />
                    <span className="text-text-dark/70">{s}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #C9A96E, #b8966a)" }}>
                <p className="text-espresso font-bold mb-2">Start Your Project</p>
                <p className="text-espresso/70 text-xs mb-4">Get a free quote within 48 hours.</p>
                <Link href="/contact" className="btn-primary text-sm py-2.5 w-full justify-center">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
