'use client';

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DEMO_CATEGORIES } from '../data/menu';

export type CategoryDialHandle = {
  scrollToIndex: (index: number, smooth?: boolean) => void;
};

type DialMetrics = {
  slot: number;
  tileSize: number;
  arcDepth: number;
  labelFontSize: number;
  labelGap: number;
  outerPadV: number;
  dialRowTopInset: number;
};

function getDialMetrics(containerW: number): DialMetrics {
  if (containerW >= 280) {
    return {
      slot: 108,
      tileSize: 78,
      arcDepth: 40,
      labelFontSize: 10,
      labelGap: 6,
      outerPadV: 4,
      dialRowTopInset: 0,
    };
  }
  return {
    slot: 98,
    tileSize: 72,
    arcDepth: 36,
    labelFontSize: 9,
    labelGap: 5,
    outerPadV: 2,
    dialRowTopInset: 0,
  };
}

function computeArcTransform(
  index: number,
  scrollX: number,
  dialWidth: number,
  slot: number,
  arcDepth: number,
) {
  const halfPad = (dialWidth - slot) / 2;
  const itemCenter = halfPad + index * slot + slot / 2 - scrollX;
  const x = itemCenter - dialWidth * 0.5;
  const ax = Math.abs(x);
  const horizontalSpan = dialWidth * 0.5;
  const dMax = arcDepth;
  const R = (horizontalSpan * horizontalSpan + dMax * dMax) / (2 * Math.max(dMax, 0.5));
  const axUse = Math.min(ax, R * 0.999);
  const disc = R * R - axUse * axUse;
  const sqrtDisc = disc > 0 ? Math.sqrt(disc) : 0;
  const translateY = R - sqrtDisc;
  const norm = R > 0.5 ? sqrtDisc / R : 1;
  const scale = 1 + 0.08 * norm;
  return { translateY, scale };
}

type CategoryDialProps = {
  onCategoryChange: (categoryId: string, index: number) => void;
};

type DialCellProps = {
  index: number;
  name: string;
  imageSrc: string;
  active: boolean;
  scrollX: number;
  dialWidth: number;
  metrics: DialMetrics;
  onPress: () => void;
};

