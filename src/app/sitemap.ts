import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-data";
import { caseStudies } from "@/content/case-studies-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://furnshin.com";
  const now = new Date();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/services/glass-works`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/custom-furniture`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/aluminum-solutions`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/iron-metal-works`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/interior-decoration`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/floor-decor`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages];
}
