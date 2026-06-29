export type FaqItem = {
  question: string;
  answer: string;
};

export const SITE_FAQS: readonly FaqItem[] = [
  {
    question: "How long does it take to switch from UEngage or PagarBook to Entropia?",
    answer:
      "Most businesses are fully live within 3 to 5 business days. We handle the entire migration (menus, employee records, historical data) for free. No downtime, no data loss.",
  },
  {
    question: "Do you integrate with PetPooja?",
    answer:
      "Yes. Entropia Kiosk has a native, real-time two-way integration with PetPooja. Orders placed on the kiosk flow directly into your PetPooja POS, kitchen display, and reports.",
  },
  {
    question: "What happens to our existing data when we switch?",
    answer:
      "We migrate everything: employee records, payroll history, menu items, order data. Our dedicated onboarding team runs the migration and validates every record before you go live.",
  },
  {
    question: "Is Entropia actually cheaper than UEngage and PagarBook?",
    answer:
      "Significantly. Restaurants typically save 60 to 80% over UEngage. HRMS customers cut their PagarBook bill by 70% on average. Our pricing is per-location and per-employee with zero hidden fees.",
  },
  {
    question: "How does face scan attendance work?",
    answer:
      "Employees scan their face on arrival. Entropia verifies identity in under a second, marks attendance automatically, and syncs check-in data directly to your payroll formulas. No cards, no manual registers, no buddy punching.",
  },
  {
    question: "Can we manage multiple locations from one dashboard?",
    answer:
      "Absolutely. Entropia is built for chains and multi-location businesses. One dashboard shows every location's kiosk data, payroll, attendance, and reports in real time.",
  },
] as const;
