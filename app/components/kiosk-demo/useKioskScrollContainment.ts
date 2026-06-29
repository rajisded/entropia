import { useEffect, type RefObject } from 'react';

const SCROLLABLE_SELECTOR =
  '.kd-catalog-scroll, .kd-screen-body, .kd-dial-scroll, .kd-catalog-row, .kd-recommended-row, .kd-sheet';

function findScrollable(
  target: EventTarget | null,
  root: HTMLElement,
  deltaX = 0,
  deltaY = 0,
): HTMLElement | null {
  const preferY = Math.abs(deltaY) >= Math.abs(deltaX);
  let node = target instanceof HTMLElement ? target : null;
  let fallback: HTMLElement | null = null;

  while (node && root.contains(node)) {
    if (node.matches(SCROLLABLE_SELECTOR)) {
      const canY = node.scrollHeight > node.clientHeight + 1;
      const canX = node.scrollWidth > node.clientWidth + 1;
      if (preferY && canY) return node;
      if (!preferY && canX) return node;
      if (!fallback && (canY || canX)) fallback = node;
    }
    node = node.parentElement;
  }

  return fallback;
}

function applyWheelScroll(scrollable: HTMLElement, deltaX: number, deltaY: number): void {
  if (deltaY !== 0 && scrollable.scrollHeight > scrollable.clientHeight + 1) {
    scrollable.scrollTop += deltaY;
  }
  if (deltaX !== 0 && scrollable.scrollWidth > scrollable.clientWidth + 1) {
    scrollable.scrollLeft += deltaX;
  }
}

/** Keep wheel / touch scroll inside the kiosk frame instead of the host page. */
export function useKioskScrollContainment(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let touchStartY = 0;
    let touchStartX = 0;

    const isInside = (target: EventTarget | null) =>
      target instanceof Node && root.contains(target);

    const onWheel = (e: WheelEvent) => {
      if (!isInside(e.target)) return;

      const scrollable = findScrollable(e.target, root, e.deltaX, e.deltaY);
      if (scrollable) {
        applyWheelScroll(scrollable, e.deltaX, e.deltaY);
      }

      e.preventDefault();
      e.stopPropagation();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!isInside(e.target)) return;
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isInside(e.target)) return;

      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      const deltaY = touchStartY - touchY;
      const deltaX = touchStartX - touchX;

      const scrollable = findScrollable(e.target, root, deltaX, deltaY);
      if (!scrollable) {
        e.preventDefault();
        return;
      }

      const canY = scrollable.scrollHeight > scrollable.clientHeight + 1;
      const canX = scrollable.scrollWidth > scrollable.clientWidth + 1;

      if (!canY && !canX) {
        e.preventDefault();
        return;
      }

      const atTop = scrollable.scrollTop <= 0;
      const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
      const atLeft = scrollable.scrollLeft <= 0;
      const atRight = scrollable.scrollLeft + scrollable.clientWidth >= scrollable.scrollWidth - 1;

      const blockY = canY && ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom));
      const blockX = canX && ((deltaX < 0 && atLeft) || (deltaX > 0 && atRight));

      if ((canY && blockY && !canX) || (canX && blockX && !canY) || (blockY && blockX)) {
        e.preventDefault();
      }
    };

    // Capture on document so Lenis / page scroll never wins over the kiosk.
    document.addEventListener('wheel', onWheel, { passive: false, capture: true });
    root.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    root.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true });
      root.removeEventListener('touchstart', onTouchStart, { capture: true });
      root.removeEventListener('touchmove', onTouchMove, { capture: true });
    };
  }, [rootRef]);
}
