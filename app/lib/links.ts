export const BOOK_DEMO_URL = "/book";

export const SITE_BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://entropiacity.com"
).replace(/\/$/, "");

/** Live HRMS demo. Override with NEXT_PUBLIC_HRMS_DEMO_URL in production. */
export const HRMS_DEMO_URL =
  process.env.NEXT_PUBLIC_HRMS_DEMO_URL ??
  "https://hrms.entropia.in/login?from=%2Fdashboard";
