import { MetadataRoute } from "next";
import { blogTopics } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bot.jewelry";
  const staticRoutes = [
    "",
    "/chat",
    "/knowledge",
    "/compare",
    "/estimator",
    "/buying-assistant",
    "/research",
    "/gallery",
    "/blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogTopics.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
