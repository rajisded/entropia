'use client';

import React, { useEffect, useState } from 'react';

type UpiQrCodeProps = {
  value: string;
  size?: number;
  label?: string;
};

export function UpiQrCode({ value, size = 168, label = 'Scan to complete payment' }: UpiQrCodeProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    import('qrcode')
      .then((QRCode) =>
        QRCode.toDataURL(value, {
          width: size,
          margin: 1,
          color: { dark: '#111111', light: '#ffffff' },
        }),
      )
      .then((url) => {
        if (!cancelled) setSrc(url);
      })
      .catch(() => {
        if (!cancelled) setSrc(null);
      });

    return () => {
      cancelled = true;
    };
  }, [value, size]);

  return (
    <div className="kd-upi-qr">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="kd-upi-qr-img" width={size} height={size} />
      ) : (
        <div className="kd-upi-qr-skeleton" style={{ width: size, height: size }} aria-hidden />
      )}
      <p className="kd-upi-qr-label">{label}</p>
    </div>
  );
}
