'use client';

import React from 'react';
import { formatInr } from '../data/menu';
import { useKioskDemo } from '../KioskDemoContext';
import { UpiQrCode } from '../parts/UpiQrCode';
import { ScreenShell } from '../parts/ScreenShell';

export function UpiPaymentScreen() {
  const { upiPaymentUrl, paymentTotal, goTo, completeUpiPayment } = useKioskDemo();

  return (
    <ScreenShell className="kd-upi">
      <button type="button" className="kd-back-link" onClick={() => goTo('checkout')}>
        ← Back
      </button>
      <h2 className="kd-screen-title">Pay with UPI</h2>
      <p className="kd-upi-amount">
        Amount due <strong>{formatInr(paymentTotal)}</strong>
      </p>

      {upiPaymentUrl ? (
        <UpiQrCode value={upiPaymentUrl} />
      ) : (
        <div className="kd-upi-qr-skeleton" style={{ width: 168, height: 168 }} aria-hidden />
      )}

      <p className="kd-upi-hint">
        Scan with any UPI app. This demo QR opens our thank-you page — no real charge.
      </p>

      <button type="button" className="kd-btn kd-btn-primary kd-btn-block" onClick={completeUpiPayment}>
        I&apos;ve paid (demo)
      </button>
      <p className="kd-demo-note kd-demo-note--center">Or scan the QR on your phone</p>
    </ScreenShell>
  );
}
