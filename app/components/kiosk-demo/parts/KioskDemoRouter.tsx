'use client';

import React from 'react';
import { useKioskDemo } from '../KioskDemoContext';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { OrderTypeScreen } from '../screens/OrderTypeScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { CheckoutScreen } from '../screens/CheckoutScreen';
import { UpiPaymentScreen } from '../screens/UpiPaymentScreen';
import { SuccessScreen } from '../screens/SuccessScreen';

export function KioskDemoRouter() {
  const { screen } = useKioskDemo();

  switch (screen) {
    case 'welcome':
      return <WelcomeScreen />;
    case 'orderType':
      return <OrderTypeScreen />;
    case 'menu':
      return <MenuScreen />;
    case 'checkout':
      return <CheckoutScreen />;
    case 'upi':
      return <UpiPaymentScreen />;
    case 'success':
      return <SuccessScreen />;
    default:
      return <WelcomeScreen />;
  }
}
