import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { Footer } from "../components/footer";
import { HrmsPricingPlans } from "../components/hrms-pricing-plans";
import { PageGrid } from "../components/page-grid";
import { SiteNavbar } from "../components/site-navbar";
import { BOOK_DEMO_URL, HRMS_DEMO_URL } from "../lib/links";
import { HRMS_METADATA } from "../lib/seo";
import { hrmsPageSchemas } from "../lib/seo-schemas";

export const metadata: Metadata = HRMS_METADATA;

const PIPELINE = [
  {
    step: "01",
    title: "Face scan",
    desc: "Employee walks in, looks at the camera. Identity verified in under a second. No cards, no buddy punching.",
  },
  {
    step: "02",
    title: "Auto attendance",
    desc: "Present, absent, late, half-day, and overtime marked instantly. HR never touches a register again.",
  },
  {
    step: "03",
    title: "Formula engine",
    desc: "Your pay rules run on real attendance data. Basic, HRA, incentives, deductions, all calculated live.",
  },
  {
    step: "04",
    title: "Payroll + EPF",
    desc: "One click. Salary, EPF, ESIC, TDS, and payslips generated. What took 2 days now takes 20 minutes.",
  },
];

const FEATURES = [
  {
    title: "Face Scan Attendance",
    desc: "AI-powered face recognition marks check-ins the moment employees arrive. Zero manual entry, zero fraud.",
  },
  {
    title: "Auto Attendance Marking",
    desc: "Late marks, half-days, overtime, and shift compliance calculated automatically from every scan.",
  },
  {
    title: "Formula Management",
    desc: "Build custom salary formulas tied directly to face-marked attendance. Variable pay, allowances, deductions, your rules.",
  },
  {
    title: "One-Click Payroll",
    desc: "Salary runs from real attendance, not guesswork. Payslips land in every employee's app before HR finishes chai.",
  },
  {
    title: "EPF, ESIC & TDS Auto",
    desc: "Statutory deductions, challans, and compliance filings managed automatically. No CA on speed dial required.",
  },
  {
    title: "Multi-Branch Command Center",
    desc: "Every outlet's attendance, payroll status, and compliance alerts in one live dashboard.",
  },
];

const INTEGRATIONS = ["Face Scan", "EPF Ready", "ESIC", "TDS", "GST Ready", "Razorpay"];

const CUSTOMER_STATS = [
  { value: "20 min", label: "full payroll run" },
  { value: "200+", label: "employees managed" },
  { value: "70%", label: "cost vs PagarBook" },
];

