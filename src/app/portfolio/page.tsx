import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { ArrowRight, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Interior & Furnishing Projects in Jaipur",
  description: "Furnshin's portfolio of completed interior and furnishing projects across Jaipur — residential and commercial spaces, glass work, custom furniture, aluminum, and metal fabrication.",
  alternates: { canonical: "/portfolio" },
};

const portfolioItems = [
  { id: 1, title: "3BHK Interior — Mansarovar", category: "Residential", service: "Full Interior", tag: "interior" },
  { id: 2, title: "Office Fitout — Vaishali Nagar", category: "Commercial", service: "Glass Works", tag: "glass" },
  { id: 3, title: "Modular Kitchen — Pratap Nagar", category: "Residential", service: "Custom Furniture", tag: "furniture" },
  { id: 4, title: "Restaurant Interior — Civil Lines", category: "Commercial", service: "Full Interior", tag: "interior" },
  { id: 5, title: "Iron Gate — Sanganer", category: "Residential", service: "Metal Works", tag: "metal" },
  { id: 6, title: "Showroom Facade — MI Road", category: "Commercial", service: "Aluminum + Glass", tag: "glass" },
  { id: 7, title: "Master Bedroom — Vaishali Nagar", category: "Residential", service: "Custom Furniture", tag: "furniture" },
  { id: 8, title: "Glass Partitions — Bani Park", category: "Commercial", service: "Glass Works", tag: "glass" },
  { id: 9, title: "Full Home — Civil Lines", category: "Residential", service: "Full Interior", tag: "interior" },
  { id: 10, title: "Aluminum Windows — Mansarovar", category: "Residential", service: "Aluminum", tag: "aluminum" },
  { id: 11, title: "Office Metal Railings — Tonk Road", category: "Commercial", service: "Metal Works", tag: "metal" },
  { id: 12, title: "Wardrobe Suite — Pratap Nagar", category: "Residential", service: "Custom Furniture", tag: "furniture" },
];

export default function PortfolioPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-16">
        <div className="container-custom text-center">
          <span className="section-label">Our Work</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio
          </h1>
          <p className="text-cream/60 max-w-lg mx-auto">
            50+ completed projects across Jaipur. Interior decoration, custom furniture, glass work, aluminum solutions, and metal fabrication.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-taupe/30 card-hover">
                <div
                  className="h-56 flex flex-col items-center justify-center relative"
                  style={{ backgroundColor: item.category === "Commercial" ? "#2C1810" : "#F0EBE3" }}
                >
                  <span className="text-5xl mb-2">
                    {item.tag === "glass" ? "🪟" : item.tag === "furniture" ? "🪑" : item.tag === "metal" ? "🔩" : item.tag === "aluminum" ? "🏗️" : "🏠"}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full absolute top-3 left-3"
                    style={{ backgroundColor: item.category === "Commercial" ? "rgba(201,169,110,0.3)" : "rgba(44,24,16,0.1)", color: item.category === "Commercial" ? "#C9A96E" : "#2C1810" }}>
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-espresso mb-1">{item.title}</h2>
                  <p className="text-text-dark/50 text-sm">{item.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-10 rounded-2xl" style={{ backgroundColor: "#F0EBE3" }}>
            <p className="text-2xl font-bold text-espresso mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want to See More Projects?
            </p>
            <p className="text-text-dark/60 mb-6">Contact us or check our case studies for detailed project breakdowns.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/case-studies" className="btn-primary">View Case Studies <ArrowRight size={16} /></Link>
              <Link href="/contact" className="btn-secondary">Start Your Project</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
