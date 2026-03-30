"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Phone, Award, Clock, Users, Zap } from "lucide-react";
import { BRAND } from "@/lib/brand";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-espresso" />,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stats = [
  { value: "30+", label: "Years of Craftsmanship", icon: Award },
  { value: "50+", label: "Projects Completed", icon: CheckCircle },
  { value: "100%", label: "Design-Led Execution", icon: Zap },
  { value: "24h", label: "Quote Turnaround", icon: Clock },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Share your space photos. We discuss requirements, style vision, and project scope." },
  { step: "02", title: "Design & Planning", desc: "We create a design plan, select materials, and share a detailed timeline before work begins." },
  { step: "03", title: "Execution", desc: "Our craftsmen execute with care. You get regular updates throughout the project." },
  { step: "04", title: "Handover", desc: "Final walkthrough, quality check, and handover. We follow up at 30 and 90 days." },
];

const testimonials = [
  {
    name: "Rohit Gupta",
    location: "Vaishali Nagar, Jaipur",
    text: "Furnshin transformed our 3BHK in 16 days. The modular wardrobe and flooring work exceeded expectations. Reliable, punctual, and quality-first.",
    rating: 5,
    project: "Full interior renovation",
  },
  {
    name: "Priya Sharma",
    location: "Mansarovar, Jaipur",
    text: "Our office glass partitions are exactly what we envisioned. The team understood our requirements and delivered on time with zero disruption to our operations.",
    rating: 5,
    project: "Commercial office fitout",
  },
  {
    name: "Amit Jain",
    location: "Pratap Nagar, Jaipur",
    text: "The iron gate and exterior work is stunning. Three quotes from local vendors — Furnshin won on quality and communication, not just price.",
    rating: 5,
    project: "Exterior gate & fabrication",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2C1810 0%, #1a0e08 50%, #0d0704 100%)" }}
      >
        {/* 3D Canvas */}
        <div className="absolute inset-0 pointer-events-none">
          <HeroCanvas />
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(28,17,10,0.92) 0%, rgba(28,17,10,0.7) 50%, rgba(28,17,10,0.2) 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, #FAF7F4, transparent)" }}
        />

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div {...fadeUp} className="mb-4">
              <span className="section-label">Est. 1996 · Jaipur, Rajasthan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Spaces
              <span className="block text-gradient">Designed for</span>
              Luxury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-cream/70 text-lg leading-relaxed mb-10 max-w-xl"
            >
              End-to-end interior and furnishing solutions for homes and commercial spaces in Jaipur.
              30 years of craftsmanship. Design-led execution. Built to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-gold">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary" style={{ color: "#FAF7F4", borderColor: "rgba(250,247,244,0.4)" }}>
                View Our Work
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex flex-wrap gap-6"
            >
              {["30+ Years Experience", "50+ Projects Delivered", "Design-Led Approach", "Jaipur's Trusted Partner"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} style={{ color: "#C9A96E" }} />
                  <span className="text-cream/70 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #C9A96E, transparent)" }} />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section style={{ backgroundColor: "#2C1810" }} className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <Icon size={24} style={{ color: "#C9A96E" }} className="mx-auto mb-3" />
                <p className="text-4xl font-bold text-cream mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</p>
                <p className="text-cream/50 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complete Space Transformation
            </h2>
            <p className="text-text-dark/60 max-w-xl mx-auto text-lg">
              From a bare room to a finished, functional, and beautiful space — all under one partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="card-hover flex flex-col h-full p-8 rounded-2xl border group"
                  style={{ backgroundColor: "#FFF", borderColor: "#D4C4B5" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-espresso"
                    style={{ backgroundColor: "#F0EBE3" }}
                  >
                    <span style={{ color: "#C9A96E" }} className="text-xl">✦</span>
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-2">{service.name}</h3>
                  <p className="text-text-dark/60 text-sm leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sand-gold text-sm font-semibold">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SECTION */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Real Projects</span>
              <h2 className="text-4xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Transformation That Speaks for Itself
              </h2>
              <p className="text-text-dark/60 leading-relaxed mb-6">
                Every project tells a story. A bare room becomes a warm family home. A generic office becomes a
                productive, branded workspace. Drag the slider to see the difference.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Design planning before execution begins", "Quality-verified materials only", "On-time delivery, every project", "Post-handover follow-up included"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#C9A96E" }} />
                    <span className="text-text-dark/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/portfolio" className="btn-primary">
                See Full Portfolio <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <BeforeAfterSlider
                beforeSrc="/images/before-living-room.jpg"
                afterSrc="/images/after-living-room.jpg"
                beforeAlt="Living room before Furnshin transformation"
                afterAlt="Living room after Furnshin interior makeover Jaipur"
                title="Living Room · Mansarovar, Jaipur"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              From Idea to Finished Space
            </h2>
            <p className="text-cream/50 max-w-lg mx-auto">
              A clear four-step process. No surprises. Every phase communicated before it starts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                <p className="text-6xl font-bold mb-4" style={{ color: "rgba(201,169,110,0.2)", fontFamily: "'Playfair Display', serif" }}>
                  {step.step}
                </p>
                <h3 className="text-lg font-bold text-cream mb-2">{step.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-sand-gold">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">What Clients Say</span>
            <h2 className="text-4xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trusted by Jaipur Homes & Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-taupe/40 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#C9A96E" color="#C9A96E" />
                  ))}
                </div>
                <p className="text-text-dark/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="border-t border-taupe/30 pt-4">
                  <p className="font-bold text-espresso text-sm">{t.name}</p>
                  <p className="text-text-dark/50 text-xs">{t.location}</p>
                  <p className="text-sand-gold text-xs mt-1 font-medium">{t.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #C9A96E 0%, #b8966a 100%)" }}
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send Us Your Space Photos
            </h2>
            <p className="text-espresso/80 text-lg mb-8 max-w-lg mx-auto">
              We'll give you a design recommendation and quote within 48 hours. No commitment required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Transformation <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Furnshin!%20I%27d%20like%20a%20quote%20for%20my%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-espresso px-6 py-3 font-bold text-sm hover:bg-cream transition-colors"
              >
                <Phone size={16} /> WhatsApp us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
