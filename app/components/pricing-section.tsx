"use client";

import { useState } from "react";
import { KioskPricingPlans } from "./kiosk-pricing-plans";

type Product = "hrms" | "kiosk";

const PROCESS_STEPS = [
  {
    title: "Book a Demo",
    desc: "See Spartan live in 15 minutes. No sales pitch, just a real walkthrough of the product.",
    icon: <DemoIcon />,
  },
  {
    title: "Free Migration",
    desc: "We import all your existing data from UEngage, PagarBook, or any legacy system. Zero downtime.",
    icon: <MigrateIcon />,
  },
  {
    title: "Go Live",
    desc: "Cut costs by up to 70% from day one. Our team handles setup, training, and onboarding.",
    icon: <RocketIcon />,
  },
];

const PRODUCT_DATA = {
  hrms: {
    badge: "70% lower cost",
    badgeColor: "#6366f1",
    badgeBg: "rgba(99,102,241,0.08)",
    teaserTag: "Replace PagarBook today",
    teaserHeadline: "HR & payroll that runs itself. No more spreadsheets.",
    title: "HRMS",
    desc: "Full HR & payroll platform. Handles attendance, leaves, compliance, and payslips automatically.",
    price: "₹99",
    pricePer: "/ employee / month",
    priceNote: "Minimum 10 employees. Billed monthly.",
    features: [
      "Automated payroll & TDS",
      "Face attendance sync",
      "Leave & shift management",
      "Employee self-service app",
      "GST & compliance built-in",
      "Multi-branch dashboard",
    ],
    ctaLabel: "Start Free Trial",
    ctaAccent: "#6366f1",
    availabilityLabel: "14-day free trial available",
  },
  kiosk: {
    badge: "30× cheaper than UEngage",
    badgeColor: "#16a34a",
    badgeBg: "rgba(22,163,74,0.08)",
    teaserTag: "Replace UEngage today",
    teaserHeadline: "Self-ordering kiosks for restaurants that mean business.",
    title: "Kiosk System",
    desc: "Replace your UEngage terminal. PetPooja-integrated, fully branded kiosk built for any restaurant format.",
    price: "₹999",
    pricePer: "/ outlet / month",
    priceNote: "Or white-label the full product with a one-time license.",
    pricingTiers: [
      {
        label: "White label",
        price: "₹99,999",
        pricePer: "one-time",
        priceNote: "Full product under your brand. Lifetime license.",
      },
      {
        label: "Monthly",
        price: "₹999",
        pricePer: "/ outlet / month",
        priceNote: "PetPooja integration, support, and updates included.",
      },
    ],
    features: [
      "PetPooja POS integration",
      "Unlimited menu items",
      "Real-time order sync",
      "UPI & card payments",
      "Custom branding & UI",
      "Multi-terminal support",
    ],
    ctaLabel: "Book Installation",
    ctaAccent: "#16a34a",
    availabilityLabel: "Onboarding available now",
  },
};

const ENTERPRISE_FEATURES = [
  "Dedicated account manager",
  "Custom SLA & uptime guarantee",
  "Priority support (2-hr response)",
  "Custom integrations on request",
  "Unlimited locations / employees",
  "White-label options available",
];

function DemoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M10 8l4 3-4 3V8z" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function MigrateIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path d="M14 2v6h6M9 15l2 2 4-4"/>
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l8-8-3-3-8 8z"/>
      <path d="M12 15l-3-3 7-7 3 3-7 7z"/>
      <path d="M14 6l3 3"/>
      <circle cx="19" cy="5" r="2"/>
    </svg>
  );
}

