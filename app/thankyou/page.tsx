import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/footer';
import { PageGrid } from '../components/page-grid';
import { SiteNavbar } from '../components/site-navbar';
import { BOOK_DEMO_URL } from '../lib/links';

export const metadata: Metadata = {
  title: 'Thank You | Entropia Kiosk Demo',
  description:
    'Thanks for trying the Entropia kiosk demo. We would love to help you bring self-ordering to your restaurant.',
};

type ThankYouPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { ref } = await searchParams;

  return (
    <PageGrid>
      <SiteNavbar />

      <main className="thankyou-page">
        <div className="thankyou-page-inner section-shell">
          <p className="thankyou-eyebrow">Demo complete</p>
          <h1 className="thankyou-heading">We see you gave it a full spin.</h1>
          <p className="thankyou-lead">
            Thanks for walking through our kiosk demo, from menu browse to checkout and UPI.
            That&apos;s exactly how your guests would order in your outlet: fast, branded, and
            without waiting on staff.
          </p>

          <div className="thankyou-card">
            <h2 className="thankyou-card-title">We&apos;d love to have you onboard</h2>
            <p className="thankyou-card-body">
              Entropia Kiosk plugs into PetPooja, supports UPI and card payments, and goes live in
              days, not months. If you liked what you saw, let&apos;s talk about rolling it out at
              your locations.
            </p>
            <ul className="thankyou-list">
              <li>PetPooja-native menu sync</li>
              <li>UPI, cards, and pay-at-counter</li>
              <li>Custom branding for your brand</li>
              <li>Real-time analytics dashboard</li>
            </ul>
          </div>

          <div className="thankyou-actions">
            <Link href={BOOK_DEMO_URL} className="thankyou-btn thankyou-btn--primary">
              Book a free demo
            </Link>
            <Link href="/kiosk" className="thankyou-btn thankyou-btn--secondary">
              Back to kiosk page
            </Link>
          </div>

          {ref ? <p className="thankyou-ref">Session ref: {ref}</p> : null}
        </div>
      </main>

      <Footer />
    </PageGrid>
  );
}
