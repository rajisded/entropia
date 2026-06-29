import { DEMO_MENU_ITEMS } from './menu';

const RECOMMENDED_IDS = [
  'drinks-1',
  'desserts-1',
  'starters-1',
  'ice-cream-2',
  'starters-2',
  'drinks-3',
];

export function getRecommendedItems(cartItemIds: Set<string>) {
  return RECOMMENDED_IDS.map((id) => DEMO_MENU_ITEMS.find((item) => item.id === id)).filter(
    (item): item is (typeof DEMO_MENU_ITEMS)[number] =>
      !!item && !cartItemIds.has(item.id),
  );
}
