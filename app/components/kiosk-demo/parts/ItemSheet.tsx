'use client';

import React from 'react';
import type { DemoMenuItem } from '../types';
import { formatInr } from '../data/menu';

type ItemSheetProps = {
  item: DemoMenuItem;
  onClose: () => void;
  onAdd: (qty: number) => void;
};

export function ItemSheet({ item, onClose, onAdd }: ItemSheetProps) {
  const [qty, setQty] = React.useState(1);

  return (
    <div className="kd-sheet-backdrop" role="presentation" onClick={onClose}>
      <div
        className="kd-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="kd-sheet-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.imageSrc} alt="" className="kd-sheet-img" />
        <div className="kd-sheet-body">
          <h3 className="kd-sheet-title">{item.name}</h3>
          <p className="kd-sheet-desc">{item.description}</p>
          <p className="kd-sheet-price">{formatInr(item.price)}</p>
          <div className="kd-qty-row">
            <button
              type="button"
              className="kd-qty-btn"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="kd-qty-value">{qty}</span>
            <button
              type="button"
              className="kd-qty-btn"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button type="button" className="kd-btn kd-btn-primary kd-btn-block" onClick={() => onAdd(qty)}>
            Add to cart · {formatInr(item.price * qty)}
          </button>
        </div>
      </div>
    </div>
  );
}
