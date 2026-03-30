"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

const services = [
  { name: "Glass Works", href: "/services/glass-works", desc: "Partitions, doors, decorative glass" },
  { name: "Custom Furniture", href: "/services/custom-furniture", desc: "Modular kitchens, wardrobes, beds" },
  { name: "Aluminum Solutions", href: "/services/aluminum-solutions", desc: "Windows, doors, facades" },
  { name: "Iron & Metal Works", href: "/services/iron-metal-works", desc: "Gates, railings, grills" },
  { name: "Interior Decoration", href: "/services/interior-decoration", desc: "Full space transformation" },
  { name: "Floor Decor", href: "/services/floor-decor", desc: "Premium flooring solutions" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-espresso/5" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "'Playfair Display', serif", color: scrolled ? "#2C1810" : "#FAF7F4" }}
                className="text-2xl font-bold tracking-wide transition-colors duration-300"
              >
                Furnshin
              </span>
              <span
                style={{ color: "#C9A96E" }}
                className="text-[10px] tracking-[0.2em] uppercase font-semibold"
              >
                Spaces Designed for Luxury
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 animated-underline ${
                      scrolled ? "text-text-dark hover:text-espresso" : "text-cream/90 hover:text-sand-gold"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 glass rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex flex-col px-4 py-3 rounded-lg hover:bg-beige transition-colors group"
                            >
                              <span className="text-sm font-semibold text-espresso group-hover:text-secondary-brown">{s.name}</span>
                              <span className="text-xs text-text-dark/60 mt-0.5">{s.desc}</span>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="flex items-center gap-2 px-4 py-3 mt-1 rounded-lg bg-espresso text-cream text-sm font-semibold hover:bg-secondary-brown transition-colors"
                          >
                            View All Services <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 animated-underline ${
                      pathname === link.href
                        ? "text-sand-gold"
                        : scrolled
                        ? "text-text-dark hover:text-espresso"
                        : "text-cream/90 hover:text-sand-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-secondary-brown" : "text-cream/80 hover:text-sand-gold"
              }`}
            >
              <Phone size={14} />
              {BRAND.phone}
            </a>
            <Link href="/contact" className="btn-gold text-sm py-2.5 px-5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-espresso hover:bg-beige" : "text-cream hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-taupe/30"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      pathname === link.href
                        ? "bg-espresso text-cream"
                        : "text-text-dark hover:bg-beige"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 rounded-lg text-xs text-secondary-brown hover:bg-beige transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-taupe/30 flex flex-col gap-2">
                <a href={`tel:${BRAND.phone}`} className="btn-secondary text-center py-2.5 text-sm">
                  <Phone size={14} className="inline mr-2" /> {BRAND.phone}
                </a>
                <Link href="/contact" className="btn-gold text-center py-2.5 text-sm">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
