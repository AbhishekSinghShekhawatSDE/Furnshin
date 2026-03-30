"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { submitQuoteForm } from "@/lib/sheets";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("qp_dismissed")) return;

    // Show after 25s
    const timer = setTimeout(() => setOpen(true), 25000);

    // Exit intent — mouse leaves top
    const onLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !sessionStorage.getItem("qp_dismissed")) setOpen(true);
    };
    document.addEventListener("mouseleave", onLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem("qp_dismissed", "1");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Capture to Sheets (send with empty email to satisfy type if needed, or update type)
    await submitQuoteForm({ ...form, email: "popup@furnshin.com", message: "Quote Request from Popup" });

    // 2. Open WhatsApp
    const msgString = `Hi Furnshin! I'd like a free quote.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || "Not specified yet"}\n\nPlease contact me.`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msgString)}`, "_blank");
    
    setLoading(false);
    setSent(true);
    setTimeout(dismiss, 4000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[9990]"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 80, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed z-[9999] w-full md:w-auto"
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              padding: "0 0",
              // Desktop center
            }}
          >
            <div
              className="md:absolute md:bottom-auto md:top-1/2 md:left-1/2"
              style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            >
              <div
                className="mx-auto rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  maxWidth: 440,
                  backgroundColor: "#FAF7F4",
                  position: "fixed",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                }}
              >
                {/* Header */}
                <div
                  className="relative px-8 py-7"
                  style={{ background: "linear-gradient(135deg, #2C1810 0%, #1a0e08 100%)" }}
                >
                  <button
                    onClick={dismiss}
                    className="absolute top-4 right-4 p-1.5 rounded-full transition-colors"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                  <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: "#C9A96E" }}>
                    Free, no commitment
                  </p>
                  <h3
                    className="text-2xl font-bold text-cream leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Get a free site visit<br />and written quote
                  </h3>
                  <p className="text-cream/45 text-sm mt-2">
                    Design recommendation within 48 hours.
                  </p>
                </div>

                {/* Body */}
                <div className="px-8 py-7">
                  {sent ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                      <CheckCircle size={36} style={{ color: "#C9A96E" }} />
                      <p className="font-bold text-espresso">WhatsApp opened — we'll reply soon.</p>
                      <p className="text-text-dark/45 text-sm">We reply within a few hours on working days.</p>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-espresso mb-1.5 block">Name *</label>
                          <input
                            type="text" required value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-3 py-2.5 text-sm border border-taupe/40 rounded-xl bg-white focus:outline-none focus:border-sand-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-espresso mb-1.5 block">Phone *</label>
                          <input
                            type="tel" required value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="98281 01833"
                            className="w-full px-3 py-2.5 text-sm border border-taupe/40 rounded-xl bg-white focus:outline-none focus:border-sand-gold transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-espresso mb-1.5 block">What do you need?</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm border border-taupe/40 rounded-xl bg-white focus:outline-none focus:border-sand-gold transition-colors text-text-dark"
                        >
                          <option value="">Select a service</option>
                          <option>Interior Decoration</option>
                          <option>Glass Works</option>
                          <option>Custom Furniture</option>
                          <option>Aluminum Solutions</option>
                          <option>Iron & Metal Works</option>
                          <option>Floor Decor</option>
                          <option>Full Interior Transformation</option>
                          <option>Not sure yet — need consultation</option>
                        </select>
                      </div>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="btn-primary w-full justify-center gap-2 mt-1"
                      >
                        {loading ? (
                           "Processing..."
                        ) : (
                          <>
                            <Phone size={14} />
                            Send via WhatsApp
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-text-dark/35">
                        Or call: <a href={`tel:${BRAND.phone}`} className="text-sand-gold">{BRAND.phone}</a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
