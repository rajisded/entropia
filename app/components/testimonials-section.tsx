"use client";

import { TestimonialsMarqueeSection } from "./testimonials-marquee-section";

const MARQUEE_TEXT = "Testimonials© · Reviews";

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

export function TestimonialsSection() {
  return (
    <TestimonialsMarqueeSection
      id="blog"
      marqueeText={MARQUEE_TEXT}
      testimonials={TESTIMONIALS}
    />
  );
}
