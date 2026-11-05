import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import JsonLd from "@/components/shared/JsonLd";
import { site, siteDescription } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";
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
    default: "Normlee Investments | Construction Aggregates & Paving Services in Zimbabwe",
    template: "%s | Normlee Investments",
  },
  description: siteDescription,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Normlee Investments | Construction Aggregates & Paving Services in Zimbabwe",
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "en_ZW",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Normlee Investments | Construction Aggregates & Paving Services in Zimbabwe",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
      </body>
    </html>
  );
}
