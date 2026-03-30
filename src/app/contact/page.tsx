import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Interior Design Quote",
  description:
    "Contact Furnshin for a free interior design consultation in Jaipur. Send your space photos and get a design recommendation within 48 hours. Call +91 9828101833 or WhatsApp us.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
