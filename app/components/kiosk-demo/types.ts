export type DemoScreen = 'welcome' | 'orderType' | 'menu' | 'checkout' | 'upi' | 'success';

export type OrderType = 'dine-in' | 'takeaway';

export type DemoCategory = {
  id: string;
  name: string;
  imageSrc: string;
};

export type DemoMenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  veg: boolean;
};

export type CartLine = {
  lineId: string;
  itemId: string;
  name: string;
  price: number;
  qty: number;
  imageSrc: string;
};

export type DemoCoupon = {
  code: string;
  label: string;
  description: string;
  discountPercent?: number;
  discountFlat?: number;
  minOrder: number;
};
