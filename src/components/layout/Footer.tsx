"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { BRAND } from "@/lib/brand";

const services = [
  { name: "Interior Decoration", slug: "interior-decoration" },
  { name: "Glass Works", slug: "glass-works" },
  { name: "Custom Furniture", slug: "custom-furniture" },
  { name: "Aluminum Solutions", slug: "aluminum-solutions" },
  { name: "Iron & Metal Works", slug: "iron-metal-works" },
  { name: "Floor Decor", slug: "floor-decor" },
];

const links = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1a0e08" }} className="text-cream/70">

      {/* CTA strip */}
      <div className="py-12 px-4" style={{ backgroundColor: "#2C1810", borderTop: "1px solid rgba(201,169,110,0.12)" }}>
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-cream text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to transform your space?
            </p>
            <p className="text-cream/50 text-sm mt-1">
              Site visit within 48 hours. Written quote before any work begins.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-primary text-sm">
              Get Free Quote
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold border border-cream/20 text-cream hover:bg-cream/10 transition-colors rounded"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <p
              className="text-2xl font-bold text-cream mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Furnshin
            </p>
            <p className="text-xs tracking-widest uppercase font-medium mb-5" style={{ color: "#C9A96E" }}>
              Est. 1996, Jaipur
            </p>
            <p className="text-sm leading-relaxed mb-6 text-cream/50">
              Interior and furnishing work for homes and businesses in Jaipur. 30 years. No subcontracting. Written scope before anything starts.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: BRAND.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: BRAND.social.youtube, Icon: Youtube, label: "YouTube" },
                { href: BRAND.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: BRAND.social.twitter, Icon: Twitter, label: "Twitter" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded flex items-center justify-center text-cream/40 hover:text-sand-gold transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-cream/40 mb-5">Services</p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-cream/50 hover:text-sand-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-cream/40 mb-5">Company</p>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/50 hover:text-sand-gold transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-cream/40 mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={`tel:${BRAND.phone}`} className="flex items-start gap-3 text-sm text-cream/50 hover:text-sand-gold transition-colors">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-start gap-3 text-sm text-cream/50 hover:text-sand-gold transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/50">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A96E" }} />
                  <span>201 Petunia, Manglam Aananda,<br />Sanganer, Jaipur 302020</span>
                </div>
              </li>
              <li className="pt-1">
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}>
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-cream/25">
            &copy; {year} Furnshin. Established 1996, Jaipur, Rajasthan.
          </p>
          <p className="text-xs text-cream/20">
            Built by Abhishek Singh Shekhawat
          </p>
        </div>
      </div>
    </footer>
  );
}
