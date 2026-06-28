"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

type NavAnchorProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NAVBAR_OFFSET = -88;

export function NavAnchor({ href, children, className }: NavAnchorProps) {
  const pathname = usePathname();
  const lenis = useLenis();
  const hash = href.includes("#") ? href.split("#")[1] : null;
  const onHome = pathname === "/";

  if (!hash) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (onHome) {
    return (
      <a
        href={`#${hash}`}
        className={className}
        onClick={(event) => {
          event.preventDefault();
          const target = document.getElementById(hash);
          if (!target) return;

          if (lenis) {
            lenis.scrollTo(target, { offset: NAVBAR_OFFSET });
          } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
