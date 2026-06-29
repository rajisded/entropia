import { SITE_BASE_URL } from "../../../lib/links";

export function buildThankYouUrl(): string {
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  return `${SITE_BASE_URL}/thankyou?ref=${token}`;
}
