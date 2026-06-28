"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GRID_LINE } from "../lib/grid";

const INTERVAL_MS = 4000;
const FADE_MS = 320;

const PRODUCT_SLIDES = [
  {
    id: "hrms",
    label: "HRMS",
    tag: "Payroll in 20 min",
    tagColor: "#6366f1",
    tagBg: "rgba(99,102,241,0.08)",
    description:
      "Employees scan their face. Attendance marks itself. Spartan's formula engine runs payroll from real check-ins with EPF, TDS, and ESIC handled automatically.",
    integrations: ["Face Scan", "EPF Ready", "ESIC", "TDS"],
    features: [
      { name: "Face Scan Attendance", icon: <FaceIcon /> },
      { name: "Auto Attendance Marking", icon: <LeaveIcon /> },
      { name: "Formula Management", icon: <PayrollIcon /> },
      { name: "One-Click Payroll", icon: <GSTIcon /> },
      { name: "EPF, ESIC & TDS Auto", icon: <MultiIcon /> },
      { name: "Multi-Branch Dashboard", icon: <ESIcon /> },
    ],
  },
  {
    id: "kiosk",
    label: "Kiosk System",
    tag: "30× cheaper than UEngage",
    tagColor: "#16a34a",
    tagBg: "rgba(22,163,74,0.08)",
    description:
      "UEngage locks restaurants into expensive contracts. Spartan Kiosk integrates natively with PetPooja, syncs every order instantly, and goes live in days.",
    integrations: ["PetPooja", "Razorpay", "WhatsApp", "GST Ready"],
    features: [
      { name: "Self-Ordering Kiosk", icon: <KioskIcon /> },
      { name: "PetPooja POS Integration", icon: <POSIcon /> },
      { name: "Real-time Order Analytics", icon: <AnalyticsIcon /> },
      { name: "UPI & Card Payments", icon: <PaymentIcon /> },
      { name: "Custom Branding & UI", icon: <BrandIcon /> },
      { name: "Multi-terminal Support", icon: <MultiIcon /> },
    ],
  },
];

function KioskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
}
function POSIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function AnalyticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}
function PayrollIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function LeaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </svg>
  );
}
function MultiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}
function ESIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function GSTIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}
function FaceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M9 9h.01M15 9h.01" />
    </svg>
  );
}
function PaymentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}
function BrandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IntegrationBadge({ label }: { label: string }) {
  return (
    <div
      title={label}
      style={{
        height: 40,
        padding: "0 14px",
        border: "1px solid rgba(0,0,0,0.11)",
        borderRadius: 10,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#444",
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: -0.2,
      }}
    >
      {label}
    </div>
  );
}

export function ProductsSection() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [visible, setVisible] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const transitioning = useRef(false);

  const slide = PRODUCT_SLIDES[displayed];

  const changeProduct = useCallback((nextIndex: number) => {
    const next = (nextIndex + PRODUCT_SLIDES.length) % PRODUCT_SLIDES.length;
    if (next === displayed || transitioning.current) return;

    transitioning.current = true;
    setVisible(false);

    setTimeout(() => {
      setDisplayed(next);
      setActive(next);
      requestAnimationFrame(() => {
        setVisible(true);
        transitioning.current = false;
      });
    }, FADE_MS);
  }, [displayed]);

  const goTo = useCallback((index: number) => {
    setAutoPlay(false);
    changeProduct(index);
  }, [changeProduct]);

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      changeProduct(active + 1);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [autoPlay, active, changeProduct]);

  return (
    <section className="section-grid-lines" style={{
      position: "relative",
      background: "#ffffff",
    }}>
      <style>{`
        .products-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .products-content-grid {
          opacity: 1;
          transition: opacity ${FADE_MS}ms ease;
        }
        .products-content-grid--hidden {
          opacity: 0;
        }
        .products-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #333;
          transition: background 0.2s ease, border-color 0.2s ease;
          flex-shrink: 0;
        }
        .products-arrow:hover {
          background: #f4f4f4;
          border-color: rgba(0,0,0,0.2);
        }
        @media (max-width: 900px) {
          .products-layout-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>

      <div className="section-shell">
        <div className="products-inner">
          <div className="products-layout-grid">
            {/* Left — heading + product details */}
            <div>
              <div style={{ marginBottom: 40 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#f4f4f4", borderRadius: 20, padding: "5px 12px",
                  marginBottom: 20,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 2px rgba(34,197,94,0.25)" }} />
                  <span style={{ fontSize: 11.5, fontWeight: 500, color: "#444" }}>2 Products. Zero bloat.</span>
                </div>
                <h2 style={{
                  fontSize: "clamp(38px, 4.4vw, 52px)",
                  lineHeight: 1.10,
                  letterSpacing: -1.8,
                  margin: 0,
                }}>
                  <span style={{ fontWeight: 400, color: "#b0b0b0" }}>Products that</span>
                  <br />
                  <span style={{ fontWeight: 500, color: "#111" }}>replace the<br />giants.</span>
                </h2>
              </div>

              <div className={`products-content-grid${visible ? "" : " products-content-grid--hidden"}`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#111", letterSpacing: -0.3 }}>
                    {slide.label}
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: slide.tagColor,
                    background: slide.tagBg, borderRadius: 20, padding: "3px 10px",
                  }}>
                    {slide.tag}
                  </span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#777", margin: "0 0 28px", maxWidth: 380 }}>
                  {slide.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#999", letterSpacing: 0.4, margin: 0 }}>
                    Integrations &amp; compliance
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    {slide.integrations.map((label) => (
                      <IntegrationBadge key={label} label={label} />
                    ))}
                    <a
                      href="#book-call-btn"
                      style={{
                        height: 40,
                        padding: "0 14px",
                        border: "1px solid rgba(0,0,0,0.11)",
                        borderRadius: 10,
                        background: "#111",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        flexShrink: 0,
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: -0.2,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Arrow navigation */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 36 }}>
                <button
                  type="button"
                  className="products-arrow"
                  aria-label="Previous product"
                  onClick={goPrev}
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  className="products-arrow"
                  aria-label="Next product"
                  onClick={goNext}
                >
                  <ChevronRight />
                </button>
                <span style={{ fontSize: 12.5, color: "#aaa", fontWeight: 500, marginLeft: 4 }}>
                  {slide.label}
                </span>
              </div>
            </div>

            {/* Right — features aligned with heading top */}
            <div className={`products-content-grid${visible ? "" : " products-content-grid--hidden"}`}>
              {slide.features.map((feat, i) => (
                <div
                  key={feat.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: i === 0 ? "0 0 18px" : "18px 0",
                    borderBottom: i < slide.features.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div style={{
                    width: 46, height: 46,
                    borderRadius: "50%",
                    background: "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {feat.icon}
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#111", letterSpacing: -0.2 }}>
                    {feat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
