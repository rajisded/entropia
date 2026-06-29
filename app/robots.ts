import type { MetadataRoute } from "next";
import { SITE_BASE_URL } from "./lib/links";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "cohere-ai",
] as const;

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${SITE_BASE_URL}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/_next/", "/thankyou"],
      })),
    ],
    sitemap,
    host: SITE_BASE_URL,
  };
}
