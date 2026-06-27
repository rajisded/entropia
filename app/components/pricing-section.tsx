"use client";

import { GRID_INNER_PAD, GRID_LINE, GRID_MAX_W } from "../lib/grid";

const PROCESS_STEPS = [
  {
    title: "Subscribe",
    desc: "Subscribe via stripe & start requesting through my trello board.",
    icon: <SubscribeIcon />,
  },
  {
    title: "Request",
    desc: "Request whatever service I offer, from branding to web design.",
    icon: <RequestIcon />,
  },
  {
    title: "Receive",
    desc: "Receive your design within 48 hours on average.",
    icon: <ReceiveIcon />,
  },
];

const UNLIMITED_FEATURES = [
  "No contracts or commitments",
  "Pause or cancel anytime",
  "Multiple Brands",
  "Unlimited requests",
  "Avg 48 hour turnaround",
  "Framer development",
];

const SINGLE_FEATURES = [
  "Clearly defined scope",
  "Fixed timeline",
  "3 revision rounds",
  "Milestone updates",
];

function SubscribeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function RequestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

function LightningBolt() {
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
      <path
        d="M48 8 28 44h16l-8 36 32-44H50l10-28z"
        fill="url(#boltGrad1)"
        filter="url(#boltShadow)"
      />
      <path
        d="M46 12 30 42h14l-6 30 26-36H48l8-24z"
        fill="url(#boltGrad2)"
        opacity="0.85"
      />
    </svg>
  );
}

function StripeMark() {
  return (
    <svg width="42" height="18" viewBox="0 0 60 25" fill="none">
      <path
        d="M59.64 14.28h-8.06c0 1.68.83 2.48 2.28 2.48 1.38 0 2.35-.63 2.72-1.64h7.06c-1.45 4.6-5.2 7.16-9.9 7.16-6.2 0-10.4-4.2-10.4-10.4S55.5 1.44 61.7 1.44c6.04 0 9.9 4.08 9.9 10.08 0 .58-.04 1.16-.12 1.76h-11.84zm-8.06-3.64h4.84c0-1.56-.9-2.48-2.36-2.48-1.5 0-2.36.96-2.48 2.48zM40.5 20.2V2.2h6.8v2.04c1.08-1.56 2.88-2.52 5.16-2.52 4.56 0 7.44 3.12 7.44 8.28v10.2h-7.08V11.2c0-2.04-1.08-3.24-2.88-3.24-1.86 0-3.12 1.32-3.12 3.48v8.76H40.5zM25.1 20.2l-9.6-18h7.56l4.92 10.2L32.9 2.2h7.32l-9.48 18H25.1zM13.5 20.56c-5.16 0-8.88-3.96-8.88-9.72S8.34 1.12 13.5 1.12c3.24 0 5.64 1.44 6.84 3.72V2.2h6.84v18h-6.84v-2.16c-1.2 2.28-3.6 3.72-6.84 3.72zm1.44-6.12c2.64 0 4.44-2.04 4.44-5.04s-1.8-5.04-4.44-5.04-4.44 2.04-4.44 5.04 1.8 5.04 4.44 5.04z"
        fill="#9ca3af"
        transform="scale(0.72) translate(2, 2)"
      />
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
  return (
    <section
      style={{
        position: "relative",
        background: "#ffffff",
        borderTop: GRID_LINE,
        borderBottom: GRID_LINE,
      }}
    >
      <div style={{ maxWidth: GRID_MAX_W, margin: "0 auto", padding: `100px ${GRID_INNER_PAD}px 120px` }}>

        {/* ── Header row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(38px, 4.4vw, 52px)", lineHeight: 1.1, letterSpacing: -1.8, margin: 0 }}>
            <span style={{ fontWeight: 300, color: "#b0b0b0" }}>Simple pricing.</span>
            <br />
            <span style={{ fontWeight: 800, color: "#111" }}>Standout designs.</span>
          </h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#777", margin: 0, paddingTop: 8, maxWidth: 340, marginLeft: "auto" }}>
            <strong style={{ color: "#111", fontWeight: 600 }}>Clear costs, no hidden fees.</strong>{" "}
            Select from monthly subscriptions or individual project rates.
          </p>
        </div>

        {/* ── Process steps ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
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

        {/* ── Two-card row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 20, marginBottom: 20, alignItems: "stretch" }}>

          {/* Left: Hire me today */}
          <div style={{ position: "relative", paddingTop: 108 }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, zIndex: 2,
              background: "#111", borderRadius: 20, padding: "22px 22px 28px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
              overflow: "hidden",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display: "inline-block", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20,
                    padding: "5px 12px", marginBottom: 16,
                  }}>
                    Pause or cancel anytime
                  </span>
                  <p style={{
                    fontSize: 17, fontWeight: 600, color: "#fff", lineHeight: 1.45,
                    letterSpacing: -0.3, margin: 0, maxWidth: 220,
                  }}>
                    Subscription design services for brands who move fast.
                  </p>
                </div>
                <LightningBolt />
              </div>
            </div>

            <div style={{
              position: "relative", zIndex: 1, background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)", borderRadius: 20,
              padding: "132px 28px 28px",
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
                <span style={{ fontSize: 11.5, fontWeight: 500, color: "#444" }}>Slots available</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111", letterSpacing: -0.5, margin: "0 0 10px" }}>
                Hire me today
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#888", margin: 0 }}>
                Skip the agency markup and work directly with an experienced designer.
              </p>
            </div>
          </div>

          {/* Right: Unlimited Design */}
          <div style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 20, padding: "28px 28px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            display: "flex", flexDirection: "column",
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111", letterSpacing: -0.5, margin: "0 0 8px" }}>
              Unlimited Design
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#888", margin: "0 0 22px", maxWidth: 420 }}>
              One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.
            </p>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 22, marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 22 }}>
                <span style={{ fontSize: 46, fontWeight: 800, color: "#111", letterSpacing: -2 }}>$8,000</span>
                <span style={{ fontSize: 15, color: "#999", fontWeight: 500 }}>/ month</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 28px", marginBottom: 28 }}>
                {UNLIMITED_FEATURES.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 13, color: "#666", lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto" }}>
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
                  width: 22, height: 22, borderRadius: 6, background: "#635bff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#fff",
                }}>S</span>
                Get Started
              </a>
              <StripeMark />
            </div>
          </div>
        </div>

        {/* ── Single Project card ── */}
        <div style={{
          background: "#111", borderRadius: 20, padding: "32px 36px",
          display: "grid", gridTemplateColumns: "1.1fr 1fr auto",
          gap: 32, alignItems: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: -0.5, margin: "0 0 10px" }}>
              Single Project
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: 320 }}>
              Comprehensive design services for any project scope. Ideal for one-time design needs or individual tasks.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
            {SINGLE_FEATURES.map((feat) => (
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

      </div>
    </section>
  );
}
