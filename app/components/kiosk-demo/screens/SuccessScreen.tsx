'use client';

import React, { useEffect } from 'react';
import { useKioskDemo } from '../KioskDemoContext';
import { ScreenShell } from '../parts/ScreenShell';

export function SuccessScreen() {
  const { lastOrderId, orderType, resetDemo } = useKioskDemo();

  useEffect(() => {
    const timer = window.setTimeout(() => resetDemo(), 12000);
    return () => window.clearTimeout(timer);
  }, [resetDemo]);

  return (
    <ScreenShell className="kd-success">
      <div className="kd-success-icon" aria-hidden>
        ✓
      </div>
      <h2 className="kd-success-title">Thank you!</h2>
      <p className="kd-success-sub">
        Your demo order <strong>{lastOrderId ?? 'DEMO-0000'}</strong> is confirmed.
      </p>
      <p className="kd-success-meta">
        {orderType === 'takeaway' ? 'Pick up at the counter when ready.' : 'Please take a seat — we’ll call your number.'}
      </p>
      <button type="button" className="kd-btn kd-btn-primary kd-btn-block" onClick={resetDemo}>
        Start over
      </button>
      <p className="kd-demo-note kd-demo-note--center">Resets automatically in a few seconds</p>
    </ScreenShell>
  );
}
