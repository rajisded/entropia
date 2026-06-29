"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./products-section.css";

const DOT_COUNT = 5;

export type ShowcaseProduct = {
  title: string;
  tagline: string;
  image: string;
  checkpoints: readonly string[];
  href: string;
  linkLabel: string;
};

type ProductShowcaseSectionProps = {
  id?: string;
  titleLine1: string;
  titleLine2: string;
  titleLine2Indent?: "default" | "wide";
  highlights: readonly string[];
  products: readonly ShowcaseProduct[];
};

function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ProductShowcaseSection({
  id,
  titleLine1,
  titleLine2,
  titleLine2Indent = "default",
  highlights,
  products,
}: ProductShowcaseSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="products-pro section-grid-lines">
      <div className="products-pro-shell">
        <div className="products-pro-layout">
          <h2 className="products-pro-title">
            <span className="products-pro-title-line">{titleLine1}</span>
            <span
              className={`products-pro-title-line products-pro-title-line--indent${
                titleLine2Indent === "wide" ? " products-pro-title-line--indent-wide" : ""
              }`}
            >
              {titleLine2}
            </span>
          </h2>

          <ul className="products-pro-highlights">
            {highlights.map((point) => (
              <li key={point} className="products-pro-highlight">
                <span className="products-pro-highlight-icon">
                  <CheckIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="products-pro-list-col">
            <div className="products-pro-list">
              {products.map((product, index) => {
                const isOpen = openIndex === index;
                const filledDots = index + 1;

                return (
                  <div
                    key={product.title}
                    className={`products-pro-row${isOpen ? " products-pro-row--open" : ""}`}
                  >
                    <button
                      type="button"
                      className="products-pro-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="products-pro-dots" aria-hidden>
                        {Array.from({ length: DOT_COUNT }).map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`products-pro-dot${dotIndex < filledDots ? " products-pro-dot--on" : ""}`}
                          />
                        ))}
                      </div>

                      <div className="products-pro-copy">
                        <p className="products-pro-name">{product.title}</p>
                        <p className="products-pro-tagline">{product.tagline}</p>
                      </div>

                      <span className="products-pro-chevron">
                        <ChevronDown />
                      </span>
                    </button>

                    <div className="products-pro-panel">
                      <div className="products-pro-panel-inner">
                        <div className="products-pro-panel-body">
                          <div className="products-pro-panel-media">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="products-pro-panel-img"
                              sizes="160px"
                            />
                          </div>

                          <div className="products-pro-panel-content">
                            <ul className="products-pro-checkpoints">
                              {product.checkpoints.map((point) => (
                                <li key={point} className="products-pro-checkpoint">
                                  <span className="products-pro-checkpoint-icon">
                                    <CheckIcon />
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            <Link href={product.href} className="products-pro-panel-link">
                              {product.linkLabel} ↗
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
