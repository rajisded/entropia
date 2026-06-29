'use client';

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { DEMO_CATEGORIES, DEMO_MENU_ITEMS } from '../data/menu';
import type { DemoMenuItem } from '../types';
import { MenuItemCard } from './MenuItemCard';

export type MenuCatalogHandle = {
  scrollToCategory: (categoryId: string, smooth?: boolean) => void;
};

type MenuCatalogProps = {
  onCategoryVisible: (categoryId: string, index: number) => void;
  onSelectItem: (item: DemoMenuItem) => void;
};

export const MenuCatalog = forwardRef<MenuCatalogHandle, MenuCatalogProps>(
  function MenuCatalog({ onCategoryVisible, onSelectItem }, ref) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
    const ignoreObserverUntilRef = useRef(0);
    const isProgrammaticScrollRef = useRef(false);

    const sections = useMemo(
      () =>
        DEMO_CATEGORIES.map((cat) => ({
          ...cat,
          items: DEMO_MENU_ITEMS.filter((item) => item.categoryId === cat.id),
        })),
      [],
    );

    const scrollToCategory = useCallback((categoryId: string, smooth = true) => {
      const node = sectionRefs.current.get(categoryId);
      const container = scrollRef.current;
      if (!node || !container) return;

      ignoreObserverUntilRef.current = Date.now() + 700;
      isProgrammaticScrollRef.current = true;

      const top = node.offsetTop - 4;
      container.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });

      window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, smooth ? 650 : 50);
    }, []);

    useImperativeHandle(ref, () => ({ scrollToCategory }), [scrollToCategory]);

    const setSectionRef = useCallback((categoryId: string, el: HTMLElement | null) => {
      if (el) sectionRefs.current.set(categoryId, el);
      else sectionRefs.current.delete(categoryId);
    }, []);

    const handleScroll = useCallback(() => {
      if (isProgrammaticScrollRef.current) return;
      if (Date.now() < ignoreObserverUntilRef.current) return;

      const container = scrollRef.current;
      if (!container) return;

      const anchor = container.scrollTop + 28;
      let activeId = sections[0]?.id ?? 'burgers';
      let activeIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const node = sectionRefs.current.get(section.id);
        if (!node) continue;
        if (node.offsetTop <= anchor) {
          activeId = section.id;
          activeIndex = i;
        }
      }

      onCategoryVisible(activeId, activeIndex);
    }, [onCategoryVisible, sections]);

    return (
      <div ref={scrollRef} className="kd-catalog-scroll" data-lenis-prevent onScroll={handleScroll}>
        {sections.map((section) => (
          <section
            key={section.id}
            ref={(el) => setSectionRef(section.id, el)}
            className="kd-catalog-section"
            data-category={section.id}
          >
            <h3 className="kd-catalog-section-title">{section.name.toUpperCase()}</h3>
            <div className="kd-catalog-row">
              {section.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  variant="inline"
                  onSelect={onSelectItem}
                />
              ))}
            </div>
          </section>
        ))}
        <div className="kd-catalog-spacer" aria-hidden />
      </div>
    );
  },
);
