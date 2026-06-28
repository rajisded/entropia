import type { Metadata } from "next";
import { CalBooking } from "../components/cal-booking";
import { Footer } from "../components/footer";
import { PageGrid } from "../components/page-grid";
import { SiteNavbar } from "../components/site-navbar";

export const metadata: Metadata = {
  title: "Book a Demo | Spartan",
  description:
    "Schedule a free 15-minute walkthrough of Spartan Kiosk or HRMS with our team.",
};

export default function BookPage() {
  return (
    <PageGrid>
      <SiteNavbar />

      <main className="book-page">
        <div className="book-page-inner section-shell">
          <div className="book-page-header">
            <h1 className="book-page-heading">Book a free demo</h1>
            <p className="book-page-subtitle">
              Pick a time for a Kiosk or HRMS walkthrough - no sales pressure.
            </p>
          </div>

          <div className="cal-booking-frame">
            <CalBooking />
          </div>
        </div>
      </main>

      <Footer />
    </PageGrid>
  );
}
