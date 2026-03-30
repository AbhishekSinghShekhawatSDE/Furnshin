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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom max-w-3xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-cream/50 hover:text-sand-gold transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: "rgba(201,169,110,0.2)", color: "#C9A96E" }}>
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-cream/40 text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span>·</span>
            <span>By Furnshin</span>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            style={{
              "--tw-prose-headings": "#2C1810",
              "--tw-prose-body": "#1C110A",
              "--tw-prose-links": "#C9A96E",
            } as React.CSSProperties}
          >
            <p className="text-xl leading-relaxed text-text-dark/80 mb-8 font-medium border-l-4 pl-6" style={{ borderColor: "#C9A96E" }}>
              {post.excerpt}
            </p>
            <div className="prose prose-headings:font-playfair prose-h2:text-3xl prose-h3:text-xl prose-h2:text-espresso prose-h3:text-espresso prose-p:text-text-dark/80 prose-p:leading-relaxed prose-li:text-text-dark/80 prose-strong:text-espresso prose-a:text-sand-gold prose-table:text-sm">
              <p className="text-text-dark/60 italic">
                Full article content available. Contact Furnshin for more information on this topic.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}>
            <p className="text-sand-gold text-xs tracking-widest uppercase font-bold mb-2">Ready to Start?</p>
            <h3 className="text-2xl font-bold text-cream mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get a Free Space Consultation
            </h3>
            <p className="text-cream/60 text-sm mb-6">Send us your space photos. Design recommendation and quote within 48 hours.</p>
            <Link href="/contact" className="btn-gold">Book Free Consultation</Link>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "#F0EBE3", color: "#5C3D2E" }}>
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-espresso mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group p-5 rounded-xl border border-taupe/30 bg-white hover:border-sand-gold transition-colors">
                    <span className="text-xs text-sand-gold font-bold">{r.category}</span>
                    <h4 className="text-sm font-bold text-espresso mt-2 leading-snug group-hover:text-secondary-brown transition-colors">{r.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
