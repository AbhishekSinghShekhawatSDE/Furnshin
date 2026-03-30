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

      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-20 relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] border-l border-b border-sand-gold/20 rounded-bl-full"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] border border-sand-gold/20 rounded-full"></div>
        </div>

        <div className="container-custom max-w-5xl mx-auto relative z-10">
          <Link href="/case-studies" className="flex items-center gap-2 text-cream/50 hover:text-sand-gold transition-colors text-sm mb-10 w-fit">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase border" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E", borderColor: "rgba(201,169,110,0.3)" }}>
              {cs.type} Project
            </span>
            <span className="flex items-center gap-1.5 text-cream/60 text-sm font-medium"><MapPin size={14} /> {cs.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-cream mb-12 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {cs.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {[
              ["Client", cs.client], 
              ["Budget", cs.budget], 
              ["Timeline", cs.duration],
              ["Completion", new Date(cs.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })]
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-sand-gold text-xs uppercase tracking-widest font-bold mb-1.5">{k}</p>
                <p className="text-cream font-medium text-lg">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {[
                { label: "The Challenge", text: cs.challenge },
                { label: "Our Execution Strategy", text: cs.solution },
                { label: "The Final Result", text: cs.result },
              ].map(({ label, text }, idx) => (
                <div key={label} className="relative">
                  <span className="absolute -left-6 md:-left-12 top-2 text-6xl font-black opacity-5 text-espresso select-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                    0{idx + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</h2>
                  <p className="text-text-dark/80 leading-[1.85] text-lg font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {text}
                  </p>
                </div>
              ))}

              {/* Client Testimonial Block */}
              <div className="p-10 md:p-12 rounded-3xl relative mt-4 shadow-xl" style={{ backgroundColor: "#2C1810", backgroundImage: "radial-gradient(circle at top right, rgba(201,169,110,0.1), transparent 40%)" }}>
                <div className="absolute top-8 right-8 opacity-20 text-sand-gold">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14H12.017V3H22.017V14L19.624 21H14.017ZM3.01697 21L5.40997 14H1.01697V3H11.017V14L8.62397 21H3.01697Z" />
                  </svg>
                </div>
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="#C9A96E" color="#C9A96E" />)}
                </div>
                <p className="text-cream text-2xl leading-relaxed italic mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>"{cs.testimonial}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sand-gold/20 flex items-center justify-center text-sand-gold font-bold text-lg border border-sand-gold/30">
                    {cs.testimonialAuthor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sand-gold text-base font-bold">{cs.testimonialAuthor}</p>
                    <p className="text-cream/40 text-sm mt-0.5">Verified Client Review</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 flex flex-col gap-8">
                
                <div className="p-8 rounded-2xl bg-white border border-taupe/20 shadow-sm">
                  <h3 className="font-bold text-espresso mb-6 text-lg uppercase tracking-widest border-b border-taupe/20 pb-4">Scope of Work</h3>
                  <div className="flex flex-col gap-4">
                    {cs.services.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                        <span className="text-text-dark/80 font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-2xl text-center relative overflow-hidden group" style={{ background: "linear-gradient(135deg, #1a0e08, #2C1810)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, #C9A96E, #b8966a)" }}></div>
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="text-sand-gold group-hover:text-espresso font-bold mb-3 tracking-widest uppercase text-xs">Similar Requirements?</p>
                    <h4 className="text-2xl text-cream group-hover:text-white font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Start Your Project</h4>
                    <Link href="/contact" className="inline-block bg-sand-gold group-hover:bg-espresso text-espresso group-hover:text-cream px-8 py-3.5 rounded font-bold text-sm transition-colors shadow-lg shadow-black/20">
                      Book a Free Consultation
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
