export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  type: "Residential" | "Commercial";
  services: string[];
  duration: string;
  budget: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: string;
  testimonialAuthor: string;
  tags: string[];
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "3bhk-transformation-mansarovar-jaipur",
    title: "3BHK Full Interior Transformation in Mansarovar",
    client: "Sharma Family",
    location: "Mansarovar, Jaipur",
    type: "Residential",
    services: ["Interior Decoration", "Custom Furniture", "Floor Decor", "False Ceiling"],
    duration: "18 days",
    budget: "₹11.5 Lakh",
    challenge: "A newly delivered 3BHK flat in Mansarovar — bare walls, incomplete flooring across all rooms, no ceilings, no storage. The family needed to move in within 25 days of handing the flat to us.",
    solution: "We approached it as a sequenced site — flooring across all rooms first, then ceiling framework, then painting, then modular furniture. Materials were pre-ordered before site handover so no days were lost waiting for deliveries.",
    result: "All three bedrooms fully fitted with wardrobes and storage. Living-dining with false ceiling, cove lighting, and TV unit. Modular kitchen complete. Family moved in on day 19.",
    testimonial: "We were skeptical a full 3BHK could be done in under 3 weeks. Furnshin did it in 18 days without cutting quality. The wardrobes and kitchen are exactly what we discussed during the design meeting.",
    testimonialAuthor: "Rajesh Sharma, Mansarovar, Jaipur",
    tags: ["3bhk interior", "mansarovar", "full interior", "jaipur residential"],
    publishedAt: "2026-02-10",
    metaTitle: "3BHK Full Interior Transformation Mansarovar Jaipur | Furnshin Case Study",
    metaDescription: "Full 3BHK interior transformation in Mansarovar, Jaipur — 18 days, ₹11.5L budget. Wardrobes, modular kitchen, flooring, false ceiling. By Furnshin.",
    keywords: ["3bhk interior jaipur", "home interior mansarovar jaipur", "interior transformation jaipur"],
  },
  {
    slug: "office-fitout-vaishali-nagar-jaipur",
    title: "Office Fitout with Glass Partitions in Vaishali Nagar",
    client: "Tech Startup (Confidential)",
    location: "Vaishali Nagar, Jaipur",
    type: "Commercial",
    services: ["Glass Works", "Floor Decor", "Interior Decoration"],
    duration: "12 days",
    budget: "₹8.2 Lakh",
    challenge: "A 1,200 sq ft office space that needed to be transformed into a professional, open-plan workspace with private meeting area, reception, and executive cabin — all without disrupting the floor above (occupied residential flat) and completed before the new team joined.",
    solution: "Glass partitions for meeting room and cabin created visual separation without blocking natural light. Flooring in SPC vinyl laid in 2 days (no curing time). Reception desk custom-built in walnut laminate with espresso-dark base.",
    result: "Clean, modern office space ready 2 days ahead of schedule. The glass meeting room creates the professional impression the client needed for investor and client visits.",
    testimonial: "The glass partition execution was precise and the timeline was honored. Our team walked into a complete office on day 12. Professional and no disruption to the building.",
    testimonialAuthor: "Founder, Tech Startup, Vaishali Nagar",
    tags: ["office interior jaipur", "glass partition jaipur", "commercial interior jaipur"],
    publishedAt: "2026-02-18",
    metaTitle: "Office Fitout with Glass Partitions in Vaishali Nagar Jaipur | Furnshin",
    metaDescription: "Office fitout in Vaishali Nagar, Jaipur — 12 days, ₹8.2L. Glass partitions, SPC flooring, custom reception desk. Commercial interior by Furnshin.",
    keywords: ["office interior jaipur", "glass partition office jaipur", "commercial interior vaishali nagar"],
  },
  {
    slug: "modular-kitchen-wardrobe-pratap-nagar-jaipur",
    title: "Modular Kitchen & Full Wardrobe Suite in Pratap Nagar",
    client: "Gupta Family",
    location: "Pratap Nagar, Jaipur",
    type: "Residential",
    services: ["Custom Furniture"],
    duration: "14 days",
    budget: "₹6.8 Lakh",
    challenge: "The kitchen was on a corner floor plan with an awkward L-shape and a structural column interrupting the natural flow. The 3 bedrooms each needed wardrobes with different internal layouts for different users (master, teenager, elderly parent).",
    solution: "Kitchen designed around the column — it became a partial peninsula boundary rather than an obstacle. Each wardrobe interior planned individually with zone-based storage: hanging, folded, shoes, and seasonal items according to each user.",
    result: "A kitchen that works better than a standard shape because of dedicated preparation zones. Three wardrobes each used daily by different family members.",
    testimonial: "The wardrobe for my mother has low shelves she can reach easily. My son's wardrobe has a study unit built in. These were details we discussed once and they appeared in the final product. That level of listening was unexpected.",
    testimonialAuthor: "Mrs. Gupta, Pratap Nagar, Jaipur",
    tags: ["modular kitchen jaipur", "custom wardrobe jaipur", "residential furniture jaipur"],
    publishedAt: "2026-02-25",
    metaTitle: "Modular Kitchen & Wardrobe Suite in Pratap Nagar Jaipur | Furnshin",
    metaDescription: "Modular kitchen and custom wardrobes in Pratap Nagar, Jaipur — 14 days, ₹6.8L. Zone-based wardrobe design for three different family members. By Furnshin.",
    keywords: ["modular kitchen jaipur", "custom wardrobe jaipur", "furniture pratap nagar jaipur"],
  },
  {
    slug: "restaurant-interior-civil-lines-jaipur",
    title: "Restaurant Interior Overhaul in Civil Lines, Jaipur",
    client: "Restaurant (Name Withheld)",
    location: "Civil Lines, Jaipur",
    type: "Commercial",
    services: ["Interior Decoration", "Custom Furniture", "Glass Works", "Iron & Metal Works"],
    duration: "22 days",
    budget: "₹18 Lakh",
    challenge: "An existing restaurant that had operated for 6 years with the original fit-out. The space was dated, the booth seating was worn, and the kitchen pass-through wall was creating operational problems. The owner needed a full interior refresh without closing for more than 15 days (which would affect bookings).",
    solution: "Phased interior removal — kitchen area first, dining second. New booth seating custom-built in faux leather and iron-frame. Feature wall with laser-cut iron panel. New kitchen pass-through with glass counter and espresso-dark surround. Flooring in dark woodgrain tile.",
    result: "Full refresh completed in 22 working days. Restaurant reopened 5 days ahead of owner's target. Footfall increased based on new reservation volume the following month.",
    testimonial: "The team worked two shifts to meet the timeline. The quality of the booth seating and the feature wall is exactly what I showed them on reference images. This is what you want from an execution partner.",
    testimonialAuthor: "Restaurant Owner, Civil Lines, Jaipur",
    tags: ["restaurant interior jaipur", "commercial interior jaipur", "civil lines jaipur"],
    publishedAt: "2026-03-05",
    metaTitle: "Restaurant Interior Overhaul Civil Lines Jaipur | Furnshin Case Study",
    metaDescription: "Full restaurant interior refresh in Civil Lines, Jaipur — 22 days, ₹18L. Custom booth seating, iron feature wall, kitchen pass-through redesign. By Furnshin.",
    keywords: ["restaurant interior jaipur", "commercial interior civil lines jaipur", "restaurant design jaipur"],
  },
  {
    slug: "exterior-iron-gate-makeover-sanganer-jaipur",
    title: "Full Exterior & Custom Iron Gate Makeover in Sanganer",
    client: "Singhvi Family",
    location: "Sanganer, Jaipur",
    type: "Residential",
    services: ["Iron & Metal Works", "Aluminum Solutions"],
    duration: "10 days",
    budget: "₹3.2 Lakh",
    challenge: "An independent house in Sanganer with a 30-year-old wooden gate that had warped and no longer closed correctly, and an exterior compound wall that had lost its render in multiple places.",
    solution: "Custom MS gate in a mixed flat-bar and scroll design, powder-coated in matte charcoal. Concrete anchor posts replaced old timber posts. Aluminum mesh grills on compound wall openings. Compound wall re-rendered and painted.",
    result: "A complete exterior transformation visible from the street. The gate mechanism operates smoothly with no warping risk. The aluminum grills allow ventilation while maintaining security.",
    testimonial: "The new gate changed how the house looks from the road completely. Worth every rupee. The bracket and anchor work was done properly — no shortcuts.",
    testimonialAuthor: "Mr. Singhvi, Sanganer, Jaipur",
    tags: ["iron gate jaipur", "exterior makeover jaipur", "sanganer jaipur"],
    publishedAt: "2026-03-12",
    metaTitle: "Custom Iron Gate & Exterior Makeover Sanganer Jaipur | Furnshin",
    metaDescription: "Custom MS iron gate and full exterior makeover in Sanganer, Jaipur — 10 days, ₹3.2L. Powder-coated charcoal gate, compound wall, aluminum grills. By Furnshin.",
    keywords: ["iron gate jaipur", "exterior makeover jaipur", "custom gate sanganer jaipur"],
  },
  {
    slug: "showroom-glass-aluminum-facade-jaipur",
    title: "Showroom Glass Work & Aluminum Facade in Jaipur",
    client: "Apparel Showroom (Name Withheld)",
    location: "MI Road Area, Jaipur",
    type: "Commercial",
    services: ["Glass Works", "Aluminum Solutions"],
    duration: "16 days",
    budget: "₹14.5 Lakh",
    challenge: "A 3,000 sq ft ground floor showroom on a main road needed a full facade upgrade — the original facade was tile-clad from 2008 and looked dated. The owner wanted to draw attention from street traffic and communicate a premium brand without a full shop-fit out.",
    solution: "Full-height aluminum composite panel facade in brushed silver with espresso-dark branding panel at centre. Floor-to-ceiling toughened glass frontage replacing opaque wall sections — allowing full visibility of the interior from the street. Integrated LED lighting in the facade panel.",
    result: "Street visibility increased dramatically. The glass frontage means passersby can see the product display from the pavement. Client reported 23% increase in walk-in traffic in the first month after opening.",
    testimonial: "The glass and aluminum work transformed how the shop looks from the road. People who walked past for years without entering now stop and come in because they can see the interior. Furnshin delivered exactly the brief.",
    testimonialAuthor: "Showroom Owner, MI Road, Jaipur",
    tags: ["showroom glass jaipur", "aluminum facade jaipur", "commercial glass work jaipur"],
    publishedAt: "2026-03-20",
    metaTitle: "Showroom Glass Work & Aluminum Facade Jaipur | Furnshin Case Study",
    metaDescription: "Full showroom facade upgrade in Jaipur — 16 days, ₹14.5L. Floor-to-ceiling glass frontage, aluminum composite panels, integrated LED. By Furnshin.",
    keywords: ["showroom glass jaipur", "aluminum facade jaipur", "glass work commercial jaipur"],
  },
];
