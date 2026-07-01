"use client";

import { useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  locale?: string;
  prefix?: string;
  suffix?: string;
}

export function CountUp({
  to,
  from,
  duration = 0.55,
  className = "",
  locale = "en-IN",
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from ?? to);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const formatValue = useCallback(
    (latest: number) => {
      const rounded = Math.round(latest);
      return `${prefix}${rounded.toLocaleString(locale)}${suffix}`;
    },
    [locale, prefix, suffix],
  );

  useEffect(() => {
    motionValue.set(to);
  }, [to, motionValue]);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(motionValue.get());
    }
  }, [formatValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

export function AnimatedInr({
  value,
  className,
  duration = 0.55,
}: {
  value: number;
  className?: string;
  duration?: number;
}) {
  return (
    <CountUp
      to={value}
      className={className}
      duration={duration}
      prefix="₹"
    />
  );
}
