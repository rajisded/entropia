"use client";

const CLIENTS = [
  { name: "Biryani Blues", icon: <BiryaniIcon /> },
  { name: "Wow Momo", icon: <WowIcon /> },
  { name: "Chai Sutta Bar", icon: <ChaiIcon /> },
  { name: "UrbanEats", icon: <UrbanIcon /> },
  { name: "NorthEat Kitchen", icon: <NorthEatIcon /> },
  { name: "CloudKitchen Co.", icon: <CloudIcon /> },
];

const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

function BiryaniIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

function WowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function ChaiIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

function UrbanIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function NorthEatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10H6a4 4 0 0 1 0-8 5 5 0 0 1 9.8 1A4 4 0 0 1 18 10z" />
    </svg>
  );
}

export function ClientsSection() {
  return (
    <section
      className="section-grid-lines"
      style={{
        background: "#ffffff",
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

      <div className="clients-shell clients-row">
        <p style={{ margin: 0, fontSize: 15, color: "#888", letterSpacing: -0.2, flexShrink: 0 }}>
          Trusted by <strong style={{ color: "#111", fontWeight: 500 }}>500+</strong> businesses
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
                  fontWeight: 500,
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
