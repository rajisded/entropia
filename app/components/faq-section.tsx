"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BOOK_DEMO_URL } from "../lib/links";

const FAQS = [
  {
    q: "How long does it take to switch from UEngage or PagarBook to Entropia?",
    a: "Most businesses are fully live within 3 to 5 business days. We handle the entire migration (menus, employee records, historical data) for free. No downtime, no data loss.",
  },
  {
    q: "Do you integrate with PetPooja?",
    a: "Yes. Entropia Kiosk has a native, real-time two-way integration with PetPooja. Orders placed on the kiosk flow directly into your PetPooja POS, kitchen display, and reports.",
  },
  {
    q: "What happens to our existing data when we switch?",
    a: "We migrate everything: employee records, payroll history, menu items, order data. Our dedicated onboarding team runs the migration and validates every record before you go live.",
  },
  {
    q: "Is Entropia actually cheaper than UEngage and PagarBook?",
    a: "Significantly. Restaurants typically save 60 to 80% over UEngage. HRMS customers cut their PagarBook bill by 70% on average. Our pricing is per-location and per-employee with zero hidden fees.",
  },
  {
    q: "How does face scan attendance work?",
    a: "Employees scan their face on arrival. Entropia verifies identity in under a second, marks attendance automatically, and syncs check-in data directly to your payroll formulas. No cards, no manual registers, no buddy punching.",
  },
  {
    q: "Can we manage multiple locations from one dashboard?",
    a: "Absolutely. Entropia is built for chains and multi-location businesses. One dashboard shows every location's kiosk data, payroll, attendance, and reports in real time.",
  },
];

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      className="section-grid-lines"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="section-shell">
        <div className="faq-grid">

          {/* ── Left: heading + accordion ── */}
          <div>
            <h2 style={{
              fontSize: "clamp(40px, 4.8vw, 58px)",
              lineHeight: 1.08,
              letterSpacing: -2,
              margin: "0 0 48px",
            }}>
              <span style={{ fontWeight: 500, color: "#111" }}>Your questions</span>
              <br />
              <span style={{ fontWeight: 500, color: "#c0c0c0" }}>answered.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    style={{
                      border: "1px solid rgba(0,0,0,0.09)",
                      borderRadius: 14,
                      background: "#fff",
                      overflow: "hidden",
                      transition: "box-shadow 0.2s ease",
                      boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "18px 20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {i > 0 && (
                        <span style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#bbb",
                          flexShrink: 0,
                          width: 22,
                          letterSpacing: 0.3,
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                      <span style={{
                        flex: 1,
                        fontSize: 14.5,
                        fontWeight: 500,
                        color: "#111",
                        letterSpacing: -0.2,
                        lineHeight: 1.4,
                      }}>
                        {faq.q}
                      </span>
                      <span style={{ flexShrink: 0, color: "#999" }}>
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </button>

                    <div style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}>
                      <p style={{
                        margin: 0,
                        padding: "0 20px 20px",
                        fontSize: 13.5,
                        lineHeight: 1.65,
                        color: "#777",
                        letterSpacing: -0.1,
                        paddingLeft: i > 0 ? 58 : 20,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: demo call card ── */}
          <div className="faq-sticky-card" style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 20,
            padding: "32px 28px",
            boxShadow: "0 4px 28px rgba(0,0,0,0.06)",
            position: "sticky",
            top: 100,
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: "#111", display: "flex",
              alignItems: "center", justifyContent: "center",
              marginBottom: 20,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>

            <p style={{ fontSize: 17, color: "#999", fontWeight: 500, margin: "0 0 4px", letterSpacing: -0.2 }}>
              Still not sure?
            </p>
            <h3 style={{ fontSize: 26, fontWeight: 500, color: "#111", letterSpacing: -0.8, margin: "0 0 16px", lineHeight: 1.2 }}>
              See Entropia live in 15 minutes.
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#888", margin: "0 0 28px" }}>
              No sales pressure. Just a real walkthrough of the Kiosk or HRMS on your actual use case, with your data.
            </p>

            <div className="faq-cta-row" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Link
                href={BOOK_DEMO_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 22px",
                  borderRadius: 50,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: -0.2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                }}
              >
                <CalIcon />
                Book Free Demo
              </Link>
              <span style={{ fontSize: 14, color: "#bbb", fontWeight: 500, letterSpacing: -0.2 }}>
                Cal.com
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
