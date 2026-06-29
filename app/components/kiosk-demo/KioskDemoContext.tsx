'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { CartLine, DemoCoupon, DemoScreen, OrderType } from './types';
import { buildThankYouUrl } from './lib/thank-you-url';
import { computeCouponDiscount, findCoupon } from './data/coupons';

export type KioskDemoActions = {
  goToOrderType: () => void;
};

type KioskDemoContextValue = {
  screen: DemoScreen;
  orderType: OrderType | null;
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  lastOrderId: string | null;
  upiPaymentUrl: string | null;
  paymentTotal: number;
  appliedCoupon: DemoCoupon | null;
  couponMessage: string | null;
  discountAmount: number;
  orderTax: number;
  orderTotal: number;
  goTo: (screen: DemoScreen) => void;
  setOrderType: (type: OrderType) => void;
  addToCart: (line: Omit<CartLine, 'lineId' | 'qty'> & { qty?: number }) => void;
  updateQty: (lineId: string, qty: number) => void;
  removeLine: (lineId: string) => void;
  placeOrder: () => string;
  startUpiPayment: (total: number) => void;
  completeUpiPayment: () => void;
  applyCoupon: (code: string) => boolean;
  clearCoupon: () => void;
  resetDemo: () => void;
};

const KioskDemoContext = createContext<KioskDemoContextValue | null>(null);

function randomOrderId(): string {
  return `DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
}

type KioskDemoProviderProps = {
  children: React.ReactNode;
  actionsRef?: React.MutableRefObject<KioskDemoActions | null>;
};

export function KioskDemoProvider({ children, actionsRef }: KioskDemoProviderProps) {
  const [screen, setScreen] = useState<DemoScreen>('welcome');
  const [orderType, setOrderTypeState] = useState<OrderType | null>(null);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);
  const [upiPaymentUrl, setUpiPaymentUrl] = useState<string | null>(null);
  const [paymentTotal, setPaymentTotal] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<DemoCoupon | null>(null);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const cartCount = useMemo(() => cart.reduce((sum, line) => sum + line.qty, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, line) => sum + line.price * line.qty, 0),
    [cart],
  );

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return computeCouponDiscount(appliedCoupon, cartTotal);
  }, [appliedCoupon, cartTotal]);

  const orderTax = useMemo(() => {
    const taxable = Math.max(0, cartTotal - discountAmount);
    return Math.round(taxable * 0.05);
  }, [cartTotal, discountAmount]);

  const orderTotal = useMemo(
    () => Math.max(0, cartTotal - discountAmount) + orderTax,
    [cartTotal, discountAmount, orderTax],
  );

  const goTo = useCallback((next: DemoScreen) => setScreen(next), []);

  const setOrderType = useCallback((type: OrderType) => {
    setOrderTypeState(type);
    setScreen('menu');
  }, []);

  useEffect(() => {
    if (!actionsRef) return;
    actionsRef.current = { goToOrderType: () => goTo('orderType') };
    return () => {
      actionsRef.current = null;
    };
  }, [actionsRef, goTo]);

  const addToCart = useCallback(
    (line: Omit<CartLine, 'lineId' | 'qty'> & { qty?: number }) => {
      const qty = line.qty ?? 1;
      setCart((prev) => {
        const existing = prev.find((l) => l.itemId === line.itemId);
        if (existing) {
          return prev.map((l) =>
            l.lineId === existing.lineId ? { ...l, qty: l.qty + qty } : l,
          );
        }
        return [
          ...prev,
          {
            lineId: `${line.itemId}-${Date.now()}`,
            itemId: line.itemId,
            name: line.name,
            price: line.price,
            imageSrc: line.imageSrc,
            qty,
          },
        ];
      });
    },
    [],
  );

  const updateQty = useCallback((lineId: string, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) return prev.filter((l) => l.lineId !== lineId);
      return prev.map((l) => (l.lineId === lineId ? { ...l, qty } : l));
    });
  }, []);

  const removeLine = useCallback((lineId: string) => {
    setCart((prev) => prev.filter((l) => l.lineId !== lineId));
  }, []);

  const applyCoupon = useCallback(
    (code: string) => {
      const coupon = findCoupon(code);
      if (!coupon) {
        setCouponMessage('Invalid coupon code');
        return false;
      }
      const discount = computeCouponDiscount(coupon, cartTotal);
      if (discount <= 0) {
        setCouponMessage(`Min order ${coupon.minOrder} required for ${coupon.code}`);
        return false;
      }
      setAppliedCoupon(coupon);
      setCouponMessage(`${coupon.label} applied`);
      return true;
    },
    [cartTotal],
  );

  const clearCoupon = useCallback(() => {
    setAppliedCoupon(null);
    setCouponMessage(null);
  }, []);

  const placeOrder = useCallback(() => {
    const id = randomOrderId();
    setLastOrderId(id);
    setCart([]);
    setUpiPaymentUrl(null);
    setPaymentTotal(0);
    setAppliedCoupon(null);
    setCouponMessage(null);
    setScreen('success');
    return id;
  }, []);

  const startUpiPayment = useCallback((total: number) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    setPaymentTotal(total);
    setUpiPaymentUrl(buildThankYouUrl(origin));
    setScreen('upi');
  }, []);

  const completeUpiPayment = useCallback(() => {
    placeOrder();
  }, [placeOrder]);

  const resetDemo = useCallback(() => {
    setScreen('welcome');
    setOrderTypeState(null);
    setCart([]);
    setLastOrderId(null);
    setUpiPaymentUrl(null);
    setPaymentTotal(0);
    setAppliedCoupon(null);
    setCouponMessage(null);
  }, []);

  const value = useMemo<KioskDemoContextValue>(
    () => ({
      screen,
      orderType,
      cart,
      cartCount,
      cartTotal,
      lastOrderId,
      upiPaymentUrl,
      paymentTotal,
      appliedCoupon,
      couponMessage,
      discountAmount,
      orderTax,
      orderTotal,
      goTo,
      setOrderType,
      addToCart,
      updateQty,
      removeLine,
      placeOrder,
      startUpiPayment,
      completeUpiPayment,
      applyCoupon,
      clearCoupon,
      resetDemo,
    }),
    [
      screen,
      orderType,
      cart,
      cartCount,
      cartTotal,
      lastOrderId,
      upiPaymentUrl,
      paymentTotal,
      appliedCoupon,
      couponMessage,
      discountAmount,
      orderTax,
      orderTotal,
      goTo,
      setOrderType,
      addToCart,
      updateQty,
      removeLine,
      placeOrder,
      startUpiPayment,
      completeUpiPayment,
      applyCoupon,
      clearCoupon,
      resetDemo,
    ],
  );

  return <KioskDemoContext.Provider value={value}>{children}</KioskDemoContext.Provider>;
}

export function useKioskDemo(): KioskDemoContextValue {
  const ctx = useContext(KioskDemoContext);
  if (!ctx) throw new Error('useKioskDemo must be used within KioskDemoProvider');
  return ctx;
}
