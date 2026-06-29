"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { PricingSection } from "./components/pricing-section";
import { ClientsSection } from "./components/clients-section";
import { ClientsMarquee } from "./components/clients-marquee";
import { TestimonialsSection } from "./components/testimonials-section";
import { FaqSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { ProductsSection } from "./components/products-section";
import { PageGrid } from "./components/page-grid";
import { SiteNavbar } from "./components/site-navbar";
import { GRID_HALF, GRID_INNER_PAD, GRID_OUTER_MARGIN } from "./lib/grid";
import { BOOK_DEMO_URL } from "./lib/links";
import { useIsMobile } from "./lib/use-media-query";

// ─── Product screenshot data ───────────────────────────────────
const PROJECTS = [
  { img: "/kiosk.png", title: "Kiosk System",  sub: "Self-Ordering", href: "/kiosk" },
  { img: "/hrms.png", title: "HRMS",           sub: "Face Scan Payroll", href: "/hrms" },
  { img: "/hero/3.png", title: "Analytics",      sub: "Real-time Insights" },
  { img: "/hero/4.png", title: "Multi-Location", sub: "Central Dashboard" },
];

// ─── Card sizes ───────────────────────────────────────
const S_W = 420;   // stack card width (starts smaller, grows into grid)
const S_H = 295;   // stack card height
const G_W = 560;   // grid card width — ~16:9 to match kiosk/hrms screenshots
const G_H = 313;   // grid card height (560 × 572/1024)
const G_GAP = 16;  // grid gap

const GRID_W = G_W * 2 + G_GAP;  // 1136
const GRID_H = G_H * 2 + G_GAP;  // 642

// ─── Stack layout (top card = index 0) ───────────────────────
const STACK = [
  { tx:  0,  ty:   0, rot: -2,  scale: 1.00, z: 4 },
  { tx: 22,  ty: -13, rot:  5,  scale: 0.97, z: 3 },
  { tx:-16,  ty: -22, rot: -7,  scale: 0.94, z: 2 },
  { tx: 33,  ty: -33, rot:  9,  scale: 0.91, z: 1 },
];

// ─── Grid target offsets from container center ────────────────
const GRID_TARGETS = [
  { tx: -(G_W / 2 + G_GAP / 2), ty: -(G_H / 2 + G_GAP / 2) }, // top-left
  { tx:  (G_W / 2 + G_GAP / 2), ty: -(G_H / 2 + G_GAP / 2) }, // top-right
  { tx: -(G_W / 2 + G_GAP / 2), ty:  (G_H / 2 + G_GAP / 2) }, // bottom-left
  { tx:  (G_W / 2 + G_GAP / 2), ty:  (G_H / 2 + G_GAP / 2) }, // bottom-right
];

// ─── Scroll config ────────────────────────────────────────────
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
  const [prog, setProg] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const lenis = useLenis();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToHash = () => {
      const target = document.getElementById(hash);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -88 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
  }, [lenis]);

  useLenis((lenisInstance) => {
    if (isMobile) return; // no scroll animation on mobile
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const raw = clamp(lenisInstance.scroll / SCROLL_RANGE);
      setProg(easeInOutQuart(raw));
      rafRef.current = null;
    });
  });

  const copySlideY = lerp(0, -420, prog);
  const spSlideY = lerp(0, 130, prog);
  const labelOpacity = remap(prog, 0.68, 0.90, 0, 1);
  const containerDX = lerp(260, 0, prog);
  const containerDY = lerp(-40, 120, prog);

  const renderProjectCards = () =>
    PROJECTS.map((project, i) => {
      const s = STACK[i];
      const g = GRID_TARGETS[i];
      const tx = lerp(s.tx, g.tx, prog);
      const ty = lerp(s.ty, g.ty, prog);
      const rot = lerp(s.rot, 0, prog);
      const sc = lerp(s.scale, 1, prog);
      const sizeProg = prog * prog; // stay smaller early, grow into final grid size
      const w = lerp(S_W, G_W, sizeProg);
      const h = lerp(S_H, G_H, sizeProg);
      const br = lerp(20, 13, prog);
      const shadowY = lerp(24, 8, prog);
      const shadowBlur = lerp(72, 20, prog);
      const shadowA = lerp(0.22, 0.09, prog);

      return (
        <Link
          key={i}
          href={project.href ?? "#"}
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
            cursor: project.href ? "pointer" : "default",
            willChange: "transform, width, height",
            display: "block",
            textDecoration: "none",
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
                <div style={{ color: "#fff", fontWeight: 500, fontSize: 13, letterSpacing: -0.3 }}>
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
        </Link>
      );
    });

  const renderHeroCopy = () => (
    <>
      <div className="availability-badge">
        <span className="availability-dot" />
        Kill the old. Build with Entropia.
      </div>
      <h1 className="hero-heading">
        <span className="hero-heading-light">Software built to </span>
        <br />
        <span className="hero-heading-bold">replace the giants.</span>
      </h1>
      <p className="hero-subtitle">
        <strong>Old software is bleeding your business dry.</strong>{" "}
        Entropia replaces UEngage &amp; PagarBook with faster, leaner, cheaper products without the enterprise bloat.
      </p>
      <Link href={BOOK_DEMO_URL} className="cta-button">
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
      </Link>
    </>
  );

  const renderSocialProof = () => <ClientsMarquee />;

  const renderNavbar = () => <SiteNavbar />;

  return (
    <PageGrid>
      {isMobile ? (
        /* ── MOBILE HERO: static layout, no animation ── */
        <div className="hero-mobile">
          {renderNavbar()}

          <div className="hero-mobile-intro">
            {renderHeroCopy()}
          </div>

          {/* Static 2×2 card grid */}
          <div className="hero-mobile-grid">
            {PROJECTS.map((project, i) => {
              const card = (
                <>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="project-card-img"
                    style={{ objectFit: "cover" }}
                    sizes="50vw"
                    priority={i < 2}
                  />
                  <div className="hero-mobile-card-label">
                    <div style={{ fontWeight: 500, fontSize: 12, color: "#fff", letterSpacing: -0.2 }}>
                      {project.title}
                    </div>
                    <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                      {project.sub}
                    </div>
                  </div>
                </>
              );

              return project.href ? (
                <Link key={i} href={project.href} className="hero-mobile-card">
                  {card}
                </Link>
              ) : (
                <div key={i} className="hero-mobile-card">
                  {card}
                </div>
              );
            })}
          </div>

          <div className="social-proof-bar hero-mobile-social">
            {renderSocialProof()}
          </div>
        </div>
      ) : (
        /* ── DESKTOP HERO: sticky scroll animation ── */
        <div
          style={{
            height: `calc(100vh + ${SCROLL_RANGE}px)`,
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              background: "transparent",
              overflow: "hidden",
            }}
          >
            {renderNavbar()}

            <div
              className="hero-copy"
              style={{
                left: `max(${GRID_OUTER_MARGIN + GRID_INNER_PAD}px, calc(50% - ${GRID_HALF}px + ${GRID_INNER_PAD}px))`,
                top: "50%",
                transform: `translateY(calc(-50% - 72px + ${copySlideY}px))`,
                width: 460,
              }}
            >
              {renderHeroCopy()}
            </div>

            <div
              className="hero-card-stage"
              style={{
                width: GRID_W,
                height: GRID_H,
                transform: `translate(calc(-50% + ${containerDX}px), calc(-50% + ${containerDY}px))`,
              }}
            >
              {renderProjectCards()}
            </div>

            <div
              className="social-proof-bar"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                transform: `translateY(${spSlideY}px)`,
                pointerEvents: prog > 0.5 ? "none" : "auto",
              }}
            >
              {renderSocialProof()}
            </div>
          </div>
        </div>
      )}
      <ProductsSection />

      <ClientsSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      <Footer />

      {/* ══════════════════════════════════════════════════════
          FLOATING "SPEAK TO ME" BAR
         ══════════════════════════════════════════════════════ */}
      <div className="floating-cta">
        <div className="floating-cta-text" style={{ display: "flex", flexDirection: "column", gap: 1, marginRight: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#111", letterSpacing: -0.2 }}>
            Ready to switch?
          </span>
          <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>
            Book a free demo today
          </span>
        </div>
        <a
          href="mailto:hello@entropia.in"
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
        <Link
          href={BOOK_DEMO_URL}
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
        </Link>
      </div>
    </PageGrid>
  );
}
