"use client";

import { GRID_LINE, GRID_MAX_W, GRID_OUTER_MARGIN } from "../lib/grid";

export function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical rails — span full page height, sit above section backgrounds */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: `calc(100% - ${GRID_OUTER_MARGIN * 2}px)`,
          maxWidth: GRID_MAX_W,
          borderLeft: GRID_LINE,
          borderRight: GRID_LINE,
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
      {children}
    </div>
  );
}
