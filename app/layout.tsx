import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { LenisProvider } from "./components/lenis-provider";

export const metadata: Metadata = {
  title: "Spartan | Software built to replace the giants",
  description:
    "Spartan replaces UEngage and PagarBook with modern kiosk and HRMS software at a fraction of the cost.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
