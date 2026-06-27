"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { PricingSection } from "./components/pricing-section";
import { ClientsSection } from "./components/clients-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { FaqSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { PageGrid } from "./components/page-grid";
import { GRID_HALF, GRID_INNER_PAD, GRID_LINE, GRID_MAX_W, GRID_OUTER_MARGIN } from "./lib/grid";

// ─── Integration badges ──────────────────────────────────────
const INTEGRATIONS = [
  { label: "PetPooja",   icon: <PetPoojaIcon /> },
  { label: "Razorpay",   icon: <RazorpayIcon /> },
  { label: "WhatsApp",   icon: <WhatsAppIcon /> },
  { label: "GST Ready",  icon: <GSTIcon /> },
  { label: "Biometric",  icon: <BiometricIcon /> },
  { label: "Slack",      icon: <SlackIntIcon /> },
  { label: "Book Demo",  isCta: true },
];

// ─── Product features data ────────────────────────────────────
const FEATURES = [
  { name: "Self-Ordering Kiosk",       icon: <SvcKioskIcon /> },
  { name: "PetPooja POS Integration",  icon: <SvcPOSIcon /> },
  { name: "Real-time Analytics",       icon: <SvcAnalyticsIcon /> },
  { name: "Payroll Automation",        icon: <SvcPayrollIcon /> },
  { name: "Attendance & Leave Mgmt",   icon: <SvcLeaveIcon /> },
  { name: "Multi-location Dashboard",  icon: <SvcMultiIcon /> },
  { name: "Employee Self-Service",     icon: <SvcESIcon /> },
];

// ─── Integration SVG icons ────────────────────────────────────
function PetPoojaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}
function RazorpayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM9 16.5l-2-5 8-5.5-6 10.5z"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
function GSTIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
    </svg>
  );
}
function BiometricIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function SlackIntIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}

// ─── Feature circle SVG icons (white on black) ────────────────
function SvcKioskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <path d="M9 7h6M9 11h6M9 15h4"/>
    </svg>
  );
}
function SvcPOSIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h.01M12 12h.01M17 12h.01"/>
    </svg>
  );
}
function SvcAnalyticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  );
}
function SvcPayrollIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}
function SvcLeaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>
    </svg>
  );
}
function SvcMultiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  );
}
function SvcESIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

// ─── Customer logo data ────────────────────────────────────────
const LOGOS = [
  { icon: "🍱", name: "Biryani Blues" },
  { icon: "🍕", name: "Pizza Corner" },
  { icon: "☕", name: "Chai House" },
  { icon: "🍔", name: "UrbanEats" },
  { icon: "🥗", name: "NorthEat Kitchen" },
  { icon: "🍜", name: "CloudKitchen Co." },
  { icon: "🍱", name: "Biryani Blues" },
  { icon: "🍕", name: "Pizza Corner" },
  { icon: "☕", name: "Chai House" },
  { icon: "🍔", name: "UrbanEats" },
];

// ─── Product screenshot data ───────────────────────────────────
const PROJECTS = [
  { img: "/hero/1.png", title: "Kiosk System",  sub: "Self-Ordering" },
  { img: "/hero/2.png", title: "HRMS",           sub: "HR & Payroll" },
  { img: "/hero/3.png", title: "Analytics",      sub: "Real-time Insights" },
  { img: "/hero/4.png", title: "Multi-Location", sub: "Central Dashboard" },
];

// ─── Card sizes ───────────────────────────────────────
const S_W = 530;   // stack card width
const S_H = 370;   // stack card height
const G_W = 455;   // grid card width  (bigger final grid)
const G_H = 320;   // grid card height
const G_GAP = 16;  // grid gap

const GRID_W = G_W * 2 + G_GAP;  // 926
const GRID_H = G_H * 2 + G_GAP;  // 656

// ─── Stack layout (top card = index 0) ───────────────────────
const STACK = [
  { tx:  0,  ty:   0, rot: -2,  scale: 1.00, z: 4 },
  { tx: 28,  ty: -16, rot:  5,  scale: 0.97, z: 3 },
  { tx:-20,  ty: -28, rot: -7,  scale: 0.94, z: 2 },
  { tx: 42,  ty: -42, rot:  9,  scale: 0.91, z: 1 },
];

// ─── Grid target offsets from container center ────────────────
const GRID_TARGETS = [
  { tx: -(G_W / 2 + G_GAP / 2), ty: -(G_H / 2 + G_GAP / 2) }, // top-left
  { tx:  (G_W / 2 + G_GAP / 2), ty: -(G_H / 2 + G_GAP / 2) }, // top-right
  { tx: -(G_W / 2 + G_GAP / 2), ty:  (G_H / 2 + G_GAP / 2) }, // bottom-left
  { tx:  (G_W / 2 + G_GAP / 2), ty:  (G_H / 2 + G_GAP / 2) }, // bottom-right
];

