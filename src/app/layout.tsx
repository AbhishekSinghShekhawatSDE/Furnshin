import type { Metadata } from "next";
import "@/styles/globals.css";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Furnshin — Spaces Designed for Luxury | Interior & Furnishing Solutions Jaipur",
    template: "%s | Furnshin",
  },
  description:
    "Furnshin delivers design-led interior and furnishing solutions for homes and commercial spaces in Jaipur. 30 years of craftsmanship. Glass work, custom furniture, aluminum, iron fabrication.",
  keywords: [
    "interior design jaipur",
    "furnishing solutions jaipur",
    "custom furniture jaipur",
    "glass work jaipur",
    "aluminum windows jaipur",
    "iron gate jaipur",
    "home interior jaipur",
    "modular kitchen jaipur",
    "furnshin",
  ],
  authors: [{ name: "Furnshin" }],
  creator: "Furnshin",
  metadataBase: new URL("https://furnshin.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://furnshin.com",
    siteName: "Furnshin",
    title: "Furnshin — Spaces Designed for Luxury",
    description:
      "Design-led interior and furnishing solutions in Jaipur. 30+ years of craftsmanship. Glass work, custom furniture, aluminum solutions, iron fabrication.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Furnshin Interior Solutions Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@furnshin",
    creator: "@furnshin",
    title: "Furnshin — Spaces Designed for Luxury",
    description: "Design-led interior and furnishing solutions in Jaipur. 30+ years craftsmanship.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "furnshin-gsc-verify" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://furnshin.com",
    name: BRAND.name,
    alternateName: "Furnshin Interiors",
    description: BRAND.uvp,
    url: BRAND.website,
    telephone: BRAND.phone,
    email: BRAND.email,
    foundingDate: BRAND.founded.toString(),
    logo: "https://furnshin.com/logo.png",
    image: "https://furnshin.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Petunia 201, Manglam Aananda, Sanganer",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302029",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: BRAND.geo.lat, longitude: BRAND.geo.lng },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
    ],
    sameAs: [BRAND.social.instagram, BRAND.social.youtube, BRAND.social.facebook, BRAND.social.twitter],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior & Furnishing Services",
      itemListElement: BRAND.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
  };

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaId={BRAND.ga4} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
