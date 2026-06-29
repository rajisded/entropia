export function buildThankYouUrl(origin: string): string {
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  return `${origin.replace(/\/$/, '')}/thankyou?ref=${token}`;
}
