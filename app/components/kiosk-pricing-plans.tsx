import Link from "next/link";
import { BOOK_DEMO_URL } from "../lib/links";

const OUTLET_FEATURES = [
  "PetPooja POS integration",
  "Unlimited menu items",
  "Real-time order sync",
  "UPI & card payments",
  "Custom branding & UI",
  "Multi-terminal support",
];

const WHITELABEL_FEATURES = [
  "Everything in Outlet Plan",
  "Your brand, your domain",
  "Lifetime product license",
  "Full white-label deployment",
  "Priority onboarding",
  "Dedicated account support",
];

function PlanCheck({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark ? "rgba(255,255,255,0.5)" : "#bbb"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function KioskPricingPlans({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`plans-pricing${compact ? " plans-pricing--compact" : ""}`}>
      <div className="plans-pricing-header">
        <h2 className="plans-pricing-title">Plans and Pricing</h2>
        <p className="plans-pricing-subtitle">
          Choose the model that fits your business. No hidden fees, no long-term contracts.
        </p>
      </div>

      <div className="plans-pricing-grid">
        {/* Outlet, popular */}
        <article className="plan-card">
          <div className="plan-card-top">
            <div className="plan-card-title-row">
              <h3 className="plan-card-name">Outlet Plan</h3>
              <span className="plan-popular-badge">🔥 Popular</span>
            </div>
            <div className="plan-card-price-row">
              <span className="plan-card-price">₹999</span>
            </div>
            <p className="plan-card-billing">Per outlet / month, billed monthly</p>
            <p className="plan-card-desc">Great for restaurants and small chains getting started.</p>
          </div>

          <ul className="plan-feature-list">
            {OUTLET_FEATURES.map((feat) => (
              <li key={feat}>
                <PlanCheck />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Link href={BOOK_DEMO_URL} className="plan-cta plan-cta--dark">
            Get started
          </Link>
        </article>

        {/* White label, dark */}
        <article className="plan-card plan-card--dark">
          <div className="plan-card-top">
            <h3 className="plan-card-name">White Label</h3>
            <div className="plan-card-price-row">
              <span className="plan-card-price">₹99,999</span>
            </div>
            <p className="plan-card-billing">One-time license fee</p>
            <p className="plan-card-desc">Own the full kiosk product under your brand, forever.</p>
          </div>

          <ul className="plan-feature-list">
            {WHITELABEL_FEATURES.map((feat) => (
              <li key={feat}>
                <PlanCheck dark />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Link href={BOOK_DEMO_URL} className="plan-cta plan-cta--light">
            Talk to sales
          </Link>
        </article>
      </div>

      <p className="plans-pricing-footer">
        All plans include PetPooja integration, free onboarding support, and regular product updates.
      </p>
    </div>
  );
}
