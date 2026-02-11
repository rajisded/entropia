import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://entropia.civilization"), // Placeholder, adjust as needed
  title: {
    default: "ENTROPIA | Sovereign Intellectual Civilization",
    template: "%s | ENTROPIA",
  },
  description: "A parallel, high-competence society organized around elite cognition, technological acceleration, and civilizational development. Not a country—a civilizational engine.",
  applicationName: "Entropia",
  keywords: [
    "Sovereign Intellectual Civilization",
    "Network State",
    "Elite Cognition",
    "Technological Acceleration",
    "Private Intellectual State",
    "Think Tank",
    "Civilizational Engine",
    "Post-Democratic Governance",
    "High-Competence Society",
    "Merit-Based Citizenship",
  ],
  authors: [{ name: "Entropia Council" }],
  creator: "Entropia Council",
  publisher: "Entropia Sovereign Entity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://entropia.civilization",
    title: "ENTROPIA | Sovereign Intellectual Civilization",
    description: "Building a cohesive, high-trust, high-competence meta-society. Advancing humanity through structured collaboration of elite minds.",
    siteName: "Entropia",
    images: [
      {
        url: "/opengraph-image.png", // Next.js automatically generates this if file exists, or we can point to one
        width: 1200,
        height: 630,
        alt: "Entropia Civilization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTROPIA | Sovereign Intellectual Civilization",
    description: "Not a country. A civilizational engine for elite cognition and acceleration.",
    creator: "@entropia_state", // Placeholder
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  category: "society",
  classification: "Sovereign Intellectual Civilization",
  // Geo-tagging for "Global/Decentralized" nature, but anchoring digitally
  other: {
    "geo.region": "Global",
    "geo.placename": "Entropia Sovereign Cloud",
    "geo.position": "0;0", // Null island as symbolic center or placeholder
    "ICBM": "0, 0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AEO JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Entropia",
    "url": "https://entropia.civilization",
    "logo": "https://entropia.civilization/icon.png",
    "description": "A sovereign intellectual civilization organized around elite cognition and technological acceleration.",
    "foundingDate": "2026",
    "founders": [
      {
        "@type": "Person",
        "name": "The Architect"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "civilizational inquiries",
      "email": "council@entropia.civilization"
    },
    "sameAs": [
      "https://twitter.com/entropia_state",
      "https://linkedin.com/company/entropia-civilization"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DKVY3YJ01E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DKVY3YJ01E');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
