'use client';

import React from 'react';
import { KIOSK_DEMO_IMAGES } from '../data/images';
import { useKioskDemo } from '../KioskDemoContext';
import { ScreenShell } from '../parts/ScreenShell';

function OrderTypeCard({
  title,
  subtitle,
  imageSrc,
  onClick,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="kd-order-type-card" onClick={onClick}>
      <div className="kd-order-type-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt="" className="kd-order-type-img" />
      </div>
      <div className="kd-order-type-text">
        <span className="kd-order-type-title">{title}</span>
        <span className="kd-order-type-sub">{subtitle}</span>
      </div>
    </button>
  );
}

export function OrderTypeScreen() {
  const { setOrderType, goTo } = useKioskDemo();

  return (
    <ScreenShell className="kd-order-type">
      <button type="button" className="kd-back-link kd-order-type-back" onClick={() => goTo('welcome')}>
        ← Back
      </button>
      <h2 className="kd-order-type-heading">
        Ready to order
        <br />
        something Delicious?
      </h2>
      <div className="kd-order-type-row">
        <OrderTypeCard
          title="Dine In"
          subtitle="Eat at restaurant"
          imageSrc={KIOSK_DEMO_IMAGES.orderType.dineIn}
          onClick={() => setOrderType('dine-in')}
        />
        <OrderTypeCard
          title="Take Away"
          subtitle="Pack for later"
          imageSrc={KIOSK_DEMO_IMAGES.orderType.takeAway}
          onClick={() => setOrderType('takeaway')}
        />
      </div>
    </ScreenShell>
  );
}
