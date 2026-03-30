import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — 30 Years of Jaipur Craftsmanship",
  description:
    "Furnshin has been transforming homes and commercial spaces in Jaipur since 1996. Learn about our 30-year heritage, design-led approach, and what makes us Jaipur's most trusted furnishing partner.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutClient />;
}
