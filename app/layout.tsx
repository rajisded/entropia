import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { LenisProvider } from "./components/lenis-provider";

export const metadata: Metadata = {
  title: "Spartan | Software built to replace the giants",
  description:
    "Spartan replaces UEngage and PagarBook with modern kiosk and HRMS software at a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
