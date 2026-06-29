"use client";

import { ClientsMarquee } from "./clients-marquee";

export function ClientsSection() {
  return (
    <section
      id="about"
      className="section-grid-lines"
      style={{ background: "#ffffff" }}
    >
      <ClientsMarquee />
    </section>
  );
}
