import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog-data";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Interior Design Tips & Jaipur Home Inspiration",
  description: "Interior design tips, project showcases, and local insights for Jaipur homeowners. Practical guides on furniture, glass work, budgeting, and space transformation from Furnshin.",
  alternates: { canonical: "/blog" },
};

const categories = ["All", "Interior Design", "Furniture", "Glass Works", "Aluminum Solutions", "Iron & Metal Works", "Project Showcase", "About Furnshin"];

export default function BlogPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom text-center">
          <span className="section-label">Insights & Inspiration</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interior Design Blog
          </h1>
          <p className="text-cream/60 max-w-lg mx-auto">
            Practical guides, project stories, and local insights for Jaipur homeowners planning their next interior project.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-taupe/30 card-hover flex flex-col"
              >
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: "#F0EBE3" }}>
                  <span className="text-6xl">✦</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: "#F0EBE3", color: "#C9A96E" }}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-dark/40">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-espresso mb-2 group-hover:text-secondary-brown transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-dark/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-dark/40">{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="flex items-center gap-1 text-sand-gold text-sm font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
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