function CheckIcon({ color = "#999" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="boltGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="45%" stopColor="#c8c8c8" />
          <stop offset="100%" stopColor="#8a8a8a" />
        </linearGradient>
        <linearGradient id="boltGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#b0b0b0" />
        </linearGradient>
        <filter id="boltShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>
      <path d="M48 8 28 44h16l-8 36 32-44H50l10-28z" fill="url(#boltGrad1)" filter="url(#boltShadow)" />
      <path d="M46 12 30 42h14l-6 30 26-36H48l8-24z" fill="url(#boltGrad2)" opacity="0.85" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export function PricingSection() {
  const [active, setActive] = useState<Product>("hrms");
  const p = PRODUCT_DATA[active];

  return (
    <section
      id="pricing"
      className="section-grid-lines"
      style={{
        position: "relative",
        background: "#ffffff",
      }}
    >
      <div className="section-shell" style={{ paddingBottom: 120 }}>

        {/* ── Header row ── */}
        <div className="pricing-header-grid">
          <h2 style={{ fontSize: "clamp(38px, 4.4vw, 52px)", lineHeight: 1.1, letterSpacing: -1.8, margin: 0 }}>
            <span style={{ fontWeight: 300, color: "#b0b0b0" }}>Pay less.</span>
            <br />
            <span style={{ fontWeight: 800, color: "#111" }}>Get more.</span>
          </h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#777", margin: 0, paddingTop: 8, maxWidth: 340, marginLeft: "auto" }}>
            <strong style={{ color: "#111", fontWeight: 600 }}>No contracts. No hidden fees.</strong>{" "}
            Transparent per-location and per-employee pricing. Cancel anytime.
          </p>
        </div>

        {/* ── Process steps ── */}
        <div className="pricing-steps-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#111", flexShrink: 0, background: "#fff",
              }}>
                {step.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 6, letterSpacing: -0.2 }}>
                  {step.title}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#888", margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Product toggle ── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div style={{
            display: "inline-flex",
            background: "#f4f4f4",
            borderRadius: 50,
            padding: 4,
            gap: 2,
          }}>
            {(["hrms", "kiosk"] as Product[]).map((key) => {
              const isActive = active === key;
              const labels: Record<Product, string> = { hrms: "HRMS", kiosk: "Kiosk System" };
              return (
                <button
                  key={key}
                  className="product-toggle-btn"
                  onClick={() => setActive(key)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 50,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: -0.2,
                    transition: "all 0.18s ease",
                    background: isActive ? "#111" : "transparent",
                    color: isActive ? "#fff" : "#888",
                    boxShadow: isActive ? "0 2px 12px rgba(0,0,0,0.18)" : "none",
                  }}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Product pricing ── */}
        {active === "kiosk" ? (
          <KioskPricingPlans compact />
        ) : (
        <div className="pricing-cards-grid">

          {/* Left: dark teaser card */}
          <div style={{ position: "relative", paddingTop: 116 }}>
            {/* Dark floating header */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, zIndex: 2,
              background: "#111", borderRadius: 20, padding: "22px 22px 28px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.20)",
              overflow: "hidden",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display: "inline-block", fontSize: 11, fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20,
                    padding: "5px 12px", marginBottom: 16,
                  }}>
                    {p.teaserTag}
                  </span>
                  <p style={{
                    fontSize: 17, fontWeight: 600, color: "#fff", lineHeight: 1.45,
                    letterSpacing: -0.3, margin: 0, maxWidth: 220,
                  }}>
                    {p.teaserHeadline}
                  </p>
                </div>
                <BoltIcon />
              </div>
            </div>

            {/* White card behind */}
            <div style={{
              position: "relative", zIndex: 1, background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)", borderRadius: 20,
              padding: "140px 28px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                border: "1px solid rgba(0,0,0,0.1)", borderRadius: 20,
                padding: "5px 12px", marginBottom: 18, background: "#fff",
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                }} />
                <span style={{ fontSize: 11.5, fontWeight: 500, color: "#444" }}>{p.availabilityLabel}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111", letterSpacing: -0.5, margin: 0 }}>
                  {p.title}
                </h3>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: p.badgeColor,
                  background: p.badgeBg, borderRadius: 20, padding: "3px 10px",
                }}>
                  {p.badge}
                </span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#888", margin: 0 }}>
                {p.desc}
              </p>
            </div>
          </div>

          {/* Right: pricing detail card */}
          <div style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 20, padding: "28px 28px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", paddingBottom: 22, marginBottom: 22 }}>
              {"pricingTiers" in p && p.pricingTiers ? (
                <div className="pricing-tier-stack">
                  {p.pricingTiers.map((tier, i) => (
                    <div key={tier.label} className="pricing-tier-block" style={i > 0 ? { marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.07)" } : undefined}>
                      <span className="pricing-tier-label">{tier.label}</span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4, marginTop: 8 }}>
                        <span style={{ fontSize: 40, fontWeight: 800, color: "#111", letterSpacing: -1.6 }}>{tier.price}</span>
                        <span style={{ fontSize: 14, color: "#999", fontWeight: 500 }}>{tier.pricePer}</span>
                      </div>
                      <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>{tier.priceNote}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 46, fontWeight: 800, color: "#111", letterSpacing: -2 }}>{p.price}</span>
                    <span style={{ fontSize: 15, color: "#999", fontWeight: 500 }}>{p.pricePer}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>{p.priceNote}</p>
                </>
              )}
            </div>

            <div className="pricing-features-grid">
              {p.features.map((feat) => (
                <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 13, color: "#666", lineHeight: 1.45 }}>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pricing-cta-row" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#111", color: "#fff", textDecoration: "none",
                  padding: "12px 20px", borderRadius: 50, fontSize: 13.5, fontWeight: 600,
                  letterSpacing: -0.2, boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                <span style={{
                  width: 22, height: 22, borderRadius: 6, background: p.ctaAccent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#fff",
                }}>S</span>
                {p.ctaLabel}
              </a>
              <span style={{ fontSize: 12.5, color: "#bbb", fontWeight: 500 }}>No credit card needed</span>
            </div>
          </div>
        </div>
        )}

        {/* ── Enterprise card ── */}
        {active === "hrms" && (
        <div className="enterprise-grid" style={{
          background: "#111", borderRadius: 20, padding: "32px 36px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: -0.5, margin: "0 0 10px" }}>
              Enterprise / Chain
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: 320 }}>
              Running 5+ locations or 100+ employees? Get dedicated onboarding, custom integrations, SLA support, and a named account manager.
            </p>
          </div>

          <div className="pricing-features-grid" style={{ marginBottom: 0 }}>
            {ENTERPRISE_FEATURES.map((feat) => (
              <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <CheckIcon color="rgba(255,255,255,0.45)" />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.45 }}>{feat}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#fff", color: "#111", textDecoration: "none",
              padding: "12px 22px", borderRadius: 50, fontSize: 13.5, fontWeight: 600,
              letterSpacing: -0.2, whiteSpace: "nowrap", flexShrink: 0,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            }}
          >
            <DocIcon />
            Get quote
          </a>
        </div>
        )}

      </div>
    </section>
  );
}
