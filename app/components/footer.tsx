"use client";

import { GRID_INNER_PAD, GRID_MAX_W } from "../lib/grid";

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 5h14L12 13H5V5zM5 13h7l7 8H5v-8z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL = [
  { label: "X", icon: <XIcon />, count: "1,214", href: "#" },
  { label: "Instagram", icon: <InstagramIcon />, href: "#" },
  { label: "Framer", icon: <FramerIcon />, href: "#" },
  { label: "Dribbble", icon: <DribbbleIcon />, href: "#" },
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
];

export function Footer() {
  return (
    <footer style={{ background: "#000", color: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: GRID_MAX_W, margin: "0 auto", padding: `80px ${GRID_INNER_PAD}px 0` }}>

        {/* ── Headline ── */}
        <h2 style={{
          fontSize: "clamp(44px, 6vw, 72px)",
          lineHeight: 1.1,
          letterSpacing: -2.5,
          margin: "0 0 56px",
          fontWeight: 800,
        }}>
          <span style={{ color: "#fff" }}>Lets create</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.35)" }}>incredible work together.</span>
        </h2>

        {/* ── Contact row ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          {/* Email */}
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3, margin: "0 0 10px" }}>
              Email
            </p>
            <a
              href="mailto:joseph@launchnow.design"
              style={{ fontSize: 16, fontWeight: 500, color: "#fff", textDecoration: "none", letterSpacing: -0.3 }}
            >
              joseph@launchnow.design
            </a>
          </div>

          {/* Call Me */}
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3, margin: "0 0 10px" }}>
              Call Me
            </p>
            <a
              href="#"
              style={{ fontSize: 16, fontWeight: 500, color: "#fff", textDecoration: "none", letterSpacing: -0.3 }}
            >
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3, margin: "0 0 12px" }}>
              Social
            </p>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    height: 34,
                    padding: s.count ? "0 10px" : "0",
                    width: s.count ? "auto" : 34,
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 600,
                    justifyContent: "center",
                    transition: "background 0.2s ease",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                  {s.count && <span>{s.count}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 56,
          alignItems: "start",
        }}>
          {/* Menu */}
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3, margin: "0 0 14px" }}>
              Menu
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Work", "Pricing"].map((item) => (
                  <a key={item} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 400 }}>
                    {item}
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Services", "Blog"].map((item) => (
                  <a key={item} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 400 }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3, margin: "0 0 14px" }}>
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Terms of service", "Privacy Policy"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 400 }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 2 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0, fontWeight: 400 }}>
              © 2026 Joseph Alexander
            </p>
          </div>
        </div>
      </div>

      {/* ── Giant name watermark ── */}
      <div style={{
        textAlign: "center",
        lineHeight: 0.85,
        userSelect: "none",
        pointerEvents: "none",
        overflow: "hidden",
        marginTop: -20,
      }}>
        <span style={{
          fontSize: "clamp(120px, 22vw, 280px)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: -8,
          display: "block",
          opacity: 1,
        }}>
          JOSEPH
        </span>
      </div>
    </footer>
  );
}
