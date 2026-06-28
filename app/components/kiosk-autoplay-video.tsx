"use client";

import { useEffect, useRef } from "react";

type KioskAutoplayVideoProps = {
  src: string;
  label?: string;
  poster?: string;
  aspect: "portrait" | "landscape";
  className?: string;
  loop?: boolean;
};

export function KioskAutoplayVideo({
  src,
  label,
  poster,
  aspect,
  className = "",
  loop = true,
}: KioskAutoplayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`kiosk-media-frame ${aspect === "portrait" ? "kiosk-portrait-frame" : "kiosk-landscape-frame"} ${className}`.trim()}
    >
      <video
        ref={videoRef}
        className={`kiosk-video kiosk-video--${aspect}`}
        src={src}
        muted
        playsInline
        loop={loop}
        preload="auto"
        poster={poster}
      />
      {label ? <div className="kiosk-media-label">{label}</div> : null}
    </div>
  );
}