// ─── Scroll config ────────────────────────────────────────────
// Total scroll distance that drives the full animation.
// 2400px ≈ 2.6× a typical 906px viewport — gives a genuine
// "travelling to the next page" feel.
const SCROLL_RANGE = 2400;

// ─── Helpers ──────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
const remap = (v: number, in0: number, in1: number, out0: number, out1: number) =>
  lerp(out0, out1, clamp((v - in0) / (in1 - in0)));

// Smooth easing: very slow start + slow end, fast middle
function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

export default function Home() {
  const [prog, setProg] = useState(0); // 0 = hero state, 1 = grid state
  const rafRef = useRef<number | null>(null);

  // Drive hero → grid animation from Lenis scroll position (keeps sticky transition smooth)
  useLenis((lenis) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const raw = clamp(lenis.scroll / SCROLL_RANGE);
      setProg(easeInOutQuart(raw));
      rafRef.current = null;
    });
  });

  // ── Derived animation values ───────────────────────────────

  // Hero text: slides UP and exits viewport as cards form (no fade, just moves up)
  const copySlideY   = lerp(0, -420, prog);  // moves up 420px → clears the space for the grid

  // Social proof bar: slides DOWN and exits as cards form
  const spSlideY     = lerp(0, 130, prog);

  // Card labels fade in near the end
  const labelOpacity = remap(prog, 0.68, 0.90, 0, 1);

  // ── Card container journey ─────────────────────────────────
  //
  // Start: stacked on right beside the hero (dx=+260, dy=-40)
  // End:   2×2 grid centered in the lower half of the viewport (dx=0, dy=+80)
  //        Grid fits entirely within the sticky 100vh panel — no overflow.
  const containerDX = lerp(260, 0, prog);
  const containerDY = lerp(-40, 120, prog);

  return (
    <PageGrid>
      {/* ══════════════════════════════════════════════════════
          SCROLL SPACER + STICKY PANEL
          The spacer is (100vh + SCROLL_RANGE) tall.
          The sticky panel (100vh) pins to the top and plays the
          entire animation as the user scrolls through SCROLL_RANGE.
         ══════════════════════════════════════════════════════ */}
      <div
        style={{
          height: `calc(100vh + ${SCROLL_RANGE}px)`,
          position: "relative",
          zIndex: 5,   // keeps the sticky panel + cards above subsequent sections
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            background: "transparent",
            overflow: "hidden",  // grid fits within 100vh — no overflow needed
          }}
        >
          {/* ── NAVBAR ────────────────────────────────────── */}
          <nav className="navbar">
            <a href="#" className="navbar-brand">
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "#111", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, letterSpacing: -0.4 }}>Spartan</span>
            </a>
            <ul className="navbar-links">
              {["Products", "Pricing", "About", "Blog"].map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
            <a href="#" className="navbar-contact">Get Demo</a>
          </nav>

          {/* ── HERO TEXT (absolute, slides out) ──────────── */}
          <div
            style={{
              position: "absolute",
              left: `max(${GRID_OUTER_MARGIN + GRID_INNER_PAD}px, calc(50% - ${GRID_HALF}px + ${GRID_INNER_PAD}px))`,
              top: "50%",
              transform: `translateY(calc(-50% - 72px + ${copySlideY}px))`,
              width: 460,
              opacity: 1,
              zIndex: 2,
            }}
          >
            <div className="availability-badge">
              <span className="availability-dot" />
              Kill the old. Build with Spartan.
            </div>

            <h1 className="hero-heading">
              <span className="hero-heading-light">Software built to </span>
              
              <br />
              <span className="hero-heading-bold">replace the giants.</span>
            </h1>

            <p className="hero-subtitle">
              <strong>Old software is bleeding your business dry.</strong>{" "}
              Spartan replaces UEngage &amp; PagarBook with faster, leaner, cheaper products — without the enterprise bloat.
            </p>

            <a href="#" className="cta-button" id="book-call-btn">
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              Get a Free Demo
            </a>
          </div>



          {/* ── CARD CONTAINER (the travelling, animated stack) ── */}
          {/*
              Absolutely centered, then offset by containerDX / containerDY.
              Cards animate from stacked → 2×2 grid within this container.
          */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: GRID_W,
              height: GRID_H,
              zIndex: 10,
              // Container travels: right+up → center+down
              transform: `translate(calc(-50% + ${containerDX}px), calc(-50% + ${containerDY}px))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              willChange: "transform",
            }}
          >
            {PROJECTS.map((project, i) => {
              const s = STACK[i];
              const g = GRID_TARGETS[i];

              // Interpolate all card properties
              const tx     = lerp(s.tx,    g.tx, prog);
              const ty     = lerp(s.ty,    g.ty, prog);
              const rot    = lerp(s.rot,   0,    prog);
              const sc     = lerp(s.scale, 1,    prog);
              const w      = lerp(S_W, G_W, prog);
              const h      = lerp(S_H, G_H, prog);
              const br     = lerp(20, 13, prog);
              const shadowY    = lerp(24,  8,    prog);
              const shadowBlur = lerp(72, 20,    prog);
              const shadowA    = lerp(0.22, 0.09, prog);

              return (
                <div
                  key={i}
                  className="project-card"
                  style={{
                    position: "absolute",
                    width: w,
                    height: h,
                    borderRadius: br,
                    overflow: "hidden",
                    zIndex: s.z,
                    transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`,
                    boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowA})`,
                    cursor: "pointer",
                    willChange: "transform, width, height",
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="project-card-img"
                    style={{ objectFit: "cover" }}
                    sizes="560px"
                    priority={i < 2}
                  />

                  {/* Label overlay — fades in when grid settles */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                      opacity: labelOpacity,
                      pointerEvents: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "16px 14px 12px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: -0.3 }}>
                          {project.title}
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 2 }}>
                          {project.sub}
                        </div>
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, letterSpacing: 0.3 }}>
                        ↗ View Project
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── SOCIAL PROOF BAR (bottom, slides down) ─────────────── */}
          <div
            className="social-proof-bar"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 1,
              transform: `translateY(${spSlideY}px)`,
              pointerEvents: prog > 0.5 ? "none" : "auto",
            }}
          >
            <div className="social-proof-inner">
              <div className="clients-info">
                <Image
                  src="/client-avatars.png"
                  alt="Happy customers"
                  width={120}
                  height={44}
                  style={{ objectFit: "cover", objectPosition: "left center" }}
                />
                <div className="clients-meta">
                  <div className="stars">
                    {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                  </div>
                  <span className="clients-count">500+ businesses saved</span>
                </div>
              </div>
              <div className="logos-marquee-wrapper">
                <div className="logos-track">
                  {LOGOS.map((logo, i) => (
                    <div key={i} className="logo-item">
                      <span className="logo-icon">{logo.icon}</span>
                      <span>{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /sticky panel */}
      </div>
      {/* ══════════════════════════════════════════════════════
          PRODUCTS SECTION
         ══════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        background: "#ffffff",
        borderTop: GRID_LINE,
        borderBottom: GRID_LINE,
      }}>
        <div style={{ maxWidth: GRID_MAX_W, margin: "0 auto", padding: `100px ${GRID_INNER_PAD}px 110px` }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            padding: "100px 0 110px",
            alignItems: "center",
          }}>

            {/* ── Left column: Heading + Integrations ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#f4f4f4", borderRadius: 20, padding: "5px 12px",
                  marginBottom: 20,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 2px rgba(34,197,94,0.25)" }} />
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: "#444" }}>2 Products. Zero bloat.</span>
                </div>
                <h2 style={{
                  fontSize: "clamp(38px, 4.4vw, 52px)",
                  lineHeight: 1.10,
                  letterSpacing: -1.8,
                  margin: 0,
                }}>
                  <span style={{ fontWeight: 300, color: "#b0b0b0" }}>Products that</span>
                  <br />
                  <span style={{ fontWeight: 800, color: "#111" }}>replace the<br />giants.</span>
                </h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#777", margin: "20px 0 0", maxWidth: 380 }}>
                  UEngage charges restaurants a fortune. PagarBook locks HR teams in spreadsheets. Spartan fixes both — at a fraction of the cost.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#999", letterSpacing: 0.4, margin: 0 }}>
                  Integrations &amp; compliance
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {INTEGRATIONS.map((t, i) => (
                    "isCta" in t && t.isCta ? (
                      <a
                        key={i}
                        href="#book-call-btn"
                        style={{
                          height: 48,
                          padding: "0 16px",
                          border: "1px solid rgba(0,0,0,0.11)",
                          borderRadius: 10,
                          background: "#111",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          flexShrink: 0,
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: -0.2,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Book Demo
                      </a>
                    ) : (
                      <div
                        key={i}
                        title={t.label}
                        style={{
                          width: 48, height: 48,
                          border: "1px solid rgba(0,0,0,0.11)",
                          borderRadius: 10,
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#111",
                          flexShrink: 0,
                        }}
                      >
                        {t.icon}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right column: Feature list ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FEATURES.map((svc, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "22px 0",
                    borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
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
                    {svc.icon}
                  </div>
                  <span style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#111",
                    letterSpacing: -0.2,
                  }}>
                    {svc.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <PricingSection />

      <ClientsSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer />

      {/* ══════════════════════════════════════════════════════
          FLOATING "SPEAK TO ME" BAR
         ══════════════════════════════════════════════════════ */}
      <div style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(0,0,0,0.09)",
        borderRadius: 50,
        padding: "10px 10px 10px 18px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        whiteSpace: "nowrap",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, marginRight: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: -0.2 }}>
            Ready to switch?
          </span>
          <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>
            Book a free demo today
          </span>
        </div>
        <a
          href="mailto:hello@gospartan.in"
          aria-label="Email"
          style={{
            width: 38, height: 38,
            borderRadius: "50%",
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
        <a
          href="#"
          aria-label="Book a call"
          style={{
            width: 38, height: 38,
            borderRadius: "50%",
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </a>
      </div>
    </PageGrid>
  );
}
