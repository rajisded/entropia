"use client";

import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: (
      <>
        Switching from UEngage to Spartan Kiosk <strong>cut our per-order cost by 65%.</strong> The PetPooja sync is flawless and orders hit the kitchen in seconds.
      </>
    ),
    name: "Rohit Sharma",
    role: "Owner, Spice Garden Restaurants",
  },
  {
    quote: (
      <>
        We were paying PagarBook ₹40,000 a month and still running payroll manually. Spartan&apos;s face scan and formula engine <strong>cut our bill to ₹8,000</strong> and payroll now finishes in 20 minutes with EPF auto-filed.
      </>
    ),
    name: "Priya Nair",
    role: "HR Director, TechCorp Solutions",
  },
  {
    quote: (
      <>
        Our table turnover <strong>increased 40%</strong> because customers order themselves. No more waiting for staff. Spartan paid for itself in the first month.
      </>
    ),
    name: "Ameet Kapoor",
    role: "Operations Head, Urban Diner Chain",
  },
  {
    quote: (
      <>
        Payroll used to take our team 2 full days every month. With Spartan HRMS, <strong>face scan marks attendance, formulas calculate salary, and EPF is filed in 20 minutes.</strong> We haven&apos;t opened Excel since.
      </>
    ),
    name: "Meera Gupta",
    role: "CFO, Nandhishwar Polymers Private Limited",
  },
  {
    quote: (
      <>
        The old kiosk vendors quoted us ₹3 lakh per machine. <strong>Spartan set us up for ₹30,000</strong> including installation and training. Absurd difference.
      </>
    ),
    name: "Vikram Singh",
    role: "Franchise Director, Bite Club",
  },
  {
    quote: (
      <>
        We manage 8 branches and 200+ employees. Spartan is the <strong>only software that actually handles multi-location</strong> without crashing or losing data.
      </>
    ),
    name: "Ananya Das",
    role: "People Manager, FoodFirst Group",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="section-grid-lines"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="section-shell">

        {/* ── Header ── */}
        <div className="testimonials-header" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 40,
          marginBottom: 48,
          flexWrap: "wrap",
        }}>
          <h2 style={{
            fontSize: "clamp(36px, 4.2vw, 50px)",
            lineHeight: 1.1,
            letterSpacing: -1.8,
            margin: 0,
            maxWidth: 480,
          }}>
            <span style={{ fontWeight: 400, color: "#b0b0b0" }}>Real results from</span>
            <br />
            <span style={{ fontWeight: 500, color: "#111" }}>real businesses.</span>
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 8 }}>
            <Image
              src="/client-avatars.png"
              alt="Happy customers"
              width={110}
              height={40}
              style={{ objectFit: "cover", objectPosition: "left center" }}
            />
            <div>
              <div style={{ display: "flex", gap: 2, color: "#111", fontSize: 12, letterSpacing: 1, marginBottom: 4 }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span style={{ fontSize: 12, color: "#777", fontWeight: 500 }}>500+ businesses saved</span>
            </div>
          </div>
        </div>

        {/* ── 3×2 card grid ── */}
        <div className="three-col">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "26px 26px 22px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 220,
              }}
            >
              <div>
                <span style={{
                  fontSize: 28,
                  lineHeight: 1,
                  color: "#111",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: 14,
                  fontFamily: "Georgia, serif",
                }}>
                  &ldquo;
                </span>
                <p style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#444",
                  margin: 0,
                  letterSpacing: -0.15,
                }}>
                  {t.quote}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24 }}>
                <Image
                  src="/joseph-avatar.png"
                  alt={t.name}
                  width={38}
                  height={38}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid rgba(0,0,0,0.06)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 500, fontSize: 13.5, color: "#111", letterSpacing: -0.2 }}>
                    {t.name}
                  </div>
                  <div style={{ color: "#888", fontSize: 12, marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