function DialCell({
  index,
  name,
  imageSrc,
  active,
  scrollX,
  dialWidth,
  metrics,
  onPress,
}: DialCellProps) {
  const { translateY, scale } = computeArcTransform(
    index,
    scrollX,
    dialWidth,
    metrics.slot,
    metrics.arcDepth,
  );

  return (
    <div
      className="kd-dial-cell-wrap"
      style={{
        width: metrics.slot,
        paddingTop: 2,
        paddingBottom: metrics.arcDepth + 12,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
      }}
    >
      <button type="button" className="kd-dial-cell" onClick={onPress}>
        <div
          className={`kd-dial-circle ${active ? 'kd-dial-circle--active' : ''}`}
          style={{
            width: metrics.tileSize,
            height: metrics.tileSize,
            marginBottom: metrics.labelGap,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt="" className="kd-dial-circle-img" draggable={false} />
        </div>
        <span
          className={`kd-dial-label ${active ? 'kd-dial-label--active' : ''}`}
          style={{
            fontSize: metrics.labelFontSize,
            lineHeight: `${metrics.labelFontSize + 3}px`,
            maxWidth: metrics.tileSize + 18,
          }}
        >
          {name}
        </span>
      </button>
    </div>
  );
}

export const CategoryDial = forwardRef<CategoryDialHandle, CategoryDialProps>(
  function CategoryDial({ onCategoryChange }, ref) {
    const stripRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollXRafRef = useRef(0);
    const scrollEndTimerRef = useRef<number | undefined>(undefined);
    const programmaticScrollRef = useRef(false);
    const [containerWidth, setContainerWidth] = useState(280);
    const [scrollX, setScrollX] = useState(0);
    const suppressEmitUntilRef = useRef(0);

    const metrics = useMemo(() => getDialMetrics(containerWidth), [containerWidth]);
    const halfPad = Math.max(0, (containerWidth - metrics.slot) / 2);

    const activeIndex = useMemo(() => {
      const idx = Math.round(scrollX / metrics.slot);
      return Math.min(DEMO_CATEGORIES.length - 1, Math.max(0, idx));
    }, [scrollX, metrics.slot]);

    const scrollToIndex = useCallback(
      (index: number, smooth = true) => {
        const el = stripRef.current;
        if (!el) return;
        const clamped = Math.min(DEMO_CATEGORIES.length - 1, Math.max(0, index));
        const left = clamped * metrics.slot;
        programmaticScrollRef.current = true;
        el.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
        window.setTimeout(() => {
          programmaticScrollRef.current = false;
        }, smooth ? 520 : 40);
      },
      [metrics.slot],
    );

    useImperativeHandle(ref, () => ({ scrollToIndex }), [scrollToIndex]);

    const emitSnap = useCallback(
      (x: number) => {
        if (Date.now() < suppressEmitUntilRef.current) return;
        const idx = Math.min(
          DEMO_CATEGORIES.length - 1,
          Math.max(0, Math.round(x / metrics.slot)),
        );
        const cat = DEMO_CATEGORIES[idx];
        if (cat) onCategoryChange(cat.id, idx);
      },
      [metrics.slot, onCategoryChange],
    );

    const handleScroll = useCallback(() => {
      const el = stripRef.current;
      if (!el) return;
      if (scrollXRafRef.current) return;
      scrollXRafRef.current = window.requestAnimationFrame(() => {
        scrollXRafRef.current = 0;
        setScrollX(el.scrollLeft);
      });
    }, []);

    const snapToNearest = useCallback(() => {
      if (programmaticScrollRef.current) return;
      const el = stripRef.current;
      if (!el) return;

      const idx = Math.min(
        DEMO_CATEGORIES.length - 1,
        Math.max(0, Math.round(el.scrollLeft / metrics.slot)),
      );
      const snapLeft = idx * metrics.slot;

      if (Math.abs(el.scrollLeft - snapLeft) > 1) {
        programmaticScrollRef.current = true;
        el.scrollTo({ left: snapLeft, behavior: 'smooth' });
        window.setTimeout(() => {
          programmaticScrollRef.current = false;
        }, 400);
      } else {
        emitSnap(el.scrollLeft);
      }
    }, [emitSnap, metrics.slot]);

    useLayoutEffect(() => {
      const node = containerRef.current;
      if (!node) return;
      const ro = new ResizeObserver((entries) => {
        const w = entries[0]?.contentRect.width ?? 280;
        setContainerWidth(w);
      });
      ro.observe(node);
      setContainerWidth(node.getBoundingClientRect().width || 280);
      return () => ro.disconnect();
    }, []);

    useEffect(() => {
      const el = stripRef.current;
      if (!el) return;

      const scheduleSnap = () => {
        window.clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = window.setTimeout(snapToNearest, 140);
      };

      const onScroll = () => {
        handleScroll();
        scheduleSnap();
      };

      const onScrollEnd = () => {
        window.clearTimeout(scrollEndTimerRef.current);
        snapToNearest();
      };

      el.addEventListener('scroll', onScroll, { passive: true });
      el.addEventListener('scrollend', onScrollEnd);

      return () => {
        el.removeEventListener('scroll', onScroll);
        el.removeEventListener('scrollend', onScrollEnd);
        window.clearTimeout(scrollEndTimerRef.current);
        if (scrollXRafRef.current) window.cancelAnimationFrame(scrollXRafRef.current);
      };
    }, [handleScroll, snapToNearest]);

    return (
      <div
        ref={containerRef}
        className="kd-dial-strip-outer"
        style={{
          paddingTop: metrics.outerPadV,
          paddingBottom: Math.max(0, metrics.outerPadV - 2),
        }}
      >
        <div className="kd-dial-row" style={{ paddingTop: metrics.dialRowTopInset }}>
          <div ref={stripRef} className="kd-dial-scroll" data-lenis-prevent>
            <div className="kd-dial-pad" style={{ width: halfPad }} aria-hidden />
            {DEMO_CATEGORIES.map((cat, index) => (
              <DialCell
                key={cat.id}
                index={index}
                name={cat.name}
                imageSrc={cat.imageSrc}
                active={activeIndex === index}
                scrollX={scrollX}
                dialWidth={containerWidth}
                metrics={metrics}
                onPress={() => {
                  if (activeIndex === index) return;
                  suppressEmitUntilRef.current = Date.now() + 650;
                  scrollToIndex(index, true);
                  onCategoryChange(cat.id, index);
                }}
              />
            ))}
            <div className="kd-dial-pad" style={{ width: halfPad }} aria-hidden />
          </div>
        </div>
      </div>
    );
  },
);
