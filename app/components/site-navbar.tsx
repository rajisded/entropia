import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function SiteNavbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        <BrandLogo />
      </Link>
      <ul className="navbar-links">
        {["Products", "Pricing", "About", "Blog"].map((item) => (
          <li key={item}>
            <Link href={item === "Pricing" ? "/#pricing" : "/"}>{item}</Link>
          </li>
        ))}
      </ul>
      <Link href="/#book-call-btn" className="navbar-contact">Get Demo</Link>
    </nav>
  );
}
