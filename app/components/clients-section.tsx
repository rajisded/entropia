"use client";

import { GRID_INNER_PAD, GRID_LINE, GRID_MAX_W } from "../lib/grid";

const CLIENTS = [
  { name: "Luminary", icon: <LuminaryIcon /> },
  { name: "45 Degrees°", icon: <DegreesIcon /> },
  { name: "Codecraft_", icon: <CodecraftIcon /> },
  { name: "Frequencii", icon: <FrequenciiIcon /> },
  { name: "Axiom", icon: <AxiomIcon /> },
  { name: "Nimbus", icon: <NimbusIcon /> },
];

const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

function LuminaryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M8 4c-3 2-4 5-4 8s1 6 4 8" />
      <path d="M16 4c3 2 4 5 4 8s-1 6-4 8" />
    </svg>
  );
}

function DegreesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}

function CodecraftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="10" width="7" height="7" rx="1.5" />
      <rect x="10" y="6" width="7" height="7" rx="1.5" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" opacity="0.75" />
    </svg>
  );
}

function FrequenciiIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="7" cy="10" rx="5" ry="8" transform="rotate(-18 7 10)" />
      <ellipse cx="12" cy="10" rx="5" ry="8" transform="rotate(-18 12 10)" />
      <ellipse cx="17" cy="10" rx="5" ry="8" transform="rotate(-18 17 10)" />
    </svg>
  );
}

function AxiomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 2 22 20H2L12 2z" />
    </svg>
  );
}

function NimbusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" opacity="0.4" />
    </svg>
  );
}

export function ClientsSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: GRID_LINE,
        borderBottom: GRID_LINE,
      }}
    >
      <style>{`
        @keyframes clients-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          animation: clients-marquee-scroll 24s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        style={{
          maxWidth: GRID_MAX_W,
          margin: "0 auto",
          padding: `36px ${GRID_INNER_PAD}px`,
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        <p style={{ margin: 0, fontSize: 15, color: "#888", letterSpacing: -0.2, flexShrink: 0 }}>
          Trusted by <strong style={{ color: "#111", fontWeight: 700 }}>many</strong>
        </p>

        <div
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
            minWidth: 0,
          }}
        >
          {/* Left fade */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 0, width: 48,
            background: "linear-gradient(to right, #fff, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          {/* Right fade */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: 0, width: 48,
            background: "linear-gradient(to left, #fff, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />

          <div
            className="clients-marquee-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 56,
              width: "max-content",
            }}
          >
            {MARQUEE_ITEMS.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#555",
                  fontSize: 14.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  opacity: 0.8,
                  letterSpacing: -0.2,
                  userSelect: "none",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {client.icon}
                </span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
