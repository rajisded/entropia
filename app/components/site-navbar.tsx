import Link from "next/link";

export function SiteNavbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
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
