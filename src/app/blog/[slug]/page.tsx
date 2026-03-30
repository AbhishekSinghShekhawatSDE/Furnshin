import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blog-data";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { BRAND } from "@/lib/brand";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Furnshin"],
    },
  };
}

// Simple markdown-to-HTML converter (server-side, no dependencies)
function markdownToHtml(md: string): string {
  const lines = md.trim().split("\n");
  const out: string[] = [];
  let inTable = false;
  let tableHeader = false;
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const inline = (s: string) =>
      s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
       .replace(/\*(.*?)\*/g, "<em>$1</em>")
       .replace(/`(.*?)`/g, "<code>$1</code>");

    if (line.startsWith("## ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      out.push(`<h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:#2C1810;margin:3rem 0 1rem">${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      out.push(`<h3 style="font-size:1.25rem;font-weight:700;color:#2C1810;margin:2.5rem 0 0.75rem">${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("| ") && !line.startsWith("|---")) {
      if (inList) { out.push("</ul>"); inList = false; }
      const cells = line.split("|").filter((c) => c.trim()).map((c) => c.trim());
      if (!inTable) {
        out.push(`<div style="overflow-x:auto;margin:2rem 0;border-radius:12px;border:1px solid rgba(201,169,110,0.25)"><table style="width:100%;border-collapse:collapse;font-size:0.9rem"><thead style="background:rgba(44,24,16,0.06);border-bottom:2px solid rgba(201,169,110,0.3)">`);
        inTable = true;
        tableHeader = true;
      }
      if (tableHeader) {
        out.push(`<tr>${cells.map((c) => `<th style="text-align:left;padding:12px 18px;font-weight:600;color:#2C1810">${inline(c)}</th>`).join("")}</tr></thead><tbody>`);
        tableHeader = false;
      } else {
        out.push(`<tr style="border-bottom:1px solid rgba(201,169,110,0.15)">${cells.map((c) => `<td style="padding:12px 18px;color:rgba(28,17,10,0.8)">${inline(c)}</td>`).join("")}</tr>`);
      }
    } else if (line.startsWith("|---") || line.startsWith("| ---")) {
      // skip separator
    } else if (line.match(/^[-*] /)) {
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      if (!inList) { out.push(`<ul style="margin:1.5rem 0 1.5rem 1.5rem;display:flex;flex-direction:column;gap:0.75rem;list-style-type:disc;color:rgba(28,17,10,0.8)">`); inList = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    } else if (line.match(/^\d+\. /)) {
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      if (!inList) { out.push(`<ol style="margin:1.5rem 0 1.5rem 1.5rem;display:flex;flex-direction:column;gap:0.75rem;list-style-type:decimal;color:rgba(28,17,10,0.8)">`); inList = true; }
      out.push(`<li>${inline(line.replace(/^\d+\. /, ""))}</li>`);
    } else if (line.startsWith("---")) {
      if (inList) { out.push("</ol></ul>"); inList = false; }
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      out.push(`<hr style="border:none;border-top:1px solid rgba(201,169,110,0.3);margin:3rem 0" />`);
    } else if (line.trim() === "") {
      if (inList) { out.push("</ol></ul>"); inList = false; }
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
    } else {
      if (inList) { out.push("</ol></ul>"); inList = false; }
      if (inTable) { out.push("</tbody></table></div>"); inTable = false; }
      out.push(`<p style="margin:0 0 1.5rem;color:rgba(28,17,10,0.8);line-height:1.85;font-size:1.05rem">${inline(line)}</p>`);
    }
  }
  // cleanup unclosed tags
  if (inList) out.push("</ol></ul>"); 
  if (inTable) out.push("</tbody></table></div>");
  
  // Clean up nested ol/ul closures that might be messy in my fast parser
  return out.join("\n").replace(/<\/ol><\/ul>/g, "</ul>").replace(/<ol(.*?)><\/ul>/g, "<ol$1>").replace(/<ul(.*?)><\/ol>/g, "<ul$1>");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Furnshin", url: "https://furnshin.com" },
    publisher: { "@type": "Organization", name: "Furnshin", logo: { "@type": "ImageObject", url: "https://furnshin.com/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://furnshin.com/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
  };

  const contentHtml = markdownToHtml(post.content || "");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sand-gold blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-brown blur-[120px]"></div>
        </div>
        
        <div className="container-custom max-w-3xl mx-auto relative z-10">
          <Link href="/blog" className="flex items-center gap-2 text-cream/50 hover:text-sand-gold transition-colors text-sm mb-8 inline-flex px-4 py-2 rounded-full border border-cream/10 bg-white/5 backdrop-blur-sm">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <span className="text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.3)" }}>
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-cream/50 text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sand-gold text-espresso flex items-center justify-center font-bold text-xs">F</span>
              Furnshin Editorial
            </span>
            <span className="w-1 h-1 rounded-full bg-cream/30"></span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="w-1 h-1 rounded-full bg-cream/30"></span>
            <span className="flex items-center gap-1.5 text-sand-gold"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-3xl mx-auto">

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-taupe/20 mb-16 relative">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-sand-gold rounded-l-2xl"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-espresso font-medium italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "{post.excerpt}"
            </p>
          </div>

          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-taupe/30 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-espresso uppercase tracking-widest mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-medium transition-colors hover:bg-sand-gold hover:text-espresso cursor-pointer" style={{ backgroundColor: "#F0EBE3", color: "#5C3D2E", border: "1px solid rgba(201,169,110,0.2)" }}>
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 md:p-12 rounded-3xl text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div className="relative z-10">
              <p className="text-sand-gold text-sm tracking-widest uppercase font-bold mb-4">Start Your Transformation</p>
              <h3 className="text-3xl md:text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Discuss Your Space in Jaipur
              </h3>
              <p className="text-cream/70 text-base mb-8 max-w-lg mx-auto leading-relaxed">Book a free site visit. We'll measure the space, understand your requirements, and provide a clear, itemised quote within 48 hours.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {related.length > 0 && (
        <section className="py-20" style={{ backgroundColor: "#F0EBE3" }}>
          <div className="container-custom max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-sand-gold text-xs font-bold tracking-widest uppercase mb-2 block">Keep Reading</span>
                <h3 className="text-3xl md:text-4xl font-bold text-espresso" style={{ fontFamily: "'Playfair Display', serif" }}>Related Insights</h3>
              </div>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-espresso hover:text-sand-gold transition-colors pb-2 border-b border-sand-gold/30 hover:border-sand-gold">
                View All Posts
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-taupe/20 hover:border-sand-gold/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="p-8 flex flex-col h-full">
                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase w-max" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}>
                      {r.category}
                    </span>
                    <h4 className="text-xl font-bold text-espresso mb-4 leading-snug group-hover:text-sand-gold transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {r.title}
                    </h4>
                    <p className="text-sm text-text-dark/60 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {r.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-dark/50 pt-4 border-t border-taupe/20 mt-auto">
                      <span>{new Date(r.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {r.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-espresso hover:text-sand-gold transition-colors pb-1 border-b border-sand-gold/30">
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
