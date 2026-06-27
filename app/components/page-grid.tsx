"use client";

export function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical rails — span full page height, sit above section backgrounds */}
      <div
        aria-hidden
        className="page-grid-rails"
      />
      {children}
    </div>
  );
}
