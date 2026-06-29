'use client';

import React from 'react';

type ScreenShellProps = {
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

export function ScreenShell({ children, className = '', footer }: ScreenShellProps) {
  return (
    <div className={`kd-screen ${className}`.trim()}>
      <div className="kd-screen-body">{children}</div>
      {footer ? <div className="kd-screen-footer">{footer}</div> : null}
    </div>
  );
}
