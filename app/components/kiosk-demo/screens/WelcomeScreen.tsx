'use client';

import React, { useEffect, useRef } from 'react';
import { useKioskDemo } from '../KioskDemoContext';
import { ScreenShell } from '../parts/ScreenShell';

const WELCOME_VIDEO = '/food.mp4';

export function WelcomeScreen() {
  const { goTo } = useKioskDemo();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();

    const onVisibility = () => {
      if (!document.hidden) play();
    };

    const onPause = () => {
      if (video.paused) play();
    };

    document.addEventListener('visibilitychange', onVisibility);
    video.addEventListener('pause', onPause);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <ScreenShell className="kd-welcome">
      <video
        ref={videoRef}
        className="kd-welcome-video"
        src={WELCOME_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="kd-welcome-scrim" aria-hidden />
      <div className="kd-welcome-content">
        <h2 className="kd-welcome-title">
          Order your
          <br />
          <span className="kd-welcome-highlight">favourites</span>
        </h2>
        <button type="button" className="kd-btn kd-btn-primary kd-btn-xl kd-welcome-cta" onClick={() => goTo('orderType')}>
          Order Now
        </button>
      </div>
    </ScreenShell>
  );
}
