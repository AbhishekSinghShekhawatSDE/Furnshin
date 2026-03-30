import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #2C1810, #1a0e08)" }}
    >
      <div className="text-center px-4">
        <p className="text-8xl font-bold mb-4 text-gradient" style={{ fontFamily: "'Playfair Display', serif" }}>
          404
        </p>
        <h1 className="text-3xl font-bold text-cream mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Page Not Found
        </h1>
        <p className="text-cream/50 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. But your dream space might — let's design it together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gold">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/contact" className="btn-secondary" style={{ color: "#FAF7F4", borderColor: "rgba(250,247,244,0.3)" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
