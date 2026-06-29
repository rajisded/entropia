"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export type HeroProductLink = {
  title: string;
  sub: string;
  href: string;
};

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

type HeroProductLinksProps = {
  products: readonly HeroProductLink[];
  className?: string;
};

export function HeroProductLinks({ products, className }: HeroProductLinksProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const updatePill = useCallback((index: number | null) => {
    const track = trackRef.current;
    if (!track || index === null) {
      setPill((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const item = itemRefs.current[index];
    if (!item) return;

    const trackRect = track.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    setPill({
      left: itemRect.left - trackRect.left,
      width: itemRect.width,
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    updatePill(activeIndex);
  }, [activeIndex, updatePill, products]);

  useLayoutEffect(() => {
    const onResize = () => updatePill(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, updatePill]);

  return (
    <div
      ref={trackRef}
      className={`hero-product-links${className ? ` ${className}` : ""}`}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <span
        className="hero-product-links-pill"
        aria-hidden
        style={{
          transform: `translateX(${pill.left}px)`,
          width: pill.width,
          opacity: pill.opacity,
        }}
      />

      {products.map((product, index) => (
        <Link
          key={product.href}
          href={product.href}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={`hero-product-link${activeIndex === index ? " hero-product-link--active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)}
          onBlur={() => setActiveIndex(null)}
        >
          <span className="hero-product-link-text">
            <span className="hero-product-link-title">{product.title}</span>
            <span className="hero-product-link-icon">
              <ArrowIcon />
            </span>
          </span>
          <span className="hero-product-link-sub">{product.sub}</span>
        </Link>
      ))}
    </div>
  );
}
