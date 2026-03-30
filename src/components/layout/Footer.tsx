"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2C1810" }} className="text-cream">
      {/* CTA Band */}
      <div style={{ backgroundColor: "#C9A96E" }} className="py-10 px-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-espresso text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform Your Space?
            </p>
            <p className="text-espresso/80 mt-1 text-sm">
              Tell us what your space needs. We'll plan, design, and execute it end to end.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-espresso text-cream px-6 py-3 text-sm font-bold hover:bg-secondary-brown transition-colors flex items-center gap-2"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-espresso px-6 py-3 text-sm font-bold hover:bg-cream transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }} className="text-3xl font-bold mb-1">
              Furnshin
            </p>
            <p style={{ color: "#C9A96E" }} className="text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              Spaces Designed for Luxury
            </p>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Design-led interior and furnishing solutions backed by 30 years of Jaipur craftsmanship. Serving homeowners, commercial clients, and design professionals.
            </p>
            <div className="flex gap-3">
              {[
                { href: BRAND.social.instagram, icon: Instagram, label: "Instagram" },
                { href: BRAND.social.youtube, icon: Youtube, label: "YouTube" },
                { href: BRAND.social.facebook, icon: Facebook, label: "Facebook" },
                { href: BRAND.social.twitter, icon: Twitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A96E";
                    (e.currentTarget as HTMLElement).style.color = "#2C1810";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,110,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sand-gold text-xs tracking-widest uppercase font-bold mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {BRAND.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-cream/60 text-sm hover:text-sand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-sand-gold transition-all duration-300 overflow-hidden" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sand-gold text-xs tracking-widest uppercase font-bold mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Portfolio", href: "/portfolio" },
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 text-sm hover:text-sand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-sand-gold transition-all duration-300 overflow-hidden" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sand-gold text-xs tracking-widest uppercase font-bold mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-start gap-3 text-sm text-cream/70 hover:text-sand-gold transition-colors"
                >
                  <Phone size={16} className="mt-0.5 text-sand-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-cream">{BRAND.phone}</p>
                    <p className="text-cream/50 text-xs">Mon–Sat, 9am–7pm</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-3 text-sm text-cream/70 hover:text-sand-gold transition-colors"
                >
                  <Mail size={16} className="mt-0.5 text-sand-gold flex-shrink-0" />
                  <span className="text-cream">{BRAND.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/70">
                  <MapPin size={16} className="mt-0.5 text-sand-gold flex-shrink-0" />
                  <p className="text-cream leading-relaxed">{BRAND.address.full}</p>
                </div>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded transition-colors"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">
            © {year} Furnshin. All rights reserved. | Established {BRAND.founded}, Jaipur
          </p>
          <p className="text-cream/30 text-xs">
            Designed & Built by Abhishek Singh Shekhawat
          </p>
        </div>
      </div>
    </footer>
  );
}
