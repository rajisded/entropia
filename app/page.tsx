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

// ─── Tech stack data ──────────────────────────────────────────
const TECH_STACK = [
  { label: "Figma",   icon: <FigmaIcon /> },
  { label: "Framer",  icon: <FramerIcon /> },
  { label: "Webflow", icon: <WebflowIcon /> },
  { label: "Remix",   icon: <RemixIcon /> },
  { label: "Blender", icon: <BlenderIcon /> },
  { label: "Notion",  icon: <NotionIcon /> },
  { label: "OpenAI",  icon: <OpenAIIcon /> },
  { label: "Book a call", isCta: true },
];

// ─── Services data ────────────────────────────────────────────
const SERVICES = [
  { name: "Framer Development", icon: <SvcFramerIcon /> },
  { name: "Brand Design",       icon: <SvcBrandIcon /> },
  { name: "Web Apps",           icon: <SvcWebIcon /> },
  { name: "Landing Pages",      icon: <SvcLandingIcon /> },
  { name: "Motion Graphics",    icon: <SvcMotionIcon /> },
  { name: "3D Design",          icon: <Svc3DIcon /> },
  { name: "UX / UI Consultation", icon: <SvcUXIcon /> },
];

// ─── Tech-stack SVG icons ─────────────────────────────────────
function FigmaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 0 47.5z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
    </svg>
  );
}
function FramerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8H12L4 0zM4 8h8l8 8H4V8zM4 16h8v8L4 16z"/>
    </svg>
  );
}
function WebflowIcon() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor">
      <path d="M17.44 0s-2.37 7.3-2.55 7.87C14.77 7.25 13.1 0 13.1 0H9.56s-2.37 7.35-2.54 7.89C6.9 7.27 5.25 0 5.25 0H0l4.5 16h3.75l2.75-8.5L13.75 16h3.75L22 0h-4.56z"/>
    </svg>
  );
}
function RemixIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.866 18.023c.557 1.374 1.167 2.686 1.843 3.977H9.484a46.457 46.457 0 0 1-.957-2.044c-.41-.959-.824-2.266-.824-2.266H3.5s-.5 2.29-.5 4.31H0C0 14.667 3.63 12 7 12h4.5l-1 6.023h2.366zM12 0l8 4.5-1.5 7.5H7.5L6 4.5 12 0z"/>
    </svg>
  );
}
function BlenderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.51 13.214c.046-.8.438-1.506 1.03-1.971a3.174 3.174 0 0 1 1.966-.63c.7 0 1.363.226 1.967.63.592.465.984 1.172 1.03 1.971.047.8-.27 1.54-.814 2.069a3.202 3.202 0 0 1-2.183.855 3.202 3.202 0 0 1-2.183-.855c-.544-.53-.861-1.269-.813-2.069zM9.45 12.989C9.25 10.475 11.114 8.3 13.53 8.05c.205-.022.408-.033.608-.03l-1.35-2.35H8.24c-.276 0-.5.224-.5.5v1.415l-2.437-.001-4.76-8.08A1 1 0 0 0 .543 0H.5C.224 0 0 .224 0 .5v13.29c0 .276.224.5.5.5h.043a1 1 0 0 0 .857-.487l2.337-3.97H5.9v3.956c0 .276.224.5.5.5h4.084a5.14 5.14 0 0 1-.034-.3z"/>
    </svg>
  );
}
function NotionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.046 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  );
}
function OpenAIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.411-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}
function ClaudeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128-1.048-.702-.214.085-3.626 2.02-.307-.088-.212-.29.243-.282.19-.06 3.74-2.087.237-.188-.048-.152-.677-.552-.168.022-3.998 2.221-.27-.051-.182-.218.191-.27 4.046-2.27.23-.194-.05-.161-.69-.56-.163.033-3.625 2.02-.27-.053-.178-.216.188-.266 3.72-2.086.166-.227-.1-.21-.895-.477-.148.035-2.884 1.616-2.503 1.4-.28-.134-.085-.304.006-.245.658-1.202.157-.189.201-.088L8.83 5.688l.127-.199-.087-.225-.763-.46-.175.04-2.002 1.12.374-.667c.287-.513.56-.762.875-.847.316-.084 1.16.047 2.537.39L16.6 7.187c2.03.516 3.336.774 3.92.774.424 0 .76-.086.98-.249.218-.164.33-.4.33-.706v-.073c-.013-.365-.2-.726-.55-1.085-.352-.36-.824-.656-1.43-.89L9.614.591C7.826.197 6.546.01 5.768.01c-1.264 0-2.18.36-2.771 1.074C2.408 1.8 2.112 2.826 2.112 4.17c0 .48.048.987.143 1.52l1.45 8.127.247 1.01.122.424.293.628.342.076zm14.48 7.623l-4.73-2.647-.08-.225.08-.131 1.054-.695.214.085 3.62 2.02.308-.088.213-.289-.244-.284-.19-.057-3.74-2.088-.237-.19.048-.155.678-.55.168.02 3.998 2.218.27-.048.183-.218-.191-.272-4.045-2.27-.23-.19.05-.164.69-.557.163.03 3.624 2.022.27-.052.178-.215-.187-.27-3.72-2.083-.166-.23.1-.208.895-.478.148.035 2.886 1.615 2.504 1.4.28-.133.085-.305-.007-.244-.658-1.2-.157-.19-.201-.088-6.803-1.644c-2.03-.514-3.336-.772-3.92-.772-.423 0-.76.086-.98.248-.218.164-.33.4-.33.706v.073c.013.365.2.724.55 1.084.352.36.824.657 1.43.89l10.237 3.469c1.788.393 3.068.58 3.846.58 1.264 0 2.18-.36 2.771-1.073.59-.712.886-1.74.886-3.082 0-.48-.048-.988-.143-1.52l-1.45-8.13-.247-1.008-.122-.424-.293-.63-.342-.076-.247.192-4.72 2.647-.08.23.08.13 1.048.7.214-.085 3.626-2.02.307.088.212.29-.243.283-.19.058-3.74 2.089-.237.188.048.152.677.55.168-.02 3.998-2.22.27.051.182.217-.191.272-4.046 2.27-.23.192.05.163.69.557.163-.033 3.625-2.02.27.052.178.216-.188.268-3.72 2.083-.166.228.1.21.895.477.148-.034 2.884-1.617 2.503-1.399.28.134.085.304-.006.244-.658 1.202-.157.188-.201.088-6.803 1.645c-2.03.514-3.336.773-3.92.773-.424 0-.76-.086-.98-.249-.218-.163-.33-.4-.33-.705v-.073c.013-.366.2-.726.55-1.085.352-.36.824-.657 1.43-.89L19.386 8.045c1.788-.393 3.068-.58 3.846-.58 1.264 0 2.18.36 2.771 1.073.59.713.886 1.74.886 3.082 0 .48-.048.988-.143 1.52l-1.45 8.13-.19.894-.294.628-.342.076-.247-.192z"/>
    </svg>
  );
}

