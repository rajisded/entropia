'use client';

import React, { useCallback, useRef, useState } from 'react';
import type { DemoMenuItem } from '../types';
import { useKioskDemo } from '../KioskDemoContext';
import { ScreenShell } from '../parts/ScreenShell';
import { CategoryDial, type CategoryDialHandle } from '../parts/CategoryDial';
import { MenuCatalog, type MenuCatalogHandle } from '../parts/MenuCatalog';
import { ItemSheet } from '../parts/ItemSheet';
import { CartBar } from '../parts/CartBar';

export function MenuScreen() {
  const { orderType, goTo, addToCart } = useKioskDemo();
  const [selectedItem, setSelectedItem] = useState<DemoMenuItem | null>(null);

  const dialRef = useRef<CategoryDialHandle>(null);
  const catalogRef = useRef<MenuCatalogHandle>(null);
  const suppressCatalogSyncRef = useRef(false);
  const suppressDialSyncRef = useRef(false);

  const handleDialCategory = useCallback((categoryId: string, index: number) => {
    if (suppressDialSyncRef.current) return;
    suppressCatalogSyncRef.current = true;
    catalogRef.current?.scrollToCategory(categoryId);
    window.setTimeout(() => {
      suppressCatalogSyncRef.current = false;
    }, 700);
    void index;
  }, []);

  const handleCatalogCategory = useCallback((categoryId: string, index: number) => {
    if (suppressCatalogSyncRef.current) return;
    suppressDialSyncRef.current = true;
    dialRef.current?.scrollToIndex(index, true);
    window.setTimeout(() => {
      suppressDialSyncRef.current = false;
    }, 700);
    void categoryId;
  }, []);

  return (
    <ScreenShell
      className="kd-menu"
      footer={<CartBar onCheckout={() => goTo('checkout')} />}
    >
      <header className="kd-menu-header">
        <button type="button" className="kd-back-link" onClick={() => goTo('orderType')}>
          ←
        </button>
        <div className="kd-menu-header-text">
          <p className="kd-menu-header-eyebrow">
            {orderType === 'takeaway' ? 'Take away' : 'Dine in'}
          </p>
          <h2 className="kd-menu-header-title">Menu</h2>
        </div>
      </header>

      <CategoryDial ref={dialRef} onCategoryChange={handleDialCategory} />

      <MenuCatalog
        ref={catalogRef}
        onCategoryVisible={handleCatalogCategory}
        onSelectItem={setSelectedItem}
      />

      {selectedItem ? (
        <ItemSheet
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAdd={(qty) => {
            addToCart({
              itemId: selectedItem.id,
              name: selectedItem.name,
              price: selectedItem.price,
            imageSrc: selectedItem.imageSrc,
              qty,
            });
            setSelectedItem(null);
          }}
        />
      ) : null}
    </ScreenShell>
  );
}
