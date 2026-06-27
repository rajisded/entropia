"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
