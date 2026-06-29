import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description:
      "Modern restaurant kiosk and HRMS software for India. PetPooja integration, face scan attendance, and automated payroll.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    orientation: "portrait-primary",
    lang: "en-IN",
    categories: ["business", "productivity", "finance"],
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
