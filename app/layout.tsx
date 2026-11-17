import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import JsonLd from "@/components/shared/JsonLd";
import { googleSiteVerification, site, siteDescription, siteIndexable } from "@/lib/site";
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Building Materials & Paving in Zimbabwe | Normlee Investments",
    template: "%s | Normlee Investments",
  },
  description: siteDescription,
  authors: [{ name: site.name }],
  // No canonical here: each page sets its own. A site-wide canonical of "/" leaked onto the 404 page.
  openGraph: {
    title: "Building Materials & Paving in Zimbabwe | Normlee Investments",
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "en_ZW",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Building Materials & Paving in Zimbabwe | Normlee Investments",
    description: siteDescription,
  },
  robots: siteIndexable ? { index: true, follow: true } : { index: false, follow: false },
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const localBusiness = localBusinessJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {localBusiness && <JsonLd data={localBusiness} />}
      </body>
    </html>
  );
}
