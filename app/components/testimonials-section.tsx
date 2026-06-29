"use client";

import Link from "next/link";
import { mainFont } from "../lib/fonts";
import { useIsMobile } from "../lib/use-media-query";

const MARQUEE_TEXT = "Testimonials© · Reviews";
const HEADER_OFFSET = 80;

const TESTIMONIALS = [
  {
    quote:
      "Switching from UEngage to Entropia Kiosk cut our per-order cost by 65%. The PetPooja sync is flawless and orders hit the kitchen in seconds.",
    company: "Spice Garden Restaurants",
  },
  {
    quote:
      "We were paying PagarBook ₹20,000 a month and still running payroll manually. Entropia cut our bill to ₹4,000 and payroll now finishes in 20 minutes with EPF auto-filed.",
    company: "TechCorp Solutions",
  },
  {
    quote:
      "Our table turnover increased 40% because customers order themselves. No more waiting for staff. Entropia paid for itself in the first month.",
    company: "Urban Diner Chain",
  },
  {
    quote:
      "Payroll used to take our team 2 full days every month. With Entropia HRMS, face scan marks attendance, formulas calculate salary, and EPF is filed in 20 minutes.",
    company: "Nandhishwar Polymers",
  },
  {
    quote:
      "The old kiosk vendors quoted us ₹3 lakh per machine. Entropia set us up for ₹30,000 including installation and training. Absurd difference.",
    company: "Bite Club",
  },
  {
    quote:
      "We manage 8 branches and 200+ employees. Entropia is the only software that actually handles multi-location without crashing or losing data.",
    company: "FoodFirst Group",
  },
] as const;

function TestimonialCard({
  quote,
  company,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] sm:p-7 md:p-8">
      <p className="text-[15px] leading-[1.75] text-black/75 sm:text-base">
        {quote}
      </p>
      <div className="mt-6 border-t border-black/8 pt-5 sm:mt-8 sm:pt-6">
        <span className="text-sm font-bold tracking-wide text-black/90 sm:text-base">
          {company}
        </span>
      </div>
    </article>
  );
}

function MarqueeStrip() {
  return (
    <div className="landing-testimonials-marquee-wrap landing-testimonials-marquee-wrap--light pointer-events-none w-full overflow-hidden">
      <div className="landing-testimonials-marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="landing-testimonials-marquee-item"
            aria-hidden={i > 0}
          >
            {MARQUEE_TEXT}
            <span className="mx-4 opacity-40 sm:mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const isMobile = useIsMobile();
  const viewport = `calc(100vh - ${HEADER_OFFSET}px)`;
  const cardsScroll = `${TESTIMONIALS.length * 20 + 8}vh`;
  const tailSpace = "24vh";
  const scrollHeight = `calc(${viewport} + ${cardsScroll} + ${tailSpace})`;

  if (isMobile) {
    return (
      <section
        id="blog"
        className={`section-grid-lines relative z-30 overflow-x-clip bg-white px-5 pb-16 pt-10 text-black sm:px-8 ${mainFont.className}`}
      >
        <MarqueeStrip />
        <Link
          href="/#lets-connect"
          className="relative z-[5] mx-auto mt-8 flex w-fit rounded-full border border-black px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-75"
        >
          Get in touch
        </Link>

        <div className="mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-8">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.company} {...item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className={`section-grid-lines relative z-30 overflow-x-clip bg-white pb-20 text-black md:pb-32 ${mainFont.className}`}
    >
      <div className="relative" style={{ height: scrollHeight }}>
        <div
          className="sticky z-0 flex flex-col items-center justify-center overflow-hidden bg-white px-4"
          style={{ top: HEADER_OFFSET, height: viewport }}
        >
          <MarqueeStrip />

          <Link
            href="/#lets-connect"
            className="relative z-[5] mt-10 rounded-full border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-75 sm:mt-12 sm:text-sm"
          >
            Get in touch
          </Link>
        </div>

        <div
          className="relative z-10 px-5 sm:px-6 md:px-10 lg:px-12"
          style={{ marginTop: `calc(-1 * ${viewport})` }}
        >
          <div style={{ height: viewport }} aria-hidden />

          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-14">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.company}
                className={index % 2 === 1 ? "md:mt-24" : undefined}
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>

          <div style={{ height: tailSpace }} aria-hidden />
        </div>
      </div>
    </section>
  );
}
