/** Bundled food art copied from kiosk-app, same assets as production kiosk. */
const BASE = '/kiosk-demo';

export const KIOSK_DEMO_IMAGES = {
  orderType: {
    dineIn: `${BASE}/order-type/dine-in.png`,
    takeAway: `${BASE}/order-type/take-away.png`,
  },
  categories: {
    burgers: `${BASE}/categories/burgers.jpg`,
    pizza: `${BASE}/categories/svs-kiosk-hero.png`,
    wraps: `${BASE}/categories/wraps.jpg`,
    starters: `${BASE}/categories/fries.jpg`,
    'rice-bowls': `${BASE}/categories/desi-natkhat.jpg`,
    combos: `${BASE}/categories/combos.jpg`,
    'south-indian': `${BASE}/categories/naan.jpg`,
    chinese: `${BASE}/categories/svs-rectangle-11.png`,
    breads: `${BASE}/categories/naan.jpg`,
    drinks: `${BASE}/categories/drinks.jpg`,
    desserts: `${BASE}/categories/combos.jpg`,
    'ice-cream': `${BASE}/categories/drinks.jpg`,
  },
  fallback: `${BASE}/fallback.png`,
  addonLettuce: `${BASE}/addon-lettuce.jpg`,
} as const;

/** Extra shots per category so item rows don't all look identical. */
export const CATEGORY_ITEM_IMAGE_POOL: Record<string, string[]> = {
  burgers: [
    KIOSK_DEMO_IMAGES.categories.burgers,
    `${BASE}/categories/svs-kiosk-1282.png`,
    KIOSK_DEMO_IMAGES.fallback,
  ],
  pizza: [
    KIOSK_DEMO_IMAGES.categories.pizza,
    `${BASE}/categories/rectangle-7-svs.png`,
    KIOSK_DEMO_IMAGES.categories.combos,
  ],
  wraps: [KIOSK_DEMO_IMAGES.categories.wraps, KIOSK_DEMO_IMAGES.categories.burgers],
  starters: [
    KIOSK_DEMO_IMAGES.categories.starters,
    `${BASE}/categories/sauce.jpg`,
    KIOSK_DEMO_IMAGES.addonLettuce,
  ],
  'rice-bowls': [
    KIOSK_DEMO_IMAGES.categories['rice-bowls'],
    KIOSK_DEMO_IMAGES.categories.combos,
    KIOSK_DEMO_IMAGES.categories.breads,
  ],
  combos: [
    KIOSK_DEMO_IMAGES.categories.combos,
    KIOSK_DEMO_IMAGES.categories.burgers,
    KIOSK_DEMO_IMAGES.categories.starters,
  ],
  'south-indian': [
    KIOSK_DEMO_IMAGES.categories['south-indian'],
    KIOSK_DEMO_IMAGES.categories['rice-bowls'],
    `${BASE}/categories/desi-natkhat.jpg`,
  ],
  chinese: [
    KIOSK_DEMO_IMAGES.categories.chinese,
    `${BASE}/categories/wraps.jpg`,
    KIOSK_DEMO_IMAGES.categories.starters,
  ],
  breads: [
    KIOSK_DEMO_IMAGES.categories.breads,
    `${BASE}/categories/naan.jpg`,
    KIOSK_DEMO_IMAGES.categories.combos,
  ],
  drinks: [KIOSK_DEMO_IMAGES.categories.drinks, KIOSK_DEMO_IMAGES.categories.combos],
  desserts: [
    KIOSK_DEMO_IMAGES.categories.desserts,
    KIOSK_DEMO_IMAGES.categories.combos,
    KIOSK_DEMO_IMAGES.fallback,
  ],
  'ice-cream': [
    KIOSK_DEMO_IMAGES.categories['ice-cream'],
    KIOSK_DEMO_IMAGES.categories.desserts,
    KIOSK_DEMO_IMAGES.categories.drinks,
  ],
};

export function categoryImageSrc(categoryId: string): string {
  return (
    KIOSK_DEMO_IMAGES.categories[categoryId as keyof typeof KIOSK_DEMO_IMAGES.categories] ??
    KIOSK_DEMO_IMAGES.fallback
  );
}

export function itemImageSrc(categoryId: string, itemIndex: number): string {
  const pool = CATEGORY_ITEM_IMAGE_POOL[categoryId];
  if (!pool?.length) return categoryImageSrc(categoryId);
  return pool[itemIndex % pool.length];
}
