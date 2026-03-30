import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Furnshin's terms of service — the terms and conditions governing use of our website and services.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-cream" style={{ fontFamily: "'Playfair Display', serif" }}>Terms of Service</h1>
          <p className="text-cream/50 mt-2 text-sm">Last updated: March 2026</p>
        </div>
      </section>
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-3xl prose prose-headings:text-espresso prose-p:text-text-dark/70 prose-p:leading-relaxed">
          <h2>Services</h2>
          <p>Furnshin provides interior decoration, custom furniture, glass works, aluminum solutions, iron and metal fabrication, and floor decor services in Jaipur and surrounding areas. All services are subject to site assessment, written quotation, and agreement before commencement.</p>

          <h2>Quotations and Pricing</h2>
          <p>All quotations are valid for 14 days from the date of issue. Prices may change after this period due to material cost fluctuations. A written quotation with itemised scope is required before work begins. Verbal quotations are not binding.</p>

          <h2>Payment Terms</h2>
          <p>Standard payment terms are: 30-40% advance on signing, 30-40% at project midpoint, and the remainder at handover. Payment terms for each project are confirmed in the written agreement.</p>

          <h2>Scope Changes</h2>
          <p>Any changes to the agreed project scope during execution must be approved in writing by both parties before the change is implemented. Scope changes may affect the total cost and timeline.</p>

          <h2>Warranty</h2>
          <p>Furnshin provides a one-year warranty on workmanship for all completed projects. Material warranties are passed through from the respective manufacturers. The warranty does not cover damage due to misuse, water damage beyond the project scope, or structural changes made after handover.</p>

          <h2>Website Use</h2>
          <p>This website is for informational purposes. Contact information and project references represent real projects but specific client details may be withheld for privacy. Form submissions are used only to respond to your enquiry.</p>

          <h2>Contact</h2>
          <p>For any queries regarding these terms: {BRAND.email} | {BRAND.phone} | {BRAND.address.full}</p>
        </div>
      </section>
    </>
  );
}
