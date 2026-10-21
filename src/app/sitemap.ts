import type { MetadataRoute } from "next";
import { jobs } from "@/content/jobs";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}`, changeFrequency: "monthly" as const, priority: n.href === "/" ? 1 : 0.8 }));
  return [
    ...pages,
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 })),
    ...jobs.map((j) => ({ url: `${site.url}/careers/${j.slug}`, lastModified: j.posted, priority: 0.7 })),
  ];
}
