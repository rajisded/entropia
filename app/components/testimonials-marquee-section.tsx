"use client";

import Link from "next/link";
import { mainFont } from "../lib/fonts";
import { useIsMobile } from "../lib/use-media-query";

const HEADER_OFFSET = 80;

export type TestimonialItem = {
  readonly quote: string;
  readonly company: string;
};

type TestimonialsMarqueeSectionProps = {
  id?: string;
  marqueeText: string;
  testimonials: readonly TestimonialItem[];
  ctaHref?: string;
  ctaLabel?: string;
};

function TestimonialCard({ quote, company }: TestimonialItem) {
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

function MarqueeStrip({ text }: { text: string }) {
  return (
    <div className="landing-testimonials-marquee-wrap landing-testimonials-marquee-wrap--light pointer-events-none w-full overflow-hidden">
      <div className="landing-testimonials-marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="landing-testimonials-marquee-item"
            aria-hidden={i > 0}
          >
            {text}
            <span className="mx-4 opacity-40 sm:mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarqueeSection({
  id = "testimonials",
  marqueeText,
  testimonials,
  ctaHref = "/#lets-connect",
  ctaLabel = "Get in touch",
}: TestimonialsMarqueeSectionProps) {
  const isMobile = useIsMobile();
  const viewport = `calc(100vh - ${HEADER_OFFSET}px)`;
  const cardsScroll = `${testimonials.length * 20 + 8}vh`;
  const tailSpace = "24vh";
  const scrollHeight = `calc(${viewport} + ${cardsScroll} + ${tailSpace})`;

  if (isMobile) {
    return (
      <section
        id={id}
        className={`section-grid-lines relative z-30 overflow-x-clip bg-white px-5 pb-16 pt-10 text-black sm:px-8 ${mainFont.className}`}
      >
        <MarqueeStrip text={marqueeText} />
        <Link
          href={ctaHref}
          className="relative z-[5] mx-auto mt-8 flex w-fit rounded-full border border-black px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-75"
        >
          {ctaLabel}
        </Link>

        <div className="mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.company} {...item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`section-grid-lines relative z-30 overflow-x-clip bg-white pb-20 text-black md:pb-32 ${mainFont.className}`}
    >
      <div className="relative" style={{ height: scrollHeight }}>
        <div
          className="sticky z-0 flex flex-col items-center justify-center overflow-hidden bg-white px-4"
          style={{ top: HEADER_OFFSET, height: viewport }}
        >
          <MarqueeStrip text={marqueeText} />

          <Link
            href={ctaHref}
            className="relative z-[5] mt-10 rounded-full border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-75 sm:mt-12 sm:text-sm"
          >
            {ctaLabel}
          </Link>
        </div>

        <div
          className="relative z-10 px-5 sm:px-6 md:px-10 lg:px-12"
          style={{ marginTop: `calc(-1 * ${viewport})` }}
        >
          <div style={{ height: viewport }} aria-hidden />

          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-14">
            {testimonials.map((item, index) => (
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
