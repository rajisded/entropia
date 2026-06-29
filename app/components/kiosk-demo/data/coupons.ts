import type { DemoCoupon } from '../types';

export const DEMO_COUPONS: DemoCoupon[] = [
  {
    code: 'WELCOME10',
    label: 'Welcome 10%',
    description: '10% off your first demo order',
    discountPercent: 10,
    minOrder: 200,
  },
  {
    code: 'SAVE50',
    label: 'Flat ₹50',
    description: '₹50 off on orders above ₹300',
    discountFlat: 50,
    minOrder: 300,
  },
  {
    code: 'COMBO15',
    label: 'Combo 15%',
    description: '15% off family combos & large carts',
    discountPercent: 15,
    minOrder: 400,
  },
  {
    code: 'FREEFRIES',
    label: 'Free fries',
    description: '₹119 off. Add fries to your cart!',
    discountFlat: 119,
    minOrder: 250,
  },
];

export function findCoupon(code: string): DemoCoupon | undefined {
  return DEMO_COUPONS.find((c) => c.code === code.trim().toUpperCase());
}

export function computeCouponDiscount(coupon: DemoCoupon, subtotal: number): number {
  if (subtotal < coupon.minOrder) return 0;
  if (coupon.discountFlat) return Math.min(coupon.discountFlat, subtotal);
  if (coupon.discountPercent) return Math.round((subtotal * coupon.discountPercent) / 100);
  return 0;
}
