'use client';

import React from 'react';
import { formatInr } from '../data/menu';
import { useKioskDemo } from '../KioskDemoContext';

type CartBarProps = {
  onCheckout: () => void;
};

export function CartBar({ onCheckout }: CartBarProps) {
  const { cartCount, cartTotal } = useKioskDemo();

  if (cartCount === 0) return null;

  return (
    <button type="button" className="kd-cart-bar" onClick={onCheckout}>
      <span className="kd-cart-bar-count">{cartCount} item{cartCount === 1 ? '' : 's'}</span>
      <span className="kd-cart-bar-label">Order Now</span>
      <span className="kd-cart-bar-total">{formatInr(cartTotal)}</span>
    </button>
  );
}
