import Link from "next/link";

const EMPLOYEE_FEATURES = [
  "Face scan attendance",
  "Auto attendance marking",
  "Custom salary formulas",
  "One-click payroll from check-ins",
  "EPF, ESIC & TDS automated",
  "Multi-branch dashboard",
];

const WHITELABEL_FEATURES = [
  "Everything in Employee Plan",
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

export function HrmsPricingPlans({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`plans-pricing${compact ? " plans-pricing--compact" : ""}`}>
      <div className="plans-pricing-header">
        <h2 className="plans-pricing-title">Plans and Pricing</h2>
        <p className="plans-pricing-subtitle">
          Face attendance to payroll in one platform. No hidden fees, no long-term contracts.
        </p>
      </div>

      <div className="plans-pricing-grid">
        <article className="plan-card">
          <div className="plan-card-top">
            <div className="plan-card-title-row">
              <h3 className="plan-card-name">Employee Plan</h3>
              <span className="plan-popular-badge">🔥 Popular</span>
            </div>
            <div className="plan-card-price-row">
              <span className="plan-card-price">₹99</span>
            </div>
            <p className="plan-card-billing">Per employee / month, billed monthly</p>
            <p className="plan-card-desc">Face scan, formula payroll, and EPF auto-filing for growing teams.</p>
          </div>

          <ul className="plan-feature-list">
            {EMPLOYEE_FEATURES.map((feat) => (
              <li key={feat}>
                <PlanCheck />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Link href="/#book-call-btn" className="plan-cta plan-cta--dark">
            Start free trial
          </Link>
        </article>

        <article className="plan-card plan-card--dark">
          <div className="plan-card-top">
            <h3 className="plan-card-name">White Label</h3>
            <div className="plan-card-price-row">
              <span className="plan-card-price">₹99,999</span>
            </div>
            <p className="plan-card-billing">One-time license fee</p>
            <p className="plan-card-desc">Own the full HRMS with face attendance and payroll under your brand.</p>
          </div>

          <ul className="plan-feature-list">
            {WHITELABEL_FEATURES.map((feat) => (
              <li key={feat}>
                <PlanCheck dark />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Link href="/#book-call-btn" className="plan-cta plan-cta--light">
            Talk to sales
          </Link>
        </article>
      </div>

      <p className="plans-pricing-footer">
        All plans include face scan attendance, formula-based payroll, EPF/ESIC automation, and free PagarBook migration.
      </p>
    </div>
  );
}