export default function HrmsPage() {
  return (
    <PageGrid>
      <JsonLd data={hrmsPageSchemas()} />
      <SiteNavbar />

      <main className="kiosk-page">
        <section className="kiosk-hero">
          <div className="hrms-hero-header">
            <h1 className="hrms-hero-brand">Entropia HRMS</h1>
            <h2 className="hrms-hero-tagline">
              <span className="hero-heading-light">Face in.</span>{" "}
              <span className="hero-heading-bold">Payroll out.</span>
            </h2>
          </div>
          <div className="section-shell kiosk-hero-body">
          <div className="kiosk-hero-grid">
            <div>
              <p className="hero-subtitle" style={{ maxWidth: 460, marginBottom: 28 }}>
                <strong>Employees scan their face. Salary calculates itself.</strong>{" "}
                Entropia marks attendance automatically, runs your pay formulas on real check-in data,
                and handles EPF, TDS, and ESIC before your HR team opens Excel.
              </p>
              <div className="hrms-value-strip">
                {["No buddy punching", "EPF auto-filed", "70% cheaper than PagarBook"].map((item) => (
                  <span key={item} className="hrms-value-pill">{item}</span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                {INTEGRATIONS.map((label) => (
                  <span key={label} className="kiosk-badge">{label}</span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href={HRMS_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  Try live demo
                </a>
                <Link href={BOOK_DEMO_URL} className="kiosk-secondary-cta">
                  Book a call
                </Link>
                <Link href="/#pricing" className="kiosk-secondary-cta">
                  View pricing
                </Link>
              </div>
            </div>

            <div className="hrms-hero-shot">
              <Image
                src="/hrms/dashboard.png"
                alt="Entropia HRMS dashboard"
                width={1400}
                height={900}
                priority
                className="hrms-shot-img"
              />
            </div>
          </div>
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-section-header" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>How it works</p>
            <h2 className="kiosk-section-title">
              <span style={{ fontWeight: 400, color: "#b0b0b0" }}>From face scan</span>
              <br />
              <span style={{ fontWeight: 500, color: "#111" }}>to payslip. Automatically.</span>
            </h2>
          </div>
          <div className="hrms-pipeline">
            {PIPELINE.map((item, i) => (
              <div key={item.step} className="hrms-pipeline-step">
                <div className="hrms-pipeline-step-num">{item.step}</div>
                <h3 className="hrms-pipeline-step-title">{item.title}</h3>
                <p className="hrms-pipeline-step-desc">{item.desc}</p>
                {i < PIPELINE.length - 1 ? <div className="hrms-pipeline-arrow" aria-hidden>→</div> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-section-header">
            <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>Product screens</p>
            <h2 className="kiosk-section-title">
              <span style={{ fontWeight: 400, color: "#b0b0b0" }}>See it working</span>
              <br />
              <span style={{ fontWeight: 500, color: "#111" }}>across your entire team.</span>
            </h2>
          </div>
          <div className="hrms-screenshots">
            {[
              { src: "/hrms/dashboard.png", alt: "Live attendance and branch dashboard" },
              { src: "/hrms/payroll-processing.png", alt: "One-click payroll with EPF and TDS" },
            ].map((shot) => (
              <div key={shot.src} className="hrms-screenshot-card">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-split hrms-split">
            <div>
              <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>Face scan attendance</p>
              <h2 className="kiosk-section-title" style={{ marginBottom: 16 }}>
                Walk in. Scanned. Done.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#666", maxWidth: 420, margin: "0 0 24px" }}>
                No fingerprint machines. No manual registers. Employees scan their face on arrival
                and Entropia marks attendance instantly across every branch.
              </p>
              <ul className="kiosk-checklist">
                {["Sub-second face verification", "Anti buddy-punching built in", "Works across all branches", "Syncs to payroll in real time"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hrms-shot-frame">
              <Image
                src="/hrms/dashboard.png"
                alt="Face attendance dashboard"
                width={1400}
                height={900}
                className="hrms-shot-img"
              />
            </div>
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-split kiosk-split-reverse hrms-split">
            <div>
              <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>Formula engine + payroll</p>
              <h2 className="kiosk-section-title" style={{ marginBottom: 16 }}>
                Salary from real attendance. Not spreadsheets.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#666", maxWidth: 420, margin: "0 0 24px" }}>
                Set your pay formulas once. Entropia applies them to every face-marked check-in,
                calculates EPF, ESIC, and TDS, and generates payslips in one click.
              </p>
              <ul className="kiosk-checklist">
                {["Custom salary formulas", "EPF & ESIC auto-calculated", "TDS and statutory reports", "Payslips in employee app"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hrms-shot-frame">
              <Image
                src="/hrms/payroll-processing.png"
                alt="Formula-based payroll processing"
                width={1400}
                height={900}
                className="hrms-shot-img"
              />
            </div>
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="hrms-highlight-band">
            <div>
              <p className="kiosk-eyebrow" style={{ color: "rgba(99,102,241,0.8)", marginBottom: 12 }}>The bottom line</p>
              <h2 style={{
                fontSize: "clamp(26px, 3.2vw, 36px)",
                fontWeight: 500,
                color: "#111",
                letterSpacing: -1.2,
                margin: "0 0 12px",
                lineHeight: 1.15,
              }}>
                Stop paying for software that still needs spreadsheets.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#666", margin: 0, maxWidth: 480 }}>
                PagarBook charges per head and your team still runs payroll manually.
                Entropia connects face attendance to salary automatically, at 70% less cost.
              </p>
            </div>
            <div className="hrms-highlight-stats">
              {[
                { value: "0", label: "manual attendance sheets" },
                { value: "1", label: "click to run payroll" },
                { value: "100%", label: "EPF & TDS automated" },
              ].map((stat) => (
                <div key={stat.label} className="hrms-highlight-stat">
                  <span className="hrms-highlight-stat-value">{stat.value}</span>
                  <span className="hrms-highlight-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-section-header">
            <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>Capabilities</p>
            <h2 className="kiosk-section-title">
              <span style={{ fontWeight: 400, color: "#b0b0b0" }}>Built to replace</span>
              <br />
              <span style={{ fontWeight: 500, color: "#111" }}>PagarBook completely.</span>
            </h2>
          </div>
          <div className="kiosk-features">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="kiosk-feature-card">
                <div className="kiosk-feature-dot" style={{ background: "#6366f1" }} />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: "#111", margin: "0 0 6px", letterSpacing: -0.2 }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#777", margin: 0 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <div className="kiosk-testimonial-grid hrms-testimonial-grid">
            <div>
              <p className="kiosk-eyebrow" style={{ color: "#6366f1" }}>Customer story</p>
              <h2 className="kiosk-section-title" style={{ marginBottom: 20 }}>
                <span style={{ fontWeight: 400, color: "#b0b0b0" }}>200 employees.</span>
                <br />
                <span style={{ fontWeight: 500, color: "#111" }}>20-minute payroll.</span>
              </h2>
              <blockquote className="kiosk-quote">
                <strong>Nandhishwar Polymers Private Limited</strong> ditched PagarBook and switched to Entropia HRMS across 8 branches.
                Face scanning replaced manual attendance. The formula engine runs payroll from real check-ins,
                with EPF and TDS filed automatically every month.
              </blockquote>
              <div className="kiosk-stat-row">
                {CUSTOMER_STATS.map((stat) => (
                  <div key={stat.label} className="kiosk-stat">
                    <span className="kiosk-stat-value">{stat.value}</span>
                    <span className="kiosk-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="kiosk-quote-meta">Nandhishwar Polymers Private Limited · 8 branches, 200+ employees</p>
            </div>
            <div className="hrms-shot-frame">
              <Image
                src="/hrms/payroll-processing.png"
                alt="Automated payroll with EPF"
                width={1400}
                height={900}
                className="hrms-shot-img"
              />
            </div>
          </div>
        </section>

        <section className="section-grid-lines kiosk-section section-shell">
          <HrmsPricingPlans />
        </section>
      </main>

      <Footer />
    </PageGrid>
  );
}
