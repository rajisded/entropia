'use client';

import React from 'react';
import { formatInr } from '../data/menu';
import { useKioskDemo } from '../KioskDemoContext';
import { UpiQrCode } from '../parts/UpiQrCode';
import { ScreenShell } from '../parts/ScreenShell';

export function UpiPaymentScreen() {
  const { upiPaymentUrl, paymentTotal, goTo, completeUpiPayment } = useKioskDemo();

  return (
    <ScreenShell
      className="kd-upi"
      footer={
        <div className="kd-upi-footer">
          <button type="button" className="kd-btn kd-btn-primary kd-btn-block" onClick={completeUpiPayment}>
            I&apos;ve paid (demo)
          </button>
          <p className="kd-demo-note kd-demo-note--center">Demo only. No real charge.</p>
        </div>
      }
    >
      <button type="button" className="kd-back-link" onClick={() => goTo('checkout')}>
        ← Back
      </button>

      <div className="kd-upi-panel">
        <p className="kd-upi-eyebrow">Secure checkout</p>
        <h2 className="kd-upi-title">Pay with UPI</h2>

        <div className="kd-upi-amount-card">
          <span className="kd-upi-amount-label">Amount due</span>
          <span className="kd-upi-amount-value">{formatInr(paymentTotal)}</span>
        </div>

        <div className="kd-upi-qr-wrap">
          {upiPaymentUrl ? (
            <UpiQrCode value={upiPaymentUrl} size={184} label="Scan to pay" />
          ) : (
            <div className="kd-upi-qr-skeleton" style={{ width: 184, height: 184 }} aria-hidden />
          )}
        </div>

        <p className="kd-upi-hint">
          Open any UPI app and scan the code. This demo opens our thank-you page.
        </p>
      </div>
    </ScreenShell>
  );
}