// ─── Service circle SVG icons (white on black) ────────────────
function SvcFramerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M5 5h14L12 13H5V5zM5 13h7l7 8H5v-8z"/>
    </svg>
  );
}
function SvcBrandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
    </svg>
  );
}
function SvcWebIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  );
}
function SvcLandingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  );
}
function SvcMotionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" fill="white"/>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  );
}
function Svc3DIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function SvcUXIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 9v12"/>
    </svg>
  );
}

// ─── Logo data ────────────────────────────────────────────────
const LOGOS = [
  { icon: "◎", name: "Luminary" },
  { icon: "↗", name: "45 Degrees°" },
  { icon: "⬛", name: "Codecraft_" },
  { icon: "◈", name: "Axiom" },
  { icon: "◐", name: "Nimbus" },
  { icon: "◎", name: "Luminary" },
  { icon: "↗", name: "45 Degrees°" },
  { icon: "⬛", name: "Codecraft_" },
  { icon: "◈", name: "Axiom" },
  { icon: "◐", name: "Nimbus" },
];

// ─── Project data ─────────────────────────────────────────────
const PROJECTS = [
  { img: "/hero/1.png", title: "Kora",  sub: "Consulting Site" },
  { img: "/hero/2.png", title: "KYMA",  sub: "AI Agency" },
  { img: "/hero/3.png", title: "Mugen", sub: "Design Studio" },
  { img: "/hero/4.png", title: "Axim",  sub: "Ecommerce Site" },
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
              <Image
                src="/joseph-avatar.png"
                alt="Joseph Alexander"
                width={34}
                height={34}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span>Joseph Alexander</span>
            </a>
            <ul className="navbar-links">
              {["Work", "Services", "Pricing", "Blog"].map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
            <a href="#" className="navbar-contact">Contact</a>
          </nav>

          {/* ── HERO TEXT (absolute, fades out) ───────────── */}
          <div
            style={{
              position: "absolute",
              left: `max(${GRID_OUTER_MARGIN + GRID_INNER_PAD}px, calc(50% - ${GRID_HALF}px + ${GRID_INNER_PAD}px))`,
              top: "50%",
              transform: `translateY(calc(-50% - 72px + ${copySlideY}px))`,
              width: 440,
              opacity: 1,
              zIndex: 2,
            }}
          >
            <div className="availability-badge">
              <span className="availability-dot" />
              Available for August&apos;25
            </div>

            <h1 className="hero-heading">
              <span className="hero-heading-light">Design that </span>
              <span
                style={{
                  display: "inline-block",
                  width: 10, height: 10,
                  borderRadius: "50%",
                  background: "#222",
                  verticalAlign: "middle",
                  margin: "0 3px 3px 5px",
                }}
              />
              <br />
              <span className="hero-heading-bold">delivers results.</span>
            </h1>

            <p className="hero-subtitle">
              <strong>Strategic design that drives growth, not just looks good.</strong>{" "}
              I create everything your brand needs to attract customers and turn them into sales.
            </p>

            <a href="#" className="cta-button" id="book-call-btn">
              <Image
                src="/joseph-avatar.png"
                alt="Joseph"
                width={36}
                height={36}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.25)",
                  flexShrink: 0,
                }}
              />
              Book a call with me
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

          {/* ── SOCIAL PROOF BAR (bottom, slides down + fades) ─────── */}
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
                  alt="Happy clients"
                  width={120}
                  height={44}
                  style={{ objectFit: "cover", objectPosition: "left center" }}
                />
                <div className="clients-meta">
                  <div className="stars">
                    {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                  </div>
                  <span className="clients-count">99+ Happy clients</span>
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
          SERVICES SECTION
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

            {/* ── Left column: Heading + Tech Stack ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
              <h2 style={{
                fontSize: "clamp(38px, 4.4vw, 52px)",
                lineHeight: 1.10,
                letterSpacing: -1.8,
                margin: 0,
              }}>
                <span style={{ fontWeight: 300, color: "#b0b0b0" }}>Services that</span>
                <br />
                <span style={{ fontWeight: 800, color: "#111" }}>supercharge your<br />business.</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#999", letterSpacing: 0.4, margin: 0 }}>
                  My tech stack
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {TECH_STACK.map((t, i) => (
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
                        Book a call
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

            {/* ── Right column: Services list ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "22px 0",
                    borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
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
            Speak to me
          </span>
          <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>
            Email or book a call
          </span>
        </div>
        <a
          href="mailto:hello@josephalexander.com"
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
