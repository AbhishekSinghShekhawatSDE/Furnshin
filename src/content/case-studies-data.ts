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
    challenge: "The Sharma family had just received possession of a new 3BHK flat in Mansarovar, Jaipur. The space was delivered as a completely bare shell — unfinished concrete flooring, unpainted walls, exposed electrical conduits, and absolutely no storage provision. The critical constraint: the family needed to vacate their rented accommodation and move in fully within 25 days of handing us the keys. Most local contractors had quoted 45 to 60 days for a project of this scale, which would have forced the family into expensive temporary housing.",
    solution: "We approached this not just as an interior design project, but as a critical logistics operation. The key to the timeline was eliminating waiting periods between trades. We pre-fabricated the modular kitchen carcasses and wardrobe frames in our workshop while the civil work happened on-site. The sequence was strict: vitrified tile flooring was laid across the entire 1,400 sq ft flat in the first three days. The false ceiling framework was erected immediately after, integrating cove lighting. Painting was completed before any furniture was brought into the flat, preventing dust contamination and finish damage. We used BWP grade plywood for the kitchen and MR grade for the wardrobes, ensuring both speed and long-term durability.",
    result: "By day 18, the flat was completely transformed from a bare concrete shell into a warm, functional, and fully furnished home. All three bedrooms were fitted with floor-to-ceiling custom wardrobes, designed specifically around the family's storage needs. The living and dining space featured a stepped false ceiling with warm 2700K ambient lighting, and a custom espresso-laminate TV unit spanning the main wall. The modular kitchen was fully operational with integrated appliances. The family successfully moved in on day 19, avoiding any temporary accommodation costs and settling into a home that looked exactly as planned and budgeted.",
    testimonial: "We were extremely skeptical that a full 3BHK could be done in under 3 weeks. Furnshin did it in 18 days without cutting a single corner on quality. The wardrobes and kitchen look exactly like the 3D renders we discussed during the design meeting. The communication was flawless — we knew exactly what was happening every single day.",
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
    challenge: "A fast-growing technology startup leased a 1,200 sq ft open-plan floor in a mixed-use building in Vaishali Nagar. The space needed to be rapidly transformed into a professional workspace accommodating 15 developers, complete with a private meeting room, a dedicated reception area, and an executive cabin. The primary challenges were the rigid 14-day timeline before the new engineering cohort arrived, and a strict building management policy prohibiting noisy civil work during regular business hours because of residential tenants on the floors above.",
    solution: "To circumvent the noise restrictions and meet the aggressive timeline, we eliminated traditional masonry entirely. We designed a layout utilizing 10mm toughened frameless glass partitions to create the meeting room and executive cabin. This provided the necessary acoustic separation while allowing natural light to penetrate deep into the developer workspace. For the flooring, we specified SPC (Stone Plastic Composite) luxury vinyl tiles in a warm oak finish. SPC is a click-lock system that requires zero wet adhesives, enabling us to lay the entire 1,200 sq ft floor silently over a single weekend. The reception desk was custom-fabricated off-site using walnut laminate with an espresso-dark base, and installed in a matter of hours.",
    result: "The office was completely ready, cleaned, and handed over 2 days ahead of the deadline. The expansive use of frameless glass created exactly the modern, transparent aesthetic the startup founders desired for impressing clients and attracting engineering talent. The SPC flooring provided excellent acoustic dampening, reducing footfall echo significantly compared to standard vitrified tiles — a critical benefit in an open-plan developer environment.",
    testimonial: "The glass partition execution was incredibly precise, and they honored the impossible timeline they promised. Our team walked into a fully functional, beautiful office on day 12. Extremely professional crew, and zero disruption complaints from our building neighbors.",
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
    challenge: "The Gupta family’s new home in Pratap Nagar had a challenging kitchen layout: a corner floor plan with an awkward L-shape and a massive structural column that aggressively interrupted the natural workflow. Additionally, the brief called for three highly specific modular wardrobes for the bedrooms. Each wardrobe needed a totally different internal layout configuration to cater to drastically different users: the master bedroom for a working couple, the second room for a teenager with extensive hobby equipment, and the ground-floor room for an elderly parent who struggled with bending and reaching.",
    solution: "We turned the problematic kitchen column into an asset. Instead of fighting it, we designed the cabinetry around it, using it as an anchoring point for a partial peninsula boundary that created a dedicated preparation zone separate from the cooking zone. We utilized BWP grade plywood throughout the kitchen with deep, soft-close drawers for ergonomic storage. For the wardrobes, the external aesthetic was kept cohesive across the home, but the interiors were deeply customized. The elderly parent’s wardrobe featured lowered hanging rods and pull-out trays at waist height to eliminate bending. The teenager’s wardrobe integrated a concealed desk and specialized compartmentalization for sports gear. The master wardrobe prioritized extensive short-hang space for everyday office wear over traditional rigid shelves.",
    result: "The kitchen design transformed an architectural flaw into a highly functional layout that actually improved the cooking workflow by physically separating the prep and washing zones. The three wardrobes demonstrated the true value of custom furniture: they didn't just fit the physical dimensions of the rooms, they perfectly fit the behavioral habits and physical requirements of the specific family members using them daily.",
    testimonial: "The wardrobe for my mother has low shelves and pull-outs she can reach easily without straining her back. My son's wardrobe has his study unit built right in. These were small details we mentioned in passing during our first meeting, and they actually appeared in the final product. That level of active listening is so rare today.",
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
    challenge: "A popular, high-footfall restaurant in Civil Lines had been operating for six years with its original fit-out. The aesthetic was severely dated, the faux-leather booth seating was heavily worn and peeling, and an improperly designed kitchen pass-through wall was creating terrible bottlenecks for the service staff during peak hours. The owner recognized the urgent need for a premium overhaul to stay competitive, but was terrified of the revenue loss associated with closing. The absolute hard limit for the restaurant being shut down was 15 days.",
    solution: "We solved the timeline restriction through a phased, day-and-night execution strategy. Phase one tackled the kitchen pass-through and structural modifications while the restaurant remained open for limited takeout service. We demolished the problematic wall and installed a wide, toughened glass counter with a sleek, espresso-dark architectural surround that improved sightlines and plate-passing efficiency. Phase two was the dining room overhaul, requiring a full closure. We installed sprawling, custom-fabricated booth seating with deep-tufted, high-durability faux leather on heavy MS iron frames. A stunning feature wall was erected using intricate, laser-cut iron panels backlit with warm amber LEDs. The flooring was upgraded to a dark woodgrain vitrified tile that provided the warmth of wood but the extreme durability required for commercial foot traffic.",
    result: "The massive, multi-trade interior refresh was completed from start to finish in 22 working days, with the actual full-closure period lasting only 10 days — reopening the restaurant 5 days ahead of the owner's worst-case scenario. The updated, 'quiet luxury' aesthetic completely repositioned the brand in the neighborhood. Within the first month of reopening, the client reported a 23% increase in weekend reservation volume and a noticeable shift in customer dwell time.",
    testimonial: "The Furnshin team literally worked two shifts to make sure we hit our reopening date. The quality of the booth seating framing and the metal feature wall is exactly what I showed them on my Pinterest reference images. No excuses, no delays. This is exactly what you want from a commercial execution partner.",
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
    challenge: "An independent, 30-year-old home in Sanganer was suffering from significant exterior degradation. The original, massive timber entrance gate had warped severely due to decades of Jaipur's monsoon-to-summer humidity cycles; it dragged on the driveway and no longer latched securely. Furthermore, the exterior masonry compound wall had lost its stucco render in multiple large patches, exposing the brickwork beneath and giving the home a dilapidated street presence that did not match the beautifully maintained interior.",
    solution: "We executed a comprehensive exterior intervention centered around metalwork durability. The rotting timber gate was removed and replaced with a custom-fabricated MS (Mild Steel) double-leaf gate. We designed a hybrid pattern featuring heavy flat-bar vertical members intercepted by traditional, hand-forged scrollwork, creating a gate that felt formidable but elegant. The entire gate assembly was electrostatically powder-coated in a matte charcoal finish for ultimate UV and rust resistance. The failing timber anchor posts were entirely excavated and replaced with heavy-gauge steel posts anchored deep in new concrete footings. Concurrently, the compound wall was repaired, re-rendered, and fitted with sleek, powder-coated aluminum architectural mesh grilles in the openings to provide security and ventilation without looking like prison bars.",
    result: "The architectural street presence of the home was completely transformed in just 10 days. The new MS gate swings effortlessly on heavy-duty, ball-bearing hinges and drops perfectly into its latch with a satisfying click. The structural integrity of the new concrete anchors ensures zero sagging over the next decade. The aluminum mesh grilles modernized the compound wall while significantly improving cross-ventilation into the property's front garden.",
    testimonial: "The new iron gate absolutely changed how the house looks from the road. The matte powder coat finish looks incredibly premium compared to standard brush paint. But what impressed me most was the structural work — the way they trenched and poured the new concrete anchors was proper, heavy-duty construction. No shortcuts were taken.",
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
    challenge: "A prominent 3,000 sq ft ground-floor apparel showroom situated on a high-traffic arterial road near MI Road desperately needed a facade modernization. The exterior was clad in a patchwork of dated ceramic tiles from 2008, and the actual display windows were small, restricting natural light and completely hiding the scale of the store from passing vehicular traffic. The business owner wanted to trigger a complete brand repositioning to attract a higher-tier demographic, but lacked the budget and timeline for a complete internal shop-fit out. The mandate: make the store look expensive from the street, quickly.",
    solution: "We focused 100% of the budget on maximum visual impact: the architectural envelope. We demolished the restrictive masonry sections of the front wall and installed a breathtaking, floor-to-ceiling structural glass frontage using 12mm toughened Saint-Gobain glazing with minimal patch fittings. This effectively turned the entire store interior into a giant display window. To frame this glass expanse, we clad the surrounding building exterior in premium brushed-silver Aluminum Composite Panels (ACP). The focal point was a massive, cantilevered espresso-dark canopy panel over the entrance, featuring integrated, downward-washing warm LED architectural lighting to create a dramatic, glowing portal effect at night.",
    result: "The physical transformation of the facade fundamentally changed the commercial dynamics of the property. The massive glass frontage means both pedestrians and cars stopped at the nearby traffic light now have an unobstructed, panoramic view directly into the brightly lit showroom floor. The brushed silver and ambient lighting established the 'luxury' brand positioning the owner desired before the customer even touched the door handle. The client reported an immediate, measured 23% increase in walk-in traffic in the first 30 days after the scaffolding came down.",
    testimonial: "The structural glass and ACP work transformed our visibility overnight. People who have walked past our store for the last ten years without noticing us are now stopping, looking at the displays, and walking in. Furnshin understood that we weren't just buying construction — we were buying marketing and street presence. They delivered exactly on brief.",
    testimonialAuthor: "Showroom Owner, MI Road, Jaipur",
    tags: ["showroom glass jaipur", "aluminum facade jaipur", "commercial glass work jaipur"],
    publishedAt: "2026-03-20",
    metaTitle: "Showroom Glass Work & Aluminum Facade Jaipur | Furnshin Case Study",
    metaDescription: "Full showroom facade upgrade in Jaipur — 16 days, ₹14.5L. Floor-to-ceiling glass frontage, aluminum composite panels, integrated LED. By Furnshin.",
    keywords: ["showroom glass jaipur", "aluminum facade jaipur", "glass work commercial jaipur"],
  },
];
