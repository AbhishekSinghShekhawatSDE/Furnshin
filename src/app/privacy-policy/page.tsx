import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Furnshin's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }} className="pt-36 pb-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-cream" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
          <p className="text-cream/50 mt-2 text-sm">Last updated: March 2026</p>
        </div>
      </section>
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom max-w-3xl prose prose-headings:font-playfair prose-headings:text-espresso prose-p:text-text-dark/70 prose-p:leading-relaxed">
          <h2>Information We Collect</h2>
          <p>When you contact us through our website form or WhatsApp, we collect your name, phone number, email address, and the details of your project inquiry. This information is used solely to respond to your inquiry and plan your project.</p>

          <h2>How We Use Your Information</h2>
          <p>Your contact information is used to: respond to your inquiry, provide quotations and design consultations, and communicate project updates. We do not sell, rent, or share your personal information with third parties outside of Furnshin's project team.</p>

          <h2>Google Analytics</h2>
          <p>We use Google Analytics (GA4 ID: {BRAND.ga4}) to understand how visitors interact with our website. This data is aggregated and anonymous and does not identify individual users. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.</p>

          <h2>Google Sheets Data Storage</h2>
          <p>Form submissions on our website are stored in a Google Sheets database accessible only to the Furnshin team. This data is stored on Google's infrastructure and protected by their security measures.</p>

          <h2>Cookies</h2>
          <p>Our website uses essential cookies required for website function and analytics cookies from Google Analytics. You can disable cookies in your browser settings, though this may affect website functionality.</p>

          <h2>Your Rights</h2>
          <p>You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at {BRAND.email} or {BRAND.phone}.</p>

          <h2>Contact</h2>
          <p>For privacy-related inquiries, contact: {BRAND.email} | {BRAND.address.full}</p>
        </div>
      </section>
    </>
  );
}
