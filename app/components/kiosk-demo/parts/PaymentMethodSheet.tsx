'use client';

import React from 'react';
import { formatInr } from '../data/menu';

type PaymentMethodSheetProps = {
  total: number;
  onClose: () => void;
  onPayUpi: () => void;
  onPayCounter: () => void;
};

export function PaymentMethodSheet({
  total,
  onClose,
  onPayUpi,
  onPayCounter,
}: PaymentMethodSheetProps) {
  return (
    <div className="kd-sheet-backdrop" role="presentation" onClick={onClose}>
      <div
        className="kd-sheet kd-payment-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Choose payment method"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="kd-sheet-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="kd-payment-sheet-body">
          <p className="kd-payment-sheet-eyebrow">Almost there</p>
          <h3 className="kd-payment-sheet-title">How would you like to pay?</h3>
          <p className="kd-payment-sheet-total">
            Total <strong>{formatInr(total)}</strong>
          </p>

          <div className="kd-payment-options">
            <button type="button" className="kd-payment-option" onClick={onPayUpi}>
              <span className="kd-payment-option-icon" aria-hidden>
                📱
              </span>
              <span className="kd-payment-option-text">
                <span className="kd-payment-option-label">Pay with UPI</span>
                <span className="kd-payment-option-desc">Scan QR on the next screen</span>
              </span>
            </button>
            <button type="button" className="kd-payment-option" onClick={onPayCounter}>
              <span className="kd-payment-option-icon" aria-hidden>
                🧾
              </span>
              <span className="kd-payment-option-text">
                <span className="kd-payment-option-label">Pay at counter</span>
                <span className="kd-payment-option-desc">Pay cash or card when you collect</span>
              </span>
            </button>
          </div>

          <p className="kd-demo-note kd-demo-note--center">Demo only. No real payment.</p>
        </div>
      </div>
    </div>
  );
}
