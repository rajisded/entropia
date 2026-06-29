'use client';

import React from 'react';
import type { DemoMenuItem } from '../types';
import { formatInr } from '../data/menu';

type MenuItemCardProps = {
  item: DemoMenuItem;
  onSelect: (item: DemoMenuItem) => void;
  variant?: 'grid' | 'inline';
};

export function MenuItemCard({ item, onSelect, variant = 'grid' }: MenuItemCardProps) {
  if (variant === 'inline') {
    return (
      <button type="button" className="kd-menu-inline-card" onClick={() => onSelect(item)}>
        <div className="kd-menu-inline-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.imageSrc} alt="" className="kd-menu-inline-img" loading="lazy" draggable={false} />
          <span className={`kd-veg-dot ${item.veg ? 'kd-veg-dot--veg' : 'kd-veg-dot--nonveg'}`} />
        </div>
        <p className="kd-menu-inline-name">{item.name}</p>
        <p className="kd-menu-inline-price">{formatInr(item.price)}</p>
      </button>
    );
  }

  return (
    <button type="button" className="kd-menu-card" onClick={() => onSelect(item)}>
      <div className="kd-menu-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.imageSrc} alt="" className="kd-menu-card-img" loading="lazy" />
        <span className={`kd-veg-dot ${item.veg ? 'kd-veg-dot--veg' : 'kd-veg-dot--nonveg'}`} />
      </div>
      <div className="kd-menu-card-body">
        <p className="kd-menu-card-name">{item.name}</p>
        <p className="kd-menu-card-price">{formatInr(item.price)}</p>
      </div>
    </button>
  );
}
