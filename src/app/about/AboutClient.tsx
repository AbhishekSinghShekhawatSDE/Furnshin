"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Award, Users, Zap, Heart } from "lucide-react";
import { BRAND } from "@/lib/brand";

const values = [
  { icon: Award, title: "Craftsmanship First", desc: "Every project executed to the highest finishing standard. No shortcuts. Materials explained before selection." },
  { icon: Zap, title: "Design Integrity", desc: "Design thinking before execution. Spaces are planned before anything is installed. Recommendations based on the actual space." },
  { icon: CheckCircle, title: "Execution Reliability", desc: "What we commit to in scope and timeline is what gets delivered. Project timelines shared in writing before work starts." },
  { icon: Heart, title: "Client-Centered", desc: "Every choice made with the client's living or working experience in mind. Service recommendations reflect how the client uses the space." },
  { icon: Users, title: "Trusted Partnership", desc: "Client relationships extend past project delivery. Post-project follow-up scheduled. Returning clients get priority and continuity." },
];

const milestones = [
  { year: "1996", event: "Founded in Jaipur with a focus on custom metal fabrication and high-finish wood furniture." },
  { year: "2005", event: "Shifted to turnkey residential interiors, completing our 100th project in the Jaipur market." },
  { year: "2012", event: "Expanded into high-precision commercial glass work and complex office fit-outs." },
  { year: "2018", event: "Launched structural aluminum solutions division for high-performance architectural glazing." },
  { year: "2023", event: "Crossed the milestone of 500+ luxury spaces transformed across Rajasthan." },
  { year: "2026", event: "Digital platform launch to serve as the primary gateway for Jaipur's design-conscious homeowners." },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-label">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              30 Years of Jaipur
              <span className="block" style={{ color: "#C9A96E" }}>Craftsmanship</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed max-w-xl">
              Since 1996, Furnshin has been the trusted space transformation partner for homeowners and businesses across Jaipur. Not a vendor. A partner that brings real design thinking and execution quality to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="gold-line" />
              <h2 className="text-4xl font-bold text-espresso mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Design-Led Approach Since Day One
              </h2>
              <div className="flex flex-col gap-4 text-text-dark/70 text-base leading-relaxed">
                <p>
                  Furnshin was founded in Jaipur in 1996 by craftsmen who believed that every home and commercial space deserved more than generic installation. The founding principle was simple: design thinking first, execution second.
                </p>
                <p>
                  Three decades later, that principle still defines every project we take on. Before any material is ordered or measurement taken, we sit with the client, understand the space, and plan the transformation. We recommend materials based on how the space is used and how the light falls — not what's easiest to source.
                </p>
                <p>
                  Today, Furnshin serves homeowners, commercial clients, architects, and contractors across Jaipur and Rajasthan. One satisfied client who refers to three others is worth more than ten one-off jobs. That is still how we operate.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[["30+", "Years"], ["50+", "Projects"], ["100%", "Commitment"]].map(([val, lab]) => (
                  <div key={lab} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#F0EBE3" }}>
                    <p className="text-3xl font-bold text-espresso" style={{ fontFamily: "'Playfair Display', serif" }}>{val}</p>
                    <p className="text-sm text-text-dark/50">{lab}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-bold text-espresso mb-8">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px" style={{ backgroundColor: "#D4C4B5" }} />
                <div className="flex flex-col gap-6">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-6 pl-4"
                    >
                      <div
                        className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                        style={{ backgroundColor: "#2C1810", color: "#C9A96E", minWidth: 32 }}
                      >
                        ✦
                      </div>
                      <div>
                        <p className="text-sand-gold text-sm font-bold mb-0.5">{m.year}</p>
                        <p className="text-text-dark/70 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: "#2C1810" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-4xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                <v.icon size={24} style={{ color: "#C9A96E" }} className="mb-4" />
                <h3 className="text-xl font-bold text-cream mb-2">{v.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-espresso mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-text-dark/60 mb-8 max-w-md mx-auto">
            Tell us what your space needs. We'll plan it, design it, and execute it end to end.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
