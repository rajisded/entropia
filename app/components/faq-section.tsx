"use client";

import Image from "next/image";
import { useState } from "react";
import { GRID_INNER_PAD, GRID_LINE, GRID_MAX_W } from "../lib/grid";

const FAQS = [
  {
    q: "How long does a typical project take to complete?",
    a: "Project timelines vary based on complexity. A simple project might take 2–3 weeks, while more comprehensive designs can take 1–2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    q: "Can you work with my existing brand and designs?",
    a: "Absolutely. I can work within your existing brand guidelines, extend them, or help you evolve them into something stronger — whatever best serves your goals.",
  },
  {
    q: "What makes your design process unique?",
    a: "I combine strategic thinking with craft. Every decision is tied to a business outcome, not just aesthetics. You get designs that perform, not just ones that look good.",
  },
  {
    q: "Do you offer ongoing support after the project is completed?",
    a: "Yes. I offer retainer arrangements and ad-hoc support so you always have a trusted design partner to turn to as your business grows.",
  },
  {
    q: "How do you handle confidentiality and intellectual property rights?",
    a: "All work I produce for you is fully yours upon final payment. I sign NDAs on request and take client confidentiality seriously in every engagement.",
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
      style={{
        background: "#ffffff",
        borderTop: GRID_LINE,
        borderBottom: GRID_LINE,
      }}
    >
      <div style={{ maxWidth: GRID_MAX_W, margin: "0 auto", padding: `100px ${GRID_INNER_PAD}px 110px` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.72fr", gap: 64, alignItems: "start" }}>

          {/* ── Left: heading + accordion ── */}
          <div>
            <h2 style={{
              fontSize: "clamp(40px, 4.8vw, 58px)",
              lineHeight: 1.08,
              letterSpacing: -2,
              margin: "0 0 48px",
            }}>
              <span style={{ fontWeight: 800, color: "#111" }}>Your questions</span>
              <br />
              <span style={{ fontWeight: 800, color: "#c0c0c0" }}>answered.</span>
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
                          fontWeight: 600,
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
                        fontWeight: 600,
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

          {/* ── Right: discovery call card ── */}
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 20,
            padding: "32px 28px",
            boxShadow: "0 4px 28px rgba(0,0,0,0.06)",
            position: "sticky",
            top: 100,
          }}>
            <Image
              src="/joseph-avatar.png"
              alt="Joseph Alexander"
              width={52}
              height={52}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(0,0,0,0.07)",
                marginBottom: 20,
                display: "block",
              }}
            />

            <p style={{ fontSize: 17, color: "#999", fontWeight: 500, margin: "0 0 4px", letterSpacing: -0.2 }}>
              Still not sure?
            </p>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: "#111", letterSpacing: -0.8, margin: "0 0 16px", lineHeight: 1.2 }}>
              Book a free discovery call.
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#888", margin: "0 0 28px" }}>
              Learn more about how I work and how I can help you and your business take the next step.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a
                href="#"
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
                  fontWeight: 600,
                  letterSpacing: -0.2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                }}
              >
                <CalIcon />
                Schedule Now
              </a>
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
