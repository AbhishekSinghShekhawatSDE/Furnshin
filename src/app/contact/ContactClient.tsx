"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { submitContactForm } from "@/lib/sheets";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const result = await submitContactForm(form);
    setStatus(result.success ? "success" : "error");
    setMsg(result.message);
    if (result.success) setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
      >
        <div className="container-custom text-center">
          <span className="section-label">Get In Touch</span>
          <h1 className="text-5xl font-bold text-cream mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Design Your Space
          </h1>
          <p className="text-cream/60 max-w-lg mx-auto">
            Send us your space photos. We'll give you a design recommendation and quote within 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding" style={{ backgroundColor: "#FAF7F4" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-espresso mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send Us a Message
              </h2>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 rounded-2xl border border-taupe/40 bg-white">
                  <CheckCircle size={48} style={{ color: "#C9A96E" }} />
                  <p className="text-espresso font-bold text-xl">Message Sent!</p>
                  <p className="text-text-dark/60 text-sm">{msg}</p>
                  <button onClick={() => setStatus("idle")} className="btn-primary mt-4">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-espresso mb-1.5">Your Name *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-taupe/50 bg-white text-text-dark text-sm focus:outline-none focus:border-sand-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-espresso mb-1.5">Phone *</label>
                      <input
                        type="tel" required value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98281 01833"
                        className="w-full px-4 py-3 rounded-xl border border-taupe/50 bg-white text-text-dark text-sm focus:outline-none focus:border-sand-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-espresso mb-1.5">Email</label>
                    <input
                      type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-taupe/50 bg-white text-text-dark text-sm focus:outline-none focus:border-sand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-espresso mb-1.5">Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-taupe/50 bg-white text-text-dark text-sm focus:outline-none focus:border-sand-gold transition-colors"
                    >
                      <option value="">Select a service</option>
                      {BRAND.services.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Full Interior">Full Interior Transformation</option>
                      <option value="Other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-espresso mb-1.5">Tell Us About Your Project *</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your space, location (e.g. Vaishali Nagar), and what you need. The more detail, the faster we can quote."
                      className="w-full px-4 py-3 rounded-xl border border-taupe/50 bg-white text-text-dark text-sm focus:outline-none focus:border-sand-gold transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm">{msg}</p>}
                  <button
                    type="submit" disabled={status === "loading"}
                    className="btn-primary w-full justify-center"
                  >
                    {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                  </button>
                  <p className="text-text-dark/40 text-xs text-center">
                    Or WhatsApp directly: <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-sand-gold underline">{BRAND.phone}</a>
                  </p>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-espresso mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Visit or Call Us
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                {[
                  { icon: Phone, label: "Phone & WhatsApp", value: BRAND.phone, href: `tel:${BRAND.phone}` },
                  { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
                  { icon: MapPin, label: "Address", value: BRAND.address.full, href: "#map" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Fri: 9am–7pm | Sat: 9am–5pm | Sun: 10am–2pm", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-taupe/30">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F0EBE3" }}>
                      <Icon size={18} style={{ color: "#C9A96E" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-espresso/50 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-text-dark text-sm font-medium hover:text-sand-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-text-dark text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map — OpenStreetMap (free, no API key) */}
              <div id="map" className="rounded-2xl overflow-hidden border border-taupe/30 shadow-lg" style={{ height: 280 }}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=75.7509%2C26.7873%2C75.7659%2C26.7973&layer=mapnik&marker=26.7923%2C75.7559"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "sepia(20%) saturate(80%)" }}
                  loading="lazy"
                  title="Furnshin — 201 Petunia, Manglam Aananda, Sanganer, Jaipur 302020"
                />
              </div>
              <p className="text-xs text-text-dark/40 mt-2 text-center">
                201 Petunia, Manglam Aananda, Sanganer, Jaipur 302020
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
