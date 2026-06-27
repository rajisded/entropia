"use client";

import Image from "next/image";
import { GRID_INNER_PAD, GRID_LINE, GRID_MAX_W } from "../lib/grid";

const TESTIMONIALS = [
  {
    quote: (
      <>
        The new UI design <strong>cut our customer support tickets in half.</strong> It&apos;s been a game-changer for us.
      </>
    ),
    name: "Martina Martinez",
    role: "Customer Manager at SupportEase",
  },
  {
    quote: (
      <>
        Working with Joseph felt like having a <strong>seasoned design partner</strong> who truly understood our vision for Zazzle and brought it to life in ways we hadn&apos;t even imagined.
      </>
    ),
    name: "Thomas Weber",
    role: "Co-founder of KYMA",
  },
  {
    quote: (
      <>
        Our website <strong>conversion rate improved significantly</strong> thanks to Joseph&apos;s expertise.
      </>
    ),
    name: "Ben Harper",
    role: "CTO of Nexus",
  },
  {
    quote: (
      <>
        Joseph&apos;s design approach <strong>brought clarity</strong> to our complex data visualizations. Our users are thrilled!
      </>
    ),
    name: "Michael Wong",
    role: "Data Scientist at DataSphere",
  },
  {
    quote: (
      <>
        The rebranding exceeded our expectations. It&apos;s given us a <strong>competitive edge</strong> in our industry.
      </>
    ),
    name: "Natalie Rivera",
    role: "Brand Manager at UnityBrands",
  },
  {
    quote: (
      <>
        The redesign transformed our brand image. We&apos;ve seen a <strong>30% increase in engagement</strong> since launch.
      </>
    ),
    name: "Emma Kraft",
    role: "CMO of TechVista",
  },
];

export function TestimonialsSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: GRID_LINE,
        borderBottom: GRID_LINE,
      }}
    >
      <div style={{ maxWidth: GRID_MAX_W, margin: "0 auto", padding: `100px ${GRID_INNER_PAD}px 110px` }}>

        {/* ── Header ── */}
        <div style={{
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
            <span style={{ fontWeight: 300, color: "#b0b0b0" }}>Hear from what my</span>
            <br />
            <span style={{ fontWeight: 800, color: "#111" }}>clients have to say.</span>
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 8 }}>
            <Image
              src="/client-avatars.png"
              alt="Happy clients"
              width={110}
              height={40}
              style={{ objectFit: "cover", objectPosition: "left center" }}
            />
            <div>
              <div style={{ display: "flex", gap: 2, color: "#111", fontSize: 12, letterSpacing: 1, marginBottom: 4 }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span style={{ fontSize: 12, color: "#777", fontWeight: 500 }}>99+ Happy clients</span>
            </div>
          </div>
        </div>

        {/* ── 3×2 card grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}>
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
                  fontWeight: 700,
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
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: "#111", letterSpacing: -0.2 }}>
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
