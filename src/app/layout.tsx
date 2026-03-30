import type { Metadata } from "next";
import "@/styles/globals.css";
import { BRAND, SEO_DEFAULTS } from "@/lib/brand";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import QuotePopup from "@/components/ui/QuotePopup";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.description,
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
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  metadataBase: new URL(SEO_DEFAULTS.canonical),
  alternates: { canonical: "/" },
  openGraph: SEO_DEFAULTS.openGraph,
  twitter: {
    card: "summary_large_image",
    site: SEO_DEFAULTS.twitter.site,
    creator: SEO_DEFAULTS.twitter.handle,
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: "furnshin-gsc-verify" },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
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
      streetAddress: "201 Petunia, Manglam Aananda, Sanganer",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302020",
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
        <QuotePopup />
      </body>
    </html>
  );
}
