'use client';

import React, { useMemo, useState } from 'react';
import { DEMO_COUPONS } from '../data/coupons';
import { formatInr } from '../data/menu';
import { getRecommendedItems } from '../data/recommended';
import { useKioskDemo } from '../KioskDemoContext';
import { PaymentMethodSheet } from '../parts/PaymentMethodSheet';
import { ScreenShell } from '../parts/ScreenShell';

export function CheckoutScreen() {
  const {
    cart,
    cartTotal,
    discountAmount,
    orderTax,
    orderTotal,
    appliedCoupon,
    couponMessage,
    goTo,
    addToCart,
    updateQty,
    removeLine,
    placeOrder,
    startUpiPayment,
    applyCoupon,
    clearCoupon,
  } = useKioskDemo();

  const [couponInput, setCouponInput] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const cartItemIds = useMemo(() => new Set(cart.map((line) => line.itemId)), [cart]);
  const recommended = useMemo(() => getRecommendedItems(cartItemIds), [cartItemIds]);

  if (cart.length === 0) {
    return (
      <ScreenShell className="kd-checkout">
        <button type="button" className="kd-back-link" onClick={() => goTo('menu')}>
          ← Back to menu
        </button>
        <p className="kd-empty-state">Your cart is empty. Add items from the menu.</p>
        <button type="button" className="kd-btn kd-btn-secondary" onClick={() => goTo('menu')}>
          Browse menu
        </button>
      </ScreenShell>
    );
  }

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    if (applyCoupon(couponInput)) setCouponInput('');
  };

  return (
    <ScreenShell className="kd-checkout">
      <button type="button" className="kd-back-link" onClick={() => goTo('menu')}>
        ← Add more items
      </button>
      <h2 className="kd-screen-title">Your order</h2>

      <ul className="kd-cart-list">
        {cart.map((line) => (
          <li key={line.lineId} className="kd-cart-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={line.imageSrc} alt="" className="kd-cart-line-img" />
            <div className="kd-cart-line-body">
              <p className="kd-cart-line-name">{line.name}</p>
              <p className="kd-cart-line-price">{formatInr(line.price)}</p>
            </div>
            <div className="kd-cart-line-actions">
              <button
                type="button"
                className="kd-qty-btn kd-qty-btn--sm"
                onClick={() => updateQty(line.lineId, line.qty - 1)}
                aria-label="Decrease"
              >
                −
              </button>
              <span className="kd-qty-value kd-qty-value--sm">{line.qty}</span>
              <button
                type="button"
                className="kd-qty-btn kd-qty-btn--sm"
                onClick={() => updateQty(line.lineId, line.qty + 1)}
                aria-label="Increase"
              >
                +
              </button>
              <button
                type="button"
                className="kd-cart-remove"
                onClick={() => removeLine(line.lineId)}
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>

      {recommended.length > 0 ? (
        <section className="kd-recommended">
          <h3 className="kd-recommended-title">Recommended for you</h3>
          <div className="kd-recommended-row">
            {recommended.map((item) => (
              <button
                key={item.id}
                type="button"
                className="kd-recommended-card"
                onClick={() =>
                  addToCart({
                    itemId: item.id,
                    name: item.name,
                    price: item.price,
                    imageSrc: item.imageSrc,
                  })
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageSrc} alt="" className="kd-recommended-img" draggable={false} />
                <span className="kd-recommended-name">{item.name}</span>
                <span className="kd-recommended-price">{formatInr(item.price)}</span>
                <span className="kd-recommended-add">+ Add</span>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      <section className="kd-coupons">
        <h3 className="kd-coupons-title">Coupons & offers</h3>
        <div className="kd-coupon-chips">
          {DEMO_COUPONS.map((coupon) => (
            <button
              key={coupon.code}
              type="button"
              className={`kd-coupon-chip ${appliedCoupon?.code === coupon.code ? 'kd-coupon-chip--active' : ''}`}
              onClick={() => applyCoupon(coupon.code)}
            >
              {coupon.code}
            </button>
          ))}
        </div>
        <div className="kd-coupon-input-row">
          <input
            type="text"
            className="kd-coupon-input"
            placeholder="Enter coupon code"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleApplyCoupon();
            }}
          />
          <button type="button" className="kd-coupon-apply" onClick={handleApplyCoupon}>
            Apply
          </button>
        </div>
        {appliedCoupon ? (
          <div className="kd-coupon-applied">
            <span>
              {appliedCoupon.label} · −{formatInr(discountAmount)}
            </span>
            <button type="button" className="kd-coupon-remove" onClick={clearCoupon}>
              Remove
            </button>
          </div>
        ) : null}
        {couponMessage ? <p className="kd-coupon-message">{couponMessage}</p> : null}
      </section>

      <div className="kd-totals">
        <div className="kd-totals-row">
          <span>Subtotal</span>
          <span>{formatInr(cartTotal)}</span>
        </div>
        {discountAmount > 0 ? (
          <div className="kd-totals-row kd-totals-row--discount">
            <span>Coupon</span>
            <span>−{formatInr(discountAmount)}</span>
          </div>
        ) : null}
        <div className="kd-totals-row">
          <span>GST (demo)</span>
          <span>{formatInr(orderTax)}</span>
        </div>
        <div className="kd-totals-row kd-totals-row--total">
          <span>Total</span>
          <span>{formatInr(orderTotal)}</span>
        </div>
      </div>

      <button
        type="button"
        className="kd-btn kd-btn-primary kd-btn-block kd-checkout-cta"
        onClick={() => setShowPayment(true)}
      >
        Order Now · {formatInr(orderTotal)}
      </button>

      {showPayment ? (
        <PaymentMethodSheet
          total={orderTotal}
          onClose={() => setShowPayment(false)}
          onPayUpi={() => {
            setShowPayment(false);
            startUpiPayment(orderTotal);
          }}
          onPayCounter={() => {
            setShowPayment(false);
            placeOrder();
          }}
        />
      ) : null}
    </ScreenShell>
  );
}
