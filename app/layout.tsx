import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import "./globals.css";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Normlee Investments | Construction Aggregates Supplier & Paving Services in Harare",
  description: "Premium supplier of bulk construction aggregates (stones, sand, bricks) and specialist paving services in Harare, Borrowdale, Hatcliffe. Fast delivery, competitive prices. Build with confidence.",
  keywords: "aggregates supplier Harare, paving services Harare, construction materials, building sand, stones, bricks, crusher runner, quarry dust, Normlee Investments",
  authors: [{ name: "Normlee Investments" }],
  openGraph: {
    title: "Normlee Investments | Construction Aggregates & Paving Specialist",
    description: "Premium supplier of construction aggregates and specialist paving services in Harare. Build with confidence.",
    type: "website",
    locale: "en_ZW",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}