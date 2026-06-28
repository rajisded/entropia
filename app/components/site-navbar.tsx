"use client";

import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { NavAnchor } from "./nav-anchor";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
];

export function SiteNavbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        <BrandLogo height={28} />
        <span className="navbar-brand-name">Spartan</span>
      </Link>
      <ul className="navbar-links">
        {NAV_LINKS.map((item) => (
          <li key={item.label}>
            <NavAnchor href={item.href}>{item.label}</NavAnchor>
          </li>
        ))}
      </ul>
      <NavAnchor href="/#book-call-btn" className="navbar-contact">
        Get Demo
      </NavAnchor>
    </nav>
  );
}
