"use client";

import { useState } from "react";
import { BOOK_DEMO_URL } from "../lib/links";
import { HrmsPricingPlans } from "./hrms-pricing-plans";
import { KioskPricingPlans } from "./kiosk-pricing-plans";

type Product = "hrms" | "kiosk";

const PROCESS_STEPS = [
  {
    title: "Book a Demo",
    desc: "See Entropia live in 15 minutes. No sales pitch, just a real walkthrough of the product.",
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
            <span style={{ fontWeight: 400, color: "#b0b0b0" }}>Pay less.</span>
            <br />
            <span style={{ fontWeight: 500, color: "#111" }}>Get more.</span>
          </h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#777", margin: 0, paddingTop: 8, maxWidth: 340, marginLeft: "auto" }}>
            <strong style={{ color: "#111", fontWeight: 500 }}>No contracts. No hidden fees.</strong>{" "}
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
                <div style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 6, letterSpacing: -0.2 }}>
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
                    fontWeight: 500,
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
          <HrmsPricingPlans compact />
        )}

        {active === "hrms" && (
        <div className="enterprise-grid" style={{
          background: "#111", borderRadius: 20, padding: "32px 36px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)", marginTop: 32,
        }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 500, color: "#fff", letterSpacing: -0.5, margin: "0 0 10px" }}>
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
            href={BOOK_DEMO_URL}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#fff", color: "#111", textDecoration: "none",
              padding: "12px 22px", borderRadius: 50, fontSize: 13.5, fontWeight: 500,
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
