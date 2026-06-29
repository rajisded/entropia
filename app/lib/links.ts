export const BOOK_DEMO_URL = "/book";

/** Live HRMS demo — override with NEXT_PUBLIC_HRMS_DEMO_URL in production. */
export const HRMS_DEMO_URL =
  process.env.NEXT_PUBLIC_HRMS_DEMO_URL ??
  "https://hrms.entropia.in/login?from=%2Fdashboard";
